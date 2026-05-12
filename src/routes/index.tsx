import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Specials } from "@/components/site/Specials";
import { Menu } from "@/components/site/Menu";
import { Reels } from "@/components/site/Reels";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramSection } from "@/components/site/Instagram";
import { PreOrder } from "@/components/site/PreOrder";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "crave-itco — Crave more, always" },
      {
        name: "description",
        content:
          "A cinematic luxury home kitchen by Sana Ejaaz — handcrafted dumplings, baked indulgences and soulful comfort food. Pre-order in Karachi.",
      },
      { property: "og:title", content: "crave-itco — Crave more, always" },
      {
        property: "og:description",
        content:
          "Made fresh. Made with love. Cinematic dumplings, wings, pasta, cookies & more — pre-order only.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Caveat:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Specials />
        <Menu />
        <Reels />
        <WhyUs />
        <Testimonials />
        <InstagramSection />
        <PreOrder />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
