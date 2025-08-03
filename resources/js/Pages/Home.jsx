import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import BeritaTerbaru from "@/Components/BeritaTerbaru";
// import InfoHaji from "@/Components/InfoHaji";

export default function Home() {
    return (
        <>
            <div className="bg-gray-300 w-full h-full pb-5">
                <Navbar />
                <Header />
                <BeritaTerbaru />
                {/* <InfoHaji/> */}
            </div>
        </>
    );
}
