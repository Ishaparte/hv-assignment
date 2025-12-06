import Hero from "./components/Hero";
import Section from "./components/Section.jsx";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import { getHomepage } from "./api/sanity/fetchData";

export default async function Home() {
  const { hero, solutions, plans, footer } = await getHomepage();
  return (
    <main>
      <Hero data={hero} />

      {solutions?.map((sec) => (
        <Section key={sec._id} data={sec} />
      ))}

      {/* FIXED: pass correct prop name */}
      <Plans plans={plans} />
      <Footer data={footer} />


    </main>
  );
}
