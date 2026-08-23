# WRI 2027 HH — clone runbook

Step-by-step for forking this repo (`wri2026hh`) into `wri2027hh`.
Companion to [`cloning-for-next-year.md`](./cloning-for-next-year.md),
which explains the three lifecycle phases and the file-level detail of
the pre/post-conference flip. This document is the ordered checklist.

Cvent-side steps mirror the Notion page **WRI 2026 Websites General
Info → Annual WRI website reset** (Phases 1–5). Graphics come from
**WRS 2026-7 Marketing Plan → 2027 Graphics**.

Written 2026-08-23, from the state of `dev` at commit `262d141`.

---

## Before you start

- `main` and `dev` are identical and fully pushed. Clone from either.
- **Repo size is the thing to watch.** `.git` is 446 MB and `public/`
  is 682 MB. The bulk is `public/pdfs` (393 MB of 2025 + 2026
  presentation decks, all tracked — the largest single file is 92 MB).
  Carrying that into 2027 compounds it again in 2028. The clone
  procedure below starts fresh history and prunes the decks.
- **Confirm the 2027 HH city before doing any `Dallas` swap.** The
  venue was not confirmed at the time of writing — see the 2027
  Graphics page in Notion for the current concepts.
- Rotate the `wrs-dev` GitHub password and keep it in a password
  manager rather than in workspace notes.

---

## 1. Clone locally

```sh
mkdir -p ~/Developer/2027
cd ~/Developer/2027
git clone --depth 1 --branch main https://github.com/wrs-dev/wri2026hh.git wri2027hh
cd wri2027hh
rm -rf .git out .next node_modules
```

`--depth 1` plus `rm -rf .git` gives the current tree with zero
inherited history. That is what stops the annual clone from
compounding.

To keep history instead: drop `--depth 1`, skip the `rm -rf .git`, and
`git remote set-url origin <new repo>`. You inherit the full 446 MB.

## 2. Prune before the first commit

```sh
# Old presentation decks. 2025 has no place on the 2027 site;
# 2026 stays live on the 2026 site.
rm -rf public/pdfs/2025 public/pdfs/2026

# 2026 recap gallery (6.9 MB) — 2027 will get its own after the event
rm -rf public/26-gallery

# Superseded agendas and sponsorship kits
rm -f public/WRI2025-HH-Agendas-KC*.pdf \
      public/WRI-2025-Sponsorship-Kit.pdf \
      public/2024-Final-Sponsorship-kit.pdf

# Stale Rive animations and the Chicago banner video
rm -f public/25RT_header.riv public/wri2025HH_header.riv \
      public/wri2025RT_header.riv public/wri2026HH_header.riv \
      public/wri_2026_hh.riv
rm -f public/video/chicago-skyline-1280x544-optimized.mp4
```

Also fix, in the clone:

- `package.json` — `"name"` is still `"wri2024"`. Set it to
  `"wri2027hh"`.
- Confirm `.gitignore` carries the `out/` and `*.mov` rules (added to
  the 2026 repo alongside this doc, so a fresh clone should have
  them). The `*.mov` rule exists because `public/video/wri-recap.mov`
  is 224 MB — well over GitHub's 100 MB per-file limit. Large video
  masters belong in Drive, not the repo; optimized web derivatives
  such as `public/video/*-optimized.mp4` are fine to commit.

## 3. Create the GitHub repo

```sh
git init -b main
git add -A
git commit -m "Initial commit: fork of wri2026hh as WRI 2027 HH foundation"
gh repo create wrs-dev/wri2027hh --private --source=. --push
git checkout -b dev && git push -u origin dev
```

Keep the two-branch convention: `main` is production, `dev` deploys to
the Netlify dev site.

`--private` is deliberate. `wri2026hh` is public, which means anything
committed under `docs/` is world-readable — keep unannounced venues,
discount codes, and credentials in Notion regardless.

Copy `.env.local` across by hand — it is gitignored and holds six keys
(three Storyblok, three MailerLite).

## 4. Netlify

1. New site from the `wri2027hh` repo. Build command `npm run build`,
   publish directory `out` — both already set in `netlify.toml`.
2. Production branch `main`; enable branch deploys for `dev`, giving
   `wri2027hh-dev.netlify.app`.
3. Re-add all six env vars from `.env.local`.
4. Custom domain `wri2027hh.wheel-rail-seminars.com`, per the
   `wri + [year] + hh` convention in Notion.
5. **Turn on form collection.** The footer subscribe form depends on
   it and it is an easy miss on a new site.
6. Confirm `netlify/functions/fetch-rss.js` deploys as a function.

## 5. Roll the site back to pre-conference phase

The 2026 repo sits in its post-conference (recap) state, so the flip
has to be reversed. Full detail in `cloning-for-next-year.md`; the
short version:

```sh
git mv src/pages/index.js src/pages/recap.js   # park the 2026 recap page
git mv src/pages/home.js src/pages/index.js    # pre-conference page back to /
```

In `src/components/navigation/index.js`:

- Drop the "Recap" link and point "Home" back at `/`
  (desktop ~lines 67 and 76, mobile ~327 and 333).
- Uncomment the four blocks marked
  `Hidden post-event — restore for future clones`
  (~238, 264, 395, 415) and change `/home#register` → `/#register`
  and `/home#hotel` → `/#hotel`.

