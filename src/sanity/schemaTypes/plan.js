export default {
  name: "plan",
  title: "Plans",
  type: "document",
  fields: [
    
    { name: "name", type: "string" },
    { name: "subtitle", type: "string" },
    { name: "price", type: "string" },
    { name: "features", type: "array", of: [{type: "string"}] },
    { name: "image", type: "image" }
  ]
};
