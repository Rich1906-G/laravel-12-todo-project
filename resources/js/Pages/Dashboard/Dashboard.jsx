import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 p-6">
                        <div className="text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-4 ">
                            <div className="space-y-2">
                                <Label htmlFor="text">Testing</Label>
                                <Input id="text" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="text">Testing</Label>
                                <Input id="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
