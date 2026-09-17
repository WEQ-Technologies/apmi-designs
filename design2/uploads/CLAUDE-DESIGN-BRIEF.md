# APMI Homepage — Design Specification

Use this file in Claude Design to produce a **real, shippable homepage** for the Association of Portfolio Managers in India.

Do not invent a different organisation, a different product, or a different colour world.

If the result does not clearly show **navy** and **APMI blue**, it has failed. Stop and redo.

---

## Pass / fail (read this first)

The design **fails** if any of these are true:

- The page is not recognisable as APMI (Association of Portfolio Managers in India).
- Navy `#132B48` is missing from the header, hero, or footer.
- APMI blue `#3075BB` is missing from primary buttons and links.
- Light blue `#A7D4EC` is missing as a surface or highlight.
- The logo is recolored, redrawn, or replaced.
- Copy is rewritten into slogans, or new features/pages are invented.
- Gold, orange, green, purple, cream, beige, or black is used as a main colour.
- The page looks like a consumer app, a magazine, or an unrelated brand.

The design **passes** only if:

- It is a professional industry-association website that could go live.
- Navy and blue are the first colours a viewer notices.
- Every content block listed below is present and readable.
- Desktop and mobile both work as a normal website.

---

## 1. What this is

Official public homepage for **Association of Portfolio Managers in India (APMI)**.

APMI is the industry body for **SEBI-registered portfolio managers**. It publishes circulars, reports, membership information, and industry conversations.

This is not a startup landing page. It is a working website with navigation, login, documents, and contact details.

**Do not change these words:**

- Heading: `Advancing trust in portfolio management.`
- Intro: `APMI is the unified voice of SEBI-registered portfolio managers—promoting high standards, informed participation and responsible industry growth.`
- Badge: `India's portfolio management industry association`

---

## 2. Colour system (mandatory)

Use **only** these colours. Percentages are of the visible page, not of a mood board.

### Brand colours — must dominate

| Name | Hex | Where it must appear |
|---|---|---|
| Navy | `#132B48` | Header text or header bar, hero background, footer background, main headings on light sections |
| APMI Blue | `#3075BB` | Primary buttons, text links, active nav, selected filter, key icons |
| Light blue | `#A7D4EC` | Hero accent, portal tiles, insight/section tints, hover washes |
| Cyan | `#00708E` | Secondary labels, eyebrow text, small rules. Not the main fill |

### Neutrals — supporting only

| Name | Hex | Use |
|---|---|---|
| White | `#FFFFFF` | Page canvas, cards, form fields |
| Ice | `#F3F7FB` | Alternating section background (this is a blue-tinted white, not cream) |
| Slate | `#5A6F82` | Body text on white. Do not use pure gray |
| Line | `#C5D6E8` | Dividers and input borders |

### Colour placement (do not ignore)

1. **Hero** = full-width Navy `#132B48`. White heading. Light-blue `#A7D4EC` accent line or badge. Primary button = APMI Blue `#3075BB` with white label.
2. **Header** = White or Ice. Logo on the left. Nav in Navy. **Member login** button = APMI Blue.
3. **Footer** = Navy `#132B48`. Links in Light blue or white.
4. **Primary button** always `#3075BB` / white text. Never gold. Never orange.
5. **Secondary button** = white fill, `#3075BB` border and label (on navy: white border, white label).
6. **Links** = `#3075BB`. Hover = `#00708E`.
7. **Stats band** = `#3075BB` background, white numbers.
8. At least **one full section** besides the hero and footer must use Navy or APMI Blue as the background.

### Allowed variation (this is the only “experiment”)

You may shift tints **inside this blue family** (darker navy, brighter blue, paler ice). You may not add a second brand colour. No warm paper, no vermillion, no saffron, no chartreuse, no aubergine, no gold CTA.

---

## 3. Type and UI

