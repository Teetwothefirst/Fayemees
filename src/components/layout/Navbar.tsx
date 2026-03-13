"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Salon", href: "/salon" },
    { name: "Barber", href: "/barber" },
    { name: "Market", href: "/marketplace" },
    { name: "4F's Restaurant", href: "/restaurant" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full py-5 px-6 border-b border-stone/20 bg-cream/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand Logo */}
                <Link
                    href="/"
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight text-charcoal hover:text-gold transition-colors"
                >
                    FAYEMEES
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex space-x-8 font-body text-xs uppercase tracking-[0.2em] text-mid font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`hover:text-gold transition-colors relative group py-2 ${pathname === link.href ? "text-gold" : ""
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transition-transform duration-300 origin-left ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                    }`}></span>
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/book"
                        className="bg-gold text-charcoal px-6 py-2.5 rounded-sm font-body text-xs uppercase tracking-widest font-bold hover:bg-gold/90 transition-all active:scale-95 shadow-lg shadow-gold/20"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-charcoal hover:text-gold transition-colors z-[60]"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Semi-transparent backdrop to close menu */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full inset-x-0 bg-cream/95 backdrop-blur-xl z-50 flex flex-col px-8 md:hidden border-b border-stone/20 overflow-y-auto max-h-[85vh] shadow-2xl"
                        >
                            <div className="flex flex-col space-y-6 py-8">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`font-display text-xl md:text-2xl font-bold tracking-wide ${pathname === link.href ? "text-gold" : "text-charcoal"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6"
                                >
                                    <Link
                                        href="/book"
                                        className="flex items-center justify-center bg-gold text-charcoal px-10 py-4 rounded-sm font-body text-xs uppercase tracking-widest font-bold hover:bg-gold/90 transition-all w-full shadow-lg shadow-gold/20"
                                    >
                                        Book Appointment
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="flex items-center justify-between pt-6 border-t border-stone/10"
                                >
                                    <a href="tel:+2340000000000" className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">
                                        <Phone size={18} className="text-gold" />
                                        <span>Call Us</span>
                                    </a>
                                    <a href="https://wa.me/2340000000000" className="flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors">
                                        <MessageSquare size={18} className="text-gold" />
                                        <span>WhatsApp</span>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
