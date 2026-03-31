"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, User, ShieldCheck, Zap, Key } from "lucide-react";

// Particle animation for the flow
const Particle = ({ delay = 0, isVertical = false }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{
            [isVertical ? "y" : "x"]: ["0%", "450%"],
            opacity: [0, 1, 1, 0],
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
        className="absolute rounded-full bg-emerald-400 blur-[1px] shadow-[0_0_8px_#34d399]"
        style={{
            width: isVertical ? "4px" : "6px",
            height: isVertical ? "6px" : "4px",
            [isVertical ? "left" : "top"]: "50%",
            transform: "translate(-50%, -50%)"
        }}
    />
);

export const Security = () => {
    return (
        <section id="security" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-emerald-500/[0.03] blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00c896] text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        Airgap Security Protocol
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        Transmissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00c896]">Inviolables</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto mt-6">
                        Votre vie privée n'est pas une option, c'est le cœur de notre architecture.
                        Découvrez comment nous protégeons vos échanges.
                    </p>
                </div>

                {/* Custom Visual Flow - Responsive: Horizontal on Large, Vertical on Mobile */}
                <div className="relative mb-24 max-w-5xl mx-auto p-8 md:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative">

                        {/* SENDER */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-4 z-20 w-full md:w-auto"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 max-sm:w-20 max-sm:h-20 rounded-3xl bg-zinc-800 border-2 border-white/10 flex items-center justify-center shadow-2xl relative group">
                                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                <User className="w-10 h-10 max-sm:w-8 max-sm:h-8 md:w-12 md:h-12 text-zinc-300" />
                            </div>
                            <div className="text-center">
                                <p className="text-white font-bold">Expéditeur</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Message en clair</p>
                            </div>
                        </motion.div>

                        {/* PATH 1 - ENCRYPTION */}
                        <div className="w-1.5 max-sm:w-1  md:flex-1 h-32 max-sm:h-18 md:h-2 relative bg-zinc-800/50 rounded-full overflow-hidden shrink-0">
                            <Particle delay={0} isVertical={true} />
                            <Particle delay={1} isVertical={true} />
                            <div className="hidden md:block absolute inset-0">
                                <Particle delay={0} isVertical={false} />
                                <Particle delay={1} isVertical={false} />
                            </div>
                        </div>

                        {/* THE LOCK (ENCRYPTION POINT) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative z-20"
                        >
                            <div className="w-24 h-24 md:w-28 max-sm:w-20 max-sm:h-20 md:h-28 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center shadow-[0_0_50px_rgba(0,200,150,0.2)]">
                                <Lock className="w-10 max-sm:w-8 max-sm:h-8 h-10 md:w-12 md:h-12 text-emerald-400 animate-pulse" />
                            </div>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max text-center">
                                <p className="text-[#00c896] font-extrabold text-[10px] md:text-sm uppercase tracking-tighter">Chiffrement X25519</p>
                            </div>
                        </motion.div>

                        {/* PATH 2 - TRANSMISSION */}
                        <div className="w-1.5 max-sm:w-1  md:flex-1 h-32 max-sm:h-18 md:h-2 relative bg-zinc-800/50 rounded-full overflow-hidden shrink-0">
                            <Particle delay={0.5} isVertical={true} />
                            <Particle delay={1.5} isVertical={true} />
                            <div className="hidden md:block absolute inset-0">
                                <Particle delay={0.5} isVertical={false} />
                                <Particle delay={1.5} isVertical={false} />
                            </div>
                        </div>

                        {/* RECIPIENT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center gap-4 z-20 w-full md:w-auto"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 max-sm:w-20 max-sm:h-20 rounded-3xl bg-zinc-800 border-2 border-white/10 flex items-center justify-center shadow-2xl relative group">
                                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                                <User className="w-10 h-10 max-sm:w-8 max-sm:h-8 md:w-12 md:h-12 text-zinc-300" />
                            </div>
                            <div className="text-center">
                                <p className="text-white font-bold">Destinataire</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Message déchiffré</p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Legend Overlay - Modern Grid */}
                    <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="text-center sm:text-left">
                            <h4 className="text-white font-bold text-sm mb-2 flex items-center justify-center sm:justify-start gap-2">
                                <Key className="w-4 h-4 text-emerald-400" /> Clés Locales
                            </h4>
                            <p className="text-xs text-zinc-500">Les clés privées ne quittent jamais votre appareil.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-white font-bold text-sm mb-2 flex items-center justify-center gap-2">
                                <Zap className="w-4 h-4 text-emerald-400" /> Transmission LAN
                            </h4>
                            <p className="text-xs text-zinc-500">Données chiffrées circulant uniquement sur votre réseau local.</p>
                        </div>
                        <div className="text-center sm:text-right">
                            <h4 className="text-white font-bold text-sm mb-2 flex items-center justify-center sm:justify-end gap-2">
                                <Shield className="w-4 h-4 text-emerald-400" /> Secret Absolu
                            </h4>
                            <p className="text-xs text-zinc-500">Inaccessible pour les serveurs et les fournisseurs tiers.</p>
                        </div>
                    </div>
                </div>

                {/* Technical Detail Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {[
                        { title: "AES-256-GCM", desc: "Le standard de chiffrement de grade gouvernemental utilisé pour protéger vos données stockées." },
                        { title: "X25519 DH", desc: "Échange de clés Diffie-Hellman moderne pour un secret de transmission parfait." },
                        { title: "SQLite Encrypted", desc: "Base de données locale entièrement chiffrée. Vos messages restent inaccessibles hors ligne." }
                    ].map((sec, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#00c896]/20 transition-all group"
                        >
                            <h4 className="text-[#00c896] font-bold mb-3 group-hover:translate-x-1 transition-transform">{sec.title}</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">{sec.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
