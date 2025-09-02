"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


const ResinAccordion = ({ accordionData }) => {
    const [openItems, setOpenItems] = useState(new Set());

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-background rounded-lg overflow-hidden">
            {accordionData.map((item, index) => (
                <div key={item.id} className="bg-[#D0D0D0] border-t-2 border-primary">
                    <button
                        onClick={() => toggleItem(item.id)}
                        className={cn(
                            "w-full flex items-center justify-between py-6 px-6",
                            "text-accordion-text font-medium text-lg",
                            "hover:bg-accordion-hover transition-colors duration-200",
                            "focus:outline-none focus:bg-accordion-hover"
                        )}
                    >
                        <span className="text-left text-primary font-light font-openSans text-[20px] py-4">{item.title}</span>
                        <ChevronDown
                            className={cn(
                                "h-5 w-5 text-accordion-text transition-transform duration-200 text-primary",
                                openItems.has(item.id) && "rotate-180"
                            )}
                        />
                    </button>

                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-out",
                            openItems.has(item.id)
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        )}
                    >
                        <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    </div>

                    {index < accordionData.length - 1 && (
                        <div className="border-b border-accordion-border mx-6" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResinAccordion;
