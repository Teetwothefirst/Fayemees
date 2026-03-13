"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Instagram } from "lucide-react";

export default function MarketplacePage() {
    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-cream">
                <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <ShoppingBag className="w-16 h-16 text-gold" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-8xl font-bold text-charcoal mb-6"
                    >
                        Market Place
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-body text-mid text-sm md:text-xl max-w-2xl italic leading-relaxed"
                    >
                        A curated selection of luxury lifestyle essentials, exclusive FAYEMEES products,
                        and premium finds for the sophisticated individual.
                    </motion.p>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto text-center border-y border-stone/10 py-32 space-y-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block border border-gold px-8 py-2 text-gold font-body text-[10px] uppercase tracking-[0.4em] font-bold"
                    >
                        Launching Soon
                    </motion.div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal max-w-4xl mx-auto leading-tight italic">
                        Curated Trade: The FAYEMEES Collection
                    </h2>
                    <p className="font-body text-mid text-base md:text-lg max-w-2xl mx-auto">
                        Our marketplace is being curated to bring you the finest in lifestyle and beauty products.
                        Sign up or follow us to be the first to know when we launch our debut collection.
                    </p>
                    <div className="flex flex-col items-center space-y-6 pt-8">
                        <button className="bg-charcoal text-cream px-12 py-5 rounded-sm font-body text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-charcoal transition-all">
                            Notify Me
                        </button>
                        <a href="#" className="flex items-center space-x-2 text-gold font-body text-xs uppercase tracking-widest font-bold hover:underline">
                            <Instagram size={18} />
                            <span>Follow Our Curation</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Grid Placeholder */}
            <section className="py-24 bg-cream/20 px-6 opacity-40">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-[3/4] bg-stone/20 animate-pulse" />
                            <div className="h-4 w-3/4 bg-stone/20 animate-pulse" />
                            <div className="h-3 w-1/2 bg-stone/20 animate-pulse" />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
