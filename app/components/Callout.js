import Link from "next/link";


export default function Callout({button,  title}) {
    return (
        <div class="mt-8  background-radial-gradient block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}
            </h5>
            {button ? <Link className="inline-block py-3 mr-2 text-sm font-medium leading-snug text-gray-700 uppercase transition duration-150 ease-in-out bg-gray-200 rounded shadow-md px-7 hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light" href={button.url} role="button">{button.text}</Link> : ' '}
        </div>
    )
}