import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Krish Armurwar — Data Science Student & Aspiring ML Engineer";
const description =
  "Portfolio of Krish Armurwar, a B.Sc. Data Science student in Pune building end-to-end ML and analytics projects. Projects, skills, experience and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Krish Armurwar",
          jobTitle: "Data Science Student",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "MIT ACSC, Pune" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