- Fonts: a clean sans for UI and body (example: Source Sans 3, DM Sans, or IBM Plex Sans). A slightly stronger sans for H1 is fine. Do not use a display serif as the main voice.
- H1 on the navy hero: white, large, 2 lines maximum.
- Body: 16–18px, Slate `#5A6F82` on white, Light blue or white at 85% on navy.
- Corner radius: 8px for cards and buttons. Consistent.
- Max content width: 1200px. Page padding: 24px mobile, 40px desktop.
- Header height: about 72px. Sticky is allowed.
- Do not use decorative waves, gold gradients, or texture photographs as section backgrounds.

**Logo:** use the existing APMI logo file. Do not recolour it. On navy, place it on a white rectangle if the mark is dark. On white, place it directly.

---

## 4. Navigation (use these labels)

Keep names close to the existing site so this remains the same project. Five top-level items. **PMS Compendium** is not its own top-level item; it sits under Reports & data.

### Header

Left: APMI logo → home

Center / right nav:

1. About us
2. Circulars
3. Membership
4. Reports & data
5. Industry

Utility (always visible on desktop):

- Contact
- Member login (blue button)
- Distributor login (text link)

Mobile: hamburger. Member login stays visible as an icon or button outside the menu.

### Dropdown content (exact links)

**About us**

- About APMI
- Our charter
- Board of Directors
- Working committees
- Evolution of APMI
- Contact us

**Circulars**

- SEBI circulars
- Communications from SEBI
- Consultation papers
- Informal guidance
- APMI circulars & guidelines
- Communications from APMI
- SEBI board meetings
- PMS manual & FAQs

**Membership**

- Benefits & eligibility
- Membership FY 2026–27
- Refund policy
- Bank account details
- Become an APMI member

**Reports & data**

- PMS Industry Compendium
- APMI Insights
- IA performance report
- IA turnover report
- IA comparison report
- Consolidated performance
- APRN holder details

**Industry**

- Industry Speaks
- The APMI journey
- 45 steps in 45 months
- Upcoming events
- Investor awareness

This grouping is the only menu change: Compendium moves under Reports & data; events move under Industry with Industry Speaks. Do not invent new tab names.

---

## 5. Homepage structure (required order)

Build **one homepage** with these sections, in this order. New layout is required. Do not copy the old left-copy / right-photo hero, four equal pillar cards in a row, or gold buttons.

### A. Header

As specified in §4.

### B. Hero — navy full width

Background: `#132B48`. Minimum height ~560px desktop.

Content (left, vertically centered):

- Small badge in Light blue: `India's portfolio management industry association`
- H1 in white: `Advancing trust in portfolio management.`
- Paragraph in white/70%: `APMI is the unified voice of SEBI-registered portfolio managers—promoting high standards, informed participation and responsible industry growth.`
- Button 1 (APMI Blue): `Explore latest updates`
- Button 2 (white outline): `Become an APMI member`

Right side (desktop only): the existing hero photograph, cropped, sitting on navy. If no photo is available, use a simple navy-to-blue gradient. Do not invent people or fake charts.

Do not put this hero on a white background.

### C. Three portals — immediately under the hero

Three equal tiles on Ice or Light blue:

| Title | Subtitle |
|---|---|
| Member portal | Access member services |
| Distributor portal | Tools for registered distributors |
| Investor resources | Reports, data and guidance |

Navy titles, APMI Blue arrow. These are the three entry doors. Do not add more.

### D. Latest updates & circulars + what APMI does

**Two columns on desktop** (stack on mobile):

**Left ~60% — Latest updates & circulars**

- Section title: `Latest updates & circulars`
- Short line: `Timely regulatory updates, formal communications and guidance for the portfolio management community.`
- Filters (horizontal, APMI Blue for the active one): `SEBI circulars` · `APMI circulars` · `Consultation papers` · `Communications`
- List rows (date | title | View PDF):

