import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from "../assets/logo.png"

interface PreloaderProps {
    navLogoRef: React.RefObject<HTMLImageElement | null>;
    onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ navLogoRef, onFinish }) => {
    const controls = useAnimation();
    const preloaderLogoRef = useRef<HTMLDivElement>(null);
    const [moveTo, setMoveTo] = useState<{ x: number; y: number; scale: number }>({ x: 0, y: 0, scale: 1 });
    const [blur, setBlur] = useState(40); // blur érték pixelben (pl. 20px)

    useEffect(() => {
        if (!navLogoRef.current || !preloaderLogoRef.current) return;

        const navRect = navLogoRef.current.getBoundingClientRect();
        const preloaderRect = preloaderLogoRef.current.getBoundingClientRect();

        const x = navRect.left + navRect.width / 2 - (preloaderRect.left + preloaderRect.width / 2);
        const y = navRect.top + navRect.height / 2 - (preloaderRect.top + preloaderRect.height / 2);

        // Minimális skálázás pl 0.3
        const scale = Math.max(navRect.width / preloaderRect.width, 0.5);

        setMoveTo({ x, y, scale });

        async function sequence() {
            // 1. Pörgés
            await controls.start({
                rotate: 360,
                transition: { duration: 1.5, ease: 'easeInOut' },
            });

            // 2. Átmozgatás és méretezés
            await controls.start({
                x,
                y,
                scale,
                transition: { duration: 1, ease: 'easeInOut' },
            });

            // 3. Blur és opacity csökkentése egyszerre, párhuzamosan
            await Promise.all([
                controls.start({
                    opacity: 0,
                    transition: { duration: 0.5 },
                }),
                // Ez szimulálja a blur fokozatos eltűnését
                new Promise<void>((resolve) => {
                    const blurStart = 20;
                    const blurEnd = 0;
                    const duration = 500; // ms
                    const stepTime = 16; // kb 60 FPS

                    let elapsed = 0;

                    function step() {
                        elapsed += stepTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const currentBlur = blurStart + (blurEnd - blurStart) * progress;
                        setBlur(currentBlur);
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            resolve();
                        }
                    }
                    step();
                }),
            ]);

            onFinish();
        }

        sequence();
    }, [navLogoRef, controls, onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
            }}
        >
            <motion.div
                className="w-24 h-24"
                animate={controls}
                initial={{ rotate: 0, x: 0, y: 0, scale: 1 }}
                ref={preloaderLogoRef}
            >
                <img src={logo} alt="NGRC Logo" />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
