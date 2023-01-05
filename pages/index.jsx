import Head from "next/head";
import Image from "next/image";
import Founder from "../organisms/Founder";
import Hero from "../organisms/Hero";
import OurStory from "../organisms/OurStory";

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
    </div>
  );
}
