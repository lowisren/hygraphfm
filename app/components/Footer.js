// Footer component: app/components/Footer.js

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="container flex flex-col items-center justify-between px-6 py-12 mx-auto md:flex-row">
                <a href="#" className="text-3xl font-bold text-white hover:text-gray-300">HyFM</a>
                <p className="mt-4 text-sm text-white md:mt-0">© 2023 HyFM —
                    <Link href="/" className="ml-1 text-gray-400 hover:text-gray-300" rel="noopener noreferrer" target="_blank">@hyfm </Link>
                </p>
                <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
                    <Link href="#" className="mx-2 text-white hover:text-gray-300" aria-label="Linkden">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                            <path d="M437.019,0H74.981C33.629,0,0,33.629,0,74.981v362.038C0,478.371,33.629,512,74.981,512h362.038
                                C478.371,512,512,478.371,512,437.019V74.981C512,33.629,478.371,0,437.019,0z M154.854,416H92.308V200.923h62.545V416z
                                M123.581,173.846c-20.654,0-37.423-16.769-37.423-37.423c0-20.654,16.769-37.423,37.423-37.423
                                c20.654,0,37.423,16.769,37.423,37.423C161.004,157.077,144.235,173.846,123.581,173.846z M416,416h-62.545V299.077
                                c0-24.654-0.469-56.308-34.308-56.308c-34.308,0-39.654,26.769-39.654,54.462V416h-62.545V200.923h59.115v28.923h0.831
                                c8.231-15.577,28.308-32.062,58.308-32.062c62.769,0,74.154,41.346,74.154,95.115V416z"/>
                        </svg>
                    </Link>
                    <Link href="#" className="mx-2 text-white hover:text-gray-300" aria-label="Facebook">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                            <path d="M437,0H75C33.6,0,0,33.6,0,75v362c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M480,437
                                c0,24.9-20.1,45-45,45H75c-24.9,0-45-20.1-45-45V75c0-24.9,20.1-45,45-45h362c24.9,0,45,20.1,45,45V437z"/>
                            <path d="M341.3,164.7h-51.2c-14.1,0-25.6,11.5-25.6,25.6v51.2h-51.2v51.2h51.2v153.6h51.2V292.3h51.2l25.6-51.2h-76.8v-25.6
                                C366.9,176.2,355.4,164.7,341.3,164.7z"/>
                        </svg>
                    </Link>
                    <Link href="#" className="mx-2 text-white hover:text-gray-300" aria-label="Twitter">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                            <path d="M437,0H75C33.6,0,0,33.6,0,75v362c0,41.4,33.6,75,75,75h362c41.4,0,75-33.6,75-75V75C512,33.6,478.4,0,437,0z M384,188.8
                                c0,0.3,0,0.6,0,0.9c0,114.7-87.4,246.9-246.9,246.9c-49.1,0-94.9-14.3-133.3-39.1c7.1,0.8,14.3,1.2,21.6,1.2
                                c42,0,80.5-14.3,111.4-38.5c-39.3-0.8-72.3-26.6-83.7-62.3c5.5,1.2,11.1,1.8,16.9,1.8c8.2,0,16.3-1.2,23.9-3.4
                                c-41.4-8.2-72.3-44.7-72.3-88.5v-1.2c12.1,6.7,26.1,10.7,41.2,11.3c-24.5-16.3-40.5-44.1-40.5-75.4c0-16.3,4.1-31.4,11.3-44.7
                                c41.2,50.3,103.9,83.7,174.1,87.4c-1.8-8.2-2.9-16.6-2.9-25.1c0-60.3,48.9-109.2,109.2-109.2c31.4,0,59.2,13.4,78.8,34.7
                                c24.5-4.1,47.5-13.4,68.6-26.1c-8.2,25.1-25.1,46.2-47.5,59.2c21.6-2.9,42-8.2,61.1-16.6C448.8,153.6,418.7,174.7,384,188.8z"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}