# La Quita Hotel & Suites — website starter

A responsive Next.js homepage concept for La Quita Hotel & Suites, Nakuru. Built to run locally in Visual Studio Code and to be version-controlled with GitHub.

## Included in this starter
- Responsive hotel homepage with mobile navigation
- Sections for accommodation, restaurant, bar/lounge, conferences and brand story
- Enquiry form that opens WhatsApp with the guest's enquiry details prefilled
- Contact/WhatsApp shortcuts
- Basic page metadata and responsive accessibility considerations

## Important before publishing
This is a **front-end starter**, not a finished live booking engine. The enquiry form sends a message to WhatsApp; it does not check live room inventory, save bookings in a database, process payments, or send automatic emails. Those require a backend and hotel-approved operational rules.

The photos currently use remote Unsplash demo images. Replace them with real, approved La Quita photos and the official logo before launch. Verify every price, amenity, address, email and room detail before publishing. The domain laquitahotel.com surfaced in web research, but ownership should be verified before connecting or redirecting any domain.

## Run locally in Visual Studio Code
1. Install Node.js LTS from https://nodejs.org/.
2. Extract this folder and open it in Visual Studio Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open http://localhost:3000 in your browser.

## Push the code to GitHub
1. Create a new empty repository in your GitHub account, for example `laquita-hotel-website`.
2. In the VS Code terminal, from this project folder run:

```bash
git init
git add .
git commit -m "Create La Quita hotel website starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/laquita-hotel-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Do not commit API keys, passwords, or `.env` files.

## Suggested production architecture
- **Frontend:** Next.js (this project)
- **Code repository:** GitHub
- **Hosting:** Vercel or another Next.js-compatible host
- **Database and optional staff login:** Supabase/PostgreSQL
- **Booking request delivery:** WhatsApp first, then add email/database workflow if required
- **Real-time room availability and confirmed bookings:** connect to the hotel's actual room inventory/PMS or build an admin-managed availability system. Do not claim live availability until this is implemented.

## Recommended next build phase
1. Replace demo images and text with approved La Quita assets.
2. Add dedicated Rooms, Dining, Bar & Lounge, Conference, Gallery, About and Contact pages.
3. Create a secure admin dashboard to manage room types, prices, gallery images, offers and enquiries.
4. Add database-backed booking requests and email notifications.
5. Add analytics, sitemap, structured data, Google Maps, privacy notice and a custom domain.
