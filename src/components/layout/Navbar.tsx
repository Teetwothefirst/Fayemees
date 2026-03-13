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

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="w-full py-5 px-6 border-b border-stone/20 bg-cream/90 backdrop-blur-md sticky top-0 z-50">
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
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-cream z-50 flex flex-col pt-24 px-8 md:hidden"
                    >
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`font-display text-4xl font-bold ${pathname === link.href ? "text-gold" : "text-charcoal"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * navLinks.length }}
                                className="pt-8 border-t border-stone/30"
                            >
                                <Link
                                    href="/book"
                                    className="inline-block bg-gold text-charcoal px-10 py-4 rounded-sm font-body text-sm uppercase tracking-widest font-bold hover:bg-gold/90 transition-all w-full text-center shadow-xl shadow-gold/10"
                                >
                                    Book Your Appointment
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center space-x-6 pt-8 text-mid"
                            >
                                <a href="tel:+2340000000000" className="flex items-center space-x-2 text-sm">
                                    <Phone size={18} className="text-gold" />
                                    <span>Call Us</span>
                                </a>
                                <a href="https://wa.me/2340000000000" className="flex items-center space-x-2 text-sm">
                                    <MessageSquare size={18} className="text-gold" />
                                    <span>WhatsApp</span>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
