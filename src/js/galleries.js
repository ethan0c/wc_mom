import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './smooth.js';

gsap.registerPlugin(ScrollTrigger);

// Pin each gallery and translate its track horizontally as the user scrolls.
export function setupGalleries() {
  if (prefersReducedMotion) return; // CSS falls back to a scrollable row

  document.querySelectorAll('.gallery').forEach((gallery) => {
    const track = gallery.querySelector('.track');
    const bar = gallery.querySelector('.gallery-progress i');
    const distance = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: gallery,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${distance()}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          bar.style.transform = `scaleX(${self.progress})`;
        },
      },
    });
  });
}
