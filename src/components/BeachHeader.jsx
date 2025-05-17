"use client";

import { useEffect, useState, useMemo } from "react";

export default function BeachHeader() {
  const [showSVG, setShowSVG] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSVG(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const snowflakes = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      left: `${Math.floor(Math.random() * 100)}%`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 2}s`,
      bright: i % 3 === 0,
    }));
  }, []);

  if (!showSVG) return null;

  return (
    <>
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMin meet"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGradient" cx="80%" cy="15%" r="12%">
            <stop offset="0%" stopColor="yellow" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(255, 255, 0, 0)" />
          </radialGradient>
          <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00c6ff" />
            <stop offset="100%" stopColor="#0072ff" />
          </linearGradient>
        </defs>

        {/* 🌅 Sky */}
        <rect width="1440" height="360" fill="#a8ddf7" />

        {/* 🌞 Sun */}
        <circle cx="1000" cy="240" r="360" fill="url(#sunGradient)" />

        {/* 🌊 Ocean wave */}
        <path
          id="oceanWave"
          fill="url(#ocean)"
          d="M0,200 Q240,198 480,200 Q720,202 960,200 Q1200,198 1440,200 L1440,440 L0,440 Z"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,200 Q240,198 480,200 Q720,202 960,200 Q1200,198 1440,200 L1440,440 L0,440 Z;
              M0,200 Q240,202 480,198 Q720,200 960,202 Q1200,200 1440,198 L1440,440 L0,440 Z;
              M0,200 Q240,198 480,200 Q720,202 960,200 Q1200,198 1440,200 L1440,440 L0,440 Z
            "
          />
        </path>

        {/* 🌊 Scattered foam streaks */}
        {[
          "M100,240 q10,-5 20,0 q10,5 20,0",
          "M250,265 q15,-7 30,0 q15,7 30,0",
          "M400,235 q12,-6 24,0 q12,6 24,0",
          "M550,270 q20,-8 40,0 q20,8 40,0",
          "M700,290 q16,-7 30,0 q15,7 30,0",
          "M850,225 q8,-4 16,0 q8,4 16,0",
          "M980,255 q12,-6 24,0 q12,6 24,0",
          "M1080,275 q18,-9 36,0 q18,9 36,0",
          "M1180,245 q10,-5 20,0 q10,5 20,0",
          "M1300,260 q14,-7 28,0 q14,7 28,0",
          "M200,275 q12,-6 24,0 q12,6 24,0",
          "M350,225 q9,-5 18,0 q9,5 18,0",
          "M600,290 q16,-8 32,0 q16,8 32,0",
          "M800,240 q11,-6 22,0 q11,6 22,0",
          "M1150,250 q14,-7 28,0 q14,7 28,0"
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="white"
            strokeWidth={i % 3 === 0 ? 1.5 : 2}
            fill="none"
            opacity={0.45 + (i % 5) * 0.1}
            transform={
              i === 1 ? "rotate(-3 250 265)" :
              i === 4 ? "rotate(-5 700 290)" :
              i === 6 ? "rotate(4 980 255)" :
              i === 9 ? "rotate(-2 1300 260)" :
              i === 12 ? "rotate(3 600 290)" :
              undefined
            }
          />
        ))}

        {/* 🏖️ Wet and dry sand */}
        <path
          d="M0,200 C180,210 360,190 540,205 C720,220 900,200 1080,215 C1260,230 1380,200 1440,210 L1440,220 L0,220 Z"
          fill="#d9eadd"
          opacity="0.3"
        />
        <path
          d="M0,220 C180,290 360,255 540,310 C720,340 900,300 1080,330 C1260,350 1380,310 1440,320 L1440,440 L0,440 Z"
          fill="#f4d28c"
        />
        <path
          d="
            M0,220
            C180,290 360,255 540,310
            C720,340 900,300 1080,330
            C1260,350 1380,310 1440,320
            L1440,300
            C1380,290 1260,330 1080,310
            C900,280 720,320 540,290
            C360,260 180,280 0,260
            Z"
          fill="white"
          opacity="0.5"
        />

        {/* 🌴 Palm trees */}
        <path d="M120,160 Q130,210 125,340" stroke="#8B4513" strokeWidth="18" fill="none" />
        <path d="M120,160 Q160,130 185,140 Q160,150 120,160" fill="#2e8b57" />
        <path d="M120,160 Q80,130 55,140 Q80,150 120,160" fill="#2e8b57" />
        <path d="M120,160 Q170,150 190,180 Q155,165 120,160" fill="#2e8b57" />
        <path d="M120,160 Q70,150 50,180 Q90,165 120,160" fill="#2e8b57" />
        <path d="M120,160 Q125,180 128,200 Q122,190 120,160" fill="#2e8b57" />
        <path d="M120,160 Q160,190 180,220 Q140,200 120,160" fill="#2e8b57" />
        <path d="M120,160 Q80,190 60,220 Q100,200 120,160" fill="#2e8b57" />

        <path d="M1260,180 Q1250,250 1255,375" stroke="#8B4513" strokeWidth="12" fill="none" />
        <path d="M1260,180 Q1260,155 1260,130 Q1260,155 1260,180" fill="#2e8b57" />
        <path d="M1260,180 Q1290,190 1310,180 Q1290,170 1260,180" fill="#2e8b57" />
        <path d="M1260,180 Q1230,190 1210,180 Q1230,170 1260,180" fill="#2e8b57" />
        <path d="M1260,180 Q1295,215 1310,240 Q1270,215 1260,180" fill="#2e8b57" />
        <path d="M1260,180 Q1225,215 1210,240 Q1250,215 1260,180" fill="#2e8b57" />
        <path d="M1260,180 Q1263,210 1265,230 Q1257,210 1260,180" fill="#2e8b57" />
      </svg>

      {/* ❄️ Snowflakes */}
      {snowflakes.map((flake, i) => (
        <span
          key={i}
          className={`snowflake ${flake.bright ? 'bright' : ''}`}
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay,
          }}
        >
          ❄️
        </span>
      ))}
    </>
  );
}
