export default {
  name: "musicRecommendation",
  title: "Music Recommendation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title | Author",
    },
    {
      name: "isAvailable",
      title: "Allow Music",
      description: "if true, music will be available to play",
      type: "boolean",
    },
    {
      name: "url",
      title: "Spotify Embed URL",
      type: "url",
    },
  ],
};
