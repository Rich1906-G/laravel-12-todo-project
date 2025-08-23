import { Label } from "./ui/label";
import { Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./ui/card";
import { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Inografis() {
    const swiperRef = useRef(null);
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [paginationEl, setPaginationEl] = useState(null);

    const ready = prevEl && nextEl && paginationEl;

    useEffect(() => {}, [prevEl, nextEl, paginationEl, ready]);

    const beritaInografis = [
        {
            title: "Operasional Haji Berakhir, 40 Jemaah Dirawat di Saudi",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Menilik Ruang Terbuka Hijau Di Jakarta",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Operasional Haji Berakhir, 40 Jemaah Dirawat di Saudi",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Menilik Ruang Terbuka Hijau Di Jakarta",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
    ];

    const beritaIndpeth = [
        {
            title: "Operasional Haji Berakhir, 40 Jemaah Dirawat di Saudi",
            time: "10 jam yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
            postBy: "Ari Dwi P",
        },
        {
            title: "Menilik Ruang Terbuka Hijau Di Jakarta",
            time: "1 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
            postBy: "Rachmad Zein",
        },
        {
            title: "Operasional Haji Berakhir, 40 Jemaah Dirawat di Saudi",
            time: "4 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
            postBy: "Wilda Arifati",
        },
    ];

    return (
        <div className="max-w-lebarLaptop mx-auto">
            <div className="grid grid-cols-2 space-x-4">
                <div>
                    <div className="flex items-center justify-between">
                        <Label className="font-semibold text-xl">
                            Infografis
                        </Label>
                        <Link
                            href={route("beritaTerkini.home")}
                            className="pl-3 hover:underline"
                        >
                            Lihat Lebih Banyak
                        </Link>
                    </div>

                    <div className="relative w-full mt-4">
                        {/* Tombol navigasi DILETAKKAN SEBELUM Swiper */}
                        <button
                            ref={setPrevEl}
                            className="custom-prev absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                            aria-label="Sebelumnya"
                            type="button"
                        >
                            <ChevronLeft className="w-6 h-6 text-black" />
                        </button>
                        <button
                            ref={setNextEl}
                            className="custom-next absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-200"
                            aria-label="Berikutnya"
                            type="button"
                        >
                            <ChevronRight className="w-6 h-6 text-black" />
                        </button>

                        <div
                            ref={setPaginationEl}
                            className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20 text-white"
                        ></div>

                        {!ready && (
                            <div className="bg-green-300 rounded-lg min-h-[120px]"></div>
                        )}

                        {ready && (
                            <Swiper
                                modules={[Navigation, Pagination]}
                                onSwiper={(s) => (swiperRef.current = s)}
                                navigation={{ prevEl, nextEl }}
                                pagination={{
                                    el: paginationEl,
                                    clickable: true,
                                }}
                                slidesPerView={1}
                                loop={true}
                                speed={800}
                                className="rounded-lg overflow-hidden"
                            >
                                {beritaInografis.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Card>
                                            <div className="overflow-hidden shadow-lg cursor-pointer group relative">
                                                <div
                                                    className="w-full h-96 bg-cover bg-center group-hover:scale-105 transition-transform duration-300 rounded-lg"
                                                    style={{
                                                        backgroundImage: `url(${item.image})`,
                                                    }}
                                                />

                                                <div className="p-4 bg-gradient-to-t from-blue-800 to-transparent text-white absolute bottom-0 w-full">
                                                    <p className="text-lg font-semibold line-clamp-2">
                                                        {item.title}
                                                    </p>
                                                    <span className="text-sm flex items-center">
                                                        <span className="mr-1">
                                                            📍
                                                        </span>
                                                        {item.kategori}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-4 bg-gray-300  px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Label className="font-semibold text-xl">Indepth</Label>
                        <Link
                            href={route("beritaTerkini.home")}
                            className="hover:underline flex items-center"
                        >
                            Lihat Lebih Banyak
                            <ChevronRight size={24} className="ml-2" />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        {beritaIndpeth.map((item, index) => (
                            <div key={index} className="flex">
                                <img
                                    src={item.image}
                                    className="h-28 rounded-lg mr-4"
                                ></img>
                                <div className="flex flex-col space-y-4 w-full">
                                    <Label className="text-base font-semibold">
                                        {item.title}
                                    </Label>
                                    <div className="flex items-center justify-between">
                                        <Label className="text-gray-500 text-sm font-medium">
                                            ⌚ {item.time}
                                        </Label>
                                        <Label className="text-gray-500 text-sm font-medium">
                                            📍 {item.kategori}
                                        </Label>
                                    </div>

                                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                                        {/* Avatar */}
                                        <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center">
                                            <span className="text-sm font-medium text-white">
                                                A
                                            </span>
                                        </div>

                                        {/* Nama Penulis */}
                                        <span>
                                            Oleh{" "}
                                            <span className="hover:underline cursor-pointer">
                                                {item.postBy}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
