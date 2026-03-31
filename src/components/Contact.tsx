"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Share2, Sparkles, Phone, Shield, Zap } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#00c896]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5 overflow-hidden"
                >
                    {/* Subtle grid pattern background */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

                    <div className="max-w-3xl mx-auto relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex p-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-[#00c896] mb-8"
                        >
                            <Share2 className="w-8 h-8" />
                        </motion.div>

                        <h2 className="text-4xl max-sm:text-3xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
                            Prêt à Reprendre le Contrôle de vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00c896]">Échanges ?</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-sm:text-base md:text-xl mb-12 leading-relaxed">
                            Que ce soit pour une utilisation personnelle, médicale ou industrielle,
                            Airgap vous offre la sérénité du Peer-to-Peer 100% sécurisé.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://github.com/Kether-Labs"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
                            >

                                Rejoindre la communauté
                            </a>

                            <a
                                href="https://wa.me/237690394365"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full sm:w-auto  flex items-center max-sm:justify-start justify-center max-sm:gap-0 gap-3 px-8 py-5 bg-[#00c896]/10 border-2 border-[#00c896]/30 text-[#00c896] font-bold rounded-2xl hover:bg-[#00c896]/20 transition-all hover:scale-105 active:scale-95 group"
                            >
                                <Phone className="w-5 h-5" />
                                Contactez via WhatsApp
                                <ArrowRight className="w-4 max-sm:hidden h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Floating Stats / Badges */}
                    <div className="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Open Source</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">No Servers</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">P2P Powered</span>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-20 pt-10 border-t border-white/5">
                    <p className="text-sm text-zinc-600 font-medium">
                        Vous avez une question spécifique ?
                    </p>
                </div>
            </div>
        </section>
    );
};
