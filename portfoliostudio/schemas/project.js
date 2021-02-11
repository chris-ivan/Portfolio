export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "id",
      title: "Id",
      type: "number",
    },
    {
      name: "isOngoing",
      title: "Ongoing",
      type: "boolean",
    },
    {
      name: "isComingSoon",
      title: "Coming Soon",
      type: "boolean",
    },
    {
      name: "loadingImage",
      title: "Loading image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "previewImage",
      title: "Preview image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    // {
    //   name: "mainImage",
    //   title: "Main image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "badge" } }],
    },
    // {
    //   name: "publishedAt",
    //   title: "Published at",
    //   type: "datetime",
    // },
    {
      name: "link",
      title: "Link",
      type: "array",
      of: [{ type: "linkBadge" }],
    },
    {
      name: "displayAtHomePage",
      title: "Display at Home Page",
      type: "boolean",
    },
    {
      name: "homeLoadingBackground",
      title: "Loading Background for Home Page",
      type: "image",
    },
    {
      name: "homeBackground",
      title: "Background for Home Page",
      type: "image",
    },
    {
      name: "homePagePreviewText",
      title: "Home Page Preview Text",
      type: "blockContent",
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
    },
    {
      name: "desktopImage",
      title: "Desktop Image",
      type: "image",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "previewImage",
    },
    // prepare(selection) {
    //   const { author } = selection;
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   });
    // },
  },
};
