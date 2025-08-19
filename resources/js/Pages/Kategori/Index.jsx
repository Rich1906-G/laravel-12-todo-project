import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, usePage } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { IoIosCreate, IoIosTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Index({ kategori }) {
    const { flash } = usePage().props;
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (flash.success) {
            setMessage(flash.success);

            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [flash.success]);

    const [popUpCreate, setPopUpCreate] = useState(null);
    const [values, setValues] = useState({
        id: null,
        nama_kategori: "",
    });

    function handleChangeCreate(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmitCreate(e) {
        e.preventDefault();
        router.post(route("kategori.store"), values);
        setPopUpCreate(null);
    }

    const [popUpUpdate, setPopUpUpdate] = useState(false);

    function hanldePopUpUpdate(items) {
        setValues({
            id: items.id,
            nama_kategori: items.nama_kategori,
        });
        setPopUpUpdate(true);
    }

    function handleChangeUpdate(e) {
        const key = e.target.id;
        setValues((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    }

    function handleSubmitUpdate(e) {
        e.preventDefault();
        router.post(route("kategori.update"), values);
        setPopUpUpdate(false);
    }

    const [popUpDelete, setPopUpDelete] = useState(null);

    function handleDelete(id) {
        router.post(route("kategori.delete", id));
        setPopUpDelete(false);
    }
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Kategori
                    </h2>
                }
            >
                <Head title="Kategori" />

                {/* {flash.success && (
                    <div className="absolute top-0 right-0 m-6">
                        <Alert className="space-x-3">
                            <CheckCircle2Icon />
                            <AlertTitle>
                                Success! Your changes have been saved
                            </AlertTitle>
                            <AlertDescription>{flash.success}</AlertDescription>
                        </Alert>
                    </div>
                )} */}

                {message && (
                    <div className="absolute top-0 right-0 m-6 transition-all duration-500 transform">
                        <Alert className="space-x-3">
                            <CheckCircle2Icon />
                            <AlertTitle>
                                Success! Your changes have been saved
                            </AlertTitle>
                            <AlertDescription>{message}</AlertDescription>
                        </Alert>
                    </div>
                )}

                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                            <div className="flex items-center justify-between text-gray-900 dark:text-gray-100 font-bold text-xl">
                                <div>Kategori</div>
                                <Button
                                    className="bg-blue-500 text-white hover:bg-blue-600"
                                    onClick={() => setPopUpCreate(true)}
                                >
                                    <IoIosCreate className="w-5 h-5" />
                                    Add Kategori
                                </Button>
                            </div>

                            <Table className="mt-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <TableHeader>
                                    <TableRow className="bg-gray-100 ">
                                        <TableHead className="text-center">
                                            <Label className="">No</Label>
                                        </TableHead>
                                        <TableHead className="text-center">
                                            <Label className="">
                                                Nama Kategori
                                            </Label>
                                        </TableHead>
                                        <TableHead className="text-center">
                                            <Label className="">Aksi</Label>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {kategori.length > 0 ? (
                                        kategori.map((items, index) => {
                                            return (
                                                <TableRow key={items.id}>
                                                    <TableCell className="text-center">
                                                        <Label>
                                                            {index + 1}
                                                        </Label>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        <Label>
                                                            {
                                                                items.nama_kategori
                                                            }
                                                        </Label>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="grid grid-span-2 space-y-2 items-center justify-center py-2">
                                                            <Button
                                                                className="bg-yellow-500 text-white hover:bg-yellow-600 "
                                                                onClick={() =>
                                                                    hanldePopUpUpdate(
                                                                        items
                                                                    )
                                                                }
                                                            >
                                                                <FiEdit className="w-5 h-5" />
                                                                Edit Kategori
                                                            </Button>

                                                            <Button
                                                                className="bg-red-500 text-white hover:bg-red-600"
                                                                onClick={() =>
                                                                    setPopUpDelete(
                                                                        items.id
                                                                    )
                                                                }
                                                            >
                                                                <IoIosTrash className="w-5 h-5" />
                                                                Delete Kategori
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={6}
                                                className="text-center py-4 text-gray-500"
                                            >
                                                Tidak ada kegiatan untuk hari
                                                ini.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/* ✅ POPUP CREATE */}
                {popUpCreate && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-md shadow-md text-center max-w-2xl w-full mx-auto">
                            <h2 className="font-bold text-xl">
                                Create Data Kategori
                            </h2>
                            <form onSubmit={handleSubmitCreate}>
                                <div className="space-y-4 my-5">
                                    <Label
                                        htmlFor="nama_kategori"
                                        className="flex text-md"
                                    >
                                        Nama Kategori
                                    </Label>
                                    <Input
                                        id="nama_kategori"
                                        onChange={handleChangeCreate}
                                        placeholder="Nama Kategori"
                                    />
                                </div>
                                <div className="flex space-x-4 text-black">
                                    <Button
                                        variant="destructive"
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-500"
                                    >
                                        Kirim
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => setPopUpCreate(false)}
                                    >
                                        Batal
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ✅ POPUP UPDATE */}
                {popUpUpdate && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-md shadow-md text-center max-w-2xl w-full mx-auto">
                            <h2 className="font-bold text-xl">
                                Update Data Kategori
                            </h2>
                            <form onSubmit={handleSubmitUpdate}>
                                <div className="space-y-4 my-5">
                                    <Label
                                        htmlFor="nama_kategori"
                                        className="flex text-md"
                                    >
                                        Nama Kategori
                                    </Label>
                                    <Input
                                        id="nama_kategori"
                                        onChange={handleChangeUpdate}
                                        value={values.nama_kategori}
                                        placeholder="Nama Kategori"
                                    />
                                </div>
                                <div className="flex space-x-4 text-black">
                                    <Button
                                        variant="destructive"
                                        type="submit"
                                        className="bg-green-600 hover:bg-green-500"
                                    >
                                        Kirim
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => setPopUpUpdate(false)}
                                    >
                                        Batal
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* ✅ POPUP DELETE */}
                {popUpDelete && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-md shadow-md w-96 text-center">
                            <h2 className="text-lg font-semibold mb-4">
                                Hapus Todo?
                            </h2>
                            <p className="mb-6">
                                Apakah kamu yakin ingin menghapus todo ini?
                            </p>

                            <div className="flex justify-center gap-4">
                                <Button
                                    className="bg-gray-300 hover:bg-gray-400 text-black"
                                    onClick={() => setPopUpDelete(false)}
                                >
                                    Batal
                                </Button>
                                <Button
                                    className="bg-red-500 hover:bg-red-600 text-white"
                                    onClick={() => handleDelete(popUpDelete)}
                                >
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </AuthenticatedLayout>
        </>
    );
}
