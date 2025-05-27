'use client';

import Script from 'next/script';

export default function SmartlookScript() {
  return (
    <Script
      id="smartlook-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.smartlook||(function(d) {
            var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
            var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
            c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '16b1c25bc4080c8f07797dac32f4074aa0ec00c5', { region: 'eu' });
        `,
      }}
    />
  );
}
