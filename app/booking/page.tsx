
'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Coffee,
  MapPin,
  MessageCircle,
  Users,
} from 'lucide-react';

const whatsapp = '254759713882';

const roomTypes = {
  'Classic Room': 2000,
  'Comfort Room': 2500,
  'Premier Room': 3000,
};

type RoomType = keyof typeof roomTypes;

type MealPlan =
  | 'room-only'
  | 'breakfast'
  | 'lunch'
  | 'breakfast-lunch'
  | 'half-board';

type BookingForm = {
  guestName: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  roomType: RoomType;
  mealPlan: MealPlan;
  notes: string;
};

const initialForm: BookingForm = {
  guestName: '',
  guestPhone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  rooms: '1',
  roomType: 'Comfort Room',
  mealPlan: 'room-only',
  notes: '',
};

const mealLabels: Record<MealPlan, string> = {
  'room-only': 'Room only',
  breakfast: 'Breakfast — KSh 500 per person per night',
  lunch: 'Lunch — KSh 1,500 per person per day',
  'breakfast-lunch':
    'Breakfast + lunch — KSh 2,000 per person per day',
  'half-board': 'Half-board / dinner enquiry — price to be confirmed',
};

function formatKsh(amount: number) {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

function getNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;

  const start = Date.parse(`${checkIn}T00:00:00Z`);
  const end = Date.parse(`${checkOut}T00:00:00Z`);

  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
    return 0;
  }

  return Math.round((end - start) / 86400000);
}

