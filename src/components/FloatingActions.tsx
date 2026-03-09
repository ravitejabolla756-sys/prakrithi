"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        >
            <a
                href="https://wa.me/918500777877"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
            >
                <MessageCircle size={28} />
                <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    Order on WhatsApp
                </span>
            </a>

            <a
                href="tel:+918500777877"
                className="group relative flex items-center justify-center w-14 h-14 bg-gold text-background rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300"
            >
                <CalendarDays size={26} />
                <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    Reserve Table
                </span>
            </a>
        </motion.div>
    );
}
