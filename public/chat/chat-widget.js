/* Texas Best chat widget. Config via window.TBC_CHAT before load (optional). */
(function () {
  var C = Object.assign({
    endpoint: "/.netlify/functions/chat",
    title: "Texas Best Sprinklers & Drainage", subtitle: "Ask us anything",
    greeting: "Hi! Need help with a sprinkler repair, drainage problem, or a new install?",
    chips: ["Sprinkler repair", "Drainage problem", "Get a quote"],
    phone: "(817) 304-7896", tel: "+18173047896", maxLen: 1000
  }, window.TBC_CHAT || {});
  var history = [], busy = false, started = false;
  var root = document.createElement("div"); root.className = "tbc";
  root.innerHTML =
    '<button class="tbc-btn" type="button" aria-label="Chat with us" aria-expanded="false" aria-controls="tbc-panel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></button>' +
    '<div class="tbc-panel" id="tbc-panel" role="dialog" aria-modal="false" aria-labelledby="tbc-title" hidden>' +
      '<div class="tbc-head"><div><p class="tbc-title" id="tbc-title"></p><div class="tbc-sub"></div></div><button class="tbc-x" type="button" aria-label="Close chat">&times;</button></div>' +
      '<div class="tbc-log" role="log" aria-live="polite"></div>' +
      '<form class="tbc-form"><label for="tbc-in" class="tbc-sr" style="position:absolute;left:-9999px">Your message</label><textarea id="tbc-in" rows="1" placeholder="Type your question…"></textarea><button class="tbc-send" type="submit">Send</button></form>' +
      '<div class="tbc-foot">AI assistant · Prefer a person? Call <a></a></div>' +
    '</div>';
  document.body.appendChild(root);
  var btn = root.querySelector(".tbc-btn"), panel = root.querySelector(".tbc-panel"), log = root.querySelector(".tbc-log"),
      form = root.querySelector("form"), input = root.querySelector("textarea"), send = root.querySelector(".tbc-send"), x = root.querySelector(".tbc-x");
  input.maxLength = C.maxLen;
  root.querySelector(".tbc-title").textContent = C.title;
  root.querySelector(".tbc-sub").textContent = C.subtitle;
  var a = root.querySelector(".tbc-foot a"); a.textContent = C.phone; a.href = "tel:" + C.tel;

  function add(text, who, cls) { var d = document.createElement("div"); d.className = "tbc-m " + who + (cls ? " " + cls : ""); d.textContent = text; log.appendChild(d); log.scrollTop = log.scrollHeight; return d; }
  function open() {
    panel.hidden = false; requestAnimationFrame(function () { panel.classList.add("open"); });
    root.classList.add("is-open"); btn.setAttribute("aria-expanded", "true");
    if (!started) {
      started = true; add(C.greeting, "bot");
      var chips = document.createElement("div"); chips.className = "tbc-chips";
      C.chips.forEach(function (t) { var b = document.createElement("button"); b.type = "button"; b.className = "tbc-chip"; b.textContent = t; b.onclick = function () { chips.remove(); ask(t); }; chips.appendChild(b); });
      log.appendChild(chips);
    }
    setTimeout(function () { input.focus(); }, 50);
  }
  function close() { panel.classList.remove("open"); root.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); setTimeout(function () { if (!panel.classList.contains("open")) panel.hidden = true; }, 220); btn.focus(); }
  function ask(text) {
    text = (text || "").trim().slice(0, C.maxLen); if (!text || busy) return;
    var c = log.querySelector(".tbc-chips"); if (c) c.remove();
    add(text, "me"); history.push({ role: "user", content: text }); history = history.slice(-12);
    busy = true; send.disabled = true; var t = add("Typing…", "bot", "tbc-typing");
    fetch(C.endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: history }) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        t.remove();
        if (res.ok && res.j.reply) { add(res.j.reply, "bot"); history.push({ role: "assistant", content: res.j.reply }); }
        else { history.pop(); add(res.j.error || "Sorry, something went wrong. Please call " + C.phone + ".", "bot", "err"); }
      })
      .catch(function () { t.remove(); history.pop(); add("Connection problem. Please call " + C.phone + ".", "bot", "err"); })
      .finally(function () { busy = false; send.disabled = false; input.focus(); });
  }
  btn.onclick = function () { panel.classList.contains("open") ? close() : open(); };
  x.onclick = close;
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) close(); });
  form.onsubmit = function (e) { e.preventDefault(); var v = input.value; input.value = ""; ask(v); };
  input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
})();
