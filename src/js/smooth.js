import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

export function initSmoothScroll() {
  if (prefersReducedMotion) return null;

  const lenis = new Lenis({ lerp: 0.1 });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // route anchor links through lenis so smooth scroll owns the jump
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      lenis.scrollTo(link.getAttribute('href'), { duration: 1.6 });
    });
  });

  return lenis;
}
