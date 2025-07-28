import Checkbox from "@/Components/Checkbox";
import { useState } from "react";
import Dropdown from "@/Components/Dropdown";

export default function Testing({ nama, umur }) {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-3xl bg-black bg-opacity-10 rounded-md p-5">
                    <div className="items-center justify-center">
                        <p>Halo. Nama Saya {nama}</p>
                        <p>Umur Saya {umur}</p>

                        {/* Start Checkbox */}
                        <label className="my-4 flex items-center space-x-2">
                            <Checkbox
                                value={nama}
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                            />
                            <span>
                                {checked
                                    ? `Umur saya ${umur}`
                                    : `Nama saya ${nama}`}
                            </span>
                        </label>
                        {/* End Checkbox */}

                        {/* Start Dropdown */}
                        <div className="flex items-center my-4">
                            <Dropdown className="rounded-lg py-2 ">
                                <Dropdown.Trigger>
                                    Nama saya {nama}
                                </Dropdown.Trigger>

                                <Dropdown.Content className="rounded-lg py-2 px-3 bg-red-200">
                                    Umur saya {umur} tahun
                                </Dropdown.Content>
                            </Dropdown>
                        </div>

                        <div className="mt-10">
                            <Dropdown.Link children={nama} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
