"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Instagram } from "lucide-react";

export default function MarketplacePage() {
    return (
        <main className="w-full bg-cream/20 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600')" }}
                />
                <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8"
                    >
                        <ShoppingBag className="w-16 h-16 text-gold" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-6xl md:text-9xl font-bold text-cream mb-6 tracking-tighter"
                    >
                        The Trade
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="font-body text-stone/60 text-sm md:text-xl max-w-2xl italic leading-relaxed"
                    >
                        Curating a collection of lifestyle essentials that define the modern Nigerian sophistication.
                    </motion.p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-32 px-6 bg-white relative z-10 -mt-20 rounded-t-3xl shadow-2xl">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="inline-block border border-gold/30 px-6 py-2 rounded-full text-gold font-body text-[10px] uppercase tracking-[0.4em] font-bold">
                        Launching Q3 2026
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-bold text-charcoal leading-tight italic">
                        &quot;Not just products, but a curation of premium lifestyle rituals.&quot;
                    </h2>
                    <p className="font-body text-mid text-base md:text-lg leading-relaxed">
                        At FAYEMEES, we believe that every item you own should tell a story of quality and refined taste.
                        Our Marketplace is being meticulously curated to bring you exclusive skincare, artisanal grooming accessories,
                        and signature lifestyle pieces from both global and local craftsmen.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                        <div className="relative aspect-square overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800')" }}
                            />
                            <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                                <span className="font-display text-2xl text-white italic">Beauty & Salon</span>
                            </div>
                        </div>
                        <div className="relative aspect-square overflow-hidden group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800')" }}
                            />
                            <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                                <span className="font-display text-2xl text-white italic">Grooming Essentials</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-8 pt-16">
                        <div className="space-y-4">
                            <h3 className="font-display text-2xl font-bold text-charcoal">Stay In The Loop</h3>
                            <div className="flex flex-col sm:flex-row gap-0">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-cream/30 border border-stone/20 px-8 py-4 font-body text-sm outline-none focus:border-gold min-w-[300px]"
                                />
                                <button className="bg-charcoal text-cream px-10 py-4 font-body text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-charcoal transition-all">
                                    Notify Me
                                </button>
                            </div>
                        </div>
                        <a href="https://instagram.com/fayeemees" target="_blank" className="flex items-center space-x-3 text-gold font-body text-xs uppercase tracking-widest font-bold hover:opacity-70 transition-opacity">
                            <Instagram size={18} />
                            <span>@fayeemees curation</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Preview Grid */}
            <section className="py-32 bg-cream/10 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-baseline justify-between mb-16 border-b border-stone/10 pb-8">
                        <h3 className="font-display text-2xl font-bold text-charcoal">The Preview</h3>
                        <span className="font-body text-xs text-stone uppercase tracking-widest">01 — Upcoming Releases</span>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group cursor-default opacity-60 hover:opacity-100 transition-opacity">
                                <div className="aspect-[3/4] bg-stone/10 mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ShoppingBag size={32} className="text-stone/40" />
                                    </div>
                                    <div className="absolute top-4 left-4 bg-charcoal/10 backdrop-blur-md text-[8px] uppercase tracking-widest py-1 px-3 text-charcoal font-bold border border-charcoal/10">
                                        In Development
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-4 w-32 bg-stone/20 animate-pulse rounded-sm" />
                                    <div className="h-3 w-48 bg-stone/10 animate-pulse rounded-sm" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
