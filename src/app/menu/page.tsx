"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Coffee, Utensils, IceCream, Pizza, LucideIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MenuItem = {
    name: string;
    price: string;
    desc?: string;
    spiceLevel: number;
};

// Extended Menu Data
const fullMenu: Record<string, MenuItem[]> = {
    "Starters": [
        { name: "Crispy Corn", desc: "Golden fried crispy niblets tossed in special seasoning", price: "₹220", spiceLevel: 1 },
        { name: "Chicken 65", desc: "Classic deep-fried chicken tossed with curry leaves and spices", price: "₹280", spiceLevel: 2 },
        { name: "Chilli Paneer", desc: "Cottage cheese tossed with bell peppers in soy chilli sauce", price: "₹250", spiceLevel: 2 },
        { name: "Apollo Fish", desc: "Boneless fish chunks marinated and tossed in tangy spices", price: "₹340", spiceLevel: 2 },
        { name: "Mutton Pepper Fry", desc: "Tender mutton pieces dry roasted with crushed black pepper", price: "₹420", spiceLevel: 3 },
        { name: "Gobi Manchurian", desc: "Cauliflower florets in classic Indo-Chinese manchurian sauce", price: "₹210", spiceLevel: 1 },
        { name: "Chicken Tikka", desc: "Juicy chicken chunks marinated in yogurt and spices, grilled in tandoor", price: "₹310", spiceLevel: 2 },
        { name: "Prawns Vepudu", desc: "Spiced coastal style prawn fry with fresh coconut", price: "₹450", spiceLevel: 3 },
    ],
    "Main Course": [
        { name: "Paneer Butter Masala", desc: "Cottage cheese cubes in a rich and creamy tomato gravy", price: "₹320", spiceLevel: 1 },
        { name: "Kadai Chicken", desc: "Chicken cooked with bell peppers in a spicy roasted coriander gravy", price: "₹380", spiceLevel: 2 },
        { name: "Butter Naan", desc: "Soft and flaky tandoor baked bread brushed with butter", price: "₹60", spiceLevel: 0 },
        { name: "Garlic Naan", desc: "Tandoor bread topped with minced garlic and cilantro", price: "₹70", spiceLevel: 0 },
        { name: "Nellore Chepala Pulusu", desc: "Traditional home-style spicy and tangy fish curry", price: "₹450", spiceLevel: 3 },
        { name: "Dal Makhani", desc: "Black lentils slow-cooked overnight with butter and cream", price: "₹260", spiceLevel: 1 },
        { name: "Mutton Rogan Josh", desc: "Aromatic Kashmiri style mutton curry", price: "₹450", spiceLevel: 2 },
        { name: "Butter Chicken", desc: "Shredded tandoori chicken in a smooth buttery tomato sauce", price: "₹390", spiceLevel: 1 },
    ],
    "Biryani": [
        { name: "Chicken Dum Biryani", desc: "Classic Hyderabadi biryani cooked on slow fire with marinated chicken", price: "₹320", spiceLevel: 2 },
        { name: "Mutton Roast Biryani", desc: "Spicy mutton roast served over fragrant basmati rice", price: "₹450", spiceLevel: 3 },
        { name: "Prawns Biryani", desc: "Flavorful biryani made with marinated coastal prawns", price: "₹480", spiceLevel: 2 },
        { name: "Paneer Biryani", desc: "Vegetarian delight with marinated cottage cheese cubes", price: "₹290", spiceLevel: 1 },
        { name: "Special Mixed Biryani", desc: "Chef's special biryani with chicken, mutton, and egg", price: "₹550", spiceLevel: 2 },
    ],
    "Chinese": [
        { name: "Veg Fried Rice", desc: "Wok-tossed rice with finely chopped seasonal vegetables", price: "₹220", spiceLevel: 1 },
        { name: "Chicken Noodles", desc: "Stir-fried noodles with chicken shreds, egg, and veggies", price: "₹260", spiceLevel: 1 },
        { name: "Schezwan Chicken", desc: "Diced chicken tossed in fiery schezwan pepper sauce", price: "₹310", spiceLevel: 3 },
        { name: "Dragon Chicken", desc: "Crispy chicken strips tossed in a sweet and spicy sauce with cashews", price: "₹320", spiceLevel: 2 },
    ],
    "Desserts & Drinks": [
        { name: "Sizzling Brownie", desc: "Warm walnut brownie served on a sizzler plate with vanilla ice cream", price: "₹180", spiceLevel: 0 },
        { name: "Qubani Ka Meetha", desc: "Traditional Hyderabadi apricot dessert served with fresh cream", price: "₹150", spiceLevel: 0 },
        { name: "Fresh Lime Soda", desc: "Refreshing sweet or salted lime soda", price: "₹90", spiceLevel: 0 },
        { name: "Mint Mojito", desc: "Classic virgin mojito with fresh mint and lemon", price: "₹120", spiceLevel: 0 },
        { name: "Gulab Jamun", desc: "Deep-fried milk dumplings soaked in cardamom sugar syrup", price: "₹110", spiceLevel: 0 },
    ]
};

