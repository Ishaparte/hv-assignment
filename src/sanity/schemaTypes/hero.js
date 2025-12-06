export default {
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
    },
    {
      name: "logo",
      title: "Logo Text",
      type: "string",
    },
    {
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "subscribeText",
      title: "Subscribe Button Text",
      type: "string",
    },
    {
      name: "middleWords",
      title: "Middle Line Words",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "mainHeading",
      title: "Main Heading",
      type: "text",
    },
  ],
};
