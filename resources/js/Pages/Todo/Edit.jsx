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
    });

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

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

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("todo.update", data.id), values);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="max-w-5xl w-full grid grid-span-4 p-10  rounded-sm ">
                    <div className="flex items-center justify-center text-xl font-bold">
                        Edit Todo
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="my-2 space-y-2">
                            <Label>Kegiatan</Label>
                            <Input
                                type="text"
                                name="kegiatan"
                                value={values.kegiatan}
                                onChange={handleChange}
                            />
                        </div>
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

                        <div className="my-2 space-y-2">
                            <Label>Jam</Label>
                            <Input
                                type="time"
                                className=""
                                name="jam"
                                value={values.jam}
                                onChange={handleChange}
                            />
                        </div>

                        <Button className="my-4" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}
