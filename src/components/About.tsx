"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 border-2 border-gold/30 translate-x-4 translate-y-4 rounded-lg" />
                        <Image
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
                            alt="Prakriti Restaurant Interior"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover rounded-lg shadow-2xl"
                        />

                        {/* Glass Card Overlay */}
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-lg max-w-xs shadow-xl hidden md:block">
                            <p className="text-4xl font-serif text-gold mb-2">1200+</p>
                            <p className="text-sm text-foreground/80 uppercase tracking-widest font-semibold">Happy Customers</p>
                            <div className="flex gap-1 mt-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-gold"></span>
                            <p className="uppercase tracking-[0.2em] text-sm text-gold">Our Story</p>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground leading-tight">
                            A Legacy of <br className="hidden md:block" />
                            <span className="italic font-light">Culinary Excellence</span>
                        </h2>

                        <div className="space-y-6 text-foreground/70 text-lg font-light leading-relaxed">
                            <p>
                                Nestled in the heart of Ongole, Prakriti Multicuisine Restaurant is a testament to the art of fine dining. We believe that every meal should be a celebration of flavors, textures, and the joy of shared moments.
                            </p>
                            <p>
                                From our legendary Chicken Dum Biryani to intricately crafted premium Chinese delicacies, our master chefs use only the finest, hand-picked ingredients. The ambiance is thoughtfully designed to provide a luxurious yet comforting atmosphere for families and connoisseurs alike.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8">
                            <div className="glass p-6 rounded-lg border-t-2 border-t-gold/50">
                                <h3 className="text-gold font-serif text-xl mb-2">Ambience</h3>
                                <p className="text-sm text-foreground/60">Premium family-friendly environment with elegant decor.</p>
                            </div>
                            <div className="glass p-6 rounded-lg border-t-2 border-t-gold/50">
                                <h3 className="text-gold font-serif text-xl mb-2">Authenticity</h3>
                                <p className="text-sm text-foreground/60">Traditional recipes bringing genuine flavors to every dish.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
