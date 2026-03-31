"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
    MoreVertical,
    Search,
    Send,
    Shield,
    ChevronRight,
    Smile,
    Paperclip,
    Sparkles,
    MessageSquare,
    Phone,
    ArrowLeft,
    Users,
    X
} from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface Message {
    id: string;
    text: string;
    sender: "me" | "them";
    timestamp: string;
    isCustom?: boolean;
    content?: React.ReactNode;
}

interface Peer {
    id: string;
    name: string;
    status: "online" | "offline";
    ip: string;
    avatarColor: string;
    isBot?: boolean;
}

const PEERS_MOCK: Peer[] = [
    { id: "bot", name: "AirGap AI", status: "online", ip: "127.0.0.1", avatarColor: "bg-emerald-500", isBot: true },
    { id: "1", name: "LEVEL", status: "offline", ip: "192.168.1.103", avatarColor: "bg-zinc-700" },
    { id: "2", name: "alex_dev", status: "online", ip: "192.168.1.45", avatarColor: "bg-emerald-500" },
    { id: "3", name: "sarah_m", status: "online", ip: "192.168.1.12", avatarColor: "bg-blue-500" },
    { id: "4", name: "marc_crypto", status: "online", ip: "192.168.1.88", avatarColor: "bg-purple-500" },
    { id: "5", name: "lucy_ops", status: "offline", ip: "192.168.1.5", avatarColor: "bg-zinc-700" },
];

const INITIAL_MESSAGES: Record<string, Message[]> = {
    "bot": [
        {
            id: "bot-1",
            text: "Hello ! Moi c'est Airgap. Je suis en version pré-release v0.01. Que puis-je faire pour vous aujourd'hui ?",
            sender: "them",
            timestamp: "Maintenant"
        },
    ],
    "1": [
        { id: "m1", text: "Hello comment tu vas ?", sender: "them", timestamp: "11:45" },
        { id: "m2", text: "Bien aussi je vais bien", sender: "me", timestamp: "11:46" },
    ],
};

const BOT_QUESTIONS = [
    { id: "features", text: "Quelles sont les fonctionnalités de base ?", icon: Sparkles },
    { id: "github", text: "Lien GitHub de la communauté", icon: Sparkles },
    { id: "contact", text: "Contacter le développeur", icon: Phone },
    { id: "about", text: "C'est quoi Airgap ?", icon: MessageSquare },
];

const BOT_REPLIES: Record<string, Message> = {
    "features": {
        id: "rep-feat",
        text: "La v0.01 inclut : Chat P2P décentralisé, transfert de fichiers ultra-rapide en local, chiffrement de bout en bout, et une découverte automatique des pairs sur le réseau sans serveur.",
        sender: "them",
        timestamp: "Maintenant"
    },
    "github": {
        id: "rep-git",
        text: "Rejoignez notre communauté sur GitHub pour suivre le développement et contribuer : https://github.com/Kether-Labs",
        sender: "them",
        timestamp: "Maintenant"
    },
    "contact": {
        id: "rep-contact",
        text: "Vous pouvez contacter le développeur directement sur WhatsApp pour tout retour ou question :",
        sender: "them",
        timestamp: "Maintenant",
        isCustom: true,
        content: (
            <a
                href="https://wa.me/237690394365"
                target="_blank"
                className="mt-2 flex items-center gap-2 px-4 py-2 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all text-sm w-fit"
            >
                <Phone className="w-4 h-4" />
                WhatsApp Contact
            </a>
        )
    },
    "about": {
        id: "rep-about",
        text: "Airgap est un outil de collaboration locale qui permet de communiquer et partager des fichiers sans jamais passer par le cloud. C'est l'outil ultime pour la confidentialité et le travail en équipe isolée.",
        sender: "them",
        timestamp: "Maintenant"
    }
};

