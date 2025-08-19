export default function BeritaTerbaru() {
    // contoh data berita (bisa kamu ganti dengan props dari Laravel nanti)
    const beritaUtama = {
        kategori: "Kuliner",
        judul: "Kenali Keistimewaan Bumbu Nusantara, Saat Amerika Mulai Bertanya",
        foto: "/storage/foto_berita/4gao4chglvz5qoa.jpeg",
        sumber: "Pusat Pemberitaan",
    };

    const beritaSamping = [
        {
            kategori: "Wisata",
            judul: "Menyusuri Rowo Jombor, Perahu, Senja, dan Warung Apung",
            foto: "/storage/foto_berita/berita1.jpeg",
            sumber: "Pusat Pemberitaan",
        },
        {
            kategori: "Info Parlemen",
            judul: "DPR Akan Panggil PPATK Klarifikasi Pemblokiran Rekening Pasif",
            foto: "/storage/foto_berita/berita2.jpeg",
            sumber: "Pusat Pemberitaan",
        },
        {
            kategori: "Info Parlemen",
            judul: "Amerika Serikat Didesak Cabut Labelisasi Diskriminatif Bumbu Indonesia",
            foto: "/storage/foto_berita/berita3.jpeg",
            sumber: "Pusat Pemberitaan",
        },
    ];

    return (
        <div className="max-w-lebarLaptop mx-auto my-8 ">
            <div className="flex flex-col md:flex-row items-start md:space-x-5">
                {/* 📌 BAGIAN BERITA UTAMA */}
                <div className="w-full md:w-2/3 relative">
                    <img
                        src={beritaUtama.foto}
                        alt={beritaUtama.judul}
                        className="w-full h-[350px] object-cover rounded-lg "
                    />
                    {/* 🔵 overlay gradasi biru */}
                    <div className="absolute bottom-0 left-0 right-0 h-[37%] bg-gradient-to-t from-blue-700 to-transparent rounded-b-lg"></div>
                    {/* kategori */}
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
                        {beritaUtama.kategori}
                    </span>
                    {/* judul */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <h2 className="text-white text-2xl font-bold drop-shadow-lg">
                            {beritaUtama.judul}
                        </h2>
                        <p className="text-white text-sm mt-2 flex items-center gap-1">
                            <span className="text-red-400">📍</span>{" "}
                            {beritaUtama.sumber}
                        </p>
                    </div>
                </div>

                {/* 📌 BAGIAN BERITA SAMPING */}
                <div className="w-full md:w-1/3 mt-4 md:mt-0 space-y-4">
                    {beritaSamping.map((item, index) => (
                        <div key={index} className="flex space-x-3">
                            <img
                                src={item.foto}
                                alt={item.judul}
                                className="w-28 h-20 object-cover rounded-md"
                            />
                            <div>
                                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                                    {item.kategori}
                                </span>
                                <h3 className="text-sm font-semibold leading-snug mt-1">
                                    {item.judul}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                    <span className="text-red-400">📍</span>{" "}
                                    {item.sumber}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
