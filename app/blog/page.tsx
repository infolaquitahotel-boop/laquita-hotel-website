
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, MapPin, MessageCircle } from 'lucide-react';
import { blogPosts } from './articles';

export const metadata: Metadata = {
  title: 'Travel & Hotel Journal | Nakuru, Kenya',
  description:
    'Explore practical travel advice, accommodation guides, bed and breakfast tips and meeting-planning resources from La Quita Hotel & Suites in Nakuru, Kenya.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'The La Quita Journal | Travel & Hotel Guides',
    description:
      'Plan your Nakuru visit with practical accommodation, travel, dining and business-meeting guides from La Quita Hotel & Suites.',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function BlogHomePage() {
  return (
    <main className="journal">
      <style>{`
        .journal * { box-sizing: border-box; }
        .journal { background:#f7f4ed; color:#211d18; font-family:'DM Sans',Arial,sans-serif; min-height:100vh; }
        .journal a { text-decoration:none; }
        .journal-top { min-height:35px; background:#211d18; color:#eee6d8; padding:8px 6.5%; display:flex; justify-content:space-between; align-items:center; gap:15px; font-size:9px; letter-spacing:1.4px; }
        .journal-top a { color:#eee6d8; }
        .journal-nav { padding:14px 6.5%; min-height:82px; display:flex; justify-content:space-between; align-items:center; gap:24px; background:#fbf9f4; border-bottom:1px solid #e5dfd3; }
        .journal-brand { display:flex; align-items:center; gap:11px; color:#211d18; flex-shrink:0; }
        .journal-brand img { width:52px; height:50px; object-fit:contain; }
        .journal-brand b,.journal-brand small { display:block; }
        .journal-brand b { font-size:16px; letter-spacing:2.5px; }
        .journal-brand small { font-size:7px; letter-spacing:2.2px; margin-top:4px; }
        .journal-navlinks { display:flex; flex-wrap:wrap; gap:22px; align-items:center; font-size:11px; }
        .journal-navlinks a { color:#39332c; }
        .journal-navlinks a:hover { color:#a52e22; }
        .journal-navcta { background:#a52e22; color:white!important; padding:13px 16px; }
        .journal-hero { background:#29231d; color:white; padding:75px 9% 72px; position:relative; overflow:hidden; }
        .journal-hero:after { content:'JOURNAL'; position:absolute; right:-12px; bottom:-45px; font:500 clamp(90px,17vw,220px)/1 'Georgia',serif; letter-spacing:-6px; color:#ffffff08; pointer-events:none; }
        .journal-eyebrow { color:#e8b849; font-weight:700; letter-spacing:2px; font-size:9px; margin:0 0 23px; }
        .journal-hero h1 { font:500 clamp(45px,6.4vw,79px)/1.04 'Georgia',serif; letter-spacing:-1.5px; max-width:850px; margin:0; }
        .journal-hero h1 i { color:#e8b849; font-weight:500; }
        .journal-hero-copy { color:#d8cfc1; max-width:620px; line-height:1.9; font-size:13px; margin:23px 0 0; }
        .journal-location { position:relative; z-index:1; margin-top:35px; font-size:9px; letter-spacing:1.6px; color:#e8b849; }
        .journal-intro { padding:45px 9%; display:flex; align-items:flex-start; justify-content:space-between; gap:30px; border-bottom:1px solid #e5dfd3; }
        .journal-intro h2 { font:500 clamp(27px,3.4vw,40px)/1.2 'Georgia',serif; margin:0; max-width:480px; }
        .journal-intro p { max-width:490px; font-size:12px; line-height:1.9; color:#766f65; margin:0; }
        .journal-list { padding:58px 8.5% 80px; }
        .journal-section-head { display:flex; align-items:flex-end; justify-content:space-between; gap:25px; margin-bottom:30px; }
        .journal-section-head span { color:#a52e22; font-size:9px; font-weight:700; letter-spacing:2px; }
        .journal-section-head h2 { font:500 clamp(33px,4vw,47px)/1.15 'Georgia',serif; margin:12px 0 0; }
        .journal-section-head p { max-width:350px; font-size:11px; line-height:1.8; color:#766f65; margin:0; }
        .journal-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr)); gap:22px; }
        .journal-card { background:white; border:1px solid #e8e0d4; min-width:0; display:flex; flex-direction:column; }
        .journal-card-image { height:235px; background:#e4d9c8; overflow:hidden; }
        .journal-card-image img { display:block; width:100%; height:100%; object-fit:cover; transition:transform .5s ease; }
        .journal-card:hover .journal-card-image img { transform:scale(1.04); }
        .journal-card-body { padding:24px; display:flex; flex-direction:column; align-items:flex-start; flex:1; }
        .journal-category { color:#a52e22; font-size:8px; font-weight:700; letter-spacing:1.4px; margin:0 0 14px; }
        .journal-card h3 { font:500 25px/1.2 'Georgia',serif; margin:0 0 14px; }
        .journal-card h3 a { color:#211d18; }
        .journal-card-body > p:not(.journal-category) { color:#766f65; font-size:11px; line-height:1.9; margin:0 0 22px; }
        .journal-read { margin-top:auto; padding-top:14px; border-top:1px solid #e5dfd3; width:100%; display:flex; align-items:center; justify-content:space-between; gap:10px; color:#a52e22; font-size:10px; font-weight:700; }
        .journal-about { background:#eee8dd; padding:55px 9%; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:40px; }
        .journal-about h2 { font:500 clamp(32px,4vw,48px)/1.15 'Georgia',serif; margin:0; }
        .journal-about h2 i { color:#a52e22; }
        .journal-about p { font-size:12px; line-height:2; color:#766f65; margin:0 0 20px; }
        .journal-button { background:#e8b849; color:#211d18; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:15px 18px; font-weight:700; font-size:10px; }
        .journal-footer { background:#211d18; color:#eee6d8; padding:30px 8.5%; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:18px; font-size:9px; }
        .journal-footer a { color:#e8b849; }
        @media(max-width:760px) {
          .journal-top { padding:9px 5%; }
          .journal-nav { padding:12px 5%; align-items:center; flex-wrap:wrap; }
          .journal-brand img { width:44px; height:43px; }
          .journal-brand b { font-size:14px; }
          .journal-navlinks { width:100%; gap:17px; padding-top:5px; }
          .journal-hero { padding:57px 7% 50px; }
          .journal-hero h1 { font-size:clamp(42px,11vw,60px); }
          .journal-intro { padding:35px 7%; flex-direction:column; gap:16px; }
          .journal-list { padding:45px 6% 55px; }
          .journal-section-head { flex-direction:column; align-items:flex-start; }
          .journal-card-image { height:215px; }
          .journal-about { padding:45px 7%; grid-template-columns:1fr; gap:20px; }
          .journal-footer { padding:25px 6%; }
        }
        @media(prefers-reduced-motion:reduce) {
          .journal-card-image img { transition:none; }
        }
      `}</style>

      <div className="journal-top">
        <span>NAKURU, KENYA</span>
        <span>WHERE TRANQUILITY MEETS EXCELLENCE</span>
        <a href={`https://wa.me/254759713882`}>WHATSAPP US →</a>
      </div>

      <header className="journal-nav">
        <Link className="journal-brand" href="/" aria-label="La Quita homepage">
          <img src="/images/laquita-logo.jpg" alt="La Quita Hotel & Suites logo" />
          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </Link>

        <nav className="journal-navlinks" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/accommodation">Stay</Link>
          <Link href="/restaurant">Dining</Link>
          <Link href="/conferences">Meetings</Link>
          <Link href="/about">Our story</Link>
          <Link className="journal-navcta" href="/contact">Contact us</Link>
        </nav>
      </header>

      <section className="journal-hero">
        <p className="journal-eyebrow">THE LA QUITA JOURNAL</p>
        <h1>
          Explore more.
          <br />
          <i>Travel with confidence.</i>
        </h1>
        <p className="journal-hero-copy">
          Practical guides for planning a stay in Nakuru, choosing accommodation,
          arranging bed and breakfast and organising meetings in Kenya.
          Start with a question, find useful information and plan your next step.
        </p>
        <div className="journal-location">TRAVEL · ACCOMMODATION · BUSINESS · NAKURU, KENYA</div>
      </section>

      <section className="journal-intro">
        <div>
          <p className="journal-eyebrow" style={{ color: '#a52e22' }}>A GUIDE FOR YOUR JOURNEY</p>
          <h2>Useful information before you make your plans.</h2>
        </div>
        <p>
          Whether you are visiting from elsewhere in Kenya or travelling
          internationally, our articles cover practical questions worth asking
          before booking a room, planning a visit or arranging a business gathering.
          For current hotel rates and availability, contact La Quita directly.
        </p>
      </section>

      <section className="journal-list">
        <div className="journal-section-head">
          <div>
            <span>READ & DISCOVER</span>
            <h2>Latest guides and articles</h2>
          </div>
          <p>
            Start with the subject most relevant to your trip. Each guide
            includes practical tips and links to related hotel information.
          </p>
        </div>

        <div className="journal-grid">
          {blogPosts.map((post) => (
            <article className="journal-card" key={post.slug}>
              <Link
                className="journal-card-image"
                href={`/blog/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </Link>

              <div className="journal-card-body">
                <p className="journal-category">{post.category}</p>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="journal-read" href={`/blog/${post.slug}`}>
                  Read article <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journal-about">
        <div>
          <p className="journal-eyebrow" style={{ color: '#a52e22' }}>YOUR NAKURU STAY</p>
          <h2>
            Planning a visit?
            <br />
            <i>Start with La Quita.</i>
          </h2>
        </div>
        <div>
          <p>
            La Quita Hotel & Suites is located in Pipeline, Nakuru, Kenya.
            Contact our team to enquire about accommodation, bed and breakfast,
            restaurant and lounge services, or meetings and conferences.
          </p>
          <Link className="journal-button" href="/accommodation">
            Explore accommodation <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <footer className="journal-footer">
        <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
        <span>Pipeline, Nakuru, Kenya</span>
        <Link href="/contact">Contact the hotel <ArrowRight size={13} /></Link>
        <Link href="/">Back to homepage</Link>
      </footer>
    </main>
  );
}
