import Link from "next/link";

export default function Callout() {
    return (
        <section className="lg:mx-40 background-radial-gradient">
            <div className="px-4 py-8 text-center md:px-12 lg:text-left">
                <div className="container mx-auto xl:px-32">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="mt-12 lg:mt-0">
                            <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">Invite your<br /><span className="text-[hsl(218,81%,75%)]">friends!</span></h2>
                            <Link className="inline-block py-3 mr-2 text-sm font-medium leading-snug text-gray-700 uppercase transition duration-150 ease-in-out bg-gray-200 rounded shadow-md px-7 hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</Link>
                            <Link className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-transparent rounded px-7 focus:outline-none focus:ring-0" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</Link>
                        </div>
                        <div className="mb-12 lg:mb-0">
                            <img
                            src="https://mdbootstrap.com/img/new/ecommerce/horizontal/058.jpg"
                            className="w-full rounded-lg shadow-lg"
                            alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
  </section>
    )

}