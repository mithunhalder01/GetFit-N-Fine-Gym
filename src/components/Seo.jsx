import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { GYM, IMAGES } from "../data";

function absUrl(pathname) {
  const base =
    (typeof window !== "undefined" && window.location && window.location.origin) ||
    GYM.website ||
    "";
  if (!base) return pathname || "/";
  return `${base}${pathname || "/"}`;
}

function pageConfig(pathname) {
  const brand = `${GYM.name} | ${GYM.tagline}`;
  const baseDescription =
    "Elite gym in Noida. Strength training, HIIT, CrossFit, Yoga, Boxing and more. Join 2500+ members today.";

  const map = {
    "/": {
      title: brand,
      description:
        "Modern performance gym in Noida for fat loss and muscle gain. Certified coaches, premium equipment, and goal-based training plans.",
      image: IMAGES.hero,
    },
    "/programs": {
      title: `Programs | ${GYM.name}`,
      description:
        "Explore strength training, HIIT, CrossFit, yoga & mobility, boxing, functional fitness, spin and dance-fit programs for all levels.",
      image: IMAGES.gym3,
    },
    "/trainers": {
      title: `Trainers | ${GYM.name}`,
      description:
        "Meet certified trainers specializing in strength, HIIT, mobility, boxing and functional training. Get coached with form-first programming.",
      image: IMAGES.gym1,
    },
    "/pricing": {
      title: `Pricing | ${GYM.name}`,
      description:
        "Simple membership plans with no hidden fees. Choose Starter, Pro or Elite and start your free trial today.",
      image: IMAGES.gym2,
    },
    "/gallery": {
      title: `Gallery | ${GYM.name}`,
      description:
        "Take a look inside our gym facilities: main floor, cardio zone, CrossFit box, yoga studio, recovery zone and more.",
      image: IMAGES.gym4,
    },
    "/blog": {
      title: `Blog | ${GYM.name}`,
      description:
        "Training tips, nutrition guides, recovery advice and fitness habits from our certified coaches.",
      image: IMAGES.gym3,
    },
    "/contact": {
      title: `Contact | ${GYM.name}`,
      description:
        "Book your free trial. Get in touch via WhatsApp, phone or email. We respond fast and help you pick the right plan.",
      image: IMAGES.gym1,
    },
  };

  const cfg = map[pathname] || { title: brand, description: baseDescription, image: IMAGES.hero };
  return cfg;
}

export default function Seo({ noIndex = false }) {
  const { pathname } = useLocation();
  const { title, description, image } = pageConfig(pathname);
  const canonical = absUrl(pathname);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: GYM.name,
    url: GYM.website || canonical,
    image: [IMAGES.hero, IMAGES.gym1, IMAGES.gym2, IMAGES.gym3, IMAGES.gym4].filter(Boolean),
    telephone: GYM.phone,
    email: GYM.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: GYM.address,
      addressLocality: "Noida",
      addressRegion: "UP",
      addressCountry: "IN",
    },
    sameAs: [GYM.instagram, GYM.facebook].filter(Boolean),
    slogan: GYM.tagline,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

