import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Navbar() {
    const [menu, setMenu] = useState([
        { id: 0, title: "BERITA", link: "/" },
        { id: 1, title: "OLAHRAGA", link: "/" },
        { id: 2, title: "GAYA HIDUP", link: "/" },
        { id: 3, title: "EKONOMI", link: "/" },
        { id: 4, title: "HUKUM", link: "/" },
        { id: 5, title: "BERITA LAIN", link: "/" },
    ]);
    return (
        <>
            <div className="flex items-center justify-between bg-blue-600">
                <div className="">
                    <img
                        src={`/storage/logo/logo-rricoid.png`}
                        className="w-[230px] h-20"
                    ></img>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="space-x-4 mx-4">
                        {menu.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    asChild
                                    className="text-white mx-2"
                                >
                                    <Link
                                        href={item.link}
                                        className="inline-block hover:scale-95 transition-transform duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
