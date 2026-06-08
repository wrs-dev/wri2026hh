# Cloning this repo for the next year's conference

This site cycles through three lifecycle phases each year. The 2026
repo (`wri2026hh`) currently sits in the **post-conference** phase.
When you clone it to start the 2027 cycle (`wri2027hh`), you'll need
to roll it back to the **pre-conference** phase and then update content.

## The three lifecycle phases

1. **Pre-conference** &mdash; home page promotes the upcoming event:
   banner, countdown/registration, hotel, sponsors, etc. Nav shows
   Pricing and Hotel links.
2. **During the event** &mdash; same site, just a frozen content
   moment. No structural changes typically required.
3. **Post-conference (recap)** &mdash; landing page becomes a "Thank
   You" recap with photo gallery + lightbox. Pre-conference home moves
   to `/home`. Pricing and Hotel nav links are hidden.

## Files involved in the post-conference flip

These are the changes that were made in this repo to flip from
phase 1 to phase 3. To restore phase 1 in a fresh clone, **reverse**
each of them.

### Page files

- `src/pages/index.js` &mdash; recap content (Thank You hero,
  presenting sponsors, full sponsor tiers, InfoZone partners, photo
  grid with lightbox).
- `src/pages/home.js` &mdash; the original pre-conference landing
  content (banner, registration, hotel, sponsors cloud, etc.).

To restore the pre-conference state:

```sh
# Make the pre-conference page the homepage again
git mv src/pages/index.js src/pages/recap.js
git mv src/pages/home.js src/pages/index.js
```

The `recap.js` filename here is what we used originally before the
swap; nothing is hard-coded to that name.

### Navigation (`src/components/navigation/index.js`)

Two changes were made:

1. **Link labels and targets.** The nav now has both a "Recap" link
   (`href="/"`) and a "Home" link (`href="/home"`). For 2027 pre-event,
   drop the "Recap" link and point "Home" back at `/`.
2. **Pricing and Hotel are commented out** with the marker
   `Hidden post-event — restore for future clones` (search for that
   string). Their `href` values were also changed from `/#register` /
   `/#hotel` to `/home#register` / `/home#hotel`. For 2027 pre-event:
   uncomment them and change the hrefs back to `/#register` and
   `/#hotel` (since the pre-conference page will be at `/` again).

### Photo gallery assets

`public/26-gallery/2026HH-gallery-{1..50}.webp` &mdash; conference
photos used by the recap gallery. For 2027 these will be replaced
with new images (likely under `public/27-gallery/`) and the path /
filename pattern in `src/pages/index.js` (recap file) updated.

### Mid-cycle content swap

For the 2027 cycle, the typical timeline is:

| When | Action |
| --- | --- |
| Right after cloning | Restore pre-conference state (see above), update year refs from 2026 &rarr; 2027, swap dates/venue, replace banners and social images. |
| ~1 week after the 2027 event | Re-do the post-conference flip: swap `index.js` &harr; `home.js`, hide Pricing/Hotel in nav, drop in new gallery photos, update sponsor lists if needed. |

## Recap page details (for reference)

`src/pages/index.js` (the recap page) is self-contained:

- Imports `SponsorPage` for the full tiered sponsor list &mdash; that
  component already pulls from its own sponsor data arrays, so it
  stays in sync if you only update sponsors there.
- Has its own `presentingSponsors` and `infoZonePartners` arrays at
  the top of the file. Update logo paths there if those rosters change.
- `galleryImages` is generated from a count constant: change
  `Array.from({ length: 50 }, ...)` and the path pattern when swapping
  to a new year's gallery.
- The lightbox is inline in the same file (no external dependency)
  and uses `@heroicons/react/24/outline` icons already in the project.

## Year-string search list

When cloning for 2027, do a project-wide find for the literal strings
below to catch lingering 2026 content:

- `2026` and `WRI 2026`
- `wri2026` and `wri2026hh`
- `April 22` / `April 22-24` / `April 22&ndash;24`
- `Dallas` (if the 2027 venue changes)
- `26HH` and `2026HH` (the latter appears in gallery filenames)
- `/26-gallery/`

`CLAUDE.md` has the project description with 2026-specific text that
will need updating as well.
