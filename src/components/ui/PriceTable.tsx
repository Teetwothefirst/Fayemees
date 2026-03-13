"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "@/data/services";

interface PriceTableProps {
    services: Service[];
    initialCategory?: string;
}

export default function PriceTable({ services, initialCategory }: PriceTableProps) {
    const categories = Array.from(new Set(services.map((s) => s.category)));
    const [activeCategory, setActiveCategory] = useState(initialCategory || categories[0]);

    const filteredServices = services.filter((s) => s.category === activeCategory);

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4 shadow-sm rounded-sm bg-cream/30 border border-stone/10">
            {/* Category Filter Tabs */}
            <div className="flex overflow-x-auto no-scrollbar items-center justify-start md:justify-center gap-2 mb-12 pb-4 border-b border-stone/10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`whitespace-nowrap px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold transition-all ${activeCategory === category
                                ? "bg-charcoal text-gold shadow-lg"
                                : "text-mid hover:text-gold"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Service List */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        {filteredServices.map((service) => (
                            <div
                                key={service.name}
                                className="flex justify-between items-end border-b border-dotted border-stone/30 pb-4 group"
                            >
                                <div className="space-y-1">
                                    <h4 className="font-display text-lg md:text-xl font-bold text-charcoal group-hover:text-gold transition-colors">
                                        {service.name}
                                    </h4>
                                    {service.description && (
                                        <p className="font-body text-xs text-mid italic">
                                            {service.description}
                                        </p>
                                    )}
                                </div>
                                <div className="font-body text-lg font-bold text-charcoal">
                                    <span className="text-sm font-medium text-gold mr-1">₦</span>
                                    {service.price.toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="mt-12 text-center">
                <p className="text-[10px] text-mid uppercase tracking-widest italic">
                    * Prices are subject to change based on specific requirements.
                </p>
            </div>
        </div>
    );
}
