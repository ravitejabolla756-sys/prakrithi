"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", // Ambience
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop", // Food plate
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", // Fine dining setting
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"  // Dessert / Food details
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-dark-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-gold"></span>
                        <p className="uppercase tracking-[0.2em] text-sm text-gold">Visual Journey</p>
                        <span className="h-[1px] w-8 bg-gold"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Our <span className="italic font-light">Gallery</span>
                    </h2>
                </div>

                {/* Masonry / Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-[300px] md:h-[500px] rounded-xl overflow-hidden group relative"
                    >
                        <Image
                            src={images[0]}
                            alt="Restaurant Ambience"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </motion.div>

                    <div className="grid grid-rows-2 gap-4 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-[200px] md:h-[235px] rounded-xl overflow-hidden group relative"
                        >
                            <Image
                                src={images[1]}
                                alt="Delicious Food"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 md:gap-8 h-[200px] md:h-[235px]">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="rounded-xl overflow-hidden group relative"
                            >
                                <Image
                                    src={images[2]}
                                    alt="Fine Dining Setup"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="rounded-xl overflow-hidden group relative"
                            >
                                <Image
                                    src={images[3]}
                                    alt="Culinary Details"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
