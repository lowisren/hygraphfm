//import Hero from "@/app/components/Hero";
import Callout from "@/app/components/Callout";
import Image from "next/image";

async function getArtist(slug) {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
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
                  promotionalBlock {
                    ... on Callout {
                      __typename
                      id
                      button {
                        text
                        url
                        id
                      }
                      title
                    }
                  }
                }
              }`,
          variables: {
            slug: slug,
          },
        }),
      }
    );
    const data = await response.json();
    console.log(data.data.artist);
    return data.data.artist
  }

  export default async function Artist({ params }) {
    const artistData = await getArtist(params.slug);
    return (
        <main className="flex flex-col justify-between w-full mx-auto bg-gray-600">
        <section className="p-12">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,2%,0.55)] dark:shadow-black/20 md:px-12 lg:mr-16">
                    <h2 className="mb-3 text-3xl font-bold text-left text-white">{artistData.artist}</h2>
                    <p className="text-white all-links" dangerouslySetInnerHTML={{ __html: artistData.lastFm.artist.bio.summary }}>
                    </p>
                    <h3 className="my-4 text-xl font-bold text-center">Similar Artists</h3>
                        {artistData.lastFm.artist.similar.artist.map((similar) => {
                        return (
                            <div className="inline-grid grid-cols-1 gap-2 mb-2">
                            <span className="px-2 py-2 text-md ml-2 font-bold text-white rounded-sm bg-[hsl(215,34%,40%)]">{similar.name}</span>
                            </div>
                        );
                        })}
                    <h4 className="my-4 text-xl font-bold text-center">Tags</h4>
                        {artistData.lastFm.artist.tags.tag.map((tag) => {
                        return (
                          <div className="inline-grid grid-cols-1 gap-2 mb-2">
                            <span className="px-2 py-2 ml-2 text-sm font-bold text-black rounded-sm bg-[hsla(0,0%,100%,0.55)]">{tag.name}</span>
                            </div>
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
                <Callout
                title={artistData.promotionalBlock.title}
                button={artistData.promotionalBlock.button}
                />
            </div>
          </div>
        </div>
      </section>
        </main>
    );
  }