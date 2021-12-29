import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "f86t30l6",
  dataset: "production",
  useCdn: true,
});
