import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hls from "hls.js";
import HeroSearchBar from "./HeroSearchBar";
import { ChevronRight } from "lucide-react";
import bgWaveAsset from "@/assets/bg-wave.png.asset.json";
import WaveText from "@/components/ui/wave-text";

const shortcuts = [
  { label: "Conexão Neural", href: "/api/connect" },
  { label: "Agentes IA", href: "/docs/agents" },
  { label: "Prompts Premium", href: "/docs/premium-prompts" },
];

const VIDEO_SRC =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/manifest/video.m3u8";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is muted for autoplay to work
    video.muted = true;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(VIDEO_SRC);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay failed silently
        });
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = VIDEO_SRC;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {
          // Autoplay failed silently
        });
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-4 md:px-8 pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden min-h-[500px]">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover grayscale"
        style={{ zIndex: 0 }}
      />

      {/* Dark overlay for readability */}
      <div 
        className="absolute inset-0 bg-background/70"
        style={{ zIndex: 1 }}
      />

      {/* Background Wave Image */}
      <img 
        src={bgWaveAsset.url}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60 mix-blend-screen"
        style={{ zIndex: 1 }}
      />

      {/* Bottom fade gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        style={{ zIndex: 1 }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
        {/* Announcement Badge */}
        <Link
          to="/docs/overview"
          className="inline-flex items-center gap-2 pl-4 pr-2 py-2 mb-10 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>🚀 PedrinTEC v2.0 disponível</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
            <ChevronRight className="w-4 h-4" />
          </span>
        </Link>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground text-center tracking-tightest mb-8 leading-[0.9]">
          <WaveText text="PedrinTEC" className="text-primary" />
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-4xl mb-12 leading-relaxed">
          <WaveText text="A revolução silenciosa da engenharia de software começou." staggerDelay={0.015} />
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-[600px] mb-8 px-0 md:px-4">
          <HeroSearchBar />
        </div>

        {/* Search Shortcuts */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="eyebrow">Atalhos de busca:</span>
          <div className="flex flex-row items-center gap-3">
            {shortcuts.map((shortcut) => (
              <Link
                key={shortcut.label}
                to={shortcut.href}
                className="inline-flex items-center px-5 py-2.5 text-xs font-medium text-muted-foreground border border-white/5 rounded-full bg-white/5 backdrop-blur-md transition-all hover:text-foreground hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {shortcut.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
