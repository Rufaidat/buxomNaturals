import Head from "next/head";
import Image from "next/image";
import Contact from "../organisms/Contact";
import Footer from "../organisms/Footer";
import Founder from "../organisms/Founder";
import Hero from "../organisms/Hero";
import Ingredients from "../organisms/Ingredients";
import OurStory from "../organisms/OurStory";
import Products from "../organisms/Products";

export default function Home() {
  return (
    <div>
      <section className="mb-8" id="/">
        <Hero />
      </section>
      <section className="pb-20" id="story">
        <OurStory />
      </section>
      <section className="pb-20" id="founder">
        <Founder />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="ingredients">
        <Ingredients />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
