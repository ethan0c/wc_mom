import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './smooth.js';

gsap.registerPlugin(ScrollTrigger);

// accent color applied to the fixed nav dots while each zone is active
const ZONE_ACCENTS = {
  home: '#ffb84d',
  capeverde: '#f7d116',
  paraguay: '#d52b1e',
  drcongo: '#f7d618',
  outro: '#c9a227',
};

export function setupReveals() {
  setupSplashes();
  setupNarratives();
  setupCounters();
  setupZoneMorph();
}

// grand hero entrance, played once the loader lifts away
export function buildHomeIntro() {
  if (prefersReducedMotion) {
    document
      .querySelectorAll('.ticker-real')
      .forEach((el) => gsap.set(el, { opacity: 1, x: 0 }));
    document
      .querySelectorAll('.ticker-pred')
      .forEach((el) => el.classList.add('is-struck'));
    return null;
  }

  const tl = gsap.timeline({ paused: true });

  tl.from('.home-kicker, .home-title-line, .home-thesis', {
    y: 70,
    opacity: 0,
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.14,
  })
    .from(
      '.home-ticker, .scroll-cue',
      { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    )
    .addLabel('ticker', '-=0.2');

  const rows = gsap.utils.toArray('.ticker-row');
  rows.forEach((row) => {
    const strike = row.querySelector('.ticker-pred');
    const real = row.querySelector('.ticker-real');
    tl.add(() => strike.classList.add('is-struck'))
      .fromTo(
        real,
        { opacity: 0, x: 8 },
        { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' },
        '+=0.2'
      )
      .to({}, { duration: 0.3 }); // beat between rows
  });

  return tl;
}

function setupSplashes() {
  document.querySelectorAll('.splash').forEach((splash) => {
    const items = splash.querySelectorAll(
      '.splash-kicker, .splash-name, .splash-sub, .chips li'
    );
    if (prefersReducedMotion) return;

    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: splash, start: 'top 65%', once: true },
    });
  });
}

function setupNarratives() {
  document.querySelectorAll('.narrative').forEach((block) => {
    if (prefersReducedMotion) return;

    gsap.from(block.querySelectorAll('.line'), {
      y: 36,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.25,
      scrollTrigger: { trigger: block, start: 'top 65%', once: true },
    });
  });
}

function setupCounters() {
  document.querySelectorAll('.count').forEach((el) => {
    const to = parseFloat(el.dataset.to);
    const decimals = Number(el.dataset.decimals || 0);
    const unit = el.dataset.unit || '';
    const render = (v) => {
      el.textContent = v.toFixed(decimals) + unit;
    };

    if (prefersReducedMotion) {
      render(to);
      return;
    }

    const state = { v: 0 };
    gsap.to(state, {
      v: to,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => render(state.v),
    });
  });
}

// morph body background/ink between zones; keep nav dots in sync
function setupZoneMorph() {
  const dots = document.querySelectorAll('#dots a');

  document.querySelectorAll('.zone').forEach((zone) => {
    const { bg, ink } = zone.dataset;
    const accent = ZONE_ACCENTS[zone.id] ?? '#c9a227';

    ScrollTrigger.create({
      trigger: zone,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (!self.isActive) return;

        gsap.to('body', {
          backgroundColor: bg,
          color: ink,
          duration: prefersReducedMotion ? 0 : 0.6,
          ease: 'power1.inOut',
          overwrite: 'auto',
        });
        document.documentElement.style.setProperty('--accent', accent);

        dots.forEach((dot) =>
          dot.classList.toggle('active', dot.dataset.section === zone.id)
        );
      },
    });
  });
}
