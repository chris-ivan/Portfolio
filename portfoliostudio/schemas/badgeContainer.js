export default {
  name: "badgeContainer",
  title: "Badge Container",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name connected to frontend CMS calls",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "reference", to: { type: "badge" } }],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
