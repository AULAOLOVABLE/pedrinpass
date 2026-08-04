import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Hls from "hls.js";
import HeroSearchBar from "./HeroSearchBar";
import { ChevronRight } from "lucide-react";
import heroGradient from "@/assets/hero-gradient.png";
import WaveText from "@/components/ui/wave-text";

const shortcuts = [
  { label: "Extensões", href: "/docs/extensions" },
  { label: "Prompts", href: "/docs/prompts" },
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

      {/* Gradient overlay */}
      <img 
        src={heroGradient}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
          to="/docs/extensions"
          className="inline-flex items-center gap-2 pl-4 pr-2 py-2 mb-8 text-sm text-muted-foreground bg-[#121314] rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
        >
          <span>🚀 Plataforma Premium</span>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
            <ChevronRight className="w-4 h-4" />
          </span>
        </Link>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-center tracking-tighter mb-6">
          <WaveText text="Tudo para potencializar sua Inteligência Artificial." />
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mb-10">
          <WaveText text="Descubra extensões, prompts, templates, agentes e automações para ChatGPT, Lovable, Claude, Cursor, VS Code e muito mais." staggerDelay={0.015} />
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
                className="inline-flex items-center px-4 py-2 text-sm text-muted-foreground border border-border rounded-xl bg-background/40 backdrop-blur-sm transition-all hover:text-foreground hover:border-primary/50 hover:bg-primary/10"
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
