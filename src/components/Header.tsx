"use client";

import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Fonctionnalités", href: "#features" },
        { name: "Sécurité", href: "#security" },
        { name: "Cas d'usage", href: "#use-cases" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center  hover:opacity-80 transition-opacity">
                    <div className="relative  flex items-center justify-center">
                        <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Airgap</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Actions (Desktop) */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="https://github.com/Kether-Labs"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        <span>GitHub</span>
                    </a>
                    <a
                        href="#download"
                        className="flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-black bg-[#00c896] hover:bg-[#00b085] rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,200,150,0.3)]"
                    >
                        Télécharger
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors z-50"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 lg:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-semibold text-zinc-300 hover:text-[#00c896] transition-colors py-2"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                            <div className="h-px bg-white/5 w-full" />
                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://github.com/Kether-Labs"
                                    className="flex items-center justify-center gap-2 text-zinc-400 font-medium py-3"
                                >

                                    GitHub Community
                                </a>
                                <a
                                    href="#download"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center px-6 py-4 text-base font-bold text-black bg-[#00c896] rounded-2xl shadow-[0_0_20px_rgba(0,200,150,0.2)]"
                                >
                                    Télécharger Airgap
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
