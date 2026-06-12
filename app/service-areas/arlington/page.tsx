import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationData, isValidLocation } from "@/data/locationData";
import { SITE_CONFIG } from "@/config/site";
import LocationHomepage from "@/components/location-homepages/LocationHomepage";

interface PageProps {
  params: { location: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!isValidLocation("arlington")) {
    return { title: "Location Not Found" };
  }
  return {
    title: "Arlington Sprinkler & Irrigation Services | Texas Best Sprinklers",
    description:
      "Professional sprinkler installation, repair & drainage in Arlington, TX. Licensed irrigator LI22462. Free estimates. Call (817) 304-7896.",
    alternates: {
      canonical: `https://sprinkleranddrains.com/arlington`,
    },
    openGraph: {
      title: `Arlington Sprinkler Services | ${SITE_CONFIG.fullName}`,
      url: `https://sprinkleranddrains.com/arlington`,
      images: [
        {
          url: "https://sprinkleranddrains.com/assets/images/optimized/hero-background.webp",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Page({ params }: PageProps) {
  if (!isValidLocation("arlington")) notFound();

  const locationData = getLocationData("arlington");

  const neighborhoods = [
    ...(locationData?.neighborhoods ?? []),
    {
      name: "Tierney Road",
      description:
        "A quiet Arlington residential area served by our licensed irrigation and sprinkler technicians.",
      link: "/service-areas/arlington/tierney-road",
    },
  ];

  return (
    <LocationHomepage
      locationSlug="arlington"
      city="Arlington"
      state="TX"
      neighborhoods={neighborhoods}
    />
  );
}

export async function generateStaticParams() {
  return [
    { location: "fort-worth" },
    { location: "keller" },
    { location: "roanoke" },
    { location: "saginaw" },
    { location: "watauga" },
    { location: "westlake" },
    { location: "grapevine" },
    { location: "northlake" },
    { location: "azle" },
    { location: "haltom-city" },
    { location: "weatherford" },
    { location: "argyle" },
    { location: "flower-mound" },
    { location: "southlake" },
    { location: "arlington" },
  ];
}