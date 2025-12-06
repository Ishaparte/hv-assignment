import ScrollFadeWrapper from "./components/ScrollFadeWrapper";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import { getHomepage } from "./api/sanity/fetchData";

export default async function Home() {
  const { hero, solutions, plans, footer } = await getHomepage();

  return (
    <main>

      <ScrollFadeWrapper>
        <Hero data={hero} />
      </ScrollFadeWrapper>

      {solutions?.map((sec) => (
        <ScrollFadeWrapper key={sec._id}>
          <Section data={sec} />
        </ScrollFadeWrapper>
      ))}

     
        <Plans plans={plans} />
      

      <ScrollFadeWrapper>
        <Footer data={footer} />
      </ScrollFadeWrapper>

    </main>
  );
}