export default function BookingPage() {
  const [form, setForm] = useState<BookingForm>(initialForm);
  const [error, setError] = useState('');
  const [preparedMessage, setPreparedMessage] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkIn = params.get('checkIn') || '';
    const checkOut = params.get('checkOut') || '';
    const rawMeal = params.get('mealPlan') || 'room-only';

    const validMeals: MealPlan[] = [
      'room-only',
      'breakfast',
      'lunch',
      'breakfast-lunch',
      'half-board',
    ];

    const mealPlan = validMeals.includes(rawMeal as MealPlan)
      ? (rawMeal as MealPlan)
      : 'room-only';

    setForm((current) => ({
      ...current,
      checkIn,
      checkOut,
      mealPlan,
    }));
  }, []);

  const nights = getNights(form.checkIn, form.checkOut);
  const roomCount = Math.max(1, Number(form.rooms) || 1);
  const guestCount = Math.max(1, Number(form.guests) || 1);
  const roomRate = roomTypes[form.roomType];
  const roomTotal = nights * roomCount * roomRate;

  const mealRate: Record<MealPlan, number> = {
    'room-only': 0,
    breakfast: 500,
    lunch: 1500,
    'breakfast-lunch': 2000,
    'half-board': 0,
  };

  const mealTotal =
    nights * guestCount * mealRate[form.mealPlan];

  const estimatedTotal = roomTotal + mealTotal;
  const hasUnpricedMealPlan = form.mealPlan === 'half-board';

  function update<K extends keyof BookingForm>(
    field: K,
    value: BookingForm[K],
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    setPreparedMessage('');
    setError('');
  }

  function prepareBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setPreparedMessage('');

    const stayNights = getNights(form.checkIn, form.checkOut);

    if (stayNights < 1) {
      setError('Please choose a departure date after your arrival date.');
      return;
    }

    if (!form.guestName.trim() || !form.guestPhone.trim()) {
      setError('Please enter the guest name and contact phone number.');
      return;
    }

    const stayRoomTotal =
      stayNights * roomCount * roomTypes[form.roomType];

    const stayMealTotal =
      stayNights * guestCount * mealRate[form.mealPlan];

    const stayEstimatedTotal = stayRoomTotal + stayMealTotal;

    const message = [
      'LA QUITA HOTEL & SUITES — BOOKING ENQUIRY',
      '',
      'GUEST DETAILS',
      `Full name: ${form.guestName.trim()}`,
      `Guest phone: ${form.guestPhone.trim()}`,
      '',
      'STAY DETAILS',
      `Arrival date: ${form.checkIn}`,
      `Departure date: ${form.checkOut}`,
      `Number of nights: ${stayNights}`,
      `Room category: ${form.roomType}`,
      `Room rate: ${formatKsh(roomTypes[form.roomType])} per room per night`,
      `Number of rooms: ${roomCount}`,
      `Number of guests: ${guestCount}`,
      '',
      'MEAL PLAN',
      `Selected plan: ${mealLabels[form.mealPlan]}`,
      `Room charges: ${formatKsh(stayRoomTotal)}`,
      `Priced meal charges: ${formatKsh(stayMealTotal)}`,
      hasUnpricedMealPlan
        ? 'Half-board/dinner charges: TO BE CONFIRMED BY RECEPTION; not included in the estimate.'
        : 'Meal estimate assumes the selected meal is required for each guest for each night.',
      `ESTIMATED SUBTOTAL: ${formatKsh(stayEstimatedTotal)}`,
      hasUnpricedMealPlan
        ? 'IMPORTANT: This subtotal excludes unconfirmed half-board/dinner charges.'
        : 'IMPORTANT: This is an estimate, not a confirmed reservation or final invoice.',
      '',
      'SPECIAL REQUESTS',
      form.notes.trim() || 'None provided',
      '',
      'Please confirm room availability, final charges, meal arrangements and the applicable booking terms.',
    ].join('\n');

    setPreparedMessage(message);
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <main className="lq-booking">
      <header className="lq-booking-nav">
        <a href="/" className="lq-booking-brand">
          <img src="/images/laquita-logo.jpg" alt="La Quita logo" />
          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </a>

        <nav>
          <a href="/accommodation">Accommodation</a>
          <a href="/restaurant">Dining</a>
          <a href="/lounge">Lounge</a>
          <a href="/conferences">Meetings</a>
          <a href="/blog">Journal</a>
        </nav>

        <a href="/" className="lq-booking-back">
          <ArrowLeft size={15} /> Home
        </a>
      </header>

      <section className="lq-booking-hero">
        <div className="lq-booking-hero-image" />
        <div className="lq-booking-hero-shade" />
        <div className="lq-booking-hero-content">
          <p>YOUR NAKURU STAY, THOUGHTFULLY PLANNED</p>
          <h1>
            Let’s plan
            <br />
            <i>your stay.</i>
          </h1>
          <span>
            Share your dates, room preference and meal plan with our team.
          </span>
        </div>
      </section>

      <section className="lq-booking-main">
        <div className="lq-booking-intro">
          <p className="lq-booking-eyebrow">
            <span /> BOOKING ENQUIRY
          </p>
          <h2>
            A few details.
            <br />
            <i>A smoother arrival.</i>
          </h2>
          <p>
            Complete the form to prepare a detailed WhatsApp enquiry.
            Our reception team will confirm availability and any charges
            that need further clarification.
          </p>

          <div className="lq-booking-help">
            <MapPin size={17} />
            <span>La Quita Hotel & Suites · Pipeline, Nakuru</span>
          </div>

          <div className="lq-booking-help">
            <MessageCircle size={17} />
            <span>WhatsApp: +254 759 713 882</span>
          </div>
        </div>

        <div className="lq-booking-card">
          <form onSubmit={prepareBooking}>
            <div className="lq-form-section-title">
              <span>01</span>
              <div>
                <h3>Guest information</h3>
                <p>Who should our reception team contact?</p>
              </div>
            </div>

            <div className="lq-form-grid">
              <label className="lq-form-field">
                Full name *
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={form.guestName}
                  onChange={(e) => update('guestName', e.target.value)}
                  placeholder="Guest's full name"
                />
              </label>

              <label className="lq-form-field">
                Contact phone *
                <input
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.guestPhone}
                  onChange={(e) => update('guestPhone', e.target.value)}
                  placeholder="Phone number"
                />
              </label>
            </div>

            <div className="lq-form-section-title">
              <span>02</span>
              <div>
                <h3>Your stay</h3>
                <p>Select your dates, room and guest numbers.</p>
              </div>
            </div>

            <div className="lq-form-grid">
              <label className="lq-form-field">
                <span className="lq-form-label-icon">
                  <CalendarDays size={15} /> Check-in *
                </span>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.checkIn}
                  onChange={(e) => update('checkIn', e.target.value)}
                />
              </label>

              <label className="lq-form-field">
                <span className="lq-form-label-icon">
                  <CalendarDays size={15} /> Check-out *
                </span>
                <input
                  type="date"
                  required
                  min={form.checkIn || today}
                  value={form.checkOut}
                  onChange={(e) => update('checkOut', e.target.value)}
                />
              </label>

              <label className="lq-form-field">
                Room category
                <select
                  value={form.roomType}
                  onChange={(e) =>
                    update('roomType', e.target.value as RoomType)
                  }
                >
                  <option value="Classic Room">
                    Classic Room — KSh 2,000
                  </option>
                  <option value="Comfort Room">
                    Comfort Room — KSh 2,500
                  </option>
                  <option value="Premier Room">
                    Premier Room — KSh 3,000
                  </option>
                </select>
              </label>

              <label className="lq-form-field">
                Number of rooms
                <select
                  value={form.rooms}
                  onChange={(e) => update('rooms', e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                    <option value={String(number)} key={number}>
                      {number} {number === 1 ? 'room' : 'rooms'}
                    </option>
                  ))}
                </select>
              </label>

              <label className="lq-form-field">
                Number of guests
                <select
                  value={form.guests}
                  onChange={(e) => update('guests', e.target.value)}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map(
                    (number) => (
                      <option value={String(number)} key={number}>
                        {number} {number === 1 ? 'guest' : 'guests'}
                      </option>
                    ),
                  )}
                </select>
              </label>

              <div className="lq-booking-nights">
                <Users size={17} />
                <span>
                  {nights > 0
                    ? `${nights} ${nights === 1 ? 'night' : 'nights'} selected`
                    : 'Choose your dates to calculate nights'}
                </span>
              </div>
            </div>

            <div className="lq-form-section-title">
              <span>03</span>
              <div>
                <h3>Meals & preferences</h3>
                <p>Choose an option to include in your enquiry.</p>
              </div>
            </div>

            <div className="lq-meal-plan-options">
              <label
                className={`lq-plan-option ${
                  form.mealPlan === 'room-only' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="room-only"
                  checked={form.mealPlan === 'room-only'}
                  onChange={() => update('mealPlan', 'room-only')}
                />
                <span>
                  <b>Room only</b>
                  <small>Meals not included</small>
                </span>
              </label>

              <label
                className={`lq-plan-option ${
                  form.mealPlan === 'breakfast' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="breakfast"
                  checked={form.mealPlan === 'breakfast'}
                  onChange={() => update('mealPlan', 'breakfast')}
                />
                <span>
                  <b>Breakfast</b>
                  <small>KSh 500 / guest / day</small>
                </span>
              </label>

              <label
                className={`lq-plan-option ${
                  form.mealPlan === 'lunch' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="lunch"
                  checked={form.mealPlan === 'lunch'}
                  onChange={() => update('mealPlan', 'lunch')}
                />
                <span>
                  <b>Lunch</b>
                  <small>KSh 1,500 / guest / day</small>
                </span>
              </label>

              <label
                className={`lq-plan-option ${
                  form.mealPlan === 'breakfast-lunch' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="breakfast-lunch"
                  checked={form.mealPlan === 'breakfast-lunch'}
                  onChange={() => update('mealPlan', 'breakfast-lunch')}
                />
                <span>
                  <b>Breakfast + lunch</b>
                  <small>KSh 2,000 / guest / day</small>
                </span>
              </label>

              <label
                className={`lq-plan-option lq-plan-half ${
                  form.mealPlan === 'half-board' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name="mealPlan"
                  value="half-board"
                  checked={form.mealPlan === 'half-board'}
                  onChange={() => update('mealPlan', 'half-board')}
                />
                <span>
                  <b>Half-board / dinner enquiry</b>
                  <small>
                    Ask reception to confirm the meal combination and price
                  </small>
                </span>
              </label>
            </div>

            <label className="lq-form-field lq-form-notes">
              Special requests (optional)
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="Arrival time, dietary requests, event details or other requirements"
              />
            </label>

            <div className="lq-estimate">
              <div className="lq-estimate-row">
                <span>Room charges</span>
                <strong>{formatKsh(roomTotal)}</strong>
              </div>
              <div className="lq-estimate-row">
                <span>Selected meal charges</span>
                <strong>{formatKsh(mealTotal)}</strong>
              </div>

              <div className="lq-estimate-total">
                <span>
                  {hasUnpricedMealPlan
                    ? 'Known subtotal before meal confirmation'
                    : 'Estimated total'}
                </span>
                <strong>{formatKsh(estimatedTotal)}</strong>
              </div>

              <p>
                {hasUnpricedMealPlan
                  ? 'Half-board/dinner charges are not included because the rate must be confirmed by reception.'
                  : 'Meal estimates assume the selected meal is required for every guest for each night. Final charges and availability must be confirmed by reception.'}
              </p>
            </div>

            {error && <p className="lq-booking-error">{error}</p>}

            <button className="lq-booking-submit" type="submit">
              Prepare WhatsApp enquiry <ArrowRight size={17} />
            </button>

            {preparedMessage && (
              <div className="lq-whatsapp-ready" id="whatsapp-ready">
                <CheckCircle2 size={22} />
                <div>
                  <h3>Your enquiry is ready</h3>
                  <p>
                    Review the details in the WhatsApp message before
                    sending it to La Quita reception.
                  </p>
                  <a
                    href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                      preparedMessage,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="lq-whatsapp-send"
                  >
                    Open WhatsApp and send <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="lq-booking-footer">
        <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
        <span>Where Tranquility Meets Excellence</span>
        <a href="/terms-and-conditions">Terms & Conditions</a>
      </footer>

      <style jsx global>{`
        .lq-booking {
          --booking-red: #a52e22;
          --booking-gold: #e5b84c;
          --booking-cream: #fbf8f1;
          --booking-ink: #29231d;
          --booking-muted: #746b60;
          min-height: 100vh;
          background: var(--booking-cream);
          color: var(--booking-ink);
          overflow-x: clip;
        }

        .lq-booking * {
          box-sizing: border-box;
        }

        .lq-booking a {
          text-decoration: none;
        }

        .lq-booking-nav {
          min-height: 79px;
          padding: 12px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          background: var(--booking-cream);
        }

        .lq-booking-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: var(--booking-ink);
          flex-shrink: 0;
        }

        .lq-booking-brand img {
          width: 47px;
          height: 47px;
          object-fit: contain;
        }

        .lq-booking-brand span {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lq-booking-brand b {
          font-size: 17px;
          letter-spacing: 2px;
        }

        .lq-booking-brand small {
          font-size: 8px;
          letter-spacing: 1.7px;
        }

        .lq-booking-nav nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .lq-booking-nav nav a,
        .lq-booking-back {
          color: #554b3f;
          font-size: 10px;
        }

        .lq-booking-back {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .lq-booking-hero {
          position: relative;
          isolation: isolate;
          min-height: 330px;
          display: flex;
          align-items: center;
          background: #29231d;
          color: white;
          overflow: hidden;
        }

        .lq-booking-hero-image,
        .lq-booking-hero-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .lq-booking-hero-image {
          background:
            url('/images/laquita-exterior.JPG') center 46% / cover;
          animation: lq-booking-zoom 12s ease-out both;
        }

        .lq-booking-hero-shade {
          background: linear-gradient(
            90deg,
            rgba(25, 20, 16, .89),
            rgba(25, 20, 16, .55) 65%,
            rgba(25, 20, 16, .2)
          );
        }

        .lq-booking-hero-content {
          width: min(1100px, 84%);
          margin: 0 auto;
          padding: 54px 0;
          animation: lq-booking-enter .7s ease both;
        }

        .lq-booking-hero-content > p {
          margin: 0 0 17px;
          color: var(--booking-gold);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .lq-booking-hero h1 {
          margin: 0;
          font: 500 clamp(44px, 6vw, 68px)/1.05 'Playfair Display', Georgia, serif;
          letter-spacing: -1.5px;
        }

        .lq-booking-hero h1 i {
          color: var(--booking-gold);
          font-weight: 500;
        }

        .lq-booking-hero-content > span {
          display: block;
          max-width: 500px;
          margin-top: 16px;
          color: #eee5d9;
          font-size: 12px;
          line-height: 1.8;
        }

        .lq-booking-main {
          width: min(1100px, 84%);
          margin: 0 auto;
          padding: 68px 0 85px;
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 8%;
          align-items: start;
        }

        .lq-booking-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--booking-red);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .lq-booking-eyebrow span {
          width: 22px;
          height: 2px;
          background: var(--booking-red);
        }

        .lq-booking-intro h2 {
          margin: 20px 0;
          font: 500 clamp(32px, 3.7vw, 45px)/1.15 'Playfair Display', Georgia, serif;
          letter-spacing: -1px;
        }

        .lq-booking-intro h2 i {
          color: var(--booking-red);
          font-weight: 500;
        }

        .lq-booking-intro > p:not(.lq-booking-eyebrow) {
          max-width: 370px;
          color: var(--booking-muted);
          font-size: 12px;
          line-height: 2;
        }

        .lq-booking-help {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 19px;
          color: #65594b;
          font-size: 10px;
          line-height: 1.8;
        }

        .lq-booking-help svg {
          margin-top: 1px;
          color: var(--booking-red);
          flex-shrink: 0;
        }

        .lq-booking-card {
          min-width: 0;
          padding: clamp(21px, 3vw, 36px);
          background: white;
          border: 1px solid #e7dfd4;
          box-shadow: 0 15px 45px #3426170a;
        }

        .lq-form-section-title {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin: 6px 0 22px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9e2d8;
        }

        .lq-form-section-title:not(:first-child) {
          margin-top: 32px;
        }

        .lq-form-section-title > span {
          color: var(--booking-red);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .lq-form-section-title h3 {
          margin: 0 0 5px;
          font: 500 21px/1.25 'Playfair Display', Georgia, serif;
        }

        .lq-form-section-title p {
          margin: 0;
          color: var(--booking-muted);
          font-size: 10px;
          line-height: 1.7;
        }

        .lq-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .lq-form-field {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #51473b;
          font-size: 10px;
          font-weight: 700;
        }

        .lq-form-field input,
        .lq-form-field select,
        .lq-form-field textarea {
          width: 100%;
          min-width: 0;
          border: 1px solid #ddd4c8;
          border-radius: 0;
          background: #fffefa;
          color: var(--booking-ink);
          font: inherit;
          font-size: 11px;
          font-weight: 400;
          padding: 12px;
          outline-offset: 2px;
        }

        .lq-form-field input,
        .lq-form-field select {
          min-height: 44px;
        }

        .lq-form-field textarea {
          resize: vertical;
          line-height: 1.7;
        }

        .lq-form-label-icon {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .lq-form-label-icon svg {
          color: var(--booking-red);
        }

        .lq-booking-nights {
          min-height: 44px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #746653;
          font-size: 10px;
          line-height: 1.6;
        }

        .lq-booking-nights svg {
          color: var(--booking-red);
          flex-shrink: 0;
        }

        .lq-meal-plan-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .lq-plan-option {
          min-width: 0;
          padding: 14px 12px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border: 1px solid #e2d8c9;
          background: #fffefa;
          cursor: pointer;
          transition: border-color .2s ease, background .2s ease;
        }

        .lq-plan-option.selected {
          border-color: var(--booking-red);
          background: #fbf2ed;
        }

        .lq-plan-option input {
          margin: 2px 0 0;
          accent-color: var(--booking-red);
          flex-shrink: 0;
        }

        .lq-plan-option span {
          display: flex;
          min-width: 0;
          flex-direction: column;
          gap: 7px;
        }

        .lq-plan-option b {
          color: #352b22;
          font-size: 11px;
          line-height: 1.45;
        }

        .lq-plan-option small {
          color: #807364;
          font-size: 9px;
          line-height: 1.7;
        }

        .lq-plan-half {
          grid-column: 1 / -1;
        }

        .lq-form-notes {
          margin-top: 23px;
        }

        .lq-estimate {
          margin-top: 25px;
          padding: 21px;
          background: #f5efe5;
          border-left: 3px solid var(--booking-gold);
        }

        .lq-estimate-row,
        .lq-estimate-total {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 15px;
          padding: 7px 0;
          font-size: 11px;
        }

        .lq-estimate-row span,
        .lq-estimate-total span {
          color: #675b4c;
        }

        .lq-estimate-row strong {
          white-space: nowrap;
          font-size: 11px;
        }

        .lq-estimate-total {
          margin-top: 8px;
          padding-top: 15px;
          border-top: 1px solid #d9cdbb;
          font-size: 12px;
          font-weight: 800;
        }

        .lq-estimate-total strong {
          color: var(--booking-red);
          font: 500 23px/1.2 'Playfair Display', Georgia, serif;
          text-align: right;
        }

        .lq-estimate > p {
          margin: 12px 0 0;
          color: #766b5c;
          font-size: 9px;
          line-height: 1.8;
        }

        .lq-booking-error {
          padding: 12px;
          background: #fff1ee;
          color: #92271e;
          font-size: 11px;
          line-height: 1.7;
        }

        .lq-booking-submit {
          width: 100%;
          min-height: 50px;
          margin-top: 20px;
          padding: 14px 18px;
          border: 0;
          background: var(--booking-red);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          font: inherit;
          font-size: 11px;
          font-weight: 800;
          transition: background .2s ease;
        }

        .lq-booking-submit:hover {
          background: #812219;
        }

        .lq-whatsapp-ready {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          margin-top: 20px;
          padding: 17px;
          border: 1px solid #d7e4d5;
          background: #f4faf2;
        }

        .lq-whatsapp-ready > svg {
          color: #287443;
          flex-shrink: 0;
        }

        .lq-whatsapp-ready h3 {
          margin: 0 0 7px;
          font: 500 20px/1.3 'Playfair Display', Georgia, serif;
        }

        .lq-whatsapp-ready p {
          margin: 0 0 13px;
          color: #556b58;
          font-size: 10px;
          line-height: 1.8;
        }

        .lq-whatsapp-send {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 12px 14px;
          background: #237543;
          color: white;
          font-size: 10px;
          font-weight: 800;
        }

        .lq-booking-footer {
          padding: 20px 7%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          background: #29231d;
          color: #d6cabe;
          font-size: 9px;
        }

        .lq-booking-footer a {
          color: var(--booking-gold);
        }

        @keyframes lq-booking-enter {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lq-booking-zoom {
          from { transform: scale(1.045); }
          to { transform: scale(1); }
        }

        @media (max-width: 900px) {
          .lq-booking-nav {
            padding-left: 5%;
            padding-right: 5%;
          }

          .lq-booking-nav nav {
            gap: 12px;
          }

          .lq-booking-nav nav a {
            font-size: 9px;
          }

          .lq-booking-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .lq-booking-intro > p:not(.lq-booking-eyebrow) {
            max-width: 600px;
          }
        }

        @media (max-width: 600px) {
          .lq-booking-nav {
            min-height: 70px;
          }

          .lq-booking-brand img {
            width: 39px;
            height: 39px;
          }

          .lq-booking-nav nav {
            display: none;
          }

          .lq-booking-hero {
            min-height: 300px;
          }

          .lq-booking-hero-content,
          .lq-booking-main {
            width: 88%;
          }

          .lq-booking-hero h1 {
            font-size: 47px;
          }

          .lq-booking-main {
            padding: 45px 0 60px;
          }

          .lq-form-grid,
          .lq-meal-plan-options {
            grid-template-columns: 1fr;
          }

          .lq-plan-half {
            grid-column: auto;
          }

          .lq-booking-card {
            padding: 19px 15px;
          }

          .lq-booking-footer {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lq-booking *,
          .lq-booking *::before,
          .lq-booking *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