| Date | Title | Filter |
|---|---|---|
| 24 Aug 2026 | Alignment of SEBI Cyber Incident Reporting Portal with FIRE format | SEBI circulars |
| 31 Jul 2026 | Extension of timelines for compliance with Digital Accessibility Circulars | SEBI circulars |
| 04 Mar 2026 | Guidelines for Custodians | APMI circulars |
| 26 Feb 2026 | Ease of Doing Investment (EoDI) | Consultation papers |

- Link: `Browse the full archive`

**Right ~40% — What APMI does**

- Title: `What APMI does`
- Intro: `A focused mandate that strengthens the portfolio management ecosystem for members, investors and the wider market.`
- Four stacked items (not a 4-column grid):

| No. | Title | Text |
|---|---|---|
| 01 | Advocacy | Representing member interests with SEBI and contributing to regulatory consultations that shape the PMS industry. |
| 02 | Compliance support | Turning circulars, manuals and Compliance Sutra sessions into clear, practical operating guidance. |
| 03 | Investor protection | Advancing benchmarking, valuation and disclosure standards that keep investor reporting transparent. |
| 04 | Industry standards | Building shared frameworks for performance validation, cyber resilience and responsible industry growth. |

Numbers in APMI Blue. Titles in Navy.

### E. Stats band — APMI Blue full width

Background `#3075BB`. White type. Three figures in a row:

| Value | Label |
|---|---|
| ₹38.4 lakh crore | Assets under management tracked |
| 480+ | Registered portfolio managers |
| Monthly & quarterly | Reporting cadence |

### F. Reports & industry data

White or Ice section.

- Title: `Reports & industry data`
- Intro: `Quick access to important reports, performance data and industry information.`
- Featured block: label `Latest release · July 2026` · title `PMS Industry Compendium` · buttons `View report` and `Download PDF`
- Side list:
  - 2026 — Consolidated IA Performance Report — Quarter ended June 2026 · PDF
  - 2025 — Indian Portfolio Management Review — Annual research report · PDF
- Archive years as chips: 2026, 2025, 2024, 2023, 2022
- Link: `Browse performance data` and `Explore all reports`

### G. Perspective & insights

Light blue or Ice background. Navy headings.

- Title: `Perspective & insights`
- Intro: `Ideas and informed viewpoints shaping the future of portfolio management in India.`
- Link: `View all insights`

Three items. Feature the first one more strongly (large title, not a different colour system):

1. Market perspective · August 2026 · `India's portfolio management landscape: Building for the next decade` · `A considered view on structural growth, investor expectations and the changing role of professional portfolio management.`
2. Investor education · July 2026 · `Understanding risk in discretionary portfolio management` · `A practical framework for evaluating mandate, risk appetite and investment time horizons.`
3. Governance · June 2026 · `Stewardship, transparency and enduring investor trust` · `How industry standards can strengthen accountability across the investment value chain.`

### H. Industry Speaks + upcoming events

Two columns on desktop.

**Left — Industry Speaks**

- Title: `Industry speaks`
- Intro: `Selected conversations and perspectives from leaders across India's investment community.`
- Featured: `Featured conversation · 18 min` · `Building resilient portfolios in a changing market`
- Side copy: `A measured view on opportunity, risk and investor outcomes` · `In conversation with senior practitioners shaping India's portfolio management ecosystem.`
- `APMI Leadership Forum` · `Mumbai · August 2026`
- Play control + `View episode` / `Watch all conversations`

**Right — Upcoming events**

- Title: `Upcoming events`
- Intro: `Forums, webinars and conversations for the APMI community.`
- Link: `View all events`

| Date | Title | Type | Location | Description |
|---|---|---|---|---|
| 18 SEP 2026 | APMI Annual Members' Forum 2026 | Members' forum | Mumbai | A focused dialogue on regulation, responsible growth and the industry's priorities. |
| 08 OCT 2026 | Investor Awareness & Education Series | Webinar | Online | An expert-led session on evaluating portfolio management services and disclosures. |
| 21 NOV 2026 | PMS Industry Leadership Roundtable | Roundtable | New Delhi | Senior leaders discuss market development, governance and investor outcomes. |

