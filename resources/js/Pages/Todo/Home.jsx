import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/Components/ui/label";
import { IoIosCreate, IoIosTrash } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

export default function Home({ data }) {
    const [checked, setChecked] = useState({});

    function handleCheckboxChange(id, value) {
        setChecked((prev) => ({
            ...prev,
            [id]: value,
        }));
    }

    const [popUpDelete, setPopUpDelete] = useState(null);

    function handleDelete(id) {
        // fungsi delete ke backend
        router.post(route("todo.delete", id));
        setPopUpDelete(null); // tutup popup setelah delete
    }

    return (
        <>
            {/* Wrapper Table */}
            <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                    {/* Tombol Add Todo */}
                    <div className="flex items-center justify-end my-5 space-x-4">
                        <Button
                            className="bg-blue-500 text-white hover:bg-blue-600"
                            onClick={() => router.visit(route("todo.create"))}
                        >
                            <IoIosCreate className="w-5 h-5" />
                            Add Todo
                        </Button>
                    </div>

                    <Table className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        {/* Caption */}
                        <TableCaption className="text-lg font-semibold py-4">
                            📅 Daftar Kegiatan
                        </TableCaption>

                        {/* Table Header */}
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                <TableHead className="text-center py-3">
                                    Status
                                </TableHead>
                                <TableHead className="text-center py-3">
                                    Kegiatan
                                </TableHead>
                                <TableHead className="text-center py-3">
                                    Tanggal
                                </TableHead>
                                <TableHead className="text-center py-3">
                                    Jam
                                </TableHead>
                                <TableHead className="text-center py-3">
                                    Aksi
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody>
                            {data.length > 0 ? (
                                data.map((todo, index) => {
                                    const formattedDate = new Date(
                                        todo.tanggal
                                    ).toLocaleDateString("id-ID", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    });

                                    return (
                                        <TableRow
                                            key={index}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            <TableCell className="text-center">
                                                <Checkbox
                                                    checked={
                                                        checked[todo.id] ||
                                                        false
                                                    }
                                                    onCheckedChange={(value) =>
                                                        handleCheckboxChange(
                                                            todo.id,
                                                            value
                                                        )
                                                    }
                                                />
                                                <span className="mx-2">
                                                    {checked[todo.id]
                                                        ? "Selesai"
                                                        : "Belum Selesai"}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {todo.kegiatan}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {formattedDate}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {todo.jam}
                                            </TableCell>
                                            <TableCell className="flex items-center justify-center">
                                                <div className="grid grid-span-2 space-y-2">
                                                    <Button
                                                        className="bg-yellow-500 text-white hover:bg-yellow-600 "
                                                        onClick={() =>
                                                            router.visit(
                                                                route(
                                                                    "todo.edit",
                                                                    todo.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <FiEdit className="w-5 h-5" />
                                                        Edit Todo
                                                    </Button>

                                                    <Button
                                                        className="bg-red-500 text-white hover:bg-red-600"
                                                        onClick={() =>
                                                            setPopUpDelete(
                                                                todo.id
                                                            )
                                                        }
                                                    >
                                                        <IoIosTrash className="w-5 h-5" />
                                                        Delete Todo
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={4}
                                        className="text-center py-4 text-gray-500"
                                    >
                                        Tidak ada kegiatan untuk hari ini.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

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
                                onClick={() => setPopUpDelete(null)}
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
        </>
    );
}
