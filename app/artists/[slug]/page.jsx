async function getArtist(slug) {
    const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query Artist($slug: String!) {
              artist(where: {slug: $slug}) {
                lastFm: hygraphLastFmRemoteSourceField {
                    __typename
                    artist {
                      bio {
                        summary
                      }
                    }
                  }
                artist
                  id
                  slug
                  artistImage {
                    altText
                    height
                    url
                    width
                  }                   
              }
          }`,
          variables: {
            slug: slug,
          },
        }),
      }
    );
    const data = await res.json();
    console.log(data.data.artist);
    return data.data.artist
  }

  export default async function Artist({ params }) {
    const artistData = await getArtist(params.slug);
    return (
        <main className="w-full px-5 py-10 mx-auto prose">
          <h1 className="text-3xl font-bold text-white">{artistData.artist}</h1>
          <p className="text-white" dangerouslySetInnerHTML={{ __html: artistData.lastFm.artist.bio.summary }}></p>
        </main>
    );
  }