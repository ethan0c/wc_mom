MOMENTS OF MADNESS — 2026 WORLD CUP
Fintech recruiting portfolio project

PURPOSE
Both a storytelling site and a quantified analysis project aimed primarily at Capital One (Pinterest as a reach, Apple as a moonshot), built as a referral-generation tool. The differentiator is a computed "madness score," not just narrative write-ups. Without a defined formula this collapses into a highlight reel with no engine — a pretty wrapper around personal football memory, not defensible to a technical/fintech audience.

THE FORMULA
Madness score = pre-match win probability delta MINUS actual outcome, weighted by match stage and squad value gap

Inputs needed per story:
- Pre-tournament squad market value (Transfermarkt)
- FIFA ranking / Elo rating at tournament start
- Pre-match win probability (source not yet chosen — see open problem below)
- Actual result and progression relative to expectation

OPEN PROBLEM — UNRESOLVED
No defined data source for pre-match win probabilities. Squad value and FIFA ranking are easy to pull. Win probability is the hard piece — without it, only half the formula (outcome vs. ranking) is computable.
Two options:
1. Find a real source — Opta, a 538-style model, or betting-market implied probability
2. Redefine the score using only ranking/value gap vs. result — weaker, but shippable

This decision has to happen today. Everything downstream depends on it.

THE FOUR STORIES

1. CAPE VERDE
Gap: massive underdog vs Spain
Result: 0-0 draw, reached knockouts as tournament debutant
What the score shows: spikes on a non-win — proves the metric isn't just tracking who won

2. PARAGUAY
Gap: below Germany
Result: win via penalty shootout, 25% possession
What the score shows: should be extreme — result inverted possession/quality entirely

3. SWITZERLAND
Gap: moderate underdog
Result: reached quarterfinals, lost to Argentina in extra time
What the score shows: sustained overperformance across multiple matches, not one fluke

4. DR CONGO
Gap: big underdog vs Portugal
Result: draw, but won on underlying stats — shots, box touches
What the score shows: the case where the metric and the eye test agree — outcome and performance both beat expectation

TIMELINE (today = Monday, final = Sunday July 19)

MON (today)
- Lock the win-probability data source decision — nothing else is real without this
- Pull ranking, squad value, and result data for all 4 stories

TUE
- Build and test the madness score formula on all 4 stories
- Sanity check against intuition: does Paraguay actually score highest? If not, the formula is wrong, not your instinct

WED
- Site structure and stack decision (still open)
- Data schema

THU–FRI
- Build pages, one story at a time

SAT
- Deploy, fix production issues

SUN
- Buffer only — not a work day if the plan held

STILL OPEN
- Win-probability data source (blocking)
- Stack: plain HTML/CSS/JS vs React (blocking site build, not blocking data work)