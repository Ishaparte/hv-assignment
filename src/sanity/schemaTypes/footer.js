export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Footer Links",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "brandText",
      title: "Brand Small Text",
      type: "string",
    },
    {
      name: "bigText",
      title: "Big Background Text",
      type: "string",
    },
     {
      name: "reserved",
      title: "Rights Reserved Text",
      type: "string",
    },
  ],
};
