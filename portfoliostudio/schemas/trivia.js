export default {
  name: "trivia",
  title: "Trivia",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "string" }],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
