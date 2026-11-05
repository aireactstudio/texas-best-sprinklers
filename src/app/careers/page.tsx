import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplet, Phone, Mail, CheckCircle2, Wrench, Waves, Lightbulb } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import LicenseBadge from "@/components/LicenseBadge";

export const metadata: Metadata = pageMetadata({
  title: "Careers | Texas Best Sprinklers",
  description:
    "Apply to join Texas Best Sprinklers in the DFW area. Irrigation, sprinkler, drainage, and outdoor lighting technicians can submit an online application.",
  path: "/careers",
});

// TODO(Christopher): replace these role blurbs with named current openings when you have them.
// Do not add pay, benefits, or headcount here until they are confirmed.
const ROLE_CARDS = [
  {
    title: "Irrigation & Sprinkler Technician",
    icon: Wrench,
    image: "/assets/images/optimized/Irrigation-Repair.png",
    imageAlt: "Irrigation repair work on a residential sprinkler system",
    summary:
      " Diagnose, repair, and maintain residential and commercial sprinkler systems across Fort Worth, Weatherford, and surrounding DFW cities.",
  },
  {
    title: "Drainage Technician",
    icon: Waves,
    image: "/assets/images/optimized/drainage/3249.webp",
    imageAlt: "Installed residential drainage system",
    summary:
      " Help homeowners solve standing water and grade issues with French drains, channel drains, and related drainage work.",
  },
  {
    title: "Outdoor Lighting Technician",
    icon: Lightbulb,
    image: "/assets/images/optimized/lighting/3417.webp",
    imageAlt: "Landscape lighting installation at dusk",
    summary:
      " Install and service landscape lighting that complements the irrigation and drainage work our crews already do.",
  },
] as const;

export default function CareersPage() {
  return (
    <>
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          marginTop: "calc(env(safe-area-inset-top) * -1)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            src="/assets/images/optimized/homepage-truck.png"
            alt="Texas Best Sprinklers service truck"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="container-custom relative z-10 text-center text-white pt-24 pb-16">
          <div className="inline-flex items-center bg-irrigation-darkGreen px-4 py-2 rounded-full mb-6">
            <Droplet className="h-5 w-5 mr-2 text-white" />
            <span className="font-medium">Careers at Texas Best Sprinklers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Work with a DFW irrigation and drainage crew
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            We&apos;re always interested in hearing from sprinkler, drainage, and lighting technicians who want to do quality work around Fort Worth and Weatherford.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#apply" className="btn-primary min-w-[200px] text-lg">
              Apply online
            </a>
            <a
              href="tel:+18173047896"
              className="bg-white hover:bg-opacity-90 text-irrigation-blue font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-md min-w-[200px] text-lg"
            >
              Call (817) 304-7896
            </a>
          </div>
          <div className="flex justify-center mt-6">
            <LicenseBadge variant="dark" />
          </div>
        </div>
      </section>

      <Breadcrumbs />

      <section className="py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <div className="rounded-xl border border-irrigation-blue/20 bg-irrigation-blue/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-3">
              Openings vary
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Texas Best Sprinklers, Drainage and Lighting serves residential and commercial properties across the DFW metroplex. We hire people who can show up, treat customers well, and do careful irrigation, drainage, and outdoor lighting work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not post specific salaries, benefits, or guaranteed openings on this page.{" "}
              <strong>Pay is discussed during the interview.</strong> Benefits, if any, are also discussed then. If you have experience that fits the roles below, submit an application and we will follow up if there is a fit.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-irrigation-blue mb-3">
              Roles we typically look for
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These are the kinds of work our crews do — not a list of current job ads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROLE_CARDS.map((role) => {
              const Icon = role.icon;
              return (
                <article
                  key={role.title}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="relative h-44 bg-gray-100">
                    <Image
                      src={role.image}
                      alt={role.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-irrigation-blue/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-irrigation-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-irrigation-blue mb-2">{role.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{role.summary}</p>
                    <p className="text-sm text-gray-600 italic">Pay discussed during interview.</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-irrigation-gray">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-irrigation-blue mb-6">What to expect</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Work across Fort Worth, Weatherford, and nearby DFW cities",
              "Sprinkler repair, new irrigation installs, drainage, and lighting",
              "A licensed irrigation contractor (LI22462)",
              "Applications reviewed by our team — we follow up if there is a fit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-irrigation-darkGreen mt-0.5 shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          {/* TODO(Christopher): add confirmed benefits, schedule, or requirements here when ready. */}
          <p className="mt-6 text-sm text-gray-600">
            Benefits, schedule details, and any current named openings will be shared during the interview — they are not listed here yet.
          </p>
        </div>
      </section>

      <section id="apply" className="py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-irrigation-blue mb-2">
                Apply
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-irrigation-blue mb-4">
                Online application
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The form only takes a few minutes. A resume file or link is optional but helpful.
              </p>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-irrigation-blue mt-1 shrink-0" />
                  <a href="tel:+18173047896" className="text-lg font-medium hover:underline">
                    (817) 304-7896
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-irrigation-blue mt-1 shrink-0" />
                  <a
                    href="mailto:sprinkleranddrains@gmail.com"
                    className="text-lg font-medium hover:underline break-all"
                  >
                    sprinkleranddrains@gmail.com
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Prefer not to use the form? Email your interest and resume, or call us. You can also use our{" "}
                <Link href="/contact" className="text-irrigation-blue underline">
                  contact page
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              <CareersApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
