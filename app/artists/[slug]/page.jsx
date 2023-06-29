import Image from "next/image";

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
                      tags{
                        tag{
                            name
                        }
                      }
                      similar {
                        artist {
                          name
                        }
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
    //console.log(data.data.artist);
    return data.data.artist
  }

  export default async function Artist({ params }) {
    const artistData = await getArtist(params.slug);
    return (
        <main className="flex flex-col justify-between w-full mx-auto bg-gray-600">
         <section className="mt-0 mb-10 background-radial-gradient">
            <div className="px-6 py-12 text-center md:px-12 lg:text-left">
                <div className="container mx-auto">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                            Hygraph<span className="text-[hsl(218,81%,75%)]">FM</span>
                            </h1>
                            <p className="text-lg text-[hsl(218,81%,95%)]">
                                    Hygraph FM is a community of artists, producers, listners who are passionate about music and the creative process!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mb-32">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,2%,0.55)] dark:shadow-black/20 md:px-12 lg:mr-16">
                    <h2 className="mb-3 text-4xl font-bold text-center text-white">{artistData.artist}</h2>
                    <p className="text-white all-links" dangerouslySetInnerHTML={{ __html: artistData.lastFm.artist.bio.summary }}>
                    </p>
                    <h3 className="my-4 text-2xl font-bold">Tags</h3>
                        {artistData.lastFm.artist.tags.tag.map((tag) => {
                        return (
                            <span className="px-2 py-1 ml-2 text-sm font-bold text-white bg-[hsla(0,0%,100%,0.55)] rounded-sm bg-[hsl(215,52%,28%)]">{tag.name}</span>
                        );
                        })}
                    <h4 className="my-4 text-xl font-bold">Similar Artists</h4>
                        {artistData.lastFm.artist.similar.artist.map((similar) => {
                        return (
                            <span className="px-2 py-1 ml-2 text-sm font-bold text-black bg-[hsla(0,0%,100%,0.55)] rounded-sm bg-[hsl(214,3%,50%)]">{similar.name}</span>
                        );
                        })}
                </div>
              </div>
              <div>
                <Image
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                src={artistData.artistImage.url}
                width={artistData.artistImage.width}
                height={artistData.artistImage.height}
                alt={artistData.artistImage.altText}
                />
              </div>
            </div>
          </div>
        </section>
        </main>
    );
  }