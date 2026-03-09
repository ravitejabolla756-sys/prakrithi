import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <SignatureDishes />
      <MenuPreview />
      <Gallery />
      <Reviews />
      <Location />
      <Footer />
      <FloatingActions />
    </main>
  );
}
