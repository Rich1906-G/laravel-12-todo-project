import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { Calendar } from "@/Components/ui/calendar";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

export default function Edit({ data }) {
    const [values, setValues] = useState({
        kegiatan: data.kegiatan || "",
        tanggal: data.tanggal || "",
        jam: data.jam || "",
        foto: null, // hanya untuk foto baru
    });

    // ✅ state untuk menampilkan preview foto
    const [previewFoto, setPreviewFoto] = useState(
        data.foto ? `/storage/${data.foto}` : null
    );

    const [selectedDate, setSelectedDate] = useState(
        data.tanggal ? new Date(data.tanggal) : null
    );
    const [showCalendar, setShowCalendar] = useState(false);

    function formatTanggal(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // ✅ handle change untuk semua field
    function handleChange(e) {
        const key = e.target.name;

        // ✅ Kalau input type file (foto)
        if (key === "foto") {
            const file = e.target.files[0];
            setValues((prev) => ({
                ...prev,
                foto: file,
            }));

            // ✅ tampilkan preview foto baru
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewFoto(reader.result);
                };
                reader.readAsDataURL(file);
            }
        } else {
            // ✅ untuk input biasa
            setValues((prev) => ({
                ...prev,
                [key]: e.target.value,
            }));
        }
    }

    // ✅ submit ke backend
    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("todo.update", data.id), values, {
            forceFormData: true,
        });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-5xl w-full grid grid-span-4 p-10 rounded-sm">
                    <div className="flex items-center justify-center text-xl font-bold">
                        Edit Todo
                    </div>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* ✅ FIELD KEGIATAN */}
                        <div className="my-2 space-y-2">
                            <Label>Kegiatan</Label>
                            <Input
                                type="text"
                                name="kegiatan"
                                value={values.kegiatan}
                                onChange={handleChange}
                            />
                        </div>

                        {/* ✅ FIELD TANGGAL */}
                        <div className="my-2 space-y-2">
                            <Label>Tanggal</Label>
                            <Input
                                type="text"
                                className="cursor-pointer"
                                name="tanggal"
                                value={
                                    selectedDate instanceof Date &&
                                    !isNaN(selectedDate)
                                        ? selectedDate.toLocaleDateString(
                                              "id-ID",
                                              {
                                                  weekday: "long",
                                                  month: "long",
                                                  year: "numeric",
                                                  day: "numeric",
                                              }
                                          )
                                        : ""
                                }
                                placeholder="Pilih Tanggal"
                                onChange={handleChange}
                                onFocus={() => setShowCalendar(true)}
                            />

                            {showCalendar && (
                                <div>
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            setSelectedDate(date);
                                            setValues((prev) => ({
                                                ...prev,
                                                tanggal: formatTanggal(date),
                                            }));
                                            setShowCalendar(false);
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* ✅ FIELD JAM */}
                        <div className="my-2 space-y-2">
                            <Label>Jam</Label>
                            <Input
                                type="time"
                                name="jam"
                                value={values.jam}
                                onChange={handleChange}
                            />
                        </div>

                        {/* ✅ FIELD FOTO */}
                        <div className="my-2 space-y-2">
                            <Label>Foto</Label>

                            {/* ✅ Preview foto (foto lama / foto baru) */}
                            {previewFoto && (
                                <img
                                    src={previewFoto}
                                    alt="Preview Foto Todo"
                                    className="w-40 h-40 object-cover rounded-md mb-3"
                                />
                            )}

                            <Input
                                type="file"
                                className="cursor-pointer"
                                name="foto"
                                onChange={handleChange}
                                accept="image/*"
                            />
                        </div>

                        {/* ✅ BUTTON */}
                        <div className="flex items-center space-x-4">
                            <Button className="my-4" type="submit">
                                Submit
                            </Button>

                            <Button
                                className="my-4"
                                type="button"
                                onClick={() => router.visit(route("todo.home"))}
                                variant="destructive"
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
