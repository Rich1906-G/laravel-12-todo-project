import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Calendar } from "@/Components/ui/calendar";
import { useState } from "react";
import { Day, Month, Months, Week, Weekday } from "react-day-picker";
import { yearsToDays } from "date-fns";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

export default function Create() {
    const [values, setValues] = useState({
        kegiatan: "",
        tanggal: "",
        jam: "",
        foto: null,
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    const [selectedDate, setSelectedDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("todo.store"), values, { forceFormData: true });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="grid grid-span-4 bg-black bg-opacity-0 max-w-5xl w-full p-5">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="flex items-center justify-center text-xl font-bold">
                            Tambah Todo
                        </div>
                        <div className="my-2">
                            <Label>Kegiatan</Label>
                            <Input
                                type="text"
                                name="kegiatan"
                                onChange={handleChange}
                                className="mt-2"
                            ></Input>
                        </div>
                        <div className="my-2">
                            <Label>Tanggal</Label>
                            <Input
                                type="text"
                                name="tanggal"
                                onChange={handleChange}
                                value={
                                    selectedDate
                                        ? selectedDate.toLocaleDateString(
                                              "id-ID",
                                              {
                                                  weekday: "long",
                                                  day: "numeric",
                                                  month: "long",
                                                  year: "numeric",
                                              }
                                          )
                                        : ""
                                }
                                placeholder="Pilih Tanggal"
                                className="mt-2 cursor-pointer"
                                onFocus={() => setShowCalendar(true)}
                            />

                            {showCalendar && (
                                <div className="">
                                    <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={(date) => {
                                            setSelectedDate(date);

                                            // ✅ Simpan format untuk server (YYYY-MM-DD)
                                            setValues((values) => ({
                                                ...values,
                                                tanggal: date
                                                    .toISOString()
                                                    .split("T")[0],
                                            }));

                                            setShowCalendar(false);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="my-2">
                            <Label>Jam</Label>
                            <Input
                                type="time"
                                onChange={handleChange}
                                name="jam"
                                placeholder="Pilih Jam"
                                className="mt-2 cursor-pointer"
                            />
                        </div>
                        <div className="my-2">
                            <Label>Foto</Label>
                            <Input
                                type="file"
                                onChange={(e) =>
                                    setValues((prev) => ({
                                        ...prev,
                                        foto: e.target.files[0],
                                    }))
                                }
                                accept="image/*"
                                className="mt-2 cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center justify-end space-x-4 my-5">
                            <Button
                                className="bg-green-300 text-black hover:bg-green-400"
                                type="submit"
                            >
                                Submit
                            </Button>

                            <Button
                                variant="destructive"
                                type="button"
                                onClick={() => router.visit(route("todo.home"))}
                            >
                                Back
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
