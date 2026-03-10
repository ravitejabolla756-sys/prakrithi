"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                >

                    {/* Brand */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 drop-shadow-md">
                                <Image
                                    src="/logo.png"
                                    alt="Prakriti Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className="text-xl md:text-2xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#fffae6] via-[#d4af37] to-[#aa8013] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] filter uppercase"
                                    style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.3)" }}
                                >
                                    PRAKRITI
                                </span>
                                <span className="text-[0.5rem] md:text-[0.55rem] font-bold uppercase tracking-[0.25em] text-[#e5e5e5] border-t border-gold/30 pt-0.5 mt-0.5" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                                    Multi Cuisine Restaurant
                                </span>
                            </div>
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
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
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
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-serif text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li>Dine-in</li>
                            <li>Drive-through</li>
                            <li>Takeaway</li>
                            <li>No-contact Delivery</li>
                            <li>Private Events</li>
                        </ul>
                    </motion.div>

                    {/* Opening Hours */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-serif text-lg mb-6">Contact & Hours</h4>
                        <ul className="space-y-4 text-sm text-foreground/60">
                            <li>Everyday: 11:00 AM - 11:00 PM</li>
                            <li>+91 85007 77877</li>
                            <li><a href="mailto:info@prakritirestaurant.com" className="hover:text-gold transition-colors">info@prakritirestaurant.com</a></li>
                        </ul>
                    </motion.div>

                </motion.div>

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
        </footer >
    );
}