Then apply the Notion **Phase 1** new-cycle state — hide these until
2027 content exists:

- Sections: Call for Papers, Registration, SponsorCTA2, Hotel.
  (Sponsor Cloud can stay; it links to the previous site's sponsors
  page.)
- Nav links: Pricing, Sponsors, InfoZone, Hotel.
- Swap active speaker buttons for their inactive versions.
- Use the no-button banner variant (`wri27HH-no-button.js` after the
  rename in step 6) so the banner register button is suppressed.
- Hide sponsors in the masthead.
- Hide links in the ExpoZone and InfoZone sections.
- Footer: drop the oldest city reference, add WRI 2027 + its city.

## 6. Year sweep

56 files under `src/` contain `2026`. Review each hit rather than
blind-replacing — some references are deliberately historical.

| Search string | Scope |
| --- | --- |
| `2026`, `WRI 2026` | 56 files |
| `wri2026`, `wri2026hh` | 19 files, including the Plausible domain at `src/pages/_app.js:81` |
| `26HH`, `2026HH` | 23 files — banner components and gallery filenames |
| `April 22`, `April 22-24`, `April 22&ndash;24` | 22 files — every pricing card, registration, hotel |
| `Dallas` | 9 files plus the footer |
| `/26-gallery/` | 1 file |

Renames:

- `src/components/banner/wri26HH.js` → `wri27HH.js`
- `src/components/banner/wri26HH-no-button.js` → `wri27HH-no-button.js`
- `src/data/{bios-abstracts-hh,bios-abstracts-pc,speakers-hh,speakers-pc}-2026.js` → `-2027.js`
- `scripts/create-2026-data.js` → `create-2027-data.js`

Update `CLAUDE.md` (project description is 2026-specific) and
`README.md`.

## 7. Assets

Already produced for HH on the Notion **2027 Graphics** page:

- Masthead — `27HHRT-BW-no-tagline.png`,
  `27HH-White-transparent-no-tagline.png`,
  `27HHRT-BW-White-BKGND-no-tagline.png`
- Banner — `final-concept-no-sponsors-2500.png` (print),
  `-1250.png` (web), `-600.png` (mail)
- LinkedIn event graphic — `wri2027-hh-linkedin-event-1600x900.png`

Still to be produced:

- `wri2027HH_header.riv` — the Rive header animation
- `wri2027-hh-social.png` — the social/OG image referenced from every
  page's `getStaticProps`
- A new city skyline video, if the video banner is kept

## 8. Cvent

Do this after the site scaffold exists. Notion Phases 2–5.

**Clone the event.** Set WRI 2026 HH to Completed. Events list →
**Actions > Copy** → name it *WRI 2027 HH* → leave status **Pending**.
Copy registration settings and paths, emails, website, agenda,
speakers, and the invitee list. Do not copy reports, actual invitees,
or custom data tags.

**Immediately deactivate every email** under Email > Event Emails
except the Registration Confirmation. Copied emails arrive Active,
including scheduled and trigger-based ones.

**Wire the new event into the site.**

1. New embed script ID into `src/components/CventWidget.js:12`
   (2026's is `e58e08b6-a1a7-4e68-b038-907b70ba44f4`).
2. Update every sponsor package button with the new Cvent weblinks —
   `src/components/sponsors/sponsorPackages.js` and
   `src/pages/sponsor-packages.js`.
3. Cvent-side content: registration page header graphic and meta tags,
   header titles (dates), the refunds fine print on the second
   registration page, sponsor descriptions (dates), and the email
   header/footer graphics.

**Phase 4 gotcha — discount codes.** They stay invisible on the
registration page unless enabled per path: Registration >
Registration Process > Open Site Designer > gear icon next to the
path > Basic Settings > *Allow registrants to use discount codes* >
Apply > Save and Publish. **Repeat for every registration path.**
Then add the offline-sponsor code and any early-bird codes (see
Annual WRI website reset, Phase 4, in Notion for the code names).

**Phase 5 gotcha — virtual registration.** It does not carry over
active from a cloned event; 2026 HH never had it enabled, so a clone
of 2026 HH definitely will not. If 2027 HH offers virtual:

1. Confirm a Virtual registration type exists and is active
   (Details > Registration Types).
2. Confirm the virtual admission items are open and scoped to the
   Virtual type. This is where virtual silently fails to appear.
3. In `src/components/registration/index.js`, un-comment the Virtual
   Column block; change `xl:grid-cols-1` → `xl:grid-cols-2` on the
   grid wrapping Virtual + Student, and drop `xl:w-1/2 xl:mx-auto`
   from the Student column.
4. Update dates in `src/components/pricing-virtual-individual/index.js`
   and `src/components/pricing-virtual-multi/index.js` — they carry
   stale dates from the clone.
5. Keep Cvent pricing and the site's pricing cards in sync.

**Test.** Actions > Perform Test, with a full checkout using test card
numbers, on each registration type.

## 9. Mid-cycle: the post-conference flip

About a week after the 2027 event, reverse step 5: swap `index.js` and
`home.js` back, hide Pricing and Hotel in the nav, drop the new gallery
photos into `public/27-gallery/`, and update the sponsor rosters. See
`cloning-for-next-year.md` for the file-level detail, and update both
documents as you go so 2028 inherits accurate notes.
