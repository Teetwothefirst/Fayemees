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
                            initial={{ opacity: 0, scale: 0.98, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden flex flex-col h-[450px] md:h-[600px] cursor-pointer"
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 z-0"
                                style={{ backgroundImage: `url(${arm.image})` }}
                            >
                                <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/30 transition-colors duration-700" />
                            </div>

                            {/* Content Overlay */}
                            <div className="relative z-10 p-10 md:p-14 mt-auto h-full flex flex-col justify-end bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent">
                                <div className="text-gold mb-6 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 origin-left">
                                    {arm.icon}
                                </div>
                                <h3 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 tracking-tight italic">
                                    {arm.name}
                                </h3>
                                <p className="font-body text-stone/90 text-sm md:text-base max-w-sm mb-10 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 italic leading-relaxed">
                                    {arm.description}
                                </p>
                                <Link
                                    href={arm.href}
                                    className="inline-flex items-center space-x-3 text-gold font-body text-xs uppercase tracking-[0.2em] font-bold group/link"
                                >
                                    <span>Explore Collection</span>
                                    <div className="w-12 h-px bg-gold transition-all duration-700 group-hover/link:w-20" />
                                    <ArrowUpRight size={18} className="translate-y-0.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
