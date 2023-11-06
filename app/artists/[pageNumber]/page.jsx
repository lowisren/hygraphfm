// Landing page for all artists: app/artists/page.jsx
import Image from "next/image";
import Link from "next/link";

// Get all Artists
async function getAllArtists(pageNumber) {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            query MyQuery {
                artistsConnection(first: 3, skip: ${(pageNumber - 1) * 3}) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    pageSize
                    startCursor
                    endCursor
                  }
                  aggregate {
                    count
                  }
                  edges {
                    node {
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
                  }
                }
              }
              `,
    }),
  });
  const json = await response.json();
  return json.data.artistsConnection;
}

export default async function Artists({ params }) {
  const { pageNumber } = params;
  const {edges, pageInfo, aggregate} = await getAllArtists(pageNumber);
    const artists = edges.map((edge) => edge.node);

    const {pageSize, hasNextPage, hasPreviousPage} = pageInfo;
    const {count} = aggregate;
    // get total number of pages
    const pageTotal = Math.ceil(count / pageSize);
    // convert pageTotal to an array with page numbers (page number is array iterator + 1)
    const pageArray = Array.from(Array(pageTotal).keys()).map(i => i+1)


    return (
    <main className="flex flex-col justify-between">
      <section className="mb-32 text-center">
        <h2 className="my-12 text-5xl font-bold">
          All<span className="text-[hsl(218,81%,75%)] px-2 py-2">Artists</span>
        </h2>
        <div className="grid px-5 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist) => {
            return (
              <div
                key={artist.id}
                className="px-2 pb-5 my-12 rounded-lg lg:mb-0 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] background-radial-gradient"
              >
                <Image
                  className="mx-auto my-6 rounded-lg shadow-lg dark:shadow-black/20 w-[350px] h-[175px]"
                  src={artist.artistImage.url}
                  width={artist.artistImage.width}
                  height={artist.artistImage.height}
                  alt={artist.artistImage.altText}
                />
                <Link
                  className="text-xl font-bold text-white underline"
                  href={`/artist/${artist.slug}`}
                >
                  {artist.artist}
                </Link>
              </div>
            );
          })}
        </div>
        {hasPreviousPage && (
        <Link href={`/artists/${Number(pageNumber) - 1}`}>
          Previous
        </Link>
      )}    
      {pageArray.map((page) => {
            return (
                <Link className={`${(page == pageNumber) ? 'current' : ''}`} key={page} href={`/artists/${page}`}>
                {page}
                </Link>
            )
      })}
        {hasNextPage && (
            <Link  href={`/artists/${Number(pageNumber) + 1}`}>
            Next
            </Link>
        )
    }
      </section>
      
    </main>
  );
}
