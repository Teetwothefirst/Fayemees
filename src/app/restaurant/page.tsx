"use client";

import { motion } from "framer-motion";
import { Utensils, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RestaurantPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600')" }}
                />
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center">
                            <Utensils className="text-gold w-10 h-10" />
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-body text-xs uppercase tracking-[0.5em] text-gold font-bold mb-4"
                    >
                        Fine Dining Experience
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 tracking-tight"
                    >
                        4F&apos;s Restaurant
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-stone/80 text-sm md:text-xl max-w-3xl mx-auto italic leading-relaxed"
                    >
                        Feathers, Fins & Flesh. A culinary journey through the heart of Nigeria,
                        crafted with precision and served with elegance.
                    </motion.p>
                </div>
            </section>

            {/* Concept Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-gold font-body text-xs uppercase tracking-[0.3em] font-bold">The Concept</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal">Feathers, Fins & Flesh</h2>
                        <p className="font-body text-mid leading-relaxed text-base md:text-lg italic">
                            Our name celebrates the bounty of the land and water. Each dish at 4F&apos;s
                            is an editorial expression of traditional flavors reimagined for the modern palate.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start space-x-4">
                                <Clock className="text-gold shrink-0" size={20} />
                                <div>
                                    <h4 className="font-display font-bold text-charcoal mb-1">Dinner Service</h4>
                                    <p className="font-body text-xs text-mid uppercase tracking-widest">Tue - Sat / 18:00 - 22:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-gold shrink-0" size={20} />
                                <div>
                                    <h4 className="font-display font-bold text-charcoal mb-1">Location</h4>
                                    <p className="font-body text-xs text-mid uppercase tracking-widest">FAYEMEES HQ, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/5] bg-cream">
                        <div
                            className="absolute inset-4 bg-cover bg-center border border-stone/20"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966842-28c466461c77?auto=format&fit=crop&q=80&w=800')" }}
                        />
                        <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-charcoal/10 -z-10" />
                    </div>
                </div>
            </section>

            {/* Menu CTA */}
            <section className="py-32 bg-charcoal text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-cream underline decoration-gold/50 underline-offset-8">Curating the Menu</h2>
                    <p className="font-body text-stone/70 text-lg leading-relaxed italic">
                        Our seasonal menu is currently being perfected. Stay tuned for the unveiling of
                        our debut collection of culinary masterpieces.
                    </p>
                    <div className="pt-8">
                        <button className="flex items-center space-x-3 text-gold font-body text-xs uppercase tracking-[0.4em] font-bold mx-auto group">
                            <span>Reservations: Call Us</span>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
