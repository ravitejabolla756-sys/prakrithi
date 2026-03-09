"use client";

import { motion } from "framer-motion";

const reviews = [
    {
        name: "Ramesh K.",
        text: "Fantastic ambience and family friendly place. The premium feel is unmatchable in Ongole.",
        rating: 5,
        date: "2 weeks ago"
    },
    {
        name: "Sowmya Reddy",
        text: "Chicken dum biryani and starters are excellent. Authentic flavors and great presentation.",
        rating: 5,
        date: "1 month ago"
    },
    {
        name: "Venkat P.",
        text: "Tasty food with generous portions. The service is prompt and very courteous.",
        rating: 4,
        date: "3 months ago"
    }
];

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header flex for Desktop */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-[1px] w-8 bg-gold"></span>
                            <p className="uppercase tracking-[0.2em] text-sm text-gold">Testimonials</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                            Guest <span className="italic font-light">Experiences</span>
                        </h2>
                    </div>

                    <div className="glass px-6 py-4 rounded-xl flex items-center gap-4">
                        <div className="text-center">
                            <p className="text-3xl font-serif text-gold font-bold">4.3</p>
                            <div className="flex text-gold text-sm gap-0.5 my-1">
                                ★★★★<span className="text-white/30">★</span>
                            </div>
                        </div>
                        <div className="h-12 w-[1px] bg-white/20"></div>
                        <div>
                            <p className="text-white font-semibold">Google Rating</p>
                            <p className="text-sm text-foreground/60">Based on 1200+ reviews</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="glass p-8 rounded-2xl relative group hover:border-gold/30 transition-colors"
                        >
                            <div className="absolute top-8 right-8 text-gold/20 font-serif text-6xl leading-none group-hover:text-gold/40 transition-colors">
                                &quot;
                            </div>
                            <div className="flex text-gold text-sm gap-1 mb-6">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <span key={idx}>★</span>
                                ))}
                            </div>
                            <p className="text-foreground/80 font-light leading-relaxed mb-8 relative z-10 text-lg">
                                &quot;{review.text}&quot;
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <p className="font-semibold text-white tracking-wide">{review.name}</p>
                                <p className="text-xs text-foreground/50">{review.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
