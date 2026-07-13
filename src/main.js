import './styles/base.css';
import './styles/home.css';
import './styles/capeverde.css';
import './styles/paraguay.css';
import './styles/drcongo.css';
import './styles/outro.css';

import { stories } from './js/data.js';
import { initSmoothScroll } from './js/smooth.js';
import { setupGalleries } from './js/galleries.js';
import { setupReveals } from './js/reveals.js';

// ---------- render moment galleries from data ----------
function renderGalleries() {
  document.querySelectorAll('.gallery[data-story]').forEach((gallery) => {
    const story = stories.find((s) => s.id === gallery.dataset.story);
    if (!story) return;

    const track = gallery.querySelector('.track');
    track.innerHTML = story.moments
      .map(
        (m) => `
      <figure class="moment" data-media="${m.media}">
        <div class="moment-frame">
          <span class="moment-min">${m.minute}</span>
          <span class="moment-media-hint">${m.media === 'video' ? 'Clip placeholder' : 'Photo placeholder'}</span>
        </div>
        <figcaption>
          <h4>${m.title}</h4>
          <p>${m.caption}</p>
        </figcaption>
      </figure>`
      )
      .join('');
  });
}

// ---------- render "the numbers vs the night" scoreboards ----------
function renderScoreboards() {
  document.querySelectorAll('.scoreboard[data-story]').forEach((board) => {
    const story = stories.find((s) => s.id === board.dataset.story);
    if (!story) return;

    const { match } = story;
    const rows = match.stats
      .map(
        (s) => `
      <div class="score-row">
        <div class="score-side them">
          <b class="count" data-to="${s.them}" data-unit="${s.unit}" data-decimals="${s.decimals ?? 0}">0</b>
          <span>${match.opponent}</span>
        </div>
        <div class="score-label">${s.label}</div>
        <div class="score-side us">
          <b class="count" data-to="${s.us}" data-unit="${s.unit}" data-decimals="${s.decimals ?? 0}">0</b>
          <span>${story.name}</span>
        </div>
      </div>`
      )
      .join('');

    board.innerHTML = `
      <div class="scoreboard-inner">
        <p class="score-billing">${match.billing}</p>
        <h3 class="score-head">The numbers vs the night</h3>
        <div class="score-rows">${rows}</div>
        <p class="score-verdict">${match.verdict}</p>
      </div>`;
  });
}

// ---------- Cape Verde: ring of ten stars (as on the flag) ----------
function renderStarRing() {
  const ring = document.querySelector('.cv-stars-ring');
  if (!ring) return;

  const STAR =
    'M0 -10 2.25 -3.09 9.51 -3.09 3.63 1.18 5.88 8.09 0 3.82 -5.88 8.09 -3.63 1.18 -9.51 -3.09 -2.25 -3.09Z';
  const CX = 200;
  const CY = 200;
  const R = 170;

  ring.innerHTML = Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const x = (CX + R * Math.cos(angle)).toFixed(1);
    const y = (CY + R * Math.sin(angle)).toFixed(1);
    return `<path d="${STAR}" transform="translate(${x} ${y})" />`;
  }).join('');
}

renderGalleries();
renderScoreboards();
renderStarRing();

initSmoothScroll();
setupGalleries();
setupReveals();
