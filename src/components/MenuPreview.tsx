"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MenuItem = { name: string; price: string };
type MenuCategory = { [key: string]: MenuItem[] };

const menuData: MenuCategory = {
    "Starters": [
        { name: "Crispy Corn", price: "₹220" },
        { name: "Chicken 65", price: "₹280" },
        { name: "Chilli Paneer", price: "₹250" },
        { name: "Apollo Fish", price: "₹340" },
        { name: "Mutton Pepper Fry", price: "₹420" },
    ],
    "Main Course": [
        { name: "Paneer Butter Masala", price: "₹320" },
        { name: "Kadai Chicken", price: "₹380" },
        { name: "Butter Naan", price: "₹60" },
        { name: "Garlic Naan", price: "₹70" },
        { name: "Nellore Chepala Pulusu", price: "₹450" },
    ],
    "Biryani": [
        { name: "Chicken Dum Biryani", price: "₹320" },
        { name: "Mutton Roast Biryani", price: "₹450" },
        { name: "Prawns Biryani", price: "₹480" },
        { name: "Paneer Biryani", price: "₹290" },
        { name: "Special Mixed Biryani", price: "₹550" },
    ],
    "Chinese": [
        { name: "Veg Fried Rice", price: "₹220" },
        { name: "Chicken Noodles", price: "₹260" },
        { name: "Schezwan Chicken", price: "₹310" },
        { name: "Dragon Chicken", price: "₹320" },
    ],
    "Desserts & Drinks": [
        { name: "Sizzling Brownie", price: "₹180" },
        { name: "Qubani Ka Meetha", price: "₹150" },
        { name: "Fresh Lime Soda", price: "₹90" },
        { name: "Mint Mojito", price: "₹120" },
    ]
};

const categories = Object.keys(menuData);

export default function MenuPreview() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <section id="menu" className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Side: Categories & Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-gold"></span>
                            <p className="uppercase tracking-[0.2em] text-sm text-gold">Discover Our</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                            Exquisite <span className="italic font-light">Menu</span>
                        </h2>
                        <p className="text-foreground/60 max-w-sm font-light mb-10 leading-relaxed">
                            Explore a wide array of culinary delights carefully curated to satisfy every palate. Select a category to preview our popular selections.
                        </p>

                        <div className="flex flex-col gap-3 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 font-medium tracking-wide ${activeCategory === cat
                                            ? "bg-gold/20 border-gold/50 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                            : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:border-gold/30 hover:text-foreground"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <Link
                            href="/menu"
                            className="inline-flex items-center gap-2 bg-gold text-dark-200 px-8 py-4 rounded-full uppercase tracking-wider text-sm font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 group"
                        >
                            <span>View Full Menu</span>
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Right Side: Menu Items List */}
                    <div className="lg:col-span-8 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="glass rounded-3xl p-8 md:p-14 relative h-full min-h-[500px]"
                        >
                            <div className="absolute inset-0 border border-gold/20 rounded-3xl pointer-events-none" />

                            <div className="mb-10 pb-6 border-b border-white/10 flex justify-between items-end">
                                <h3 className="text-3xl font-serif text-white uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gold to-white">
                                    {activeCategory}
                                </h3>
                                <span className="text-gold/60 font-light text-sm hidden md:block">Signature Selection</span>
                            </div>

                            <div className="relative overflow-hidden min-h-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCategory}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, staggerChildren: 0.1 }}
                                        className="space-y-8"
                                    >
                                        {menuData[activeCategory].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-end justify-between group"
                                            >
                                                <h4 className="text-xl text-foreground/90 font-light tracking-wide group-hover:text-gold transition-colors duration-300">
                                                    {item.name}
                                                </h4>
                                                <div className="flex-grow mx-6 mb-2 border-b border-dotted border-white/30 opacity-50 group-hover:border-gold/50 transition-colors duration-300" />
                                                <span className="text-gold font-medium text-xl bg-gold/5 px-3 py-1 rounded-md">{item.price}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
