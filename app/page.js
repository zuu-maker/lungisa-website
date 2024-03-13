import Commitment from "@/components/Commitment";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reliable from "@/components/Reliable";
import Image from "next/image";

export default function Home() {
  return (
    <main className="montserrat">
      <Header />
      <Hero />
      <Reliable />
      <Commitment />
      <Footer />
    </main>
  );
}
