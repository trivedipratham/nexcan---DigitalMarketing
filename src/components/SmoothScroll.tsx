import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Ultra-smooth settings for high-end feel
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });
    
    lenisRef.current = lenis;
    // Expose globally so other components can stop/start scroll
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).__lenis = null;
    };
  }, []);

  // Synchronized scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      // Delay reset slightly to match the page 'exit' animation (fade + blur)
      // This prevents the 'jump' while the old page is still visible
      const timeoutId = setTimeout(() => {
        lenisRef.current?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
      }, 300); // Half of the 0.6s transition
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  return null;
};

export default SmoothScroll;
