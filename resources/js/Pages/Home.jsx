import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import BeritaTerbaru from "@/Components/BeritaTerbaru";
import InfoHaji from "@/Components/InfoHaji";
import BeritaTerkini from "@/Components/BeritaTerkini";
import BeritaVideo from "@/Components/BeritaVideo";
import BeritaFoto from "@/Components/BeritaFoto";
import Editorial from "@/Components/Editorial";
import Inografis from "@/Components/Inografis";

export default function Home({ kategori }) {
    return (
        <>
            <div className="bg-gray-100 w-full h-full pb-5 overflow-auto">
                <Navbar kategori={kategori} />
                <Header />
                <BeritaTerbaru />
                <InfoHaji />
                <BeritaTerkini />
                <BeritaVideo />
                <BeritaFoto />
                <Editorial />
                <Inografis />
            </div>
        </>
    );
}
