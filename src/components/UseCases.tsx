"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Factory, CheckCircle2, Sparkles } from "lucide-react";

const useCases = [
    {
        id: "entreprise",
        title: "Entreprise",
        icon: Building2,
        color: "from-blue-500/20 to-transparent",
        borderColor: "border-blue-500/30",
        iconColor: "text-blue-400",
        description: "Collaboration sécurisée pour les équipes en environnement sensible ou sans accès internet constant.",
        features: [
            "Visioconférence locale ultra-fluide",
            "Partage de fichiers confidentiels sans cloud",
            "Messagerie de crise désactivable à distance"
        ]
    },
    {
        id: "medical",
        title: "Médical",
        icon: Stethoscope,
        color: "from-emerald-500/20 to-transparent",
        borderColor: "border-emerald-500/30",
        iconColor: "text-emerald-400",
        description: "Échanges instantanés de dossiers patients au sein d'un hôpital ou d'un cabinet sans risque de fuite externe.",
        features: [
            "Conformité HDS par nature (données locales)",
            "Communication temps-réel entre blocs",
            "Suivi patient décentralisé"
        ]
    },
    {
        id: "industriel",
        title: "Industriel",
        icon: Factory,
        color: "from-orange-500/20 to-transparent",
        borderColor: "border-orange-500/30",
        iconColor: "text-orange-400",
        description: "Coordination d'équipes sur des sites isolés (mines, plateformes, usines) sans infrastructure réseau complexe.",
        features: [
            "Fonctionne en mode dégradé (sans Web)",
            "Résistance aux pannes d'infrastructure",
            "Déploiement instantané sur site"
        ]
    }
];

export const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 relative overflow-hidden bg-[#020202]">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-[#00c896]" />
                        Cas d'Usage Réels
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        Une Solution pour Chaque <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c896] to-emerald-400 font-extrabold uppercase">Secteur Critique</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, idx) => (
                        <motion.div
                            key={useCase.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className={`group relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${useCase.color} border ${useCase.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 overflow-hidden`}
                        >
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors" />

                            <div className={`inline-flex p-5 rounded-2xl bg-zinc-900 border border-white/5 mb-8 shadow-2xl ${useCase.iconColor}`}>
                                <useCase.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8">{useCase.description}</p>

                            <div className="space-y-3 pt-6 border-t border-white/5">
                                {useCase.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-3">
                                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${useCase.iconColor}`} />
                                        <span className="text-xs text-zinc-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
