
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Hall Hire in Nakuru | La Quita Hotel & Suites",
  description:
    "Host meetings, seminars, workshops and corporate gatherings at La Quita Hotel & Suites in Pipeline, Nakuru. Contact our team to enquire about conference facilities.",
  keywords: [
    "conference hall hire Nakuru",
    "conference venue in Nakuru",
    "meeting venue Pipeline Nakuru",
    "seminar venues Nakuru",
    "corporate meetings Nakuru",
    "La Quita Hotel and Suites",
  ],
};

const WHATSAPP_URL =
  "https://wa.me/254759713882?text=Hello%20La%20Quita%20Hotel%20%26%20Suites.%20I%20would%20like%20to%20enquire%20about%20your%20conference%20facilities.";

export default function ConferencesPage() {
  return (
    <main className="conference-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .conference-page {
          --red: #a52222;
          --gold: #d6a33d;
          --cream: #fbf7ef;
          --brown: #30231e;
          color: var(--brown);
          background: var(--cream);
          font-family: Arial, Helvetica, sans-serif;
          min-height: 100vh;
        }

        .conference-page a {
          text-decoration: none;
        }

        .conference-topbar {
          background: #30231e;
          color: #fff;
          padding: 12px 6%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 13px;
        }

        .conference-topbar a {
          color: #f5d58c;
        }

        .conference-nav {
          max-width: 1240px;
          margin: auto;
          padding: 18px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .conference-brand {
          color: var(--red);
          font-size: 23px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .conference-brand span {
          display: block;
          margin-top: 5px;
          color: #76665b;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2.3px;
        }

        .conference-navlinks {
          display: flex;
          gap: 21px;
          align-items: center;
          flex-wrap: wrap;
          font-size: 13px;
          font-weight: 700;
        }

        .conference-navlinks a {
          color: var(--brown);
        }

        .conference-navlinks a:hover {
          color: var(--red);
        }

        .conference-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 21px;
          border-radius: 3px;
          background: var(--red);
          color: #fff !important;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid var(--red);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .conference-button:hover {
          background: #821919;
          transform: translateY(-2px);
        }

        .conference-button-gold {
          background: var(--gold);
          border-color: var(--gold);
          color: #2c2119 !important;
        }

        .conference-button-gold:hover {
          background: #e6b94f;
        }

        .conference-hero {
          min-height: 490px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              90deg,
              rgba(31, 22, 18, 0.94) 0%,
              rgba(31, 22, 18, 0.78) 52%,
              rgba(31, 22, 18, 0.34) 100%
            ),
            url("/images/laquita-conference.jpg") center/cover no-repeat,
            #30231e;
          color: #fff;
        }

        .conference-hero-inner {
          width: 100%;
          max-width: 1240px;
          padding: 76px 6%;
          margin: auto;
        }

        .conference-eyebrow {
          color: #efc968;
          letter-spacing: 3px;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 800;
          margin-bottom: 19px;
        }

        .conference-hero h1 {
          max-width: 760px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5.5vw, 68px);
          line-height: 1.08;
          font-weight: 500;
          margin: 0 0 21px;
        }

        .conference-hero h1 span {
          color: #efc968;
        }

        .conference-hero p {
          max-width: 620px;
          color: #f0e8df;
          font-size: 16px;
          line-height: 1.9;
          margin: 0 0 29px;
        }

        .conference-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .conference-intro {
          max-width: 1060px;
          margin: auto;
          padding: 76px 6% 65px;
          text-align: center;
        }

        .conference-section-label {
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 800;
          font-size: 11px;
          color: var(--red);
          margin-bottom: 13px;
        }

        .conference-intro h2,
        .conference-details h2,
        .conference-contact h2 {
          color: var(--brown);
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.2;
          margin: 0 0 19px;
        }

        .conference-intro p {
          max-width: 770px;
          margin: 0 auto;
          line-height: 1.9;
          color: #6f6258;
          font-size: 15px;
        }

        .conference-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          max-width: 1120px;
          padding: 0 6% 76px;
          margin: auto;
        }

        .conference-feature {
          background: #fff;
          border: 1px solid #eee3d4;
          padding: 30px 26px;
          border-bottom: 3px solid var(--gold);
        }

        .conference-feature-number {
          color: var(--red);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          margin-bottom: 17px;
        }

        .conference-feature h3 {
          font-size: 18px;
          margin: 0 0 12px;
          color: var(--brown);
        }

        .conference-feature p {
          color: #75675c;
          line-height: 1.8;
          font-size: 14px;
          margin: 0;
        }

        .conference-details {
          background: #f0e7d9;
          padding: 72px 6%;
        }

        .conference-details-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 55px;
          align-items: center;
          max-width: 1120px;
          margin: auto;
        }

        .conference-details p {
          color: #6d5e54;
          line-height: 1.9;
          font-size: 15px;
        }

        .conference-list {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
        }

        .conference-list li {
          padding: 12px 0;
          border-bottom: 1px solid #ddcdb7;
          display: flex;
          gap: 12px;
          line-height: 1.6;
          font-size: 14px;
        }

        .conference-list li::before {
          content: "✓";
          color: var(--red);
          font-weight: 800;
        }

        .conference-rate-card {
          background: #30231e;
          color: #fff;
          padding: 38px;
          border-top: 5px solid var(--gold);
        }

        .conference-rate-card .rate-label {
          color: #efc968;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 11px;
          font-weight: 800;
        }

        .conference-rate-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-size: 28px;
          line-height: 1.3;
          margin: 17px 0;
        }

        .conference-rate {
          font-size: clamp(35px, 5vw, 48px);
          font-weight: 800;
          color: #efc968;
          margin: 16px 0 7px;
        }

        .conference-rate-card p {
          color: #e4d9cd;
          font-size: 13px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .conference-contact {
          text-align: center;
          padding: 75px 6%;
          max-width: 900px;
          margin: auto;
        }

        .conference-contact p {
          color: #75675c;
          line-height: 1.9;
          max-width: 660px;
          margin: 0 auto 27px;
          font-size: 15px;
        }

        .conference-footer {
          padding: 28px 6%;
          background: #30231e;
          color: #e8ded4;
          text-align: center;
          font-size: 12px;
          line-height: 1.9;
        }

        .conference-footer strong {
          color: #efc968;
        }

        .conference-footer a {
          color: #efc968;
        }

        @media (max-width: 760px) {
          .conference-topbar {
            justify-content: center;
            text-align: center;
          }

          .conference-nav {
            align-items: flex-start;
            flex-direction: column;
          }

          .conference-navlinks {
            gap: 14px;
          }

          .conference-hero {
            min-height: 430px;
            background-position: center;
          }

          .conference-hero-inner {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .conference-hero p {
            font-size: 14px;
          }

          .conference-feature-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .conference-details-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .conference-rate-card {
            padding: 28px;
          }
        }
      `}</style>

      <div className="conference-topbar">
        <span>LA QUITA HOTEL &amp; SUITES · PIPELINE, NAKURU</span>
        <a href="tel:+254759713882">Call us: +254 759 713 882</a>
      </div>

      <header className="conference-nav">
        <a href="/" className="conference-brand">
          LA QUITA
          <span>HOTEL &amp; SUITES</span>
        </a>

        <nav className="conference-navlinks" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/accommodation">Accommodation</a>
          <a href="/restaurant">Restaurant</a>
          <a href="/lounge">Lounge</a>
          <a href="/contact">Contact</a>
          <a href={WHATSAPP_URL} className="conference-button">
            Enquire Now
          </a>
        </nav>
      </header>

      <section className="conference-hero">
        <div className="conference-hero-inner">
          <div className="conference-eyebrow">
            Meetings · Seminars · Corporate Gatherings
          </div>

          <h1>
            A Thoughtful Space
            <br />
            for <span>Meaningful Meetings.</span>
          </h1>

          <p>
            Bring your team together at La Quita Hotel &amp; Suites in
            Pipeline, Nakuru. Whether you are planning a seminar, a business
            meeting or a corporate gathering, speak to our team about a
            setting designed to bring people together.
          </p>

          <div className="conference-actions">
            <a href={WHATSAPP_URL} className="conference-button conference-button-gold">
              Enquire About Your Event
            </a>
            <a href="tel:+254759713882" className="conference-button">
              Call +254 759 713 882
            </a>
          </div>
        </div>
      </section>

      <section className="conference-intro">
        <div className="conference-section-label">Meet at La Quita</div>
        <h2>Make Room for Ideas to Take Shape</h2>
        <p>
          The right meeting environment helps people connect, share ideas and
          focus on what matters. La Quita Hotel &amp; Suites welcomes enquiries
          for professional gatherings in Nakuru, with our team ready to discuss
          your event requirements and help you plan the details.
        </p>
      </section>

      <section className="conference-feature-grid" aria-label="Conference event types">
        <article className="conference-feature">
          <div className="conference-feature-number">01</div>
          <h3>Business Meetings</h3>
          <p>
            Arrange a setting for team discussions, planning sessions and
            important business conversations.
          </p>
        </article>

        <article className="conference-feature">
          <div className="conference-feature-number">02</div>
          <h3>Seminars &amp; Workshops</h3>
          <p>
            Enquire about hosting learning sessions, presentations, training
            activities and professional workshops.
          </p>
        </article>

        <article className="conference-feature">
          <div className="conference-feature-number">03</div>
          <h3>Corporate Gatherings</h3>
          <p>
            Talk to our team about suitable arrangements for organisational
            events and group functions.
          </p>
        </article>
      </section>

      <section className="conference-details">
        <div className="conference-details-inner">
          <div>
            <div className="conference-section-label">Plan With Our Team</div>
            <h2>Your Event Starts With a Conversation</h2>
            <p>
              Every gathering has different needs. Contact us with your
              preferred date, expected number of attendees and the type of
              event you are planning. Our team can discuss availability and
              the arrangements applicable to your occasion.
            </p>

            <ul className="conference-list">
              <li>Seminars and training sessions</li>
              <li>Business meetings and workshops</li>
              <li>Corporate and group gatherings</li>
              <li>Enquiries about venue arrangements and availability</li>
              <li>A convenient Pipeline, Nakuru location</li>
            </ul>
          </div>

          <aside className="conference-rate-card">
            <div className="rate-label">Conference Hall Hire</div>
            <h3>A professional setting for your next gathering</h3>
            <div className="conference-rate">KSh 8,000</div>
            <p>
              Listed conference hall hire rate. Contact our team to confirm
              availability, inclusions and the arrangements for your event.
            </p>
            <a href={WHATSAPP_URL} className="conference-button conference-button-gold">
              Request Conference Details
            </a>
          </aside>
        </div>
      </section>

      <section className="conference-contact">
        <div className="conference-section-label">Let’s Plan Together</div>
        <h2>Planning an Event in Nakuru?</h2>
        <p>
          Tell us what you have in mind. Contact La Quita Hotel &amp; Suites
          to enquire about the conference hall, available dates and the
          requirements for your meeting, seminar or corporate event.
        </p>
        <div className="conference-actions" style={{ justifyContent: "center" }}>
          <a href={WHATSAPP_URL} className="conference-button">
            Chat With Us on WhatsApp
          </a>
          <a href="tel:+254759713882" className="conference-button conference-button-gold">
            Call the Hotel
          </a>
        </div>
      </section>

      <footer className="conference-footer">
        <strong>LA QUITA HOTEL &amp; SUITES</strong>
        <br />
        Pipeline, Nakuru, Kenya
        <br />
        <a href="tel:+254759713882">+254 759 713 882</a>
        {" · "}
        <a href="/">Visit Homepage</a>
        <p>Where Tranquility Meets Excellence.</p>
        <span>© {new Date().getFullYear()} La Quita Hotel &amp; Suites.</span>
      </footer>
    </main>
  );
}