export const AppMockup = () => {
    const [activePeerId, setActivePeerId] = useState<string>("bot");
    const [messages, setMessages] = useState<Record<string, Message[]>>(INITIAL_MESSAGES);
    const [peers, setPeers] = useState<Peer[]>(PEERS_MOCK);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [mobileView, setMobileView] = useState<"sidebar" | "chat">("chat");

    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll FX Transformation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

    const activePeer = peers.find(p => p.id === activePeerId) || peers[0];
    const currentMessages = messages[activePeerId] || [];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [currentMessages, isTyping]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPeers(prev => {
                const next = [...prev];
                const idx = Math.floor(Math.random() * (next.length - 1)) + 1;
                next[idx] = { ...next[idx], status: next[idx].status === 'online' ? 'offline' : 'online' };
                return next;
            });
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = useCallback((text: string, isFromMe = true) => {
        const currentId = activePeerId;
        const newMessage: Message = {
            id: Math.random().toString(36).substr(2, 9),
            text,
            sender: "me",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => ({
            ...prev,
            [currentId]: [...(prev[currentId] || []), newMessage]
        }));

        if (activePeer.isBot && isFromMe) {
            const q = BOT_QUESTIONS.find(bq => bq.text === text);
            if (q) {
                setIsTyping(true);
                setTimeout(() => {
                    setIsTyping(false);
                    setMessages(prev => ({
                        ...prev,
                        [currentId]: [...(prev[currentId] || []), BOT_REPLIES[q.id]]
                    }));
                }, 1500);
            }
        }
    }, [activePeerId, activePeer.isBot]);

    const selectPeer = (id: string) => {
        setActivePeerId(id);
        setMobileView("chat");
    };

    return (
        <motion.div
            ref={containerRef}
            style={{ scale: springScale, opacity }}
            className="w-full flex h-[650px] bg-[#0b0e11] rounded-2xl md:rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden text-left font-sans relative"
        >
            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
      `}</style>

            {/* Sidebar - Visible on Desktop or when mobileView is 'sidebar' */}
            <aside className={cn(
                "lg:flex w-full lg:w-80 flex-col border-r border-white/5 bg-[#0b0e11] transition-all duration-300",
                mobileView === "chat" ? "hidden" : "flex"
            )}>
                <div className="p-5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                        <span className="font-bold text-white tracking-tight">AirGap</span>
                    </div>
                    <button className="text-zinc-500 hover:text-white lg:hidden" onClick={() => setMobileView("chat")}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-5 flex items-center gap-4 border-b border-white/5">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border-2 border-emerald-500/30">
                            <span className="font-bold text-white">J</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#0b0e11]" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">junior</h4>
                        <p className="text-[#00c896] text-[10px] font-bold uppercase tracking-wider">Mon Profil Sec</p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-4">
                    {/* Section Active */}
                    <div>
                        <p className="px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Pairs Actifs</p>
                        <div className="space-y-1">
                            {peers.filter(p => p.status === 'online').map(peer => (
                                <button
                                    key={peer.id}
                                    onClick={() => selectPeer(peer.id)}
                                    className={cn(
                                        "w-full flex items-center gap-3 p-3 rounded-xl transition-all",
                                        activePeerId === peer.id ? "bg-emerald-500/10 border border-emerald-500/20" : "hover:bg-white/5"
                                    )}
                                >
                                    {peer.isBot ? (
                                        <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
                                    ) : (
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shrink-0", peer.avatarColor)}>
                                            {peer.name[0]}
                                        </div>
                                    )}
                                    <div className="text-left flex-1 min-w-0">
                                        <p className={cn("font-semibold text-sm truncate", activePeerId === peer.id ? "text-[#00c896]" : "text-zinc-200")}>{peer.name}</p>
                                        <p className="text-[10px] text-zinc-500 truncate">{peer.isBot ? "Assistant IA" : peer.ip}</p>
                                    </div>
                                    {peer.isBot && <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Section Offline */}
                    <div>
                        <p className="px-3 py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Hors Ligne</p>
                        <div className="space-y-1">
                            {peers.filter(p => p.status === 'offline').map(peer => (
                                <button
                                    key={peer.id}
                                    onClick={() => selectPeer(peer.id)}
                                    className={cn("w-full flex items-center gap-3 p-3 rounded-xl opacity-60 grayscale hover:grayscale-0 transition-all", activePeerId === peer.id ? "bg-white/5" : "hover:bg-white/5")}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold shrink-0">{peer.name[0]}</div>
                                    <div className="text-left">
                                        <p className="font-semibold text-sm text-zinc-400">{peer.name}</p>
                                        <p className="text-[10px] text-zinc-600 truncate">{peer.ip}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Chat Area - Visible when mobileView is 'chat' */}
            <main className={cn(
                "flex-1 flex flex-col bg-[#0d1117] relative transition-all duration-300",
                mobileView === "sidebar" ? "hidden lg:flex" : "flex"
            )}>
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 -ml-2 text-zinc-400 hover:text-white" onClick={() => setMobileView("sidebar")}>
                            <Users className="w-5 h-5 text-emerald-500" />
                        </button>
                        <div className={cn(`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold select-none ${activePeer.isBot ? "" : activePeer.avatarColor}`)}>
                            {activePeer.isBot ? <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" /> : activePeer.name[0]}
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm flex items-center gap-2">
                                {activePeer.name}
                                {activePeer.status === 'online' && <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                            </h3>
                            <p className="text-[10px] text-zinc-500">{activePeer.isBot ? "Assistant IA" : "Connecté en P2P"}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#00c896]/10 rounded-full border border-[#00c896]/20">
                        <Shield className="w-3 h-3 text-[#00c896]" />
                        <span className="text-[9px] font-bold text-[#00c896] uppercase">Tunnel Sécurisé</span>
                    </div>
                </header>

                <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
                    <div className="flex justify-center">
                        <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-600 bg-zinc-900/50 px-4 py-1 rounded-full border border-zinc-800">Début de la conversation sécurisée</p>
                    </div>

                    <AnimatePresence initial={false}>
                        {currentMessages.map(msg => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                layout
                                className={cn("flex w-full", msg.sender === 'me' ? "justify-end" : "justify-start")}
                            >
                                <div className={cn(
                                    "max-w-[85%] px-4 py-3 rounded-2xl shadow-xl space-y-2",
                                    msg.sender === 'me' ? "bg-emerald-500 text-black font-medium rounded-tr-none" : "bg-zinc-800 text-zinc-200 border border-zinc-700/50 rounded-tl-none"
                                )}>
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    {msg.content && <div>{msg.content}</div>}
                                    <p className={cn("text-[9px] opacity-50", msg.sender === 'me' ? "text-right" : "text-left")}>{msg.timestamp}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {isTyping && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                            <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none border border-zinc-700/50 flex gap-1 items-center">
                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </motion.div>
                    )}
                </div>

                <footer className="p-6 bg-[#0d1117] border-t border-white/5">
                    {activePeer.isBot ? (
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Suggestions intelligentes</p>
                            <div className="flex flex-wrap gap-2">
                                {BOT_QUESTIONS.map(q => (
                                    <button
                                        key={q.id}
                                        onClick={() => handleSendMessage(q.text)}
                                        disabled={isTyping}
                                        className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left disabled:opacity-50"
                                    >
                                        <q.icon className="w-3.5 h-3.5 text-emerald-500" />
                                        {q.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); setInputValue(""); }} className="flex items-center gap-3">
                            <button type="button" className="p-2 text-zinc-500 hover:text-white"><Smile className="w-5 h-5" /></button>
                            <input
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                                placeholder="Taper un message..."
                                className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-6 py-3.5 text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/50"
                            />
                            <button type="submit" className="p-3.5 bg-emerald-500 text-black rounded-full hover:scale-105 transition-transform"><Send className="w-5 h-5" /></button>
                        </form>
                    )}
                </footer>
            </main>
        </motion.div>
    );
};
