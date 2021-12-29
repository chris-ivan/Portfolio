export default {
  name: "badge",
  title: "Badge",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "[TECH, SOCIAL, TEXT]_NAME",
    },
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "icon",
      title: "Badge icon",
      type: "image",
      accept: ".svg",
    },
  ],
  preview: {
    select: {
      title: "label",
      media: "icon",
    },
  },
};
