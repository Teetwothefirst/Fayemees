"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, ShoppingBag, Utensils, Sparkles, ArrowUpRight } from "lucide-react";

const arms = [
    {
        name: "Etana Beauty Salon",
        description: "Premium hair styling, coloring, and beauty treatments for the modern woman.",
        icon: <Sparkles className="w-8 h-8" />,
        href: "/salon",
        color: "bg-gold/10",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800", // Placeholder but high quality
    },
    {
        name: "Eddy's Barber",
        description: "Masterful grooming, sharp fades, and traditional shaves in a refined atmosphere.",
        icon: <Scissors className="w-8 h-8" />,
        href: "/barber",
        color: "bg-charcoal/5",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "Market Place",
        description: "A curated collection of lifestyle essentials and exclusive FAYEMEES products.",
        icon: <ShoppingBag className="w-8 h-8" />,
        href: "/marketplace",
        color: "bg-stone/10",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    },
    {
        name: "4F's Restaurant",
        description: "Feathers, Fins & Flesh. An editorial dining experience celebrating Nigerian flavors.",
        icon: <Utensils className="w-8 h-8" />,
        href: "/restaurant",
        color: "bg-mid/5",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
    },
];

export default function BrandGrid() {
    return (
        <section id="sections" className="py-24 md:py-32 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gold font-body text-xs uppercase tracking-[0.3em] font-bold"
                        >
                            The FAYEMEES Experience
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl font-bold text-charcoal"
                        >
                            Our Brand Pillars
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-body text-mid max-w-md italic text-sm md:text-base"
                    >
                        Four distinct arms, one unified vision of excellence. Explore our dedicated spaces for
                        grooming, lifestyle, and fine dining.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {arms.map((arm, index) => (
                        <motion.div
                            key={arm.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden flex flex-col h-[400px] md:h-[500px]"
                        >
                            {/* Image Background Placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 z-0"
                                style={{ backgroundImage: `url(${arm.image})` }}
                            >
                                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-500" />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-10 p-8 md:p-12 mt-auto h-full flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent">
                                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-500 origin-left">
                                    {arm.icon}
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4 tracking-tight">
                                    {arm.name}
                                </h3>
                                <p className="font-body text-stone/90 text-sm md:text-base max-w-xs mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {arm.description}
                                </p>
                                <Link
                                    href={arm.href}
                                    className="inline-flex items-center space-x-2 text-gold font-body text-xs uppercase tracking-widest font-bold group/link"
                                >
                                    <span>Discover More</span>
                                    <div className="w-8 h-px bg-gold transition-all duration-500 group-hover/link:w-12" />
                                    <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
