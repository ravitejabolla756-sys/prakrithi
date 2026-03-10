"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 drop-shadow-md">
                            <Image
                                src="/logo.png"
                                alt="Prakriti Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span
                                className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#fffae6] via-[#d4af37] to-[#aa8013] drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)] filter uppercase"
                                style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.3)" }}
                            >
                                PRAKRITI
                            </span>
                            <span className="text-[0.55rem] md:text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#e5e5e5] border-t border-gold/30 pt-0.5 mt-0.5" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}>
                                Multi Cuisine Restaurant
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="tel:+918500777877"
                            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                        >
                            <Phone size={16} />
                            <span>Call Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground hover:text-gold transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40 overflow-hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif uppercase tracking-widest hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="tel:+918500777877"
                                className="mt-8 flex items-center gap-2 bg-gold text-background px-8 py-3 rounded-full text-lg font-semibold"
                            >
                                <Phone size={20} />
                                <span>Call Now: +91 85007 77877</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
