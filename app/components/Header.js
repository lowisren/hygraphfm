// Header component: app/components/Header.js

export default function Header() {
    return (
    <header className="py-6 mt-0 background-radial-gradient">
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
    <div className="container mx-auto">
    <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="mt-12 lg:mt-0">
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
            Hygraph<span className="text-[hsl(218,81%,75%)]">FM</span>
        </h1>
        <p className="text-lg text-[hsl(218,81%,95%)]">
            Hygraph FM is a community of artists, producers, listners who are passionate about music and the creative process!
        </p>
        </div>
    </div>
    </div>
    </div>
    </header>
    )
}