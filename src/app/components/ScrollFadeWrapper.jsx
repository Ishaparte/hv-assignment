"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollFadeWrapper({ children }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
          });
        } else {
          controls.start({
            opacity: 0.7,      // 🔥 never goes to 0 → avoids white screen
            filter: "blur(6px)",
            scale: 0.98,
            transition: { duration: 0.6, ease: "easeOut" }
          });
        }
      },
      { threshold: 0.2 }   // 🔥 stable intersection detection
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.7, filter: "blur(6px)", scale: 0.98 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
