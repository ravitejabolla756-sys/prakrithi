"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-white/5">

                    {/* Left Side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[40%] p-10 md:p-14 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] flex flex-col justify-center relative"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="flex items-center gap-3 mb-6 relative z-10">
                            <span className="h-[1px] w-10 bg-gold"></span>
                            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-gold">Visit Us</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-12 leading-tight relative z-10">
                            Find Your Way to <br className="hidden md:block lg:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fffae6] via-[#d4af37] to-[#aa8013]">Prakriti</span>
                        </h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/60 transition-colors bg-white/5">
                                    <MapPin className="text-gold" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide">Location</h4>
                                    <p className="text-[#a0a0a0] font-light leading-relaxed text-sm">
                                        37-1-409-99/7, Bhagya Nagar 4th Lane<br />
                                        Beside RIMS Hospital, Ramnagar<br />
                                        Ongole, Andhra Pradesh 523001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/60 transition-colors bg-white/5">
                                    <Phone className="text-gold" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide">Reservations & Delivery</h4>
                                    <p className="text-[#a0a0a0] font-light leading-relaxed text-sm">
                                        +91 85007 77877
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center shrink-0 group-hover:border-gold/60 transition-colors bg-white/5">
                                    <Clock className="text-gold" size={20} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1 tracking-wide">Opening Hours</h4>
                                    <p className="text-[#a0a0a0] font-light leading-relaxed text-sm">
                                        Open Daily — 11:00 AM to 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col xl:flex-row gap-4 relative z-10 w-full">
                            <a
                                href="https://www.google.com/maps/place/Prakriti+Multicuisine+Restaurant/@15.4874329,80.0449703,16z/data=!4m6!3m5!1s0x3a4b01b6c8b75d85:0x8882126e60e1558!8m2!3d15.4877807!4d80.0481031!16s%2Fg%2F11tmzstkbr?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#aa8013] text-black px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all duration-300 xl:flex-1"
                            >
                                Get Directions
                            </a>
                            <a
                                href="tel:+918500777877"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-white/5 hover:border-white/40 transition-all duration-300 xl:flex-1 w-full"
                            >
                                Call Restaurant
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-[60%] min-h-[400px] lg:min-h-full relative group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.685458!2d80.0449703!3d15.4877807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01b6c8b75d85%3A0x8882126c60e1558!2sPrakriti%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[10%] contrast-110 h-[400px] lg:h-full w-full object-cover rounded-none"
                        ></iframe>

                        {/* Floating UI Elements on Map */}

                        <a
                            href="https://www.google.com/maps/place/Prakriti+Multicuisine+Restaurant/@15.4874329,80.0449703,16z/data=!4m6!3m5!1s0x3a4b01b6c8b75d85:0x8882126e60e1558!8m2!3d15.4877807!4d80.0481031!16s%2Fg%2F11tmzstkbr?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="absolute bottom-6 right-6 z-10 bg-white text-black px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 font-semibold text-xs tracking-wide hover:bg-gray-100 hover:scale-105 transition-all"
                        >
                            <Navigation size={14} className="text-[#4285F4]" />
                            Open in Google Maps
                        </a>

                        {/* Map Overlay Shadow */}
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none rounded-none" />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
