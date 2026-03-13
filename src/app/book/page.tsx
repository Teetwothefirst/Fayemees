"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { barberServices, salonServices } from "@/data/services";
import { Calendar, MessageSquare, ChevronRight, Check } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

type BrandArm = "salon" | "barber";

// Cal.com Event Links (Placeholders - Client to provide final slugs)
const BOOKING_LINKS: Record<BrandArm, string> = {
    salon: "fayeemees/salon-consultation",
    barber: "fayeemees/barber-session"
};

export default function BookSelectionPage() {
    const [selectedArm, setSelectedArm] = useState<BrandArm>("salon");
    const [selectedService, setSelectedService] = useState<string>("");

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#C9A84C" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    const handleBookingTrigger = async () => {
        const cal = await getCalApi();
        cal("modal", {
            calLink: BOOKING_LINKS[selectedArm],
            config: {
                notes: `Selected Service: ${selectedService}`,
                theme: "light"
            }
        });
    };

    const services = selectedArm === "salon" ? salonServices : barberServices;

    return (
        <main className="w-full bg-white pb-24">
            {/* Header */}
            <section className="pt-20 pb-12 px-6 text-center bg-cream/30 border-b border-stone/10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-gold font-body text-xs uppercase tracking-[0.3em] font-bold">Reservations</span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-charcoal mt-4 mb-6">Book Your Experience</h1>
                    <p className="font-body text-mid text-sm md:text-base italic leading-relaxed">
                        Select an arm of the FAYEMEES lifestyle and your desired service to begin your journey.
                    </p>
                </motion.div>
            </section>

            <section className="max-w-4xl mx-auto px-6 -mt-8">
                <div className="bg-white p-8 md:p-12 shadow-2xl border border-stone/10 rounded-sm">
                    {/* Arm Selector */}
                    <div className="mb-12">
                        <h3 className="font-display text-xl font-bold text-charcoal mb-6 border-l-4 border-gold pl-4">1. Choose Brand</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => {
                                    setSelectedArm("salon");
                                    setSelectedService("");
                                }}
                                className={`relative py-6 px-4 border rounded-sm transition-all text-center group ${selectedArm === "salon"
                                    ? "border-gold bg-gold/5"
                                    : "border-stone/20 hover:border-gold/50"
                                    }`}
                            >
                                <span className={`block font-display text-lg md:text-xl font-bold mb-1 ${selectedArm === "salon" ? "text-charcoal" : "text-mid"
                                    }`}>Etana Beauty Salon</span>
                                <span className="text-[10px] uppercase tracking-widest text-mid/60">Professional Hair & Beauty</span>
                                {selectedArm === "salon" && (
                                    <motion.div layoutId="active" className="absolute -top-2 -right-2 bg-gold text-charcoal rounded-full p-1 border-2 border-white">
                                        <Check size={14} strokeWidth={3} />
                                    </motion.div>
                                )}
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedArm("barber");
                                    setSelectedService("");
                                }}
                                className={`relative py-6 px-4 border rounded-sm transition-all text-center group ${selectedArm === "barber"
                                    ? "border-gold bg-gold/5"
                                    : "border-stone/20 hover:border-gold/50"
                                    }`}
                            >
                                <span className={`block font-display text-lg md:text-xl font-bold mb-1 ${selectedArm === "barber" ? "text-charcoal" : "text-mid"
                                    }`}>Eddy&apos;s Barber</span>
                                <span className="text-[10px] uppercase tracking-widest text-mid/60">Traditional Men&apos;s Grooming</span>
                                {selectedArm === "barber" && (
                                    <motion.div layoutId="active" className="absolute -top-2 -right-2 bg-gold text-charcoal rounded-full p-1 border-2 border-white">
                                        <Check size={14} strokeWidth={3} />
                                    </motion.div>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Service Selector */}
                    <div className="mb-12">
                        <h3 className="font-display text-xl font-bold text-charcoal mb-6 border-l-4 border-gold pl-4">2. Select Service</h3>
                        <select
                            value={selectedService}
                            onChange={(e) => setSelectedService(e.target.value)}
                            className="w-full p-4 border border-stone/20 rounded-sm font-body text-charcoal focus:border-gold outline-none appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23C9A84C%22%20d%3D%22M10.293%203.293L6%207.586%201.707%203.293A1%201%200%2000.293%204.707l5%205a1%201%200%20001.414%200l5-5a1%201%200%2010-1.414-1.414z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat"
                        >
                            <option value="" disabled>Choose a service...</option>
                            {services.map((service) => (
                                <option key={service.name} value={service.name}>
                                    {service.name} — ₦{service.price.toLocaleString()}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Cal.com Prompt Layer */}
                    <AnimatePresence>
                        {selectedService && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pt-8 border-t border-stone/10"
                            >
                                <div className="bg-charcoal p-8 md:p-12 text-center space-y-6">
                                    <Calendar className="text-gold w-12 h-12 mx-auto mb-4" />
                                    <h4 className="font-display text-2xl font-bold text-cream">Ready to Book?</h4>
                                    <p className="font-body text-stone/60 text-sm max-w-sm mx-auto italic">
                                        Great choice. We&apos;ll now open our secure booking engine for <span className="text-gold font-bold">{selectedService}</span> at <span className="text-gold font-bold">{selectedArm === "salon" ? "Etana Beauty Salon" : "Eddy's Barber"}</span>.
                                    </p>

                                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={handleBookingTrigger}
                                            className="bg-gold text-charcoal px-10 py-4 font-body text-xs uppercase tracking-widest font-bold hover:bg-gold/90 transition-all flex items-center justify-center space-x-2"
                                        >
                                            <span>Proceed to Schedule</span>
                                            <ChevronRight size={16} />
                                        </button>

                                        <a
                                            href="https://wa.me/2340000000000"
                                            target="_blank"
                                            className="border border-stone/50 text-stone px-10 py-4 font-body text-xs uppercase tracking-widest font-bold hover:bg-white/5 transition-all flex items-center justify-center space-x-2"
                                        >
                                            <MessageSquare size={16} />
                                            <span>WhatsApp Instead</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Support Note */}
                <div className="mt-12 text-center grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    <div className="space-y-2">
                        <h5 className="font-display font-bold text-charcoal">Need Assistance?</h5>
                        <p className="font-body text-xs text-mid">Call our concierge at <span className="font-bold">+234 000 000 0000</span></p>
                    </div>
                    <div className="space-y-2">
                        <h5 className="font-display font-bold text-charcoal">Operating Hours</h5>
                        <p className="font-body text-xs text-mid">Tue - Sat / 09:00 - 20:00</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
