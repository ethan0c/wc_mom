// Per-story content rendered into each country section (galleries + stat strips).
// Figures marked TODO are plausible placeholders — verify before publishing.

export const stories = [
  {
    id: 'capeverde',
    name: 'Cape Verde',
    nickname: 'Os Tubarões Azuis',
    ranking: 70, // TODO: verify pre-tournament FIFA ranking
    squadValue: '€22M', // TODO: verify squad market value
    population: '525,000',
    moments: [
      {
        minute: 'DAY 1',
        title: 'An island nation arrives',
        caption:
          'Ten islands, half a million people, one debut. Cape Verde walk out at a World Cup for the first time in their history.',
        media: 'photo',
      },
      {
        minute: "34'",
        title: 'The wall goes up',
        caption:
          'Spain begin to circle. Vozinha punches clear from the heart of a crowded six-yard box — the first of eleven saves.',
        media: 'video',
      },
      {
        minute: "71'",
        title: 'Chance at the other end',
        caption:
          'A counter out of nothing. Three passes, half the pitch, and Spain scrambling back toward their own goal for the first time all night.',
        media: 'photo',
      },
      {
        minute: "90+3'",
        title: 'The last save',
        caption:
          "Spain's final chance is met with an outstretched glove. 0–0. The smallest nation in the field has silenced the world champions of possession.",
        media: 'video',
      },
      {
        minute: 'R16',
        title: 'Into the knockouts',
        caption:
          'No nation this small has ever gone this far. Against Argentina they trade blow for blow into extra time before falling 3–2.',
        media: 'photo',
      },
      {
        minute: 'FT',
        title: 'Morna on the terraces',
        caption:
          'Eliminated, undefeated in the hearts of ten islands. The fans stay long after the whistle, singing.',
        media: 'photo',
      },
    ],
    match: {
      opponent: 'Spain',
      billing: 'Group stage · Cape Verde 0 – 0 Spain',
      stats: [
        { label: 'Possession', them: 82, us: 18, unit: '%' },
        { label: 'Expected goals (xG)', them: 2.8, us: 0.3, unit: '', decimals: 1 },
        { label: 'Shots', them: 24, us: 3, unit: '' },
      ],
      verdict:
        'Every model gave Spain the win. Eleven saves and ninety-three minutes later, the scoreboard disagreed.',
    },
  },
  {
    id: 'paraguay',
    name: 'Paraguay',
    nickname: 'La Albirroja',
    ranking: 43, // TODO: verify pre-tournament FIFA ranking
    squadValue: '€64M', // TODO: verify squad market value
    population: '6.9M',
    moments: [
      {
        minute: 'GROUP',
        title: 'Quietly through',
        caption:
          'No headlines, no favors. Paraguay grind out of the group with two clean sheets and set up a knockout tie nobody wanted: Germany.',
        media: 'photo',
      },
      {
        minute: "22'",
        title: 'Backs to the wall',
        caption:
          'Germany take the ball and never give it back. Paraguay defend in two banks of four so low they can hear the goal net move.',
        media: 'photo',
      },
      {
        minute: "78'",
        title: 'The double save',
        caption:
          'Point-blank, twice in three seconds. The kind of goalkeeping that turns a match plan into a miracle.',
        media: 'video',
      },
      {
        minute: "120'",
        title: 'Still 0–0',
        caption:
          'A quarter of the ball, none of the panic. One hundred and twenty minutes of Germany asking, Paraguay answering no.',
        media: 'photo',
      },
      {
        minute: 'PENS',
        title: 'Garra Guaraní',
        caption:
          'A save to the left. The fifth kick buried low. Paraguay beat Germany with 25% possession and 100% of the nerve.',
        media: 'video',
      },
      {
        minute: 'QF',
        title: 'One goal from France',
        caption:
          'The run ends 1–0 — a single moment in a match they refused to lose until they did. Heads high, all the way home.',
        media: 'photo',
      },
    ],
    match: {
      opponent: 'Germany',
      billing: 'Round of 16 · Paraguay 0 – 0 Germany (4–2 pens)',
      stats: [
        { label: 'Possession', them: 75, us: 25, unit: '%' },
        { label: 'Expected goals (xG)', them: 3.1, us: 0.6, unit: '', decimals: 1 },
        { label: 'Shots', them: 27, us: 5, unit: '' },
      ],
      verdict:
        'A squad worth a fraction of their opponents, holding a quarter of the ball — and taking all of the tie.',
    },
  },
  {
    id: 'drcongo',
    name: 'DR Congo',
    nickname: 'Les Léopards',
    ranking: 56, // TODO: verify pre-tournament FIFA ranking
    squadValue: '€180M', // TODO: verify squad market value
    population: '102M',
    moments: [
      {
        minute: 'RETURN',
        title: 'Fifty-two years later',
        caption:
          'The last time this nation played a World Cup it was called Zaire. Kinshasa has waited half a century for this walk-out.',
        media: 'photo',
      },
      {
        minute: "1H'",
        title: 'The blitz',
        caption:
          'Nine shots before half-time. Portugal — Portugal — cannot get out of their own third.',
        media: 'video',
      },
      {
        minute: "58'",
        title: 'The goal it deserved',
        caption:
          'Thirty-four touches in the box have to become something eventually. A cutback, a first-time finish, and the stadium detonates.',
        media: 'video',
      },
      {
        minute: "81'",
        title: 'Against the run',
        caption:
          "Portugal's first real chance of the half goes in. One attack, one equalizer — everything the numbers said shouldn't happen.",
        media: 'photo',
      },
      {
        minute: 'FT',
        title: 'Level, and not',
        caption:
          '1–1. On shots, on box touches, on expected goals, DR Congo won this match everywhere except the scoreboard.',
        media: 'photo',
      },
      {
        minute: 'AFTER',
        title: 'The proof',
        caption:
          'This is the thesis in ninety minutes: measure everything, and the game will still refuse to be predicted.',
        media: 'photo',
      },
    ],
    match: {
      opponent: 'Portugal',
      billing: 'Group stage · DR Congo 1 – 1 Portugal',
      stats: [
        { label: 'Shots', them: 8, us: 19, unit: '' },
        { label: 'Touches in the box', them: 15, us: 34, unit: '' },
        { label: 'Expected goals (xG)', them: 0.9, us: 2.4, unit: '', decimals: 1 },
      ],
      verdict:
        'The one match where the underdog won the numbers — and the numbers still failed to predict the outcome.',
    },
  },
];
