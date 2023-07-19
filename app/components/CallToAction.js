import Link from "next/link";
import Image from "next/image";

export default function CallToAction({body, heading, button, image}) {
    return (
        <section className="mb-32 bg-gray-800">
            <div className="px-6 py-12 text-center md:px-12">
                <div className="container mx-auto xl:px-32">
                <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl text-[hsl(218,81%,95%)]">{heading}</h2>
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                           <div className="mb-12 text-white text-md" dangerouslySetInnerHTML={{ __html: body.html }} />
                           {button ? <Link className="inline-block py-3 mr-2 font-medium leading-snug text-gray-700 uppercase bg-gray-200 rounded shadow-md text-md px-7 hover:bg-gray-800 hover:shadow-lg hover:text-white" href={button.url} role="button">{button.text}</Link> : ''}
                        </div>
                        {image ? <div className="mb-12 lg:mb-0">
                            <Image
                            className="w-full rounded-lg shadow-lg"
                            src={image.url}
                            alt={image.altText}
                            width={image.width}
                            height={image.height}
                            />
                        </div> : ''}
                    </div>
                </div>
            </div>
  </section>
    )

}