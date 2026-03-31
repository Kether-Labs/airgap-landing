"use client";

import { motion } from "framer-motion";
import { DownloadButton } from "./DownloadButton";
import { AppMockup } from "./AppMockup";
import { Activity, ShieldCheck, Wifi, Users, ServerOff, Lock } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                {/* Glow behind the mockup */}
                <div className="absolute top-[40%] w-[800px] h-[500px] bg-[#00c896]/20 blur-[120px] rounded-full mix-blend-screen" />
                {/* Glowing Arc/Ring */}
                <div className="absolute top-[30%] w-[800px] h-[800px] rounded-full border border-[#00c896]/30 shadow-[0_0_80px_rgba(0,200,150,0.15)] [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-[#00c896] shadow-[0_0_10px_#00c896] animate-pulse" />
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Architecture P2P Locale
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
                >
                    Le Chat Local <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c896] to-emerald-400">
                        Sécurisé et Décentralisé
                    </span>
                    <br />
                    pour vos Équipes
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
                >
                    Communiquez, partagez des fichiers et collaborez sur votre réseau local sans aucun serveur central. Vos données ne quittent jamais votre espace.
                </motion.p>

                {/* Download Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full mb-20"
                >
                    <DownloadButton />
                </motion.div>

                {/* Interactive App Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full max-w-6xl mt-20"
                >
                    <AppMockup />
                </motion.div>
            </div>

            {/* Trusted By Logos (Mockup) */}
            <div className="w-full mt-24 border-t border-white/5 pt-12 text-center pb-24 relative z-10">
                <p className="text-xs tracking-[0.2em] text-zinc-600 uppercase font-semibold mb-8">
                    Pensé pour les équipes qui exigent la confidentialité
                </p>
                <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
                    {/* Simple text logos for demo purposes */}
                    {["DevTeam", "SecOps Corp", "LocalNet", "StudioX", "AirBridge"].map(name => (
                        <span key={name} className="text-xl font-bold text-zinc-500 tracking-tight">{name}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};
