import Image from 'next/image';
import Link from "next/link";

//Get all Artists

async function getArtists() {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query Artists {
        artists(last: 4) {
          slug
          artist
          id
          artistImage {
            altText
            url
            height
            width
          }
        }
      }`,
    }),
  });
  const json = await response.json();
  return json.data.artists;
}

export default async function Home() {
  const artists = await getArtists();
  //console.log(artists);
  return (
    <main className="flex flex-col justify-between">
      <section className="mb-32 text-center">
      <h2 className="mb-12 text-3xl font-bold">
      Featured <span className="text-[hsl(218,81%,75%)] px-2 py-2">Artists</span>
      </h2>
      <div className="grid px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
        {artists.map((artist) => {
          return (
            <div key={artist.id} className="px-2 pb-5 mb-12 rounded-lg lg:mb-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] background-radial-gradient">
              <Image
                className="mx-auto my-6 rounded-lg shadow-lg dark:shadow-black/20 w-[350px] h-[175px]"
                src={artist.artistImage.url}
                width={artist.artistImage.width}
                height={artist.artistImage.height}
                alt={artist.artistImage.altText}
              />
              <Link 
                className="text-xl font-bold text-white underline" 
                href={`/artists/${artist.slug}`}>
                  {artist.artist}
              </Link>
            </div>
          );  
          })}
      </div>
    </section>
  </main>
  )
}
