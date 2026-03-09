"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex flex-col mb-6">
                            <span className="text-3xl font-serif text-gold font-bold tracking-wider">
                                PRAKRITI
                            </span>
                            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-foreground/70">
                                Multicuisine Restaurant
                            </span>
                        </Link>
                        <p className="text-foreground/60 font-light text-sm leading-relaxed mb-6">
                            An authentic culinary journey wrapped in a premium luxury dining experience in Ongole.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/prakriti_ongole" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Menu', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href={`#${link.split(' ')[0].toLowerCase()}`} className="text-sm text-foreground/60 hover:text-gold transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li>Dine-in</li>
                            <li>Drive-through</li>
                            <li>Takeaway</li>
                            <li>No-contact Delivery</li>
                            <li>Private Events</li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-white font-serif text-lg mb-6">Contact & Hours</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li>Everyday: 11:00 AM - 11:00 PM</li>
                            <li>+91 85007 77877</li>
                            <li><a href="mailto:info@prakritirestaurant.com" className="hover:text-gold transition-colors">info@prakritirestaurant.com</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground/40 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Prakriti Multicuisine Restaurant. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs text-foreground/40">
                        <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
