import Link from "next/link";
import { Phone, MessageSquare, Instagram, Facebook, MapPin, Clock, Mail } from "lucide-react";

const footerLinks = {
    services: [
        { name: "Etana Beauty Salon", href: "/salon" },
        { name: "Eddy's Barber", href: "/barber" },
        { name: "Market Place", href: "/marketplace" },
        { name: "4F's Restaurant", href: "/restaurant" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Book Now", href: "/book" },
        { name: "Privacy Policy", href: "/privacy" },
    ],
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-cream pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="font-display text-4xl font-bold text-gold tracking-tight">
                            FAYEMEES
                        </Link>
                        <p className="font-body text-stone/80 text-sm leading-relaxed max-w-xs">
                            A premium Nigerian multi-concept lifestyle brand. Excellence in beauty, grooming, trade, and dining, all under one roof.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gold transition-colors text-stone">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-gold transition-colors text-stone">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-display text-xl font-bold mb-8 text-gold">Our Services</h3>
                        <ul className="space-y-4 font-body text-sm text-stone/90">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-gold transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-display text-xl font-bold mb-8 text-gold">Contact Us</h3>
                        <ul className="space-y-4 font-body text-sm text-stone/90">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                                <span>// TODO: [CLIENT] Insert physical address here, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-gold shrink-0" />
                                <a href="tel:+2340000000000" className="hover:text-gold transition-colors">
                                    +234 000 000 0000
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-gold shrink-0" />
                                <a href="mailto:info@fayemees.com" className="hover:text-gold transition-colors">
                                    info@fayemees.com
                                </a>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/2340000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-sm transition-all shadow-lg text-sm font-bold uppercase tracking-widest"
                            >
                                <MessageSquare size={18} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Opening Hours Column */}
                    <div>
                        <h3 className="font-display text-xl font-bold mb-8 text-gold">Operating Hours</h3>
                        <ul className="space-y-4 font-body text-sm text-stone/90">
                            <li className="flex items-start space-x-3">
                                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <p className="flex justify-between w-full">
                                        <span className="font-medium text-cream">Mon - Fri:</span>
                                        <span>09:00 - 21:00</span>
                                    </p>
                                    <p className="flex justify-between w-full">
                                        <span className="font-medium text-cream">Saturday:</span>
                                        <span>09:00 - 22:00</span>
                                    </p>
                                    <p className="flex justify-between w-full">
                                        <span className="font-medium text-cream text-gold/80">Sunday:</span>
                                        <span className="text-gold/80 italic">Closed / Event Only</span>
                                    </p>
                                </div>
                            </li>
                            <li className="pt-4 text-xs text-mid leading-relaxed">
                                * Hours may vary per department. Please check specific service pages for details.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-mid/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs font-body text-mid uppercase tracking-[0.2em]">
                    <p>© {currentYear} FAYEMEES. Crafted for Excellence.</p>
                    <div className="flex items-center space-x-8">
                        {footerLinks.company.slice(3).map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
