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
import { Card, CardContent, CardHeader } from "@/Components/ui/card";

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
                <div className="w-full max-w-7xl">
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
                                    Foto Kegiatan
                                </TableHead>
                                <TableHead className="text-center py-3">
                                    Aksi
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="bg-cyan-300">
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
                                            className="bg-gray-100 hover:bg-gray-50 transition"
                                        >
                                            <TableCell>
                                                <Label
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                    className="flex items-center justify-center"
                                                >
                                                    <Checkbox
                                                        checked={
                                                            checked[todo.id] ||
                                                            false
                                                        }
                                                        onCheckedChange={(
                                                            value
                                                        ) =>
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
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label className="flex items-center justify-center">
                                                    {todo.kegiatan}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label className="flex items-center justify-center">
                                                    {formattedDate}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                <Label className="flex items-center justify-center">
                                                    {todo.jam}
                                                </Label>
                                            </TableCell>
                                            <TableCell>
                                                {todo.foto ? (
                                                    <Card className="flex flex-col items-center justify-center">
                                                        <CardContent className="bg-yellow-100 p-0 m-4">
                                                            <img
                                                                src={`/storage/${todo.foto}`}
                                                                alt="Foto Todo"
                                                                className="w-48 h-24 object-cover rounded-md flex items-center justify-center"
                                                            />
                                                        </CardContent>
                                                    </Card>
                                                ) : (
                                                    <span className="text-gray-400">
                                                        Tidak ada foto
                                                    </span>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="grid grid-span-2 space-y-2 items-center justify-center">
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
                                        colSpan={6}
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
