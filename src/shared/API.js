import sanityClient from "../client";

export const fetchProject = (id) =>
  sanityClient.fetch(
    `*[_type == "project" && slug.current == $id][0]{
      title,
      slug,
      carousel[]{asset->{url}},
      body,
      "tech": *[ _type == "badge" && _id in ^.technologies[]._ref ]{
        icon{asset->{url}},
        name,
        label
      },
      link[]
      {
        url,
        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{
        // icon{asset->{url}},
        name,
        label
      },
      },
      "allProjects": *[_type == "project"]|order(id asc){
        slug,
        title,
        isComingSoon
      },
    }`,
    { id }
  );

export const fetchAllProjects = () =>
  sanityClient.fetch(
    `*[_type == "project"]|order(id asc){
      title,
      slug,
      isOngoing,
      isComingSoon,
      tags,
      previewImage{
        asset->{
        url,
        }
      },
      loadingImage{
        asset->{
        url
        }
      }
    }`
  );

export const fetchBadgeContainer = (arr) =>
  sanityClient.fetch(
    `*[_type == "badgeContainer" && name in $arr]{
      title,
  		name,
  		"data": *[ _type == "badge" && _id in ^.content[]._ref ]{
        icon{asset->{url}},
        name,
        label
      },
    }`,
    { arr }
  );

export const fetchTrivia = () =>
  sanityClient.fetch(
    `*[_type == "trivia"]{
      title,
  		content
    }`
  );

export const fetchHomePageProjects = () =>
  sanityClient.fetch(
    `*[_type == "project" && displayAtHomePage == true]{
      title,
      slug,
  		homeLoadingBackground{
        asset->{
        url,
        }
      },
  		homeBackground{
        asset->{
        url,
        }
      },
  		homePagePreviewText,
  		mobileImage{
        asset->{
        url,
        }
      },
  		desktopImage{
        asset->{
        url,
        }
      },
			link[]
      {
        url,
        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{
        name,
        label
      	}
      }
    }`
  );

export const fetchMusicRecommendation = () =>
  sanityClient.fetch(
    `*[_type == "musicRecommendation" && isAvailable]{
      title,
  		url
    }`
  );
