import { client } from "@/lib/client";
import groq from "groq";

export async function getHomepage() {

  // HERO SECTION
  const hero = await client.fetch(groq`
    *[_type == "hero"][0]{
      backgroundImage,
      logo,
      navLinks,
      subscribeText,
      middleWords,
      mainHeading
    }
  `);

  // SOLUTIONS SECTION (all documents of type "solutions")
  const solutions = await client.fetch(groq`
    *[_type == "solutions"]{
      _id,
      Image,
      PlansLink,
      startText,
      sideText,
      mainHeading
    }
  `);
 
const plans = await client.fetch(groq`
  *[_type == "plan"] 
  | order(
      select(
        name == "Standard" => 1,
        name == "Pro" => 2,
        name == "Premium" => 3,
        4
      ) asc
    ) {
      _id,
      name,
      subtitle,
      price,
      features,
      image
    }
`);

 const footer = await client.fetch(groq`
  *[_type == "footer"][0]{
    links,
    email,
    brandText,
    bigText,
    reserved        
  }
`);





  return { hero, solutions, plans, footer };
}
