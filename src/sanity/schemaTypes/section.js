export default {
  name: "solutions",
  title: "Solutions Section",
  type: "document",
  fields: [
    { name: "Image", type: "image" },
    { name: "PlansLink", type: "array", of: [{ type: "string" }] },
    { name: "startText", type: "string" },
    { name: "sideText", type: "text" },
    { name: "mainHeading", type: "text" },
  ],
};
