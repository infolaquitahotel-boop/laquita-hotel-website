
'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  Coffee,
  MapPin,
  Menu,
  MessageCircle,
  Users,
  UtensilsCrossed,
  Wine,
  X,
} from 'lucide-react';
import { blogPosts } from './blog/articles';

const whatsapp = '254759713882';

function waLink(message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

const rooms = [
  {
    number: '01',
    name: 'Classic Room',
    price: 2000,
    description: 'A comfortable option for your stay in Nakuru.',
  },
  {
    number: '02',
    name: 'Comfort Room',
    price: 2500,
    description: 'A considered choice for a relaxing stay.',
  },
  {
    number: '03',
    name: 'Premier Room',
    price: 3000,
    description: 'Another room option to suit your preferences.',
  },
];

const experiences = [
  {
    number: '01',
    title: 'Bar & Lounge',
    description:
      'Make time to unwind, catch up with friends and enquire about available drinks and DStv viewing.',
    image: '/images/laquita-lounge.jpg',
    href: '/lounge',
    label: 'Explore the lounge',
    icon: Wine,
  },
  {
    number: '02',
    title: 'Meetings & Conferences',
    description:
      'Discuss your requirements for a seminar, workshop, business meeting or group gathering.',
    image: '/images/laquita-conference.jpg',
    href: '/conferences',
    label: 'Discuss your event',
    icon: Users,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    const now = new Date();
    const localToday = new Date(
      now.getTime() - now.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 10);

    setToday(localToday);

    const elements =
      document.querySelectorAll<HTMLElement>('.lq-home-reveal');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('lq-home-motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove(
        'lq-home-motion-ready',
      );
    };
  }, []);

  return (
    <main className="lq-home" id="home">
      {/* TOP BAR */}

      <div className="lq-topbar">
        <span>PIPELINE · NAKURU, KENYA</span>

        <span className="lq-topbar-centre">
          WHERE TRANQUILITY MEETS EXCELLENCE
        </span>

        <a
          href={waLink(
            'Hello La Quita Hotel & Suites. I have an enquiry.',
          )}
          target="_blank"
          rel="noreferrer"
        >
          WHATSAPP US <ArrowRight size={13} />
        </a>
      </div>

      {/* MAIN NAVIGATION */}

      <header className="lq-nav">
        <a className="lq-brand" href="/" aria-label="La Quita homepage">
          <img
            src="/images/laquita-logo.jpg"
            alt="La Quita Hotel & Suites"
          />

          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </a>

        <button
          type="button"
          className="lq-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`lq-nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a
            href="/accommodation"
            onClick={() => setMenuOpen(false)}
          >
            Accommodation
          </a>

          <a href="/restaurant" onClick={() => setMenuOpen(false)}>
            Dining
          </a>

          <a href="/lounge" onClick={() => setMenuOpen(false)}>
            Lounge
          </a>

          <a href="/conferences" onClick={() => setMenuOpen(false)}>
            Conference
          </a>

          <a href="/blog" onClick={() => setMenuOpen(false)}>
            Journal
          </a>

          <a
            href="/booking"
            className="lq-nav-book"
            onClick={() => setMenuOpen(false)}
          >
            Book a stay <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="lq-hero">
        <div className="lq-hero-image" />
        <div className="lq-hero-shade" />

        <div className="lq-hero-content">
          <p className="lq-eyebrow lq-eyebrow-light">
            <span />
            YOUR NAKURU MOMENT STARTS HERE
          </p>

          <h1>
            Arrive.
            <br />
            <i>Unwind.</i>
            <br />
            Feel at home.
          </h1>

          <p className="lq-hero-description">
            Accommodation, dining and spaces to connect, all in one
            welcoming hospitality destination in Pipeline, Nakuru.
          </p>

          <div className="lq-hero-actions">
            <a className="lq-button lq-button-gold" href="/booking">
              Plan your stay <ArrowRight size={16} />
            </a>

            <a className="lq-hero-link" href="#experiences">
              Explore La Quita <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className="lq-hero-bottom">
          <span>HOSPITALITY, YOUR WAY</span>
          <span className="lq-hero-line" />
          <span>PIPELINE · NAKURU</span>
        </div>
      </section>

      {/* QUICK BOOKING BAR */}

      <section className="lq-quick-booking" id="quick-booking">
        <div className="lq-quick-heading">
          <span>PLAN YOUR VISIT</span>
          <h2>Make your stay yours.</h2>
          <p>Select your dates and preferred meal plan.</p>
        </div>

        <form
          action="/booking"
          method="GET"
          className="lq-quick-form"
        >
          <label>
            <span>
              <CalendarDays size={14} /> Check-in
            </span>

            <input
              type="date"
              name="checkIn"
              min={today || undefined}
              value={checkIn}
              required
              onChange={(event) => {
                setCheckIn(event.target.value);

                if (
                  checkOut &&
                  event.target.value >= checkOut
                ) {
                  setCheckOut('');
                }
              }}
            />
          </label>

          <label>
            <span>
              <CalendarDays size={14} /> Check-out
            </span>

            <input
              type="date"
              name="checkOut"
              min={checkIn || today || undefined}
              value={checkOut}
              required
              onChange={(event) => setCheckOut(event.target.value)}
            />
          </label>

          <label>
            <span>
              <Users size={14} /> Guests
            </span>

            <select name="guests" defaultValue="2">
              {[1, 2, 3, 4, 5, 6, 8, 10].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>
              <Coffee size={14} /> Meal plan
            </span>

            <select name="mealPlan" defaultValue="room-only">
              <option value="room-only">Room only</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="breakfast-lunch">
                Breakfast + lunch
              </option>
              <option value="half-board">
                Half-board enquiry
              </option>
            </select>
          </label>

          <button type="submit" className="lq-quick-submit">
            Continue <ArrowRight size={16} />
          </button>
        </form>
      </section>

      {/* INTRODUCTION */}

      <section className="lq-welcome lq-home-reveal">
        <div>
          <p className="lq-eyebrow">
            <span />
            WELCOME TO LA QUITA
          </p>

          <h2>
            Your plans.
            <br />
            <i>Our hospitality.</i>
          </h2>
        </div>

        <div className="lq-welcome-copy">
          <p>
            Whether you are passing through Nakuru, planning an overnight
            stay, meeting over a meal or bringing a team together, begin
            with the experience that suits your visit.
          </p>

          <p>
            Explore your options and contact our team to confirm
            availability, pricing and the details of your stay.
          </p>

          <a className="lq-text-link" href="/about">
            Get to know La Quita <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ROOM RATES */}

      <section className="lq-rates" id="room-rates">
        <div className="lq-section-header lq-home-reveal">
          <div>
            <p className="lq-eyebrow">
              <span />
              ACCOMMODATION IN NAKURU
            </p>

            <h2>
              Find your
              <br />
              <i>space to recharge.</i>
            </h2>
          </div>

          <div className="lq-section-intro">
            <p>
              Choose your preferred room rate. Each option offers a
              different room experience to suit your plans.
            </p>

            <a className="lq-text-link" href="/accommodation">
              Explore accommodation <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="lq-room-grid">
          {rooms.map((room, index) => (
            <article
              className="lq-room-card lq-home-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
              key={room.number}
            >
              <div className="lq-room-card-top">
                <span>{room.number} / ROOM COLLECTION</span>
                <BedDouble size={21} />
              </div>

              <h3>{room.name}</h3>
              <p>{room.description}</p>

              <div className="lq-room-price">
                <span>KSh</span>
                <strong>{room.price.toLocaleString('en-KE')}</strong>
              </div>

              <span className="lq-room-note">
                Per room · Per night · Room only
              </span>

              <a
                className="lq-room-link"
                href={waLink(
                  `Hello La Quita Hotel & Suites. I would like to enquire about the ${room.name} at KSh ${room.price.toLocaleString('en-KE')} per room per night, excluding meals. Please confirm availability for my preferred dates.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Enquire about this room <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>

        <div className="lq-rates-notice lq-home-reveal">
          <Check size={17} />

          <p>
            All room rates exclude meals. Total charges depend on the
            length of stay, number of rooms, number of guests and
            selected meal arrangements.
          </p>
        </div>
      </section>

      {/* DINING AND MEAL PLANS */}

      <section className="lq-meals lq-home-reveal" id="meal-plans">
        <div className="lq-meals-intro">
          <p className="lq-eyebrow lq-eyebrow-light">
            <span />
            DINING AT LA QUITA
          </p>

          <h2>
            Good mornings.
            <br />
            <i>Meals made simple.</i>
          </h2>

          <p>
            Add breakfast or lunch to your room booking, or ask our team
            about suitable meal combinations for your stay.
          </p>

          <a className="lq-button lq-button-gold" href="/booking">
            Plan a stay with meals <ArrowRight size={16} />
          </a>

          <a className="lq-meals-menu-link" href="/restaurant">
            Explore restaurant <ArrowRight size={14} />
          </a>
        </div>

        <div className="lq-meal-list">
          <article className="lq-meal-row">
            <div className="lq-meal-icon">
              <Coffee size={22} />
            </div>

            <div className="lq-meal-details">
              <h3>Breakfast</h3>
              <p>Available as an addition to your room booking.</p>
            </div>

            <div className="lq-meal-price">
              <strong>KSh 500</strong>
              <span>Per person</span>
            </div>
          </article>

          <article className="lq-meal-row">
            <div className="lq-meal-icon">
              <UtensilsCrossed size={22} />
            </div>

            <div className="lq-meal-details">
              <h3>Lunch</h3>
              <p>Add lunch to your visit or accommodation plan.</p>
            </div>

            <div className="lq-meal-price">
              <strong>KSh 1,500</strong>
              <span>Per person</span>
            </div>
          </article>

          <article className="lq-meal-row lq-half-board-row">
            <div className="lq-meal-icon">
              <Coffee size={22} />
            </div>

            <div className="lq-meal-details">
              <h3>Half-board & tailored plans</h3>
              <p>
                Let our team confirm the available meal combinations
                and applicable rates.
              </p>
            </div>

            <a
              className="lq-meal-enquire"
              href={waLink(
                'Hello La Quita Hotel & Suites. Please share your half-board options, meal combinations and applicable prices.',
              )}
              target="_blank"
              rel="noreferrer"
            >
              Enquire <ArrowRight size={14} />
            </a>
          </article>

          <p className="lq-meal-disclaimer">
            Breakfast and lunch are priced separately. Any half-board
            package, dinner or other unlisted meal charge must be
            confirmed by the hotel before booking.
          </p>
        </div>
      </section>

      {/* LOUNGE AND CONFERENCE */}

      <section className="lq-experiences" id="experiences">
        <div className="lq-section-header lq-home-reveal">
          <div>
            <p className="lq-eyebrow">
              <span />
              MORE AT LA QUITA
            </p>

            <h2>
              Spaces for
              <br />
              <i>every occasion.</i>
            </h2>
          </div>

          <p className="lq-section-intro lq-section-intro-single">
            Find a place to unwind or bring people together for a
            productive gathering in Nakuru.
          </p>
        </div>

        <div className="lq-experience-grid">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isConference = item.number === '02';

            return (
              <article
                className="lq-experience-card lq-home-reveal"
                key={item.number}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  className="lq-experience-image"
                  href={item.href}
                  style={{ backgroundImage: `url("${item.image}")` }}
                  aria-label={item.title}
                >
                  <span>{item.number}</span>
                </a>

                <div className="lq-experience-content">
                  <div className="lq-experience-icon">
                    <Icon size={20} />
                  </div>

                  <h3>{item.title}</h3>

                  {isConference && (
                    <div className="lq-conference-rate">
                      <span>Conference hall hire</span>
                      <strong>KSh 8,000</strong>
                    </div>
                  )}

                  <p>{item.description}</p>

                  {isConference && (
                    <p className="lq-conference-note">
                      Confirm the applicable duration, capacity, setup
                      and availability with our team.
                    </p>
                  )}

                  <a href={item.href} className="lq-text-link">
                    {item.label} <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* JOURNAL */}

      <section className="lq-journal" id="journal">
        <div className="lq-section-header lq-home-reveal">
          <div>
            <p className="lq-eyebrow">
              <span />
              THE LA QUITA JOURNAL
            </p>

            <h2>
              Helpful reading.
              <br />
              <i>Better planned journeys.</i>
            </h2>
          </div>

          <div className="lq-section-intro">
            <p>
              Explore useful guides on accommodation, travel and
              planning meetings in Nakuru.
            </p>

            <a className="lq-text-link" href="/blog">
              Visit the journal <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="lq-blog-grid">
          {blogPosts.slice(0, 3).map((post, index) => (
            <article
              className="lq-blog-card lq-home-reveal"
              key={post.slug}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                className="lq-blog-image"
                href={`/blog/${post.slug}`}
                style={{ backgroundImage: `url("${post.image}")` }}
                aria-label={`Read ${post.title}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
              </a>

              <div className="lq-blog-content">
                <span className="lq-blog-category">{post.category}</span>

                <h3>{post.title}</h3>

                <p>
                  {post.excerpt.length > 125
                    ? `${post.excerpt.slice(0, 125).trim()}…`
                    : post.excerpt}
                </p>

                <a href={`/blog/${post.slug}`} className="lq-text-link">
                  Read the guide <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING CALL TO ACTION */}

      <section className="lq-final-cta lq-home-reveal">
        <div>
          <p className="lq-eyebrow lq-eyebrow-light">
            <span />
            YOUR NEXT VISIT STARTS HERE
          </p>

          <h2>
            Nakuru is calling.
            <br />
            <i>Make yourself at home.</i>
          </h2>

          <p>
            Share your preferred dates, room choice and meal
            requirements. Our team will help you confirm the details.
          </p>
        </div>

        <div className="lq-final-actions">
          <a className="lq-button lq-button-gold" href="/booking">
            Start your booking <ArrowRight size={16} />
          </a>

          <a
            href={waLink(
              'Hello La Quita Hotel & Suites. I would like assistance planning my stay.',
            )}
            target="_blank"
            rel="noreferrer"
            className="lq-final-whatsapp"
          >
            <MessageCircle size={17} />
            Speak to our team on WhatsApp
          </a>
        </div>
      </section>

      {/* GOOGLE MAPS LOCATION */}

      <section className="lq-location" id="location">
        <div className="lq-location-copy lq-home-reveal">
          <p className="lq-eyebrow">
            <span />
            FIND YOUR WAY TO US
          </p>

          <h2>
            Your destination.
            <br />
            <i>Right here in Nakuru.</i>
          </h2>

          <p>
            Visit La Quita Hotel & Suites in Pipeline, Nakuru, Kenya.
            Use the map to locate the hotel and plan your journey.
          </p>

          <div className="lq-location-address">
            <MapPin size={19} />

            <div>
              <strong>La Quita Hotel & Suites</strong>
              <span>Pipeline, Nakuru, Kenya</span>
            </div>
          </div>

          <a
            className="lq-button lq-button-red"
            href="https://www.google.com/maps/dir/?api=1&destination=La+Quita+Hotel+and+Suites%2C+Pipeline%2C+Nakuru%2C+Kenya"
            target="_blank"
            rel="noreferrer"
          >
            Get directions <ArrowRight size={16} />
          </a>

          <p className="lq-map-note">
            Confirm the map pin matches the hotel entrance before
            relying on it for precise directions.
          </p>
        </div>

        <div className="lq-location-map lq-home-reveal">
          <iframe
            title="Map search for La Quita Hotel & Suites in Pipeline, Nakuru"
            src="https://maps.google.com/maps?q=La%20Quita%20Hotel%20%26%20Suites%2C%20Pipeline%2C%20Nakuru%2C%20Kenya&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* FOOTER */}

      <footer className="lq-footer">
        <div className="lq-footer-main">
          <div className="lq-footer-brand-col">
            <a className="lq-brand lq-footer-brand" href="/">
              <img
                src="/images/laquita-logo.jpg"
                alt="La Quita Hotel & Suites"
              />

              <span>
                <b>LA QUITA</b>
                <small>HOTEL & SUITES</small>
              </span>
            </a>

            <p>
              Where Tranquility
              <br />
              <i>Meets Excellence.</i>
            </p>

            <span className="lq-footer-location">
              <MapPin size={14} /> Pipeline, Nakuru, Kenya
            </span>
          </div>

          <div className="lq-footer-column">
            <h3>EXPLORE</h3>
            <a href="/accommodation">Accommodation</a>
            <a href="/restaurant">Restaurant & Dining</a>
            <a href="/lounge">Bar & Lounge</a>
            <a href="/conferences">Meetings & Conferences</a>
            <a href="/gallery">Gallery</a>
            <a href="/about">About La Quita</a>
            <a href="/blog">Journal</a>
            <a href="/booking">Book a stay</a>
          </div>

          <div className="lq-footer-column">
            <h3>GUEST INFORMATION</h3>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cancellation-policy">Cancellation & Refunds</a>
            <a href="/guest-policy">Guest Rules</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>

          <div className="lq-footer-column lq-footer-contact">
            <h3>GET IN TOUCH</h3>

            <a href="tel:+254759713882">+254 759 713 882</a>

            <a
              href={waLink(
                'Hello La Quita Hotel & Suites. I have an enquiry.',
              )}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp our team <ArrowRight size={14} />
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=La+Quita+Hotel+and+Suites%2C+Pipeline%2C+Nakuru%2C+Kenya"
              target="_blank"
              rel="noreferrer"
            >
              Find us on Maps <ArrowRight size={14} />
            </a>

            <a href="/contact">Contact & directions</a>
          </div>
        </div>

        <div className="lq-footer-bottom">
          <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
          <span>HOSPITALITY · COMFORT · CONNECTION</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}

      <a
        className="lq-floating-whatsapp"
        href={waLink(
          'Hello La Quita Hotel & Suites. I would like to make an enquiry.',
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact La Quita on WhatsApp"
      >
        <MessageCircle size={21} />
        <span>Chat with us</span>
      </a>

      {/* HOMEPAGE STYLES */}

      <style jsx global>{`
        .lq-home {
          --lq-red: #a52e22;
          --lq-gold: #e5b84c;
          --lq-cream: #fbf8f1;
          --lq-ink: #29231d;
          --lq-muted: #756d62;
          color: var(--lq-ink);
          background: var(--lq-cream);
          overflow: clip;
        }

        .lq-home * {
          box-sizing: border-box;
        }

        .lq-home a {
          text-decoration: none;
        }

        .lq-topbar {
          min-height: 36px;
          padding: 9px 7%;
          background: #29231d;
          color: #eee6d8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .lq-topbar > a {
          color: var(--lq-gold);
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .lq-nav {
          min-height: 80px;
          padding: 12px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: var(--lq-cream);
          position: relative;
          z-index: 20;
        }

        .lq-brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--lq-ink);
          flex-shrink: 0;
        }

        .lq-brand img {
          display: block;
          width: 46px;
          height: 46px;
          object-fit: contain;
        }

        .lq-brand span {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lq-brand b {
          font-size: 17px;
          line-height: 1;
          letter-spacing: 2px;
        }

        .lq-brand small {
          font-size: 8px;
          letter-spacing: 1.8px;
        }

        .lq-nav-links {
          display: flex;
          align-items: center;
          gap: clamp(13px, 2vw, 25px);
        }

        .lq-nav-links > a:not(.lq-nav-book) {
          color: #51483e;
          font-size: 10px;
          transition: color .2s ease;
        }

        .lq-nav-links > a:not(.lq-nav-book):hover {
          color: var(--lq-red);
        }

        .lq-nav-book {
          min-height: 42px;
          padding: 12px 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: var(--lq-red);
          color: white;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
          transition: background .25s ease, transform .25s ease;
        }

        .lq-nav-book:hover {
          background: #812219;
          transform: translateY(-2px);
        }

        .lq-menu-toggle {
          display: none;
          padding: 8px;
          background: transparent;
          border: 0;
          color: var(--lq-ink);
          cursor: pointer;
        }

        .lq-hero {
          position: relative;
          isolation: isolate;
          min-height: clamp(520px, 66vw, 680px);
          display: flex;
          align-items: center;
          color: white;
          background: #29231d;
          overflow: hidden;
        }

        .lq-hero-image,
        .lq-hero-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .lq-hero-image {
          background: url('/images/laquita-exterior.JPG') center 48% / cover;
          animation: lq-hero-zoom 15s ease-out both;
        }

        .lq-hero-shade {
          background:
            linear-gradient(
              90deg,
              rgba(25, 20, 17, .88),
              rgba(25, 20, 17, .62) 48%,
              rgba(25, 20, 17, .13)
            ),
            linear-gradient(0deg, rgba(25, 20, 17, .4), transparent 45%);
        }

        .lq-hero-content {
          width: min(750px, 82%);
          margin-left: 10%;
          padding: 65px 0 85px;
          animation: lq-hero-enter .9s .12s both;
        }

        .lq-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 20px;
          color: var(--lq-red);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
          line-height: 1.7;
        }

        .lq-eyebrow > span {
          display: inline-block;
          width: 24px;
          height: 2px;
          background: var(--lq-red);
          flex-shrink: 0;
        }

        .lq-eyebrow-light {
          color: var(--lq-gold);
        }

        .lq-eyebrow-light > span {
          background: var(--lq-gold);
        }

        .lq-hero h1 {
          margin: 0;
          max-width: 800px;
          font: 500 clamp(47px, 6.5vw, 83px)/1.04 'Playfair Display', Georgia, serif;
          letter-spacing: -2px;
        }

        .lq-hero h1 i,
        .lq-welcome h2 i,
        .lq-section-header h2 i,
        .lq-meals h2 i,
        .lq-final-cta h2 i,
        .lq-location-copy h2 i {
          font-weight: 500;
          font-style: italic;
        }

        .lq-hero h1 i {
          color: var(--lq-gold);
        }

        .lq-hero-description {
          max-width: 480px;
          margin: 23px 0 27px;
          color: #eee5d9;
          font-size: 12px;
          line-height: 1.95;
        }

        .lq-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .lq-button {
          min-height: 46px;
          padding: 13px 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          font-size: 10px;
          font-weight: 800;
          transition: background .25s ease, transform .25s ease;
        }

        .lq-button:hover {
          transform: translateY(-3px);
        }

        .lq-button-gold {
          background: var(--lq-gold);
          color: #30261a;
        }

        .lq-button-gold:hover {
          background: #f1cd72;
        }

        .lq-button-red {
          background: var(--lq-red);
          color: white;
        }

        .lq-button-red:hover {
          background: #812219;
        }

        .lq-hero-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 10px;
          font-weight: 700;
        }

        .lq-hero-bottom {
          position: absolute;
          left: 7%;
          right: 7%;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 13px;
          color: #f2e9dc;
          font-size: 8px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .lq-hero-line {
          width: 43px;
          height: 1px;
          background: var(--lq-gold);
        }

        .lq-quick-booking {
          position: relative;
          z-index: 5;
          width: 86%;
          max-width: 1300px;
          margin: -1px auto 0;
          padding: 25px 27px;
          display: grid;
          grid-template-columns: .72fr 2fr;
          align-items: center;
          gap: 26px;
          background: #fffdf8;
          border: 1px solid #e5dac8;
          box-shadow: 0 13px 35px #21180c0c;
        }

        .lq-quick-heading > span {
          display: block;
          margin-bottom: 7px;
          color: var(--lq-red);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .lq-quick-heading h2 {
          margin: 0;
          font: 500 21px/1.3 'Playfair Display', Georgia, serif;
        }

        .lq-quick-heading p {
          margin: 8px 0 0;
          color: var(--lq-muted);
          font-size: 10px;
          line-height: 1.6;
        }

        .lq-quick-form {
          display: grid;
          grid-template-columns: 1fr 1fr .75fr 1.15fr auto;
          gap: 11px;
          align-items: end;
        }

        .lq-quick-form label {
          display: flex;
          flex-direction: column;
          min-width: 0;
          gap: 7px;
          color: #65594b;
          font-size: 9px;
          font-weight: 700;
        }

        .lq-quick-form label > span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .lq-quick-form label > span svg {
          color: var(--lq-red);
        }

        .lq-quick-form input,
        .lq-quick-form select {
          width: 100%;
          min-width: 0;
          height: 42px;
          padding: 0 8px;
          border: 1px solid #ded4c5;
          border-radius: 0;
          background: #fff;
          color: #302820;
          font: inherit;
          font-size: 10px;
        }

        .lq-quick-submit {
          min-height: 42px;
          padding: 0 14px;
          border: 0;
          background: var(--lq-red);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: nowrap;
          cursor: pointer;
          font-size: 10px;
          font-weight: 800;
          transition: background .2s ease;
        }

        .lq-quick-submit:hover {
          background: #812219;
        }

        .lq-welcome {
          padding: 77px 10%;
          display: grid;
          grid-template-columns: .95fr 1fr;
          align-items: center;
          gap: 8%;
          background: var(--lq-cream);
        }

        .lq-welcome h2,
        .lq-section-header h2,
        .lq-meals h2,
        .lq-final-cta h2,
        .lq-location-copy h2 {
          margin: 0;
          font: 500 clamp(35px, 4.1vw, 52px)/1.12 'Playfair Display', Georgia, serif;
          letter-spacing: -1.2px;
        }

        .lq-welcome h2 i,
        .lq-section-header h2 i,
        .lq-location-copy h2 i {
          color: var(--lq-red);
        }

        .lq-welcome-copy {
          max-width: 490px;
          color: var(--lq-muted);
          font-size: 12px;
          line-height: 2;
        }

        .lq-welcome-copy p {
          margin: 0 0 13px;
        }

        .lq-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--lq-red);
          font-size: 10px;
          font-weight: 800;
        }

        .lq-text-link svg {
          transition: transform .2s ease;
        }

        .lq-text-link:hover svg {
          transform: translateX(4px);
        }

        .lq-rates {
          padding: 78px 10%;
          background: #f0e9dc;
        }

        .lq-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 36px;
        }

        .lq-section-intro {
          max-width: 360px;
          color: var(--lq-muted);
          font-size: 11px;
          line-height: 1.9;
        }

        .lq-section-intro p {
          margin: 0 0 15px;
        }

        .lq-section-intro-single {
          margin-bottom: 0;
        }

        .lq-room-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
          align-items: stretch;
        }

        .lq-room-card {
          padding: 26px 23px 22px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #fbf8f1;
          border: 1px solid #e2d8c7;
          transition: transform .3s ease, box-shadow .3s ease,
            border-color .3s ease;
        }

        .lq-room-card:hover {
          transform: translateY(-5px);
          border-color: #cba74c;
          box-shadow: 0 14px 35px #3928190f;
        }

        .lq-room-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #877864;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .lq-room-card-top svg {
          color: var(--lq-red);
          flex-shrink: 0;
        }

        .lq-room-card h3 {
          margin: 25px 0 10px;
          font: 500 24px/1.25 'Playfair Display', Georgia, serif;
        }

        .lq-room-card > p {
          min-height: 39px;
          margin: 0;
          color: var(--lq-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .lq-room-price {
          margin-top: 23px;
          display: flex;
          align-items: baseline;
          gap: 6px;
          color: var(--lq-red);
        }

        .lq-room-price > span {
          font-size: 11px;
          font-weight: 700;
        }

        .lq-room-price strong {
          font: 500 37px/1.1 'Playfair Display', Georgia, serif;
        }

        .lq-room-note {
          margin: 7px 0 21px;
          color: #887d6e;
          font-size: 9px;
        }

        .lq-room-link {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid #e3dacd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: var(--lq-red);
          font-size: 10px;
          font-weight: 800;
        }

        .lq-room-link svg {
          flex-shrink: 0;
        }

        .lq-rates-notice {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 23px;
          color: #756b5d;
          font-size: 10px;
          line-height: 1.8;
        }

        .lq-rates-notice svg {
          color: var(--lq-red);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .lq-rates-notice p {
          margin: 0;
        }

        .lq-meals {
          padding: 78px 10%;
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 8%;
          align-items: start;
          background: #29231d;
          color: white;
        }

        .lq-meals h2 i,
        .lq-final-cta h2 i {
          color: var(--lq-gold);
        }

        .lq-meals-intro > p:not(.lq-eyebrow) {
          max-width: 390px;
          margin: 20px 0 25px;
          color: #d0c5b7;
          font-size: 12px;
          line-height: 1.9;
        }

        .lq-meals-menu-link {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 20px;
          color: #f1dfb8;
          font-size: 10px;
          font-weight: 700;
        }

        .lq-meal-list {
          border-top: 1px solid #66594a;
        }

        .lq-meal-row {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) auto;
          align-items: center;
          gap: 15px;
          padding: 22px 0;
          border-bottom: 1px solid #66594a;
        }

        .lq-meal-icon {
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--lq-gold);
          border: 1px solid #74644b;
        }

        .lq-meal-details h3 {
          margin: 0 0 6px;
          font: 500 20px/1.25 'Playfair Display', Georgia, serif;
        }

        .lq-meal-details p {
          max-width: 350px;
          margin: 0;
          color: #c9beb0;
          font-size: 10px;
          line-height: 1.8;
        }

        .lq-meal-price {
          text-align: right;
          white-space: nowrap;
        }

        .lq-meal-price strong {
          display: block;
          color: var(--lq-gold);
          font: 500 22px/1.2 'Playfair Display', Georgia, serif;
        }

        .lq-meal-price span {
          color: #c9beb0;
          font-size: 9px;
        }

        .lq-meal-enquire {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: var(--lq-gold);
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .lq-meal-disclaimer {
          margin: 16px 0 0;
          color: #bfb3a4;
          font-size: 9px;
          line-height: 1.8;
        }

        .lq-experiences,
        .lq-journal {
          padding: 78px 10%;
          background: var(--lq-cream);
        }

        .lq-experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .lq-experience-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #fffdf9;
          border: 1px solid #e8dfd2;
          overflow: hidden;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .lq-experience-card:hover,
        .lq-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px #30231612;
        }

        .lq-experience-image,
        .lq-blog-image {
          height: 260px;
          position: relative;
          display: block;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .lq-experience-image::after,
        .lq-blog-image::after {
          position: absolute;
          content: '';
          inset: 0;
          background: linear-gradient(0deg, #17130e65, transparent 65%);
        }

        .lq-experience-image > span,
        .lq-blog-image > span {
          position: absolute;
          z-index: 1;
          left: 19px;
          bottom: 17px;
          color: white;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .lq-experience-content {
          position: relative;
          flex: 1;
          padding: 26px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .lq-experience-icon {
          width: 39px;
          height: 39px;
          margin-top: -46px;
          margin-bottom: 20px;
          position: relative;
          border: 3px solid #fffdf9;
          background: #f0e8d9;
          color: var(--lq-red);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lq-experience-content h3 {
          margin: 0 0 12px;
          font: 500 25px/1.25 'Playfair Display', Georgia, serif;
        }

        .lq-experience-content > p {
          margin: 0 0 19px;
          color: var(--lq-muted);
          font-size: 11px;
          line-height: 1.9;
        }

        .lq-conference-rate {
          width: 100%;
          margin: 0 0 14px;
          padding: 13px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          background: #f1e7d5;
          color: #6b5940;
          font-size: 10px;
        }

        .lq-conference-rate strong {
          color: var(--lq-red);
          font: 500 22px/1.2 'Playfair Display', Georgia, serif;
        }

        .lq-experience-content > .lq-conference-note {
          margin-top: -7px;
          font-size: 9px;
          line-height: 1.8;
        }

        .lq-experience-content > .lq-text-link {
          margin-top: auto;
        }

        .lq-journal {
          background: #f0e9dc;
        }

        .lq-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .lq-blog-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #fffdf9;
          border: 1px solid #e5dbcb;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .lq-blog-image {
          height: 205px;
        }

        .lq-blog-content {
          flex: 1;
          padding: 23px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .lq-blog-category {
          margin-bottom: 12px;
          color: var(--lq-red);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .lq-blog-content h3 {
          margin: 0 0 12px;
          font: 500 22px/1.3 'Playfair Display', Georgia, serif;
        }

        .lq-blog-content > p {
          margin: 0 0 20px;
          color: var(--lq-muted);
          font-size: 10px;
          line-height: 1.9;
        }

        .lq-blog-content > .lq-text-link {
          margin-top: auto;
        }

        .lq-final-cta {
          padding: 72px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 38px;
          background: var(--lq-red);
          color: white;
        }

        .lq-final-cta > div:first-child > p:not(.lq-eyebrow) {
          max-width: 460px;
          margin: 18px 0 0;
          color: #f1dcd6;
          font-size: 11px;
          line-height: 1.9;
        }

        .lq-final-actions {
          min-width: 220px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .lq-final-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-size: 10px;
          font-weight: 700;
        }

        .lq-location {
          padding: 76px 10%;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: center;
          gap: 7%;
          background: #f0e9dc;
        }

        .lq-location-copy > p:not(.lq-eyebrow) {
          max-width: 390px;
          margin: 20px 0;
          color: var(--lq-muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .lq-location-address {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin: 23px 0;
          color: var(--lq-red);
        }

        .lq-location-address svg {
          margin-top: 2px;
          flex-shrink: 0;
        }

        .lq-location-address div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .lq-location-address strong {
          color: #302820;
          font-size: 12px;
        }

        .lq-location-address span {
          color: var(--lq-muted);
          font-size: 10px;
          line-height: 1.7;
        }

        .lq-location-copy .lq-map-note {
          margin-top: 15px;
          color: #857866;
          font-size: 9px;
        }

        .lq-location-map {
          min-width: 0;
          height: 380px;
          overflow: hidden;
          background: #e5dfd3;
          border: 6px solid #fffdf8;
          box-shadow: 0 12px 35px #30231612;
        }

        .lq-location-map iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .lq-footer {
          padding: 47px 7% 0;
          background: #29231d;
          color: #f4ebdf;
        }

        .lq-footer-main {
          display: grid;
          grid-template-columns: 1.15fr .9fr 1fr .9fr;
          gap: 33px;
          padding-bottom: 42px;
        }

        .lq-footer-brand {
          color: white;
        }

        .lq-footer-brand-col > p {
          margin: 20px 0;
          font: 500 22px/1.35 'Playfair Display', Georgia, serif;
        }

        .lq-footer-brand-col > p i {
          color: var(--lq-gold);
        }

        .lq-footer-location {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #c5b9a9;
          font-size: 10px;
        }

        .lq-footer-location svg {
          color: var(--lq-gold);
        }

        .lq-footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .lq-footer-column h3 {
          margin: 5px 0 8px;
          color: var(--lq-gold);
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .lq-footer-column a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #d7cfc4;
          font-size: 10px;
          line-height: 1.6;
          transition: color .2s ease;
        }

        .lq-footer-column a:hover {
          color: var(--lq-gold);
        }

        .lq-footer-bottom {
          min-height: 55px;
          padding: 15px 0;
          border-top: 1px solid #52473a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 17px;
          color: #c9beb0;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .lq-footer-bottom a {
          color: var(--lq-gold);
          white-space: nowrap;
        }

        .lq-floating-whatsapp {
          position: fixed;
          z-index: 50;
          right: 22px;
          bottom: 22px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 16px;
          border: 1px solid #75603d;
          background: #29231d;
          color: white;
          box-shadow: 0 6px 24px #0002;
          font-size: 10px;
          font-weight: 700;
          transition: transform .25s ease, background .25s ease;
        }

        .lq-floating-whatsapp svg {
          color: var(--lq-gold);
        }

        .lq-floating-whatsapp:hover {
          transform: translateY(-3px);
          background: #423428;
        }

        .lq-home-reveal {
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity .7s ease,
            transform .7s cubic-bezier(.2, .65, .3, 1);
        }

        .lq-home-motion-ready .lq-home-reveal:not(.is-visible) {
          opacity: 0;
          transform: translateY(24px);
        }

        .lq-home-motion-ready .lq-home-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes lq-hero-zoom {
          from { transform: scale(1.06); }
          to { transform: scale(1); }
        }

        @keyframes lq-hero-enter {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1150px) {
          .lq-nav {
            padding-left: 5%;
            padding-right: 5%;
          }

          .lq-nav-links {
            gap: 13px;
          }

          .lq-nav-links > a:not(.lq-nav-book) {
            font-size: 9px;
          }

          .lq-quick-booking {
            width: 90%;
            grid-template-columns: 1fr;
          }

          .lq-quick-form {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .lq-quick-submit {
            grid-column: 1 / -1;
          }

          .lq-welcome,
          .lq-rates,
          .lq-meals,
          .lq-experiences,
          .lq-journal,
          .lq-final-cta,
          .lq-location {
            padding-left: 7%;
            padding-right: 7%;
          }

          .lq-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px;
          }
        }

        @media (max-width: 760px) {
          .lq-topbar {
            padding: 9px 5%;
            font-size: 8px;
            letter-spacing: 1px;
          }

          .lq-topbar-centre {
            display: none;
          }

          .lq-nav {
            min-height: 71px;
            padding: 10px 5%;
          }

          .lq-brand img {
            width: 41px;
            height: 41px;
          }

          .lq-brand b {
            font-size: 16px;
          }

          .lq-menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .lq-nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 20;
            padding: 12px 5% 22px;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: var(--lq-cream);
            box-shadow: 0 15px 25px #00000010;
          }

          .lq-nav-links.is-open {
            display: flex;
          }

          .lq-nav-links > a:not(.lq-nav-book) {
            padding: 13px 0;
            border-bottom: 1px solid #e6ded2;
            font-size: 12px;
          }

          .lq-nav-book {
            margin-top: 14px;
          }

          .lq-hero {
            min-height: 590px;
          }

          .lq-hero-image {
            background-position: 57% center;
          }

          .lq-hero-shade {
            background:
              linear-gradient(90deg, #181411d9, #18141170 100%),
              linear-gradient(0deg, #18141182, transparent 65%);
          }

          .lq-hero-content {
            width: 86%;
            margin-left: 7%;
            padding: 50px 0 75px;
          }

          .lq-hero h1 {
            font-size: clamp(43px, 9vw, 62px);
            letter-spacing: -1.5px;
          }

          .lq-hero-description {
            font-size: 12px;
          }

          .lq-hero-bottom {
            left: 7%;
            right: 7%;
            bottom: 18px;
            gap: 9px;
            font-size: 7px;
          }

          .lq-quick-booking {
            width: 100%;
            padding: 25px 7%;
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .lq-quick-form {
            grid-template-columns: 1fr 1fr;
            gap: 13px;
          }

          .lq-quick-submit {
            grid-column: 1 / -1;
            min-height: 46px;
          }

          .lq-welcome {
            padding: 53px 7%;
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .lq-welcome h2,
          .lq-section-header h2,
          .lq-meals h2,
          .lq-final-cta h2,
          .lq-location-copy h2 {
            font-size: 38px;
          }

          .lq-rates,
          .lq-experiences,
          .lq-journal {
            padding: 56px 7%;
          }

          .lq-section-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 28px;
          }

          .lq-room-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .lq-room-card {
            padding: 23px;
          }

          .lq-room-card > p {
            min-height: 0;
          }

          .lq-room-price {
            margin-top: 19px;
          }

          .lq-meals {
            padding: 55px 7%;
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .lq-meal-row {
            grid-template-columns: 38px minmax(0, 1fr) auto;
            gap: 11px;
          }

          .lq-meal-icon {
            width: 36px;
            height: 36px;
          }

          .lq-meal-details h3 {
            font-size: 18px;
          }

          .lq-meal-price strong {
            font-size: 19px;
          }

          .lq-experience-grid {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .lq-experience-image {
            height: 240px;
          }

          .lq-blog-grid {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .lq-blog-image {
            height: 235px;
          }

          .lq-final-cta {
            padding: 54px 7%;
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }

          .lq-final-actions {
            min-width: 0;
          }

          .lq-location {
            padding: 55px 7%;
            grid-template-columns: 1fr;
            gap: 29px;
          }

          .lq-location-map {
            height: 320px;
          }

          .lq-footer {
            padding: 38px 7% 0;
          }

          .lq-footer-main {
            gap: 30px 22px;
          }

          .lq-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 11px;
          }
        }

        @media (max-width: 420px) {
          .lq-topbar {
            font-size: 7px;
          }

          .lq-hero {
            min-height: 570px;
          }

          .lq-hero h1 {
            font-size: 43px;
          }

          .lq-hero-actions {
            align-items: flex-start;
            flex-direction: column;
            gap: 17px;
          }

          .lq-quick-form {
            grid-template-columns: 1fr;
          }

          .lq-quick-submit {
            grid-column: auto;
          }

          .lq-meal-row {
            grid-template-columns: 35px minmax(0, 1fr);
            align-items: start;
          }

          .lq-meal-price,
          .lq-meal-enquire {
            grid-column: 2;
            text-align: left;
          }

          .lq-footer-main {
            grid-template-columns: 1fr;
          }

          .lq-floating-whatsapp {
            right: 12px;
            bottom: 12px;
            padding: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lq-home *,
          .lq-home *::before,
          .lq-home *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }

          .lq-home-reveal {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
