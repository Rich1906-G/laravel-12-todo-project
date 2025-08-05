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

export default function Navbar({ kategori }) {
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
                        {kategori.map((item) => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuLink
                                    asChild
                                    className="text-white mx-2"
                                >
                                    <Link
                                        href="/"
                                        className="inline-block hover:scale-95 transition-transform duration-200"
                                    >
                                        {item.nama_kategori}
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
