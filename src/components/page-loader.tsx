"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Animate progress bar 0→100 over ~1.2s
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 400);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#171719]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.74, 0, 0.15, 0.99] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2C14 2 8 6.5 8 14C8 17.5 9.5 20.5 12 22.5C10 20 9 17 9 14C9 8.5 14 4.5 14 4.5C14 4.5 19 8.5 19 14C19 17 18 20 16 22.5C18.5 20.5 20 17.5 20 14C20 6.5 14 2 14 2Z"
                fill="#C9A84C"
              />
              <path
                d="M14 7C14 7 10 10.5 10 14C10 16.5 11.5 18.5 14 20C16.5 18.5 18 16.5 18 14C18 10.5 14 7 14 7Z"
                fill="#C9A84C"
                opacity="0.5"
              />
              <circle cx="14" cy="14" r="2" fill="#C9A84C" />
            </svg>

            <span
              className="text-white text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              ORIGEN STUDIO
            </span>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-8 w-[85px] h-px bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-white origin-left"
              style={{ scaleX: progress, transformOrigin: "0% 0%" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
