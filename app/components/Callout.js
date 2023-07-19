import Link from "next/link";


export default function Callout({button, title}) {
    return (
        <div className="block p-16 mb-8 background-radial-gradient">
            <h4 className="text-3xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">{title}
            </h4>
            {button ? <Link className="inline-block py-3 mt-4 mr-2 text-sm font-medium leading-snug text-gray-700 uppercase bg-gray-200 rounded shadow-md px-7 hover:bg-gray-800 hover:shadow-lg hover:text-white" href={button.url} role="button">{button.text}</Link> : ''}
        </div>
    )
}