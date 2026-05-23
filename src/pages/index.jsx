import Head from "next/head";
import Header from "../components/header/Header"
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/about/About.jsx";
import Projects from "../components/projects/Projects.jsx";
import Services from "../components/services/Services.jsx";
import Action from "../components/Action/Action.jsx";
import ContactSection from "../components/ContactSection/ContactSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="manifest" href="/site.webmanifest?v=3" />

        <title>Professional Fence Installation in Melbourne | Juva Fencing</title>

        {/* CANONICAL */}
        <link rel="canonical" href="https://juvafencing.com.au" />

        <meta
          name="google-site-verification"
          content="z3oVAvtIjinawOqVfh3w1GUEVhsEu9lmBLr857Vm1ac"
        />

        <meta
          name="description"
          content="Juva Fencing offers professional fence installation in Melbourne. Residential and commercial fencing solutions built to last — timber, Colorbond, pool fencing and more."
        />

        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Professional Fence Installation in Melbourne | Juva Fencing"
        />
        <meta
          property="og:description"
          content="Expert fence installation in Melbourne. Timber, Colorbond, pool and commercial fencing. Quality workmanship, honest pricing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:url" content="https://juvafencing.com.au" />
        <meta property="og:image" content="https://juvafencing.com.au/og-image.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Juva Fencing",
              url: "https://juvafencing.com.au",
              image: "https://juvafencing.com.au/og-image.jpg",
              telephone: "+61466674743",
              description:
                "Professional fence installation in Melbourne including timber, Colorbond, pool and commercial fencing.",
              areaServed: {
                "@type": "Place",
                name: "Melbourne",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Melbourne",
                addressRegion: "VIC",
                addressCountry: "AU",
              },
            }),
          }}
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Action />
      <ContactSection />
      <Footer />
    </>
  );
}



