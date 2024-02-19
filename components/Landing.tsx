"use client";
import { useRef, useEffect } from "react";
import styles from "../styles/page.module.css";

export default function Landing() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const initialMaskSize = 0.4;
  const targetMaskSize = 50;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <>
      <div className={styles.main}>
        <div ref={container} className={styles.container}>
          <div ref={stickyMask} className={styles.stickyMask}>
            <video autoPlay muted loop>
              <source src="/medias/destiny.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}
