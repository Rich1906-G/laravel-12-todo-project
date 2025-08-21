import { Label } from "./ui/label";

export default function BeritaVideo() {
    const beritaVideo = {
        title: "Kemeriahan 'Cina Walk: Vibrant Hainan'",
        time: "1 hari yang lalu",
        kategori: "Pusat Pemberitaan",
        image: "/storage/foto_info_haji/image.png",
    };

    const listBeritaVideo = Array(5).fill(beritaVideo);

    return (
        <>
            <div className="max-w-lebarLaptop mx-auto">
                <Label className="font-semibold text-xl">Berita Video</Label>
                <div className="flex flex-row my-4">
                    <div className="w-2/3 flex-auto pr-8">
                        <img
                            src={beritaVideo.image}
                            alt="Foto Berita Video"
                            className="rounded-lg w-full"
                        ></img>
                        <div className="flex flex-col space-y-2">
                            <Label className=" font-semibold text-2xl mt-2">
                                {beritaVideo.title}
                            </Label>
                            <div className="flex">
                                <Label className="text-gray-500 font-normal text-lg mr-5">
                                    ⌚{beritaVideo.time}
                                </Label>
                                <Label className="text-gray-500 font-normal text-lg">
                                    📍{beritaVideo.kategori}
                                </Label>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex-auto space-y-4">
                        {listBeritaVideo.map((item, index) => (
                            <div className="flex space-x-4" key={index}>
                                <img
                                    src={item.image}
                                    className="w-[230px] rounded-lg"
                                ></img>
                                <div className="flex flex-col space-y-2">
                                    <Label className=" font-semibold text-lg mt-2">
                                        {item.title}
                                    </Label>
                                    <div className="flex">
                                        <Label className="text-gray-500 font-normal text-base mr-5">
                                            ⌚{item.time}
                                        </Label>
                                        <Label className="text-gray-500 font-normal text-base">
                                            📍{item.kategori}
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
