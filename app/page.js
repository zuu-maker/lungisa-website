import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quoting from "@/components/Quoting";
import Reliable from "@/components/Reliable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="montserrat opacity-90">
      <Header />
      <Hero />
      <Reliable />
      <Quoting />
      <Commitment />
      <Footer />
    </main>
  );
}
