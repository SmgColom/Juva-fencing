import Head from "next/head";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/about/About.jsx";
import Projects from "../components/projects/Projects.jsx";
import Services from "../components/services/Services.jsx";
import Action from "../components/Action/Action.jsx";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";


const SITE_URL = "https://juvafencing.com.au";

const TITLE = "Fence Installation Melbourne | Timber, Colorbond & Pool Fencing | Juva Fencing";
const DESCRIPTION =
  "Professional fence installation across Melbourne. Timber, Colorbond, pool and commercial fencing built to last. Free quotes — call Juva Fencing today.";

const services = [
  { name: "Timber Fencing", description: "Custom timber paling and feature fences for Melbourne homes." },
  { name: "Colorbond Fencing", description: "Durable, low-maintenance Colorbond steel fencing." },
  { name: "Pool Fencing", description: "Compliant glass and aluminium pool fencing." },
  { name: "Commercial Fencing", description: "Secure fencing solutions for commercial and industrial sites." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Juva Fencing",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      telephone: "+61466674743",
      
      description:
        "Professional fence installation in Melbourne including timber, Colorbond, pool and commercial fencing.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Melbourne",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
      
      areaServed: [
        { "@type": "City", name: "Melbourne" },
        { "@type": "AdministrativeArea", name: "Victoria" },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Fencing Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.description },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Juva Fencing",
      inLanguage: "en-AU",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={SITE_URL} />

        <meta
          name="google-site-verification"
          content="z3oVAvtIjinawOqVfh3w1GUEVhsEu9lmBLr857Vm1ac"
        />

        {/* Favicons */}
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Juva Fencing" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content="Expert fence installation in Melbourne. Timber, Colorbond, pool and commercial fencing. Quality workmanship, honest pricing."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fence installed by Juva Fencing in Melbourne" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Action />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}



