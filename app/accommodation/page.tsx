
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation in Nakuru | La Quita Hotel & Suites",
  description:
    "Explore accommodation and bed and breakfast at La Quita Hotel & Suites in Pipeline, Nakuru. Contact us for room options, current rates and availability.",
  keywords: [
    "accommodation in Nakuru",
    "hotel rooms Nakuru",
    "bed and breakfast Nakuru",
    "hotel in Pipeline Nakuru",
    "La Quita Hotel and Suites",
  ],
};

const WHATSAPP_URL =
  "https://wa.me/254759713882?text=Hello%20La%20Quita%20Hotel%20%26%20Suites.%20I%20would%20like%20to%20enquire%20about%20accommodation.";

const rooms = [
  {
    name: "Classic Room",
    price: "KSh 2,000",
    description:
      "An affordable room option for guests looking for a comfortable place to rest in Nakuru.",
  },
  {
    name: "Comfort Room",
    price: "KSh 2,500",
    description:
      "A welcoming option for guests looking for a relaxing stay while travelling or visiting Nakuru.",
  },
  {
    name: "Premier Room",
    price: "KSh 3,000",
    description:
      "An additional room option for guests seeking comfort and convenience during their stay.",
  },
];

export default function AccommodationPage() {
  return (
    <main className="accommodation-page">
      <style>{`
        .accommodation-page,
        .accommodation-page * {
          box-sizing: border-box;
          font-family: inherit !important;
        }

        .accommodation-page {
          --red: #a52222;
          --gold: #d6a33d;
          --cream: #fbf7ef;
          --brown: #30231e;
          background: var(--cream);
          color: var(--brown);
          min-height: 100vh;
        }

        .accommodation-page a {
          text-decoration: none;
        }

        .accommodation-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding: 11px 6%;
          background: var(--brown);
          color: #fff;
          font-size: 12px;
        }

        .accommodation-topbar a {
          color: #f5d58c;
        }

        .accommodation-nav {
          max-width: 1320px;
          margin: auto;
          padding: 17px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .accommodation-brand {
          color: var(--red);
          flex-shrink: 0;
          font-size: 23px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .accommodation-brand span {
          display: block;
          margin-top: 5px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2.3px;
          color: #76665b;
        }

        .accommodation-navlinks {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 19px;
          font-size: 13px;
          font-weight: 600;
        }

        .accommodation-navlinks a:not(.accommodation-button) {
          color: var(--brown);
        }

        .accommodation-navlinks a:hover {
          color: var(--red);
        }

        .accommodation-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 21px;
          border: 1px solid var(--red);
          border-radius: 3px;
          background: var(--red);
          color: #fff !important;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .accommodation-button:hover {
          background: #821919;
          transform: translateY(-2px);
        }

        .accommodation-button-gold {
          background: var(--gold);
          border-color: var(--gold);
          color: #30231e !important;
        }

        .accommodation-button-gold:hover {
          background: #e6b94f;
        }

        /* HERO */
        .accommodation-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 555px;
          overflow: hidden;
          background:
            linear-gradient(
              90deg,
              rgba(35, 24, 20, 0.92) 0%,
              rgba(35, 24, 20, 0.76) 50%,
              rgba(35, 24, 20, 0.35) 100%
            ),
            url("/images/laquita-room.jpg") center/cover no-repeat,
            #30231e;
          color: #fff;
        }

        .accommodation-hero-inner {
          width: 100%;
          max-width: 1320px;
          margin: auto;
          padding: 57px 6% 70px;
          position: relative;
          z-index: 1;
        }

        .accommodation-logo-panel {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: #fffdf8;
          border: 2px solid var(--gold);
          border-radius: 4px;
          padding: 12px 18px 10px;
          margin-bottom: 27px;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.24);
        }

        .accommodation-hero-logo {
          display: block;
          width: 170px;
          max-width: 52vw;
          height: 86px;
          object-fit: contain;
        }

        .accommodation-logo-caption {
          margin-top: 7px;
          color: #766052;
          text-align: center;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .accommodation-eyebrow {
          color: #efc968;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 17px;
        }

        .accommodation-hero h1 {
          max-width: 820px;
          margin: 0 0 20px;
          color: #fff;
          font-size: clamp(38px, 5.5vw, 66px);
          line-height: 1.09;
          font-weight: 750;
        }

        .accommodation-hero h1 span {
          color: #efc968;
        }

        .accommodation-hero p {
          max-width: 660px;
          margin: 0 0 28px;
          color: #f0e8df;
          font-size: 16px;
          line-height: 1.9;
        }

        .accommodation-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* INTRO */
        .accommodation-intro {
          max-width: 1050px;
          margin: auto;
          padding: 74px 6% 50px;
          text-align: center;
        }

        .accommodation-label {
          margin-bottom: 13px;
          color: var(--red);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .accommodation-intro h2,
        .accommodation-breakfast h2,
        .accommodation-contact h2 {
          margin: 0 0 19px;
          color: var(--brown);
          font-size: clamp(29px, 4vw, 43px);
          font-weight: 700;
          line-height: 1.2;
        }

        .accommodation-intro p,
        .accommodation-breakfast p,
        .accommodation-contact p {
          max-width: 760px;
          margin: 0 auto;
          color: #6f6258;
          font-size: 15px;
          line-height: 1.9;
        }

        /* ROOM OPTIONS */
        .accommodation-rooms {
          max-width: 1180px;
          margin: auto;
          padding: 20px 6% 75px;
        }

        .accommodation-rooms-heading {
          margin-bottom: 30px;
          text-align: center;
        }

        .accommodation-rooms-heading h2 {
          margin: 0;
          color: var(--brown);
          font-size: clamp(27px, 3.5vw, 37px);
          font-weight: 700;
        }

        .accommodation-room-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .accommodation-room-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #fff;
          border: 1px solid #eee3d4;
          border-bottom: 4px solid var(--gold);
          padding: 30px 26px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .accommodation-room-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(48, 35, 30, 0.08);
        }

        .accommodation-room-number {
          color: var(--red);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .accommodation-room-card h3 {
          margin: 0 0 14px;
          color: var(--brown);
          font-size: 21px;
          font-weight: 700;
        }

        .accommodation-room-price {
          margin-bottom: 13px;
          color: var(--red);
          font-size: 29px;
          font-weight: 800;
        }

        .accommodation-room-price small {
          display: block;
          margin-top: 4px;
          color: #7d7066;
          font-size: 12px;
          font-weight: 500;
        }

        .accommodation-room-card p {
          flex: 1;
          margin: 0 0 25px;
          color: #75675c;
          font-size: 14px;
          line-height: 1.8;
        }

        /* BREAKFAST */
        .accommodation-breakfast {
          padding: 65px 6%;
          background: #f0e7d9;
          text-align: center;
        }

        .accommodation-breakfast-inner {
          max-width: 930px;
          margin: auto;
        }

        .accommodation-breakfast-price {
          margin: 18px 0;
          color: var(--red);
          font-size: clamp(32px, 5vw, 44px);
          font-weight: 800;
        }

        .accommodation-breakfast-price span {
          color: #6f6258;
          font-size: 14px;
          font-weight: 500;
        }

        .accommodation-breakfast-note {
          display: block;
          margin-top: 13px;
          color: #75675c;
          font-size: 12px;
          line-height: 1.7;
        }

        /* CONTACT */
        .accommodation-contact {
          max-width: 950px;
          margin: auto;
          padding: 75px 6%;
          text-align: center;
        }

        .accommodation-contact p {
          margin-bottom: 27px;
        }

        .accommodation-contact-actions {
          justify-content: center;
        }

        /* FOOTER */
        .accommodation-footer {
          padding: 30px 6%;
          background: var(--brown);
          color: #e8ded4;
          text-align: center;
          font-size: 12px;
          line-height: 1.9;
        }

        .accommodation-footer strong {
          color: #efc968;
        }

        .accommodation-footer a {
          color: #efc968;
        }

        .accommodation-footer p {
          margin: 8px 0;
        }

        @media (max-width: 900px) {
          .accommodation-nav {
            align-items: flex-start;
          }

          .accommodation-navlinks {
            gap: 13px;
          }
        }

        @media (max-width: 760px) {
          .accommodation-topbar {
            justify-content: center;
            text-align: center;
          }

          .accommodation-nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .accommodation-navlinks {
            width: 100%;
            justify-content: flex-start;
            gap: 13px;
          }

          .accommodation-hero {
            min-height: 500px;
            background-position: center;
          }

          .accommodation-hero-inner {
            padding-top: 42px;
            padding-bottom: 50px;
          }

          .accommodation-logo-panel {
            margin-bottom: 22px;
            padding: 10px 14px;
          }

          .accommodation-hero-logo {
            width: 145px;
            height: 74px;
          }

          .accommodation-hero h1 {
            font-size: clamp(34px, 8vw, 48px);
          }

          .accommodation-hero p {
            font-size: 14px;
          }

          .accommodation-room-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }

        @media (max-width: 420px) {
          .accommodation-navlinks {
            gap: 11px;
            font-size: 12px;
          }

          .accommodation-hero h1 {
            font-size: 33px;
          }

          .accommodation-button {
            padding: 13px 15px;
          }
        }
      `}</style>

      <div className="accommodation-topbar">
        <span>PIPELINE · NAKURU, KENYA</span>
        <a href={WHATSAPP_URL}>WHATSAPP US →</a>
      </div>

      <header className="accommodation-nav">
        <a href="/" className="accommodation-brand">
          LA QUITA
          <span>HOTEL &amp; SUITES</span>
        </a>

        <nav
          className="accommodation-navlinks"
          aria-label="Main navigation"
        >
          <a href="/">Home</a>
          <a href="/restaurant">Restaurant</a>
          <a href="/lounge">Bar &amp; Lounge</a>
          <a href="/conference">Conferences</a>
          <a href="/contact">Contact</a>
          <a href={WHATSAPP_URL} className="accommodation-button">
            Enquire Now →
          </a>
        </nav>
      </header>

      <section className="accommodation-hero">
        <div className="accommodation-hero-inner">
          <div className="accommodation-logo-panel">
            <img
              src="/images/laquita-logo.jpg"
              alt="La Quita Hotel & Suites logo"
              className="accommodation-hero-logo"
              width="170"
              height="86"
            />
            <span className="accommodation-logo-caption">
              WHERE TRANQUILITY MEETS EXCELLENCE
            </span>
          </div>

          <div className="accommodation-eyebrow">
            REST · RECHARGE · FEEL AT HOME
          </div>

          <h1>
            Your Stay in Nakuru,
            <br />
            <span>Your Comfort Matters.</span>
          </h1>

          <p>
            Looking for accommodation in Nakuru? La Quita Hotel &amp; Suites
            in Pipeline welcomes enquiries from travellers, business guests
            and visitors looking for a comfortable place to stay. Ask us about
            our room options, bed and breakfast, current rates and availability.
          </p>

          <div className="accommodation-actions">
            <a
              href={WHATSAPP_URL}
              className="accommodation-button accommodation-button-gold"
            >
              Enquire About a Room →
            </a>
            <a
              href="tel:+254759713882"
              className="accommodation-button"
            >
              Call +254 759 713 882
            </a>
          </div>
        </div>
      </section>

      <section className="accommodation-intro">
        <div className="accommodation-label">
          Welcome to La Quita
        </div>
        <h2>A Welcoming Place to Pause and Recharge</h2>
        <p>
          Whether you are passing through Nakuru, visiting for business or
          planning a local stay, our team is ready to help you explore the
          available accommodation options. Contact us to confirm the room
          that suits your needs and the dates of your visit.
        </p>
      </section>

      <section className="accommodation-rooms">
        <div className="accommodation-rooms-heading">
          <div className="accommodation-label">Room Options</div>
          <h2>Find the Stay That Suits You</h2>
        </div>

        <div className="accommodation-room-grid">
          {rooms.map((room, index) => (
            <article className="accommodation-room-card" key={room.name}>
              <div className="accommodation-room-number">
                ROOM OPTION 0{index + 1}
              </div>
              <h3>{room.name}</h3>
              <div className="accommodation-room-price">
                {room.price}
                <small>Room-only rate</small>
              </div>
              <p>{room.description}</p>
              <a
                href={WHATSAPP_URL}
                className="accommodation-button"
              >
                Ask About This Room
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="accommodation-breakfast">
        <div className="accommodation-breakfast-inner">
          <div className="accommodation-label">
            Start Your Day Well
          </div>
          <h2>Make It Bed and Breakfast</h2>
          <p>
            Add breakfast to your stay for a convenient start to your day.
            Contact our team to confirm the applicable room and breakfast
            arrangements before making your booking.
          </p>

          <div className="accommodation-breakfast-price">
            KSh 500 <span>per person for breakfast</span>
          </div>

          <a
            href={WHATSAPP_URL}
            className="accommodation-button accommodation-button-gold"
          >
            Enquire About Bed &amp; Breakfast
          </a>

          <span className="accommodation-breakfast-note">
            Room rates and availability should be confirmed directly with
            the hotel. Breakfast is listed separately from the room-only rates.
          </span>
        </div>
      </section>

      <section className="accommodation-contact">
        <div className="accommodation-label">
          Plan Your Visit
        </div>
        <h2>Need a Room in Nakuru?</h2>
        <p>
          Speak to La Quita Hotel &amp; Suites about your travel dates, room
          preferences, breakfast and current availability. Our team will help
          you confirm the details before your stay.
        </p>

        <div className="accommodation-actions accommodation-contact-actions">
          <a href={WHATSAPP_URL} className="accommodation-button">
            Chat With Us on WhatsApp
          </a>
          <a
            href="tel:+254759713882"
            className="accommodation-button accommodation-button-gold"
          >
            Call the Hotel
          </a>
        </div>
      </section>

      <footer className="accommodation-footer">
        <strong>LA QUITA HOTEL &amp; SUITES</strong>
        <br />
        Pipeline, Nakuru, Kenya
        <br />
        <a href="tel:+254759713882">+254 759 713 882</a>
        {" · "}
        <a href="/">Back to Homepage</a>
        <p>Where Tranquility Meets Excellence.</p>
        <span>
          © {new Date().getFullYear()} La Quita Hotel &amp; Suites.
        </span>
      </footer>
    </main>
  );
}
