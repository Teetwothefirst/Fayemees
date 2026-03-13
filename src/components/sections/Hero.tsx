"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cream px-6 py-20 pb-40 md:pb-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-stone/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
                    {/* Tagline Animation */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-body text-[10px] md:text-sm uppercase tracking-[0.4em] text-gold font-bold"
                    >
                        Excellence in Every Concept
                    </motion.p>

                    {/* Headline Animation */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-5xl md:text-8xl lg:text-9xl font-bold text-charcoal leading-[1.1] md:leading-tight"
                    >
                        FAYEMEES
                    </motion.h1>

                    {/* Subtext Animation */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="font-body text-mid text-xs md:text-lg max-w-2xl leading-relaxed italic"
                    >
                        Nigeria&apos;s premier multi-concept lifestyle brand. From premium grooming and beauty
                        to curated trade and fine dining, we define the art of sophisticated living.
                    </motion.p>

                    {/* CTAs Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 pt-4 md:pt-6 w-full sm:w-auto"
                    >
                        <Link
                            href="/book"
                            className="group bg-charcoal text-cream px-8 md:px-10 py-3.5 md:py-4 rounded-sm font-body text-xs uppercase tracking-widest font-bold flex items-center space-x-3 hover:bg-gold hover:text-charcoal transition-all duration-500 w-full sm:w-auto justify-center shadow-xl shadow-charcoal/10"
                        >
                            <Calendar size={18} />
                            <span>Book Appointment</span>
                        </Link>

                        <Link
                            href="#sections"
                            className="group border border-stone/40 text-charcoal px-8 md:px-10 py-3.5 md:py-4 rounded-sm font-body text-xs uppercase tracking-widest font-bold flex items-center space-x-3 hover:border-gold hover:bg-gold/5 transition-all w-full sm:w-auto justify-center"
                        >
                            <span>Explore Arms</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none select-none"
            >
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-stone">Discover More</span>
                <div className="w-px h-10 md:h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
