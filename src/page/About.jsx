import React from "react";
import { Card, CardIcon, CardTitle, CardDescription } from "../components/FeatureCard";

function About() {
  return (
    <div className="min-h-screen py-16 px-8 text-white flex flex-col items-center gap-24 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center max-w-3xl animate-fadeInDown">
        <h1
          className="text-5xl md:text-6xl 
        font-extrabold 
        mb-6 
        leading-tight
        text-5xl
            "
        >
          <span className="text-5xl">About</span>{" "}
          <span
            className="
          bg-gradient-to-br from-[#ff5500] to-[#ff8800] 
          bg-clip-text
           text-transparent
           text-5xl
           "
          >
            SoundCloud Downloader
          </span>
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed">
          The fastest and most reliable way to convert and download your
          favorite tracks, playlists, and albums from SoundCloud directly to
          MP3.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-full">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardIcon>⚡</CardIcon>
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>
              Our optimized servers ensure your downloads start instantly. No
              waiting, no queues.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🎵</CardIcon>
            <CardTitle>High Quality</CardTitle>
            <CardDescription>
              Download tracks in the highest possible quality up to 320kbps for
              crystal clear audio.
            </CardDescription>
          </Card>
          
          <Card>
            <CardIcon>🛡️</CardIcon>
            <CardTitle>Safe & Secure</CardTitle>
            <CardDescription>
              100% free from malware and intrusive ads. We respect your privacy
              and device security.
            </CardDescription>
          </Card>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="w-full">
        <h2 className="mb-12 text-4xl font-bold text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Custom connecting line for desktop */}
          <div className="top-16 hidden md:block absolute left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#ff5500]/50 to-transparent z-0"></div>

          <div className="flex-1 text-center relative z-10 p-8 bg-slate-900/60 rounded-2xl border border-white/5 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff5500] to-[#ff8800] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              1
            </div>
            <h4 className="text-xl font-medium mb-3 text-white">Copy URL</h4>
            <p className="text-slate-400 leading-relaxed">
              Find your track on SoundCloud and copy its link.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10 p-8 bg-slate-900/60 rounded-2xl border border-white/5 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff5500] to-[#ff8800] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              2
            </div>
            <h4 className="text-xl font-medium mb-3 text-white">Paste Link</h4>
            <p className="text-slate-400 leading-relaxed">
              Paste the link into our input field and hit Download.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10 p-8 bg-slate-900/60 rounded-2xl border border-white/5 transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff5500] to-[#ff8800] rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(255,85,0,0.4)]">
              3
            </div>
            <h4 className="text-xl font-medium mb-3 text-white">Save MP3</h4>
            <p className="text-slate-400 leading-relaxed">
              Wait a moment for processing, then save the MP3 to your device.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
