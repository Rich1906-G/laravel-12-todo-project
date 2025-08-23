import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Label } from "@/Components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestingSwiper() {
    const swiperRef = useRef(null);

    // gunakan state + callback refs agar kita tahu kapan elemen DOM sudah tersedia
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [paginationEl, setPaginationEl] = useState(null);

    // siap render Swiper hanya bila semua element sudah ada
    const ready = prevEl && nextEl && paginationEl;

    useEffect(() => {
        // opsional: bisa gunakan swiperRef untuk debug
        // console.log("refs", { prevEl, nextEl, paginationEl, ready });
    }, [prevEl, nextEl, paginationEl, ready]);

    return (
        <div className="max-w-lebarLaptop mx-auto my-10">
            <Label className="flex justify-center items-center my-5 text-xl">
                Testing Swiper Dengan Menggunakan Navigation Dan Pagination
            </Label>

            <div className="relative">
                {/* tombol navigasi — pakai callback ref (setPrevEl / setNextEl) */}
                <button
                    ref={setPrevEl}
                    className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-red-300 text-white p-2 rounded-full z-20"
                    aria-label="Previous"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    ref={setNextEl}
                    className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-red-300 text-white p-2 rounded-full z-20"
                    aria-label="Next"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Render placeholder (agar layout tidak meloncat) jika belum ready */}
                {!ready && (
                    <div className="bg-green-300 rounded-lg min-h-[120px]"></div>
                )}

                {/* Render Swiper hanya saat refs sudah ada */}
                {ready && (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onSwiper={(s) => (swiperRef.current = s)}
                        navigation={{ prevEl, nextEl }}
                        pagination={{ el: paginationEl, clickable: true }}
                        slidesPerView={1}
                        spaceBetween={3}
                        loop={true}
                        speed={800}
                        direction="horizontal"
                        className="bg-green-300 rounded-lg"
                    >
                        <SwiperSlide className="px-8 py-4">
                            <div className="flex flex-col items-start gap-4">
                                <Label>Judul</Label>
                                <Label>Kategori</Label>
                                <Label>Tanggal</Label>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="px-8 py-4">
                            <div className="flex flex-col items-center gap-4">
                                <Label>Judul</Label>
                                <Label>Kategori</Label>
                                <Label>Tanggal</Label>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="px-8 py-4">
                            <div className="flex flex-col items-end gap-4">
                                <Label>Judul</Label>
                                <Label>Kategori</Label>
                                <Label>Tanggal</Label>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                )}

                {/* Container pagination (callback ref) — posisikan di dalam wrapper */}
                <div
                    ref={setPaginationEl}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 flex z-20 space-x-2"
                />
            </div>
        </div>
    );
}
