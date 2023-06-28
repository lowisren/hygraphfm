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
<section className="mb-32 text-center">
  <h2 className="mb-12 text-3xl font-bold">
  Featured <span className="text-[hsl(218,81%,75%)] px-2 py-2">Artists</span>
  </h2>
  <div className="grid px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
    {artists.map((artist) => {
      return (
        <div key={artist.id} className="px-2 py-2 mb-12 rounded-lg lg:mb-0 background-radial-gradient ">
          <Link className="text-xl font-bold text-white underline" 
          href={`/artists/${artist.slug}`}>
              {artist.artist}
          <Image
            className="mx-auto my-6 rounded-lg shadow-lg dark:shadow-black/20 w-[200px] h-[150px]"
            src={artist.artistImage.url}
            width={artist.artistImage.width}
            height={artist.artistImage.height}
            alt={artist.artistImage.altText}
        />
          </Link>
        </div>
      );  
      })}
  </div>
</section>
</main>
  )
}
