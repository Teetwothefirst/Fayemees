"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="py-24 md:py-40 bg-cream/30 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gold font-body text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold mb-8 block"
                >
                    Our Philosophy
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-4xl md:text-7xl font-bold text-charcoal leading-tight mb-12 italic"
                >
                    &quot;Excellence is not an act, but a curated lifestyle ritual.&quot;
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pt-12 border-t border-stone/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h4 className="font-display text-xl font-bold text-charcoal">Heritage</h4>
                        <p className="font-body text-mid text-sm leading-relaxed italic">
                            Rooted in Nigerian excellence, we celebrate the fusion of traditional mastery and modern sophistication.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4"
                    >
                        <h4 className="font-display text-xl font-bold text-charcoal">Precision</h4>
                        <p className="font-body text-mid text-sm leading-relaxed italic">
                            From the sharpest fade to the most intricate color blend, we define our standards through meticulous detail.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="space-y-4"
                    >
                        <h4 className="font-display text-xl font-bold text-charcoal">Community</h4>
                        <p className="font-body text-mid text-sm leading-relaxed italic">
                            FAYEMEES is more than a destination; it is a gathering of individuals who value the art of refined living.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
