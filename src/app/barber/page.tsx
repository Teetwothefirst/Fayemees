"use client";

import { motion } from "framer-motion";
import PriceTable from "@/components/ui/PriceTable";
import { barberServices } from "@/data/services";
import Link from "next/link";
import { Scissors, Calendar } from "lucide-react";

export default function BarberPage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 z-[-1]"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1600')" }}
                />
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center mb-6"
                    >
                        <Scissors className="text-gold w-12 h-12" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-5xl md:text-7xl font-bold text-cream mb-4"
                    >
                        Eddy&apos;s Barber
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-stone/80 text-sm md:text-lg max-w-2xl mx-auto italic"
                    >
                        Masterful grooming and traditional shaves in an atmosphere of refined masculinity.
                    </motion.p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="relative z-10 py-20 bg-cream px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">The Art of Grooming</h2>
                    <p className="font-body text-mid leading-relaxed text-sm md:text-base">
                        At Eddy&apos;s Barber, we believe a haircut is more than just a service—it&apos;s a ritual.
                        Our master barbers combine time-honored techniques with modern styles to ensure
                        you leave looking and feeling your absolute best.
                    </p>
                    <div className="flex justify-center pt-4">
                        <Link
                            href="/book"
                            className="bg-charcoal text-cream px-10 py-4 rounded-sm font-body text-xs uppercase tracking-widest font-bold flex items-center space-x-3 hover:bg-gold hover:text-charcoal transition-all shadow-xl shadow-charcoal/10"
                        >
                            <Calendar size={18} />
                            <span>Book Your Session</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="relative z-10 py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gold font-body text-xs uppercase tracking-[0.3em] font-bold">Menu & Pricing</span>
                        <h2 className="font-display text-4xl font-bold text-charcoal mt-2">Services</h2>
                    </div>
                    <PriceTable services={barberServices} />
                </div>
            </section>
        </main>
    );
}
