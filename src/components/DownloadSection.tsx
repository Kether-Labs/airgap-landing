"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Monitor, Terminal, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const BASE = "https://github.com/Kether-Labs/airgap/releases/download/v0.1.0-beta";

const downloads = {
    windows: {
        title: "Windows",
        icon: <Image src="/windows.svg" alt="Windows" width={24} height={24} />,
        primary: {
            label: "Installer (.exe)",
            url: `${BASE}/airgap_0.1.0_x64-setup.exe`,
            sub: "Windows 10, 11 (64-bit)"
        }
    },
    linux: {
        title: "Linux",
        icon: <Image src="/linux.svg" alt="Linux" width={24} height={24} />,
        options: [
            {
                label: "AppImage",
                url: `${BASE}/airgap_0.1.0_amd64.AppImage`,
                sub: "Universel, prêt à l'emploi",
                icon: <Image src="/linux.svg" alt="Linux" width={20} height={20} />
            },
            {
                label: "Debian / Ubuntu",
                url: `${BASE}/airgap_0.1.0_amd64.deb`,
                sub: ".deb pour distributions Debian",
                icon: <Image src="/debian.svg" alt="Debian" width={20} height={20} />
            },
            {
                label: "Fedora / RedHat",
                url: `${BASE}/airgap-0.1.0-1.x86_64.rpm`,
                sub: ".rpm pour RH/Fedora",
                icon: <Image src="/redhat.svg" alt="RedHat" width={20} height={20} />
            }
        ]
    }
};

export const DownloadSection = () => {
    const [activeTab, setActiveTab] = useState<"windows" | "linux">("windows");

    return (
        <section id="download" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl  md:text-5xl font-bold text-white tracking-tight mb-6"
                    >
                        Télécharger <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00c896]">Airgap</span>
                    </motion.h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Choisissez votre plateforme et commencez à échanger en P2P dès aujourd'hui.
                        Aucune installation serveur requise.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-white/5 relative">
                        {activeTab === "windows" && (
                            <motion.div
                                layoutId="tab-bg"
                                className="absolute inset-1 rounded-xl bg-white/5 border border-white/10"
                            />
                        )}
                        {activeTab === "linux" && (
                            <motion.div
                                layoutId="tab-bg"
                                className="absolute inset-1 rounded-xl bg-white/5 border border-white/10 ml-[50%]"
                            />
                        )}

                        <button
                            onClick={() => setActiveTab("windows")}
                            className={`relative z-10 px-8 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 ${activeTab === "windows" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                            <Monitor className="w-4 h-4" />
                            Windows
                        </button>
                        <button
                            onClick={() => setActiveTab("linux")}
                            className={`relative z-10 px-8 py-3 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 ${activeTab === "linux" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                            <Terminal className="w-4 h-4" />
                            Linux
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto min-h-[300px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "windows" ? (
                            <motion.div
                                key="windows"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center"
                            >
                                <a
                                    href={downloads.windows.primary.url}
                                    className="group relative w-full sm:w-[450px] p-8 rounded-[2.5rem] bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 hover:border-emerald-500/30 transition-all shadow-2xl overflow-hidden text-center flex flex-col items-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="p-6 rounded-3xl bg-zinc-950 border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                                        {downloads.windows.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">Airgap pour Windows</h3>
                                    <p className="text-zinc-500 text-sm mb-8">{downloads.windows.primary.sub}</p>

                                    <div className="flex items-center gap-3 px-8 py-4 bg-[#00c896] text-black font-bold rounded-2xl group-hover:bg-[#00e0a8] transition-all">
                                        <Download className="w-5 h-5" />
                                        <span className="max-sm:text-sm">Télécharger l'installeur</span>
                                    </div>
                                </a>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="linux"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {downloads.linux.options.map((opt, i) => (
                                    <motion.a
                                        key={opt.label}
                                        href={opt.url}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 hover:bg-zinc-800/50 transition-all group flex flex-col items-center text-center"
                                    >
                                        <div className="p-4 rounded-2xl bg-zinc-950 border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                                            {opt.icon}
                                        </div>
                                        <h4 className="text-white font-bold mb-2">{opt.label}</h4>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-6">{opt.sub}</p>

                                        <div className="mt-auto inline-flex items-center gap-2 text-[#00c896] text-sm font-bold group-hover:gap-3 transition-all">
                                            Télécharger <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Info */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    <div className="flex items-center gap-2 text-zinc-500">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-medium">Auto-hébergé</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-medium">Pas de publicité</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-medium">100% P2P local</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