const categoryIcons: Record<string, LucideIcon> = {
    "Starters": Utensils,
    "Main Course": Pizza,
    "Biryani": Utensils,
    "Chinese": Utensils,
    "Desserts & Drinks": IceCream,
};

const SpiceIndicator = ({ level }: { level: number }) => {
    if (level === 0) return null;
    return (
        <div className="flex gap-1 ml-3" title={`${level} Spice Level`}>
            {[...Array(level)].map((_, i) => (
                <span key={i} className="text-red-500 text-xs">🌶️</span>
            ))}
        </div>
    );
};

export default function MenuPage() {
    const categories = Object.keys(fullMenu);
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col pt-24 font-sans">
            <Navbar />

            <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex-grow z-10">

                {/* Background styling for page */}
                <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-gold/5 outline-none pointer-events-none" />
                <div className="absolute top-40 left-20 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl mx-auto relative">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <Link href="/#menu" className="inline-flex items-center text-gold/80 hover:text-gold mb-8 transition-colors">
                            <ChevronLeft size={20} />
                            <span className="ml-1 text-sm font-medium tracking-wide uppercase">Back to Home</span>
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
                            The Full <span className="italic font-light text-gold">Menu</span>
                        </h1>
                        <p className="text-foreground/60 max-w-2xl text-lg font-light leading-relaxed">
                            Discover our comprehensive selection of culinary masterpieces, crafted with passion and the finest ingredients to bring you an unforgettable dining experience.
                        </p>
                    </motion.div>

                    {/* Menu Navigation */}
                    <div className="sticky top-24 z-30 bg-background/80 backdrop-blur-md pb-6 pt-4 mb-10 border-b border-white/10 -mx-4 px-4 sm:mx-0 sm:px-0">
                        <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
                            {categories.map((cat) => {
                                const Icon = categoryIcons[cat] || Coffee;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full border transition-all duration-300 font-medium tracking-wide ${activeCategory === cat
                                            ? "bg-gold text-dark-200 border-gold shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                                            : "bg-white/5 border-white/10 text-foreground/70 hover:bg-white/10 hover:border-gold/30 hover:text-foreground"
                                            }`}
                                    >
                                        <Icon size={16} className={activeCategory === cat ? "text-dark-200" : "text-gold"} />
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Menu Content */}
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                            >
                                {fullMenu[activeCategory as keyof typeof fullMenu].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 + 0.2 }}
                                        className="group relative bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center">
                                                <h4 className="text-xl text-foreground font-medium tracking-wide group-hover:text-gold transition-colors duration-300">
                                                    {item.name}
                                                </h4>
                                                <SpiceIndicator level={item.spiceLevel} />
                                            </div>
                                            <span className="text-gold font-bold text-xl ml-4 whitespace-nowrap bg-gold/5 px-3 py-1 rounded-lg border border-gold/10">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-foreground/60 text-sm font-light leading-relaxed pr-8">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
