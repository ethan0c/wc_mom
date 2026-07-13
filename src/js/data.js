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
          'The anthem lasted less than a minute. Some of the players were still wiping their eyes when the whistle went, playing in a World Cup their country had never reached in its history.',
        media: 'photo',
      },
      {
        minute: "34'",
        title: 'The wall goes up',
        caption:
          'By the half hour Spain had settled into their usual rhythm, and Vozinha had already made four saves. There would be eleven by the end of the night.',
        media: 'video',
      },
      {
        minute: "71'",
        title: 'Chance at the other end',
        caption:
          'A counter out of nothing. Three passes carried the ball eighty yards, and for a few seconds it was Spain, of all teams, sprinting back toward their own goal.',
        media: 'photo',
      },
      {
        minute: "90+3'",
        title: 'The last save',
        caption:
          'Stoppage time, one final cross, one glove getting there first. When it ended 0–0, the Spanish players stood around like men who had lost something on the way to the stadium.',
        media: 'video',
      },
      {
        minute: 'R16',
        title: 'Into the knockouts',
        caption:
          'No nation this small had ever reached a World Cup knockout round. Against Argentina they were level at two going into extra time, and closer than the 3–2 suggests.',
        media: 'photo',
      },
      {
        minute: 'FT',
        title: 'Morna on the terraces',
        caption:
          'Long after the whistle, the Cape Verdean end was still full. Somebody had a guitar. They sang until the stadium staff gave up asking them to leave.',
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
        'The markets had Spain somewhere around 92 percent to win this match. Football has never much cared what the markets think.',
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
          'Nobody talked much about Paraguay in the group stage, which suited Paraguay fine. Two clean sheets, second place, and a round-of-16 date with Germany that most people wrote off on sight.',
        media: 'photo',
      },
      {
        minute: "22'",
        title: 'Backs to the wall',
        caption:
          'The shape was set inside ten minutes: two lines of four, camped on the edge of their own box, inviting Germany to try again. And again.',
        media: 'photo',
      },
      {
        minute: "78'",
        title: 'The double save',
        caption:
          "Point-blank, twice, in the space of about three seconds. There isn't a coaching manual anywhere that explains the second one.",
        media: 'video',
      },
      {
        minute: "120'",
        title: 'Still 0–0',
        caption:
          'Germany finished extra time with twenty-seven shots. Somewhere in the second half you could see it dawning on them that none of these were going in either.',
        media: 'photo',
      },
      {
        minute: 'PENS',
        title: 'Garra Guaraní',
        caption:
          'A dive to the left on Germany’s third kick. Then the fifth Paraguayan penalty, struck low and without a flicker of doubt, and the bench emptying before it hit the net.',
        media: 'video',
      },
      {
        minute: 'QF',
        title: 'One goal from France',
        caption:
          'The quarter-final turned on the one moment they couldn’t cover, which is how these runs usually end. 1–0, and out with nothing to apologize for.',
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
        'A squad worth a fraction of Germany’s, holding a quarter of the ball, winning the only column that counts.',
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
          'The last time this country played at a World Cup, it was 1974 and the shirts said Zaire. Half a century of waiting walked out of the tunnel together.',
        media: 'photo',
      },
      {
        minute: "1H",
        title: 'The blitz',
        caption:
          'Nine shots inside the first half hour. Portugal’s back line, one of the most expensive ever assembled, spent most of it running toward its own goal.',
        media: 'video',
      },
      {
        minute: "58'",
        title: 'The goal it deserved',
        caption:
          'It had been coming for an hour. A cutback from the byline, a first-time finish, and a noise you could probably hear in Kinshasa.',
        media: 'video',
      },
      {
        minute: "81'",
        title: 'Against the run',
        caption:
          'Portugal’s first real attack of the second half went in, because of course it did. One chance, one goal, everything the previous eighty minutes said couldn’t happen.',
        media: 'photo',
      },
      {
        minute: 'FT',
        title: 'Level, and not',
        caption:
          'It finished 1–1. Ask the shot count, the box touches or the expected goals who won, and you get a different answer than the scoreboard gives you.',
        media: 'photo',
      },
      {
        minute: 'AFTER',
        title: 'The proof',
        caption:
          'This is the whole argument in ninety minutes. You can measure a football match down to the centimeter and still have no idea what it is going to do.',
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
        'The one game where the underdog actually won the numbers — and the numbers still got the result wrong.',
    },
  },
];
