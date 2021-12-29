export default {
  name: "linkBadge",
  title: "Link Badge",
  type: "object",
  fields: [
    {
      name: "badge",
      title: "Badge",
      type: "reference",
      to: { type: "badge" },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "url",
      media: "badge.icon",
    },
  },
};
