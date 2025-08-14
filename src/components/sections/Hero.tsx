import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Phone } from "lucide-react";

// Floating Hacker Particles - Optimized for performance
const HackerParticles = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; speed: number }>
  >([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 0.3 + 0.1,
    }));
    setParticles(generated);

    const animate = () => {
      setParticles((prev) => {
        if (Date.now() % 2 !== 0) return prev;

        return prev.map((p) => {
          const newY = p.y > window.innerHeight ? 0 : p.y + p.speed;
          const newX = p.x + Math.sin(p.y / 50) * 0.3;

          return { ...p, y: newY, x: newX };
        });
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            willChange: "transform",
          }}
          className="absolute rounded-full bg-green-400 opacity-50"
        />
      ))}
    </div>
  );
};

// Boot-up Preloader (Hacker Terminal Style)
const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const bootText = [
    "> Connecting securely...",
    "> Decrypting access keys...",
    "> Loading skills and projects...",
    "> Security check passed.",
    "> Access granted.",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let charIndex = 0;

    const typeLine = () => {
      if (charIndex < bootText[currentLine].length) {
        setDisplayedText((prev) => prev + bootText[currentLine][charIndex]);
        charIndex++;
        setTimeout(typeLine, 40);
      } else {
        setLines((prev) => [...prev, bootText[currentLine]]);
        setDisplayedText("");
        setCurrentLine((prev) => prev + 1);
      }
    };

    if (currentLine < bootText.length) {
      setTimeout(typeLine, 500);
    } else {
      setTimeout(() => onFinish(), 800);
    }
  }, [currentLine]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-lg flex flex-col justify-center px-8 z-50">
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
      {currentLine < bootText.length && (
        <div>
          {displayedText}
          <span className="cursor">_</span>
        </div>
      )}
      <style>{`
        .cursor {
          display: inline-block;
          width: 8px;
          background: currentColor;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const Hero = () => {
  const [loading, setLoading] = useState(true);

  const roles = [
    "App Developer",
    "Web Developer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
  ];
  const [roleIndex, setRoleIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % roles.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden pt-20">
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="premium-bg-effect"></div>
          </div>
          <HackerParticles />

          <div className="relative z-20 container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden premium-container">
                <div className="absolute inset-0 premium-border"></div>
                <img
                  src="/pic-removebg-preview copy.png"
                  alt="Profile"
                  className="w-full h-full object-cover z-10 relative"
                />
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="premium-glitch" data-text="Nitish Modi">
                  <span className="premium-glitch-text">Nitish Modi</span>
                  <span className="premium-glitch-layer"></span>
                  <span className="premium-glitch-layer"></span>
                </span>
              </h1>

              <div className="role-container mb-6">
                <p
                  key={roleIndex}
                  className="role-text font-mono text-lg sm:text-xl transition-all duration-500 ease-in-out"
                >
                  {roles[roleIndex]}
                </p>
                <div className="role-underline"></div>
              </div>

              <p className="premium-description max-w-lg mx-auto lg:mx-0 mb-8">
                I build fast and secure systems by blending strong coding skills
                with a hacker’s mindset. With expertise in both development and
                cybersecurity, I create digital solutions that perform smoothly,
                stay protected, and deliver an exceptional user experience.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <a href="#projects" className="premium-button green-button">
                  <span className="button-text">View Projects</span>
                  <span className="button-glow"></span>
                </a>
                <a href="#contact" className="premium-button purple-button">
                  <span className="button-text">Contact</span>
                  <span className="button-glow"></span>
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-6 mt-8">
                <a
                  href="https://github.com/technitishmodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <div className="social-icon-container">
                    <Github className="social-icon" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/nitish-modi-206205294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <div className="social-icon-container">
                    <Linkedin className="social-icon" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/nitishmodi21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <div className="social-icon-container">
                    <Instagram className="social-icon" />
                  </div>
                </a>
                <a
                  href="https://wa.me/918434997573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                >
                  <div className="social-icon-container">
                    <Phone className="social-icon" />
                  </div>
                </a>
                <a
                  href="mailto:nubhawbarnwal@gmail.com"
                  className="social-icon-link"
                >
                  <div className="social-icon-container">
                    <Mail className="social-icon" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <style>{`
            .premium-container {
              background: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(4px);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
              border: 1px solid rgba(255, 255, 255, 0.08);
            }
            
            .premium-border {
              position: absolute;
              inset: 0;
              padding: 2px;
              border-radius: inherit;
              background: linear-gradient(
                45deg,
                rgba(0, 255, 0, 0.5),
                rgba(168, 85, 247, 0.5),
                rgba(0, 255, 249, 0.5),
                rgba(255, 0, 193, 0.5)
              );
              -webkit-mask: 
                linear-gradient(#fff 0 0) content-box, 
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0.8;
              animation: borderRotate 8s linear infinite;
            }
            
            @keyframes borderRotate {
              from { background-position: 0% 0%; }
              to { background-position: 200% 200%; }
            }
            
            .premium-container::before {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent 70%);
              z-index: 1;
            }
            
            .social-icon-container {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(5px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            
            .social-icon-container::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(45deg, rgba(0, 255, 0, 0.2), rgba(168, 85, 247, 0.2));
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .social-icon-link:hover .social-icon-container {
              transform: translateY(-3px);
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .social-icon-link:hover .social-icon-container::before {
              opacity: 1;
            }
            
            .social-icon {
              color: white;
              transition: all 0.3s ease;
              z-index: 1;
            }
            
            .social-icon-link:hover .social-icon {
              color: #00ff00;
              transform: scale(1.1);
            }
            
            .premium-button {
              position: relative;
              padding: 12px 24px;
              border-radius: 8px;
              font-weight: 500;
              letter-spacing: 0.5px;
              overflow: hidden;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              backdrop-filter: blur(4px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              min-width: 160px;
            }
            
            .green-button {
              background: linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.2));
              box-shadow: 0 4px 15px rgba(0, 255, 0, 0.1);
            }
            
            .purple-button {
              background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.2));
              box-shadow: 0 4px 15px rgba(168, 85, 247, 0.1);
            }
            
            .button-text {
              position: relative;
              z-index: 1;
              font-family: 'Inter', sans-serif;
              font-size: 16px;
              color: white;
            }
            
            .green-button .button-text {
              background: linear-gradient(to right, #ffffff, #00ff00);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            
            .purple-button .button-text {
              background: linear-gradient(to right, #ffffff, #a855f7);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            
            .button-glow {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
              opacity: 0;
              transition: opacity 0.3s ease;
              mix-blend-mode: overlay;
            }
            
            .premium-button:hover {
              transform: translateY(-2px);
            }
            
            .green-button:hover {
              box-shadow: 0 8px 25px rgba(0, 255, 0, 0.2);
            }
            
            .purple-button:hover {
              box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
            }
            
            .premium-button:hover .button-glow {
              opacity: 0.1;
              animation: pulse 1.5s infinite;
            }
            
            @keyframes pulse {
               0% { opacity: 0.1; }
               50% { opacity: 0.2; }
               100% { opacity: 0.1; }
             }
             
             .role-container {
               position: relative;
               display: inline-block;
             }
             
             .role-text {
               background: linear-gradient(to right, #4ade80, #00ff00);
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
               position: relative;
               display: inline-block;
             }
             
             .role-underline {
               position: absolute;
               bottom: -4px;
               left: 0;
               height: 2px;
               width: 0;
               background: linear-gradient(to right, #4ade80, #00ff00);
               animation: typing 3s steps(40) infinite;
               box-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
             }
             
             @keyframes typing {
                0% { width: 0; }
                50% { width: 100%; }
                90% { width: 100%; }
                100% { width: 0; }
              }
              
              .premium-description {
                color: rgba(209, 213, 219, 0.9);
                line-height: 1.8;
                letter-spacing: 0.3px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
                position: relative;
                backdrop-filter: blur(1px);
                padding: 8px 0;
                border-left: 2px solid rgba(0, 255, 0, 0.3);
                padding-left: 16px;
                transition: all 0.3s ease;
              }
              
              .premium-description:hover {
                color: rgba(229, 231, 235, 1);
                border-left: 2px solid rgba(0, 255, 0, 0.7);
                transform: translateX(2px);
              }
             .premium-glitch {
               position: relative;
               display: inline-block;
               color: white;
               font-weight: 700;
               text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
             }
             
             .premium-glitch-text {
               position: relative;
               z-index: 2;
               background: linear-gradient(90deg, #ffffff, #e0e0e0);
               -webkit-background-clip: text;
               background-clip: text;
               color: transparent;
             }
             
             .premium-glitch-layer {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               z-index: 1;
             }
             
             .premium-glitch-layer:nth-child(2) {
               color: #00ffff;
               animation: premium-glitch-anim 4s infinite linear alternate-reverse;
             }
             
             .premium-glitch-layer:nth-child(3) {
               color: #ff00ff;
               animation: premium-glitch-anim2 3s infinite linear alternate-reverse;
             }
             
             .premium-glitch-layer:nth-child(2)::before,
             .premium-glitch-layer:nth-child(3)::before {
               content: attr(data-text);
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
             }
             
             .premium-glitch-layer:nth-child(2)::before {
               left: 2px;
               text-shadow: -1px 0 #00ffff;
               animation: premium-glitch-noise 2s infinite linear alternate-reverse;
             }
             
             .premium-glitch-layer:nth-child(3)::before {
               left: -2px;
               text-shadow: 1px 0 #ff00ff;
               animation: premium-glitch-noise2 3s infinite linear alternate-reverse;
             }
             
             @keyframes premium-glitch-anim {
               0% {
                 clip-path: inset(20% 0 30% 0);
                 transform: translate(-2px, 0);
               }
               20% {
                 clip-path: inset(65% 0 13% 0);
                 transform: translate(1px, 1px);
               }
               40% {
                 clip-path: inset(43% 0 2% 0);
                 transform: translate(0, -1px);
               }
               60% {
                 clip-path: inset(25% 0 58% 0);
                 transform: translate(-1px, 0);
               }
               80% {
                 clip-path: inset(13% 0 75% 0);
                 transform: translate(1px, -1px);
               }
               100% {
                 clip-path: inset(0 0 100% 0);
                 transform: translate(0, 0);
               }
             }
             
             @keyframes premium-glitch-anim2 {
               0% {
                 clip-path: inset(25% 0 58% 0);
                 transform: translate(2px, 0);
               }
               20% {
                 clip-path: inset(80% 0 5% 0);
                 transform: translate(-1px, 1px);
               }
               40% {
                 clip-path: inset(20% 0 30% 0);
                 transform: translate(0, 1px);
               }
               60% {
                 clip-path: inset(18% 0 55% 0);
                 transform: translate(1px, 0);
               }
               80% {
                 clip-path: inset(2% 0 82% 0);
                 transform: translate(-1px, -1px);
               }
               100% {
                 clip-path: inset(60% 0 9% 0);
                 transform: translate(0, 0);
               }
             }
             
             @keyframes premium-glitch-noise {
               0%, 100% { opacity: 0.2; }
               50% { opacity: 0.1; }
             }
             
             @keyframes premium-glitch-noise2 {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.2; }
              }
              
              .premium-bg-effect {
                position: absolute;
                width: 200%;
                height: 200%;
                top: -50%;
                left: -50%;
                background: radial-gradient(circle at center, rgba(0, 255, 0, 0.03) 0%, transparent 40%),
                            radial-gradient(circle at 30% 70%, rgba(0, 255, 255, 0.02) 0%, transparent 30%),
                            radial-gradient(circle at 70% 30%, rgba(255, 0, 255, 0.02) 0%, transparent 30%);
                animation: rotate-bg 60s linear infinite;
                opacity: 0.6;
                pointer-events: none;
              }
              
              @keyframes rotate-bg {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
          `}</style>
        </section>
      )}
    </>
  );
};

export default Hero;
