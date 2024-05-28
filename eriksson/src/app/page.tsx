import Image from "next/image";
import Layout from "./layout";
import Navbar from "@/components/Navigation";
import Hero from "@/components/Hero";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Description />
      <div> hello world </div>
    </main>
  );
}
