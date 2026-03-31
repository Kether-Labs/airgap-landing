"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Users,
    ShieldCheck,
    Zap,
    CheckCircle2,
    SquarePen,
    Database,
    UserPlus,
    MonitorSmartphone
} from "lucide-react";

const featureGroups = [
    {
        title: "Cœur du Réseau",
        features: [
            {
                title: "Découverte automatique",
                desc: "Détection instantanée des pairs sur votre réseau local (LAN) sans configuration.",
                icon: Users,
                color: "text-emerald-400"
            },
            {
                title: "Chiffrement bout-en-bout",
                desc: "Sécurité maximale avec X25519 + AES-256-GCM. Vos données sont privées par design.",
                icon: ShieldCheck,
                color: "text-blue-400"
            },
            {
                title: "Messagerie instantanée",
                desc: "Communiquez sans serveur central et sans connexion Internet. Totalement décentralisé.",
                icon: Zap,
                color: "text-yellow-400"
            },
        ]
    },
    {
        title: "Expérience Utilisateur",
        features: [
            {
                title: "Accusés de réception",
                desc: "Suivez l'état de vos messages en temps réel (envoyé / délivré).",
                icon: CheckCircle2,
                color: "text-purple-400"
            },
            {
                title: "Indicateur de frappe",
                desc: "Sachez quand vos collaborateurs sont en train de vous répondre.",
                icon: SquarePen,
                color: "text-pink-400"
            },
        ]
    },
    {
        title: "Technologie & Fiabilité",
        features: [
            {
                title: "Historique persisté",
                desc: "Vos conversations sont sauvegardées localement dans une base SQLite chiffrée.",
                icon: Database,
                color: "text-cyan-400"
            },
            {
                title: "Gestion d'identité",
                desc: "Détection avancée des conflits de pseudonymes pour une identité unique sur le réseau.",
                icon: UserPlus,
                color: "text-orange-400"
            },
            {
                title: "Multi-plateforme",
                desc: "Compatible nativement avec Linux et Windows pour une collaboration fluide.",
                icon: MonitorSmartphone,
                color: "text-white"
            },
        ]
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-16 relative overflow-hidden bg-[#020202]">
            {/* Background ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#00c896]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00c896] text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles className="w-3 h-3" />
                        Airgap Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
                    >
                        Conçu pour la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#00c896]">Confidentialité</span> Totale
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto"
                    >
                        Une architecture peer-to-peer robuste qui élimine les serveurs tiers et garantit que vos données restent au sein de votre réseau.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureGroups.flatMap((group, gIdx) =>
                        group.features.map((feature, fIdx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (gIdx * 3 + fIdx) * 0.1 }}
                                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#00c896]/20 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00c896]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                                <div className={`inline-flex p-4 rounded-2xl bg-zinc-900 border border-white/5 mb-6 shadow-xl transition-transform group-hover:scale-110 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00c896] transition-colors">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

const Sparkles = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
);
