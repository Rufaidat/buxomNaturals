import Head from "next/head";
import Image from "next/image";
import Founder from "../organisms/Founder";
import Hero from "../organisms/Hero";
import OurStory from "../organisms/OurStory";
import Products from "../organisms/Products";

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <Hero />
      </section>
      <section className="pb-20">
        <OurStory />
      </section>
      <section>
        <Founder />
      </section>
      <section>
        <Products />
      </section>
    </div>
  );
}
