"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
                    alt="Luxury Restaurant Ambience"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="h-[1px] w-12 bg-gold"></span>
                        <p className="uppercase tracking-[0.3em] text-sm text-gold">Ongole&apos;s Finest</p>
                        <span className="h-[1px] w-12 bg-gold"></span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        A Symphony of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark italic">Authentic Flavours</span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience the true essence of multi-cuisine dining. From aromatic biryanis to exquisite Chinese delicacies, beautifully crafted in a premium family ambiance.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#menu"
                            className="group relative px-8 py-4 bg-gold text-background font-semibold uppercase tracking-wider text-sm overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative flex items-center gap-2">
                                Discover Menu <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>

                        <Link
                            href="#location"
                            className="group flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                        >
                            <MapPin size={18} className="text-gold" />
                            <span>Get Directions</span>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
