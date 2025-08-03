import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
    return (
        <>
            <div className="w-full flex items-center justify-center h-screen">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full grid grid-span-3 gap-8 justify-center items-center "
                    defaultValue="item-1"
                >
                    <AccordionItem
                        value="item-1"
                        className="px-4 py-2 rounded-md bg-slate-100 shadow-md"
                    >
                        <AccordionTrigger>Product Information</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="px-4 py-2 rounded-md bg-slate-100 shadow-md"
                    >
                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="px-4 py-2 rounded-md bg-slate-100 shadow-md"
                    >
                        <AccordionTrigger>Return Policy</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}
