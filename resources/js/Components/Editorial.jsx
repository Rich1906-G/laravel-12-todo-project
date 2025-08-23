import { Label } from "./ui/label";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@inertiajs/react";
import { useRef } from "react";
import { Card } from "./ui/card";

export default function Editorial() {
    const swiperRef = useRef(null);

    const beritaEditorial = {
        title: "Operasional Haji Berakhir, 40 Jemaah Dirawat di Saudi",
        time: "1 bulan yang lalu",
        source: "Pusat Pemberitaan",
        image: "/storage/foto_info_haji/image.png",
    };

    const listBeritaEditorial = Array(10).fill(beritaEditorial);

    return (
        <>
            <div className="max-w-lebarLaptop mx-auto">
                <div className="flex items-center justify-between my-4">
                    <Label className="font-semibold text-xl">Editorial</Label>
                    <div className="flex items-center">
                        <div className="flex space-x-2">
                            <button
                                className="bg-black p-2 rounded-full"
                                onClick={() => swiperRef.current.slidePrev()}
                            >
                                ◀
                            </button>
                            <button
                                className="bg-black p-2 rounded-full"
                                onClick={() => swiperRef.current.slideNext()}
                            >
                                ▶
                            </button>

                            <Link
                                href={route("beritaTerkini.home")}
                                className="flex items-center pl-3 hover:underline"
                            >
                                Lihat Lebih Banyak
                            </Link>
                        </div>
                    </div>
                </div>

                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={20}
                    slidesPerView={5}
                    className="my-5"
                    loop={true}
                >
                    {listBeritaEditorial.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card>
                                <div className="bg-white rounded-xl shadow p-3">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg"
                                    />
                                    <h3 className="font-semibold mt-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                                        <span>🕒 {item.time}</span>
                                        <span>📍 {item.source}</span>
                                    </p>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
