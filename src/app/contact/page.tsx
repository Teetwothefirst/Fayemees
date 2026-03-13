"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Clock,
    Send,
    MessageSquare
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate EmailJS submission
        setTimeout(() => setFormState("success"), 1500);
    };

    return (
        <main className="w-full bg-white">
            {/* Hero Section */}
            <section className="bg-charcoal py-24 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-gold font-body text-xs uppercase tracking-[0.3em] font-bold">Get In Touch</span>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mt-4 mb-6">Contact Us</h1>
                    <p className="font-body text-stone/60 text-sm md:text-base italic leading-relaxed">
                        Whether you have a question about our services or want to book a specialized consultation, we&apos;re here to help.
                    </p>
                </motion.div>
            </section>

            {/* Info & Form Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left: Contact Info */}
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="font-display text-3xl font-bold text-charcoal">Find Us</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 bg-cream flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold transition-colors">
                                    <MapPin size={20} className="text-charcoal" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg text-charcoal">Location</h4>
                                    <p className="font-body text-mid text-sm mt-1 italic">
                                        [CLIENT] 123 Luxury Lifestyle Avenue, <br />
                                        Lekki Phase 1, Lagos, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 bg-cream flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold transition-colors">
                                    <Phone size={20} className="text-charcoal" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg text-charcoal">Phone</h4>
                                    <p className="font-body text-mid text-sm mt-1 italic">+234 000 000 0000</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 bg-cream flex items-center justify-center rounded-sm shrink-0 group-hover:bg-gold transition-colors">
                                    <Mail size={20} className="text-charcoal" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-lg text-charcoal">Email</h4>
                                    <p className="font-body text-mid text-sm mt-1 italic">concierge@fayeemees.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="font-display text-3xl font-bold text-charcoal">Hours</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <Clock className="text-gold mt-1" size={18} />
                                <div className="space-y-2">
                                    <p className="font-body text-xs uppercase tracking-widest font-bold text-charcoal">Tue - Sat</p>
                                    <p className="font-body text-sm text-mid italic">09:00 — 20:00</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="text-gold mt-1" size={18} />
                                <div className="space-y-2">
                                    <p className="font-body text-xs uppercase tracking-widest font-bold text-charcoal">Sun - Mon</p>
                                    <p className="font-body text-sm text-mid italic underline decoration-gold/30">By Appointment Only</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-stone/10">
                        <h4 className="font-display font-bold text-lg text-charcoal mb-4">Follow Our Journey</h4>
                        <div className="flex space-x-6">
                            <a href="#" className="w-12 h-12 border border-stone/20 flex items-center justify-center text-charcoal hover:bg-gold hover:border-gold transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 border border-stone/20 flex items-center justify-center text-charcoal hover:bg-gold hover:border-gold transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-cream/20 p-8 md:p-12 border border-stone/10 rounded-sm shadow-xl">
                    <h2 className="font-display text-3xl font-bold text-charcoal mb-8">Send a Message</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="font-body text-[10px] uppercase tracking-widest font-bold text-mid">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white border border-stone/20 p-4 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors placeholder:text-mid/40"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-body text-[10px] uppercase tracking-widest font-bold text-mid">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white border border-stone/20 p-4 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors placeholder:text-mid/40"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-[10px] uppercase tracking-widest font-bold text-mid">Inquiry About</label>
                            <select className="w-full bg-white border border-stone/20 p-4 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23C9A84C%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2010-1.414-1.414z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat">
                                <option className="text-charcoal bg-white">General Inquiry</option>
                                <option className="text-charcoal bg-white">Etana Beauty Salon</option>
                                <option className="text-charcoal bg-white">Eddy&apos;s Barber</option>
                                <option className="text-charcoal bg-white">4F&apos;s Restaurant</option>
                                <option className="text-charcoal bg-white">Market Place</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="font-body text-[10px] uppercase tracking-widest font-bold text-mid">Message</label>
                            <textarea
                                required
                                rows={5}
                                placeholder="How can we assist you today?"
                                className="w-full bg-white border border-stone/20 p-4 font-body text-sm text-charcoal outline-none focus:border-gold transition-colors resize-none placeholder:text-mid/40"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={formState !== "idle"}
                            className="w-full bg-charcoal text-white py-5 font-body text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-charcoal transition-all disabled:bg-mid flex items-center justify-center space-x-3"
                        >
                            {formState === "idle" && (
                                <>
                                    <Send size={16} />
                                    <span>Send Message</span>
                                </>
                            )}
                            {formState === "submitting" && (
                                <span className="animate-pulse">Sending...</span>
                            )}
                            {formState === "success" && (
                                <>
                                    <Check size={16} />
                                    <span>Message Sent</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[500px] bg-stone/10 grayscale hover:grayscale-0 transition-all duration-1000 relative">
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-xl">
                            <MapPin size={24} className="text-gold" />
                        </div>
                        <p className="font-display text-xl font-bold text-charcoal">Experience FAYEMEES in Person</p>
                        <p className="font-body text-xs text-mid uppercase tracking-widest italic">Map Integration Coming Soon</p>
                    </div>
                </div>
                {/* Actual Google Map Embed should be injected here */}
            </section>

            {/* WhatsApp CTA */}
            <section className="py-20 text-center px-6">
                <h3 className="font-display text-3xl font-bold mb-8 italic text-charcoal">Prefer a quicker response?</h3>
                <a
                    href="https://wa.me/2340000000000"
                    className="inline-flex items-center space-x-4 bg-[#25D366] text-white px-10 py-4 rounded-sm font-body text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-green-500/20 hover:scale-105 transition-transform"
                >
                    <MessageSquare size={20} />
                    <span>Chat via WhatsApp</span>
                </a>
            </section>
        </main>
    );
}

function Check({ size, className }: { size?: number; className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}