Event dates in APMI Blue. List them vertically. Do not make three identical marketing cards if a compact timetable is clearer.

### I. Subscribe — navy band

Background `#132B48`.

- Eyebrow: `Stay informed`
- Title: `APMI updates, delivered with clarity.`
- Text: `Receive circulars, industry insights and event announcements in your inbox.`
- Email field + button `Subscribe` in APMI Blue
- Note: `By subscribing, you agree to receive APMI updates and acknowledge our privacy policy.`
- Success state: `Thank you. Your subscription request has been received.`

### J. Footer — navy

Background `#132B48`. White / light-blue text.

Left:

- APMI logo on a white plate
- `The unified industry body for portfolio managers registered with the Securities and Exchange Board of India.`
- `support@apmiindia.org`
- `+91 73043 17160`
- `304, Madhava, C-4, E-Block, BKC, Bandra East, Mumbai 400051`

Columns:

**Organisation:** About APMI · Charter · Board of Directors · Membership

**Resources:** Circulars · APMI Insights · Reports & data · Industry Compendium

**Portals:** Member login · Distributor login · Member registration · APRN holder details

**Engage:** Industry speaks · Events & forums · Investor awareness · Contact us

Bottom bar: `© 2026 Association of Portfolio Managers in India. All rights reserved.` · Privacy policy · Terms of use · LinkedIn

---

## 6. Contact and portals (do not invent others)

- Member login
- Distributor login
- Member registration
- APRN holder details
- Email: support@apmiindia.org
- Phone: +91 73043 17160
- Address: 304, Madhava, C-4, E-Block, BKC, Bandra East, Mumbai 400051

---

## 7. Mobile

- Same sections, same order.
- Header: logo, Member login, menu.
- Hero: navy, heading, two buttons stacked. Hide or reduce the photo.
- Portals: stacked.
- Circulars above pillars (same as desktop left-then-right).
- Stats: stacked or horizontal scroll, still on APMI Blue.
- Events as a vertical list.
- Footer columns stacked.
- Tap targets at least 44px.
- No horizontal page scroll.

---

## 8. Deliverables for Claude Design

Produce:

1. Desktop homepage (full page, all sections A–J).
2. Mobile homepage (full page).
3. Desktop header with one dropdown open (Reports & data).

Do not produce a brand poster, a landing-page concept, or a different site.

---

## 9. Paste this into Claude Design

```
Design a production-ready homepage for the Association of Portfolio Managers in India (APMI). Follow CLAUDE-DESIGN-BRIEF.md exactly.

This is a real industry-association website, not a concept, magazine, or startup landing page.

COLOURS ARE MANDATORY. Use only:
- Navy #132B48 — hero background, footer background, headings
- APMI Blue #3075BB — primary buttons, links, stats band background
- Light blue #A7D4EC — accents, tints, badge
- Cyan #00708E — small labels only
- White #FFFFFF, Ice #F3F7FB, Slate #5A6F82, Line #C5D6E8

If navy or APMI blue is missing, the design is wrong. No gold, orange, green, purple, cream, or black as a brand colour.

NAV (exact labels): About us · Circulars · Membership · Reports & data · Industry
Plus Contact, Member login (blue button), Distributor login.

HOMEPAGE SECTIONS IN THIS ORDER:
1. Header
2. Navy hero with heading “Advancing trust in portfolio management.” and the two existing CTAs
3. Three portals: Member portal, Distributor portal, Investor resources
4. Two-column: circulars list (with the four sample updates) + four mandate items stacked
5. Blue stats band: ₹38.4 lakh crore · 480+ · Monthly & quarterly
6. Reports, featuring PMS Industry Compendium
7. Three insights (use the exact titles in the brief)
8. Industry Speaks + three events
9. Navy subscribe band
10. Navy footer with the Mumbai contact details

Use the exact copy from the brief. Do not invent new services, colours, or taglines.
Output: full desktop homepage, full mobile homepage, and one open dropdown.
```
