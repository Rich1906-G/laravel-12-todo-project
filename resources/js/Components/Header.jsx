import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [menu, setMenu] = useState([
        { id: 0, img: "storage/logo/logo-rriplaygo.png", link: "/" },
        { id: 1, img: "storage/logo/logo-streaming.png", link: "/" },
        { id: 2, img: "storage/logo/logo-rrinet.png", link: "/" },
    ]);
    return (
        <>
            <div className="bg-gray-800 flex items-center justify-between px-8 py-4 h-[80px]">
                <div className="flex items-center text-white space-x-5">
                    <div>
                        {" "}
                        <Link
                            href="/"
                            className="inline-block hover:scale-95 transition-transform duration-200"
                        >
                            📍 Pusat Pemberitaan
                        </Link>
                    </div>
                    <div>
                        {" "}
                        <Link
                            href="/"
                            className="inline-block hover:scale-95 transition-transform duration-200"
                        >
                            Pilih Daerah
                        </Link>
                    </div>
                </div>

                <div className="flex space-x-5">
                    {menu.map((item) => (
                        <a href={item.link}>
                            <img
                                src={item.img}
                                alt="Logo"
                                className="w-[150px] h-[50px]"
                            ></img>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
