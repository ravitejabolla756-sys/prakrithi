"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const dishes = [
    {
        name: "Chicken Dum Biryani",
        desc: "Aromatic basmati rice cooked with tender marinated chicken.",
        price: "₹350",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Baby Corn Crispy",
        desc: "Golden fried baby corn tossed in a spicy, tangy sauce.",
        price: "₹240",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Chilli Paneer",
        desc: "Cubes of paneer wok-tossed with peppers and green chillies.",
        price: "₹280",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Butter Naan",
        desc: "Soft, flaky Indian bread brushed with generous amounts of butter.",
        price: "₹60",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "Mutton Fry Biryani",
        desc: "Rich, spicy mutton fry served over fragrant royal biryani rice.",
        price: "₹450",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "Paneer Tikka",
        desc: "Chunks of paneer marinated in spices and grilled in a tandoor.",
        price: "₹290",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function SignatureDishes() {
    return (
        <section className="py-24 bg-dark-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-[1px] w-8 bg-gold"></span>
                        <p className="uppercase tracking-[0.2em] text-sm text-gold">Chef&apos;s Specials</p>
                        <span className="h-[1px] w-8 bg-gold"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Signature <span className="italic font-light">Dishes</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto font-light">
                        Savor the masterpieces created by our expert culinary team. Each dish is a perfect balance of authentic ingredients and masterful cooking techniques.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group rounded-xl overflow-hidden glass hover:border-gold/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dish.image}
                                    alt={dish.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur text-gold px-4 py-1 rounded-full font-semibold border border-gold/20">
                                    {dish.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                                    {dish.name}
                                </h3>
                                <p className="text-sm text-foreground/60 font-light leading-relaxed">
                                    {dish.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
