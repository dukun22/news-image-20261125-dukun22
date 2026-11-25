[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/dukun22/news-image-20261125-dukun22/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/dukun22/news-image-20261125-dukun22/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# The World Today — 25 November 2026

My entry for the [make.fun bounty "Sum up 25 November's world news in one image"](https://make.fun/bounty/news-image-20261125): a one-page newspaper poster that sums up Wednesday 25 November 2026 in six stories, drawn fresh for this day.

## The day in six stories

1. **Trump set to unveil new tariffs after probe** — Washington is poised to release Section 301 findings on excess industrial capacity in 16 major trading partners, including China and the EU. Asian stocks tumbled.
2. **China probes Politburo member Chen Jining** — Shanghai's party chief under investigation; the fourth Politburo member probed since 2025.
3. **Rescuers search for ~30 trapped miners in Indonesia** — workers trapped 100 metres deep in an unauthorised gold mine in Pongkor, Bogor, West Java.
4. **Putin vows retaliation for refinery strikes** — at a Kremlin meeting, Putin said Ukraine keeps striking Russian oil refineries and promised Russia will respond.
5. **Ukraine claims Sparta II ship strike** — Zelensky confirmed a Ukrainian drone hit the Russian ship Sparta II in the Gulf of Finland on 21 November.
6. **IRGC claims 3 more tankers hit mines in Hormuz** — an unverified claim: no ships were named, and maritime monitors say the mine claims are unconfirmed.

All stories were verified against Reuters, Xinhua and IRNA reporting.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, after checking the PNG signature and that the file is at most 1 MiB. It runs with no network and writes the same bytes on every run.

Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Built with make.fun — try it with my referral code `0y8y43sq`: https://make.fun/r/0y8y43sq
