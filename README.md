# StopMeasureZ.com

Official site for the committee opposing Berkeley Measure Z (November 3, 2026).

## Run locally

```bash
npm install
cp .env.example .env.local
npm test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to change copy

Campaign copy lives in typed objects, not a CMS:

- `src/lib/facts.ts` — verified numbers, ordinance excerpts, sources, ballot stack
- `src/lib/copy.ts` — FAQ and navigation
- `src/lib/calculator.ts` — math only
- Page-specific headlines live in `src/app/**/page.tsx`

Do not invent dollar figures, endorsers, or ordinance text. If a number is missing, leave a `TODO`.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_COMMITTEE_NAME` | Legal committee name in the paid-for-by line |
| `NEXT_PUBLIC_FPPC_ID` | FPPC ID |
| `NEXT_PUBLIC_STRIPE_DONATE_URL` | Stripe Payment Link or donate page (cards never collected on this domain) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, default `https://stopmeasurez.com` |
| `NEXT_PUBLIC_TREASURER_EMAIL` | `/about` |
| `NEXT_PUBLIC_PRESS_EMAIL` | `/press` |
| `NEXT_PUBLIC_NETFILE_URL` | Public filings |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible site domain |
| `FORM_ENDPOINT` | Google Apps Script web app URL that appends rows to the NO on Z sheet |
| `SHEETS_WEBHOOK_SECRET` | Required to write the sheet. Server-only. Must match Apps Script property `WEBHOOK_SECRET` |

## Get Involved → Google Sheet

The form on `/get-involved` writes one row per submit:

`Date | Time | I Want To | First Name | Last Name | Email | Phone Number | Zip Code`

`I Want To` is a comma-separated list from **Endorse**, **Volunteer**, **Get Updates**, **Get A Sign**.

Google will not let this repo write the sheet until you publish a webhook owned by an editor of the spreadsheet.

1. Open [the NO on Z sheet](https://docs.google.com/spreadsheets/d/1vcbMUWawVc0qiUez2-dlygAjvCXvjkPSPfkzifJNb3I/edit).
2. **Extensions → Apps Script**.
3. Paste `scripts/sheet-webhook.gs` over `Code.gs` and save.
4. **Project settings → Script properties** → add `WEBHOOK_SECRET` (a long random string). The same value goes in `.env.local` as `SHEETS_WEBHOOK_SECRET`. Without it, the script refuses every row.
5. **Deploy → New deployment → Web app**. Execute as **Me**. Who has access: **Anyone**. “Anyone” only means Google will accept the HTTP POST. Strangers still cannot write the sheet unless they have the secret, which never ships to the browser.
6. Copy the web app URL into `.env.local`:

```
FORM_ENDPOINT=https://script.google.com/macros/s/…/exec
SHEETS_WEBHOOK_SECRET=the-same-value-as-the-script-property
```

7. Restart `npm run dev`. Submit a test row. If you rotate the deployment, update `FORM_ENDPOINT`.

The public Get Involved page is meant for voters. The spreadsheet stays private; only the Next.js server, holding the secret, can append rows.


## Calculator

Acceptance tests in `src/lib/calculator.test.ts`:

- 1,500 residential @ 4% → year one **$90.00**, six-year **$596.97** (UI **$597**)
- 2,000 residential @ 0% → **$120** / **$720**
- 5,000 commercial @ 4% → **$450** / ~**$2,985**

## Monday counts (paste later)

Campaign dashboard fields to wire later — do not scrape assessor data:

- Ballots returned (county)
- Lawn signs out (by ZIP)
- Volunteer shifts this Saturday
- Stripe last 7 days
- Calculator events (`calculator_submit`)
- Top UTM (`sms` / `wave1`, etc.)

## Launch checklist

- [ ] Real committee name + FPPC ID
- [ ] Stripe donate link live
- [ ] Domains: StopMeasureZ.com (primary), 301s from NoOnZ.org / NoOnMeasureZ.org
- [ ] Privacy policy + SMS terms if texting
- [ ] Counsel review of every numeric claim
- [ ] OG image (`/opengraph-image`)
- [ ] Plausible/GA4
- [ ] 10DLC / SMS is a different vendor — landing pages already accept `?utm_source=sms&utm_campaign=wave1`
- [ ] City Attorney impartial analysis URL (TODO in `src/lib/facts.ts`)
- [ ] Get Involved Apps Script webhook live (`FORM_ENDPOINT`)
