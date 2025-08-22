import { Label } from "./ui/label";
import { Link } from "@inertiajs/react";

export default function BeritaFoto() {
    const beritaFoto = [
        {
            title: "Kemeriahan 'Cina Walk: Vibrant Hainan'",
            time: "1 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "WNI di Inggris Maknai Kemerdekaan Dukung Indonesia Emas",
            time: "2 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "HUT RI di Denmark Momentum Pererat Hubungan Kewarganegaraan",
            time: "3 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Dirjen WIPO Puji Inklusivitas Ekosistem Kekayaan Intelektual Indonesia",
            time: "3 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Kru KRI Meriahkan HUT RI di Beirut",
            time: "4 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Wamenlu RI Hadiri Diaspora Global Summit Ke-2",
            time: "5 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
    ];

    const beritaTerpopuler = [
        {
            title: "Kemeriahan 'Cina Walk: Vibrant Hainan'",
            time: "1 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "WNI di Inggris Maknai Kemerdekaan Dukung Indonesia Emas",
            time: "2 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "HUT RI di Denmark Momentum Pererat Hubungan Kewarganegaraan",
            time: "3 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Dirjen WIPO Puji Inklusivitas Ekosistem Kekayaan Intelektual Indonesia",
            time: "3 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
        {
            title: "Kru KRI Meriahkan HUT RI di Beirut",
            time: "4 hari yang lalu",
            kategori: "Pusat Pemberitaan",
            image: "/storage/foto_info_haji/image.png",
        },
    ];

    return (
        <div className="bg-blue-700 py-4">
            <div className="max-w-lebarLaptop mx-auto">
                <div className="flex flex-row text-white space-x-4">
                    {/* Bagian Berita Foto */}
                    <div className="w-2/3">
                        <div className="flex items-center justify-between mb-3">
                            <Label className="text-xl font-semibold">
                                Berita Foto
                            </Label>
                            <Link
                                href={route("beritaTerkini.home")}
                                className="flex items-center pl-3 hover:underline"
                            >
                                Lihat Lebih Banyak
                            </Link>
                        </div>

                        {/* Grid Foto */}
                        <div className="grid grid-cols-3 gap-4">
                            {beritaFoto.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden shadow-lg cursor-pointer group relative"
                                >
                                    {/* Foto pakai background */}
                                    <div
                                        className="w-full h-32 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    ></div>

                                    {/* Overlay teks */}
                                    <div className="p-2 bg-gradient-to-t from-black/70 to-transparent text-white absolute bottom-0 w-full">
                                        <p className="text-sm font-semibold line-clamp-2">
                                            {item.title}
                                        </p>
                                        <span className="text-xs text-orange-400 flex items-center">
                                            <span className="mr-1">📍</span>
                                            {item.kategori}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bagian Berita Terpopuler */}
                    <div className="w-1/2">
                        <Label className="text-xl font-semibold mb-3 block">
                            Berita Terpopuler
                        </Label>
                        <ol className="space-y-3">
                            {beritaTerpopuler.map((item, index) => (
                                <li className="flex space-x-4">
                                    <span
                                        className="font-bold text-3xl"
                                        key={index}
                                    >
                                        {index + 1}
                                    </span>

                                    <img
                                        src={item.image}
                                        alt="Berita Terpopuler"
                                        className="rounded-lg bg-cover w-[180px] h-[100]"
                                    ></img>

                                    <div className="mx-2 flex flex-col space-y-2">
                                        <Label className="font-medium text-base">
                                            {item.title}
                                        </Label>
                                        <Label className="font-medium text-base">
                                            📍 {item.kategori}
                                        </Label>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
