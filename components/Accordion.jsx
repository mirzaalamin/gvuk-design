"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="primary-gradient border-t-2 border-primary">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-between py-6 px-6",
                    "text-accordion-text font-medium text-lg",
                    "hover:bg-accordion-hover transition-colors duration-200",
                    "focus:outline-none focus:bg-accordion-hover"
                )}
            >
                <span className="text-left text-primary font-light font-openSans text-[20px] py-4">
                    {title}
                </span>
                <ChevronDown
                    className={cn(
                        "h-5 w-5 text-accordion-text transition-transform duration-200 text-primary",
                        isOpen && "rotate-180"
                    )}
                />
            </button>

            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    isOpen ? " opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 pb-6">
                    <div className="text-muted-foreground leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
