import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { DownloadSection } from "@/components/DownloadSection";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] font-sans text-zinc-50 selection:bg-[#00c896]/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <DownloadSection />
        <Contact />
      </main>

      {/* Footer / Copyright Section */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Airgap Peer-to-Peer by Kether-Labs. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
