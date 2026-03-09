"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-24 bg-dark-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl glass border-gold/10">

                    {/* Contact Details */}
                    <div className="lg:col-span-5 p-8 md:p-14 bg-dark-200/50 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-gold"></span>
                            <p className="uppercase tracking-[0.2em] text-sm text-gold">Visit Us</p>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10">
                            Find Your Way to <br />
                            <span className="italic font-light text-gold-light">Prakriti</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <MapPin className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Location</h4>
                                    <p className="text-foreground/70 font-light leading-relaxed">
                                        37-1-409-99/7, Bhagya Nagar 4th Lane, beside RIMS Hospital,
                                        Ramnagar, Ongole, Andhra Pradesh 523001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Phone className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Reservations & Delivery</h4>
                                    <p className="text-foreground/70 font-light leading-relaxed">
                                        +91 85007 77877
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Clock className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Opening Hours</h4>
                                    <p className="text-foreground/70 font-light leading-relaxed">
                                        Open daily until 11:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <a
                                href="https://maps.app.goo.gl/uP4G"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                            >
                                <span>Get Directions</span>
                            </a>
                            <a
                                href="tel:+918500777877"
                                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
                            >
                                <span>Call Restaurant</span>
                            </a>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:col-span-7 min-h-[400px] lg:min-h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15340.963471018698!2d80.0385973!3d15.5143361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0113c1c73dbb%3A0xe9f000b9576c2aa2!2sPrakriti%20Multicuisine%20Restaurant!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
}
