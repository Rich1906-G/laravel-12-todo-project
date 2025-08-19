import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import BeritaTerbaru from "@/Components/BeritaTerbaru";
import InfoHaji from "@/Components/InfoHaji";

export default function Home({ kategori }) {
    return (
        <>
            <div className="bg-gray-300 w-full h-full pb-5 overflow-auto">
                <Navbar kategori={kategori} />
                <Header />
                <BeritaTerbaru />
                <InfoHaji />
            </div>
        </>
    );
}
