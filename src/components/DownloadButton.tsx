"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Monitor, Terminal, ArrowRight, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const BASE = "https://github.com/TON_USERNAME/airgap/releases/download/v0.1.0-beta";

type PlatformFormat = "windows" | "linux_appimage" | "linux_deb" | "linux_rpm";

interface PlatformInfo {
    id: PlatformFormat;
    label: string;
    url: string;
    icon: React.ReactNode;
    sub: string;
    primaryBg?: string;
    primaryHoverBg?: string;
}

const platforms: Record<PlatformFormat, PlatformInfo> = {
    windows: {
        id: "windows",
        label: "Télécharger pour Windows",
        url: `${BASE}/airgap_0.1.0_x64-setup.exe`,
        icon: <Image src="/windows.svg" alt="Windows" width={32} height={32} />,
        sub: "Windows 10/11 — 64 bits",
        primaryBg: "bg-[#00c896]",
        primaryHoverBg: "hover:bg-[#00b085]",
    },
    linux_appimage: {
        id: "linux_appimage",
        label: "Télécharger pour Linux",
        url: `${BASE}/airgap_0.1.0_amd64.AppImage`,
        icon: <Image src="/linux.svg" alt="Linux" width={32} height={32} />,
        sub: "AppImage — Universel",
        primaryBg: "bg-purple-500",
        primaryHoverBg: "hover:bg-purple-600",
    },
    linux_deb: {
        id: "linux_deb",
        label: "Télécharger .deb",
        url: `${BASE}/airgap_0.1.0_amd64.deb`,
        icon: <Image src="/debian.svg" alt="Linux" width={32} height={32} />,
        sub: "Ubuntu / Debian",
    },
    linux_rpm: {
        id: "linux_rpm",
        label: "Télécharger .rpm",
        url: `${BASE}/airgap_0.1.0_amd64.rpm`,
        icon: <Image src="/redhat.svg" alt="Linux" width={32} height={32} />,
        sub: "Fedora / RedHat",
    },
};

export const DownloadButton = () => {
    const [detectedPlatform, setDetectedPlatform] = useState<PlatformFormat>("windows");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const ua = navigator.userAgent.toLowerCase();
        if (ua.includes("win")) setDetectedPlatform("windows");
        else if (ua.includes("linux")) setDetectedPlatform("linux_appimage");
        else setDetectedPlatform("windows"); // Default to windows if unknown or mac
    }, []);

    if (!isClient) return <div className="h-[88px] w-[300px] animate-pulse bg-zinc-800 rounded-2xl" />;

    const primary = platforms[detectedPlatform];
    const others = Object.values(platforms).filter((p) => p.id !== primary.id);

    return (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
            {/* Primary Download Button */}
            <motion.a

                whileTap={{ scale: 0.98 }}
                href={primary.url}
                className={cn(
                    "relative flex items-center  justify-between w-full sm:w-[380px] max-sm:w-[300px]  rounded-2xl",
                    "bg-gradient-to-b from-zinc-700/50 to-zinc-900 shadow-2xl overflow-hidden",
                    "border border-zinc-700/50 transition-colors"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 opacity-0  transition-opacity" />

                <div className="relative flex items-center gap-4 px-6 py-2 max-sm:py-2 max-sm:gap-1 z-10">
                    <div className={cn("p-3 rounded-xl text-black shadow-inner")}>
                        {primary.icon}
                    </div>
                    <div className="text-left flex-1">
                        <div className="text-zinc-100 max-sm:text-sm font-semibold text-lg">{primary.label}</div>

                    </div>
                </div>
            </motion.a>

            {/* Other Platforms Carousel / List */}
            <div className="flex flex-col items-center gap-3">
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                    Ou télécharger pour
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {others.map((p) => (
                        <a
                            key={p.id}
                            href={p.url}
                            className="group flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-800/80 transition-all"
                        >
                            <div className="opacity-70 group-hover:opacity-100 transition-opacity scale-75">
                                {p.icon}
                            </div>
                            {p.sub}
                        </a>
                    ))}
                </div>
            </div>


        </div>
    );
};
