
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { blogPosts } from '../articles';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: 'Article not found',
      robots: { index: false, follow: true },
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'en_KE',
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello La Quita Hotel & Suites. I read your article "${post.title}" and would like more information.`
  );

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    articleSection: post.category,
    author: {
      '@type': 'Organization',
      name: 'La Quita Hotel & Suites',
    },
    publisher: {
      '@type': 'Organization',
      name: 'La Quita Hotel & Suites',
      logo: {
        '@type': 'ImageObject',
        url: '/images/laquita-logo.jpg',
      },
    },
    mainEntityOfPage: `/blog/${post.slug}`,
  };

  return (
    <main className="article-page">
      <style>{`
        .article-page {
          min-height: 100vh;
          background: #f7f4ed;
          color: #211d18;
          font-family: 'DM Sans', Arial, sans-serif;
        }

        .article-page * {
          box-sizing: border-box;
        }

        .article-page a {
          text-decoration: none;
        }

        .article-topbar {
          min-height: 35px;
          padding: 8px 6.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          background: #211d18;
          color: #eee6d8;
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .article-topbar a {
          color: inherit;
        }

        .article-nav {
          min-height: 80px;
          padding: 12px 6.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #fbf9f4;
          border-bottom: 1px solid #e5dfd3;
        }

        .article-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: #211d18;
          flex-shrink: 0;
        }

        .article-brand img {
          display: block;
          width: 52px;
          height: 50px;
          object-fit: contain;
        }

        .article-brand b,
        .article-brand small {
          display: block;
        }

        .article-brand b {
          font-size: 16px;
          letter-spacing: 2.4px;
        }

        .article-brand small {
          font-size: 7px;
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .article-navlinks {
          display: flex;
          align-items: center;
          gap: 22px;
          font-size: 11px;
        }

        .article-navlinks a {
          color: #39332c;
        }

        .article-navlinks a:hover {
          color: #a52e22;
        }

        .article-navlinks .article-contact-link {
          color: white;
          background: #a52e22;
          padding: 13px 16px;
        }

        .article-hero {
          padding: 65px 8.5% 0;
        }

        .article-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 28px;
          font-size: 10px;
          color: #766f65;
        }

        .article-breadcrumb a {
          color: #a52e22;
        }

        .article-category {
          display: inline-block;
          margin-bottom: 17px;
          color: #a52e22;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .article-hero h1 {
          max-width: 920px;
          font: 500 clamp(38px, 5.5vw, 70px)/1.1 'Playfair Display', Georgia, serif;
          letter-spacing: -1.2px;
          margin: 0;
        }

        .article-excerpt {
          max-width: 760px;
          margin: 22px 0 24px;
          font-size: 14px;
          line-height: 1.9;
          color: #766f65;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-bottom: 36px;
          color: #766f65;
          font-size: 10px;
        }

        .article-meta span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .article-meta svg {
          color: #a52e22;
        }

        .article-cover {
          width: 100%;
          height: clamp(270px, 44vw, 530px);
          overflow: hidden;
          background: #e5dfd3;
        }

        .article-cover img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .article-image-note {
          padding: 12px 15px;
          background: #eee8dd;
          color: #665e53;
          font-size: 10px;
          line-height: 1.8;
        }

        .article-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 275px;
          gap: 8%;
          align-items: start;
          padding: 54px 10% 75px;
        }

        .article-body {
          min-width: 0;
        }

        .article-body > p {
          color: #554e45;
          font-size: 14px;
          line-height: 2;
          margin: 0 0 24px;
        }

        .article-section {
          margin: 40px 0;
        }

        .article-section h2 {
          font: 500 clamp(26px, 3vw, 35px)/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 19px;
          letter-spacing: -.3px;
        }

        .article-section p {
          color: #554e45;
          font-size: 13px;
          line-height: 2;
          margin: 0 0 18px;
        }

        .article-bullets {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .article-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin: 12px 0;
          color: #554e45;
          font-size: 12px;
          line-height: 1.8;
        }

        .article-bullets svg {
          flex-shrink: 0;
          color: #a52e22;
          margin-top: 2px;
        }

        .article-sidebar {
          position: sticky;
          top: 25px;
        }

        .article-side-card {
          background: white;
          border: 1px solid #e5dfd3;
          padding: 25px;
          margin-bottom: 19px;
        }

        .article-side-label {
          color: #a52e22;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.6px;
          margin: 0 0 13px;
        }

        .article-side-card h3 {
          font: 500 25px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 13px;
        }

        .article-side-card p {
          color: #766f65;
          font-size: 11px;
          line-height: 1.9;
          margin: 0 0 19px;
        }

        .article-side-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 9px;
          background: #e8b849;
          color: #211d18;
          padding: 14px;
          font-size: 10px;
          line-height: 1.5;
          font-weight: 700;
        }

        .article-side-links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .article-side-links a {
          border-top: 1px solid #e5dfd3;
          padding: 12px 0;
          color: #554e45;
          font-size: 11px;
          line-height: 1.7;
        }

        .article-side-links a:hover {
          color: #a52e22;
        }

        .article-inline-cta {
          margin-top: 48px;
          padding: 28px;
          background: #eee8dd;
        }

        .article-inline-cta h2 {
          font: 500 28px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 12px;
        }

        .article-inline-cta p {
          font-size: 12px;
          color: #766f65;
          line-height: 1.9;
          margin: 0 0 20px;
        }

        .article-inline-cta a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #211d18;
          color: white;
          padding: 14px 16px;
          font-weight: 700;
          font-size: 10px;
        }

        .article-related {
          background: #eee8dd;
          padding: 65px 8.5%;
        }

        .article-related-heading {
          margin-bottom: 28px;
        }

        .article-related-heading p {
          color: #a52e22;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
          margin: 0 0 12px;
        }

        .article-related-heading h2 {
          font: 500 clamp(32px, 4vw, 44px)/1.15 'Playfair Display', Georgia, serif;
          margin: 0;
        }

        .article-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .article-related-card {
          display: flex;
          flex-direction: column;
          color: #211d18;
          background: white;
          border: 1px solid #e5dfd3;
          min-width: 0;
        }

        .article-related-card img {
          display: block;
          width: 100%;
          height: 175px;
          object-fit: cover;
        }

        .article-related-copy {
          padding: 19px;
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: flex-start;
        }

        .article-related-copy span {
          color: #a52e22;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 11px;
        }

        .article-related-copy h3 {
          font: 500 22px/1.2 'Playfair Display', Georgia, serif;
          margin: 0 0 12px;
        }

        .article-related-copy p {
          color: #766f65;
          font-size: 10px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .article-related-copy b {
          margin-top: auto;
          color: #a52e22;
          font-size: 10px;
        }

        .article-final-cta {
          background: #a52e22;
          color: white;
          padding: 52px 9%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .article-final-cta p {
          color: #f2cb71;
          font-size: 9px;
          letter-spacing: 1.7px;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .article-final-cta h2 {
          font: 500 clamp(30px, 4vw, 46px)/1.2 'Playfair Display', Georgia, serif;
          margin: 0;
        }

        .article-final-cta h2 i {
          color: #f2cb71;
          font-weight: 500;
        }

        .article-final-cta > a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #e8b849;
          padding: 15px 18px;
          color: #211d18;
          font-size: 10px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .article-footer {
          background: #211d18;
          color: #eee6d8;
          padding: 24px 8.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 17px;
          flex-wrap: wrap;
          font-size: 9px;
        }

        .article-footer a {
          color: #e8b849;
        }

        @media (max-width: 900px) {
          .article-navlinks {
            gap: 13px;
          }

          .article-navlinks a {
            font-size: 10px;
          }

          .article-layout {
            grid-template-columns: minmax(0, 1fr) 235px;
            gap: 5%;
            padding-left: 7%;
            padding-right: 7%;
          }
        }

        @media (max-width: 700px) {
          .article-topbar {
            padding: 9px 5%;
            font-size: 8px;
          }

          .article-nav {
            padding: 10px 5%;
            align-items: center;
            flex-wrap: wrap;
          }

          .article-brand img {
            width: 44px;
            height: 43px;
          }

          .article-brand b {
            font-size: 14px;
          }

          .article-brand small {
            font-size: 7px;
          }

          .article-navlinks {
            width: 100%;
            gap: 14px 18px;
            flex-wrap: wrap;
            padding: 8px 0;
          }

          .article-hero {
            padding: 45px 6% 0;
          }

          .article-hero h1 {
            font-size: clamp(37px, 10vw, 53px);
          }

          .article-excerpt {
            font-size: 13px;
          }

          .article-meta {
            gap: 12px;
          }

          .article-cover {
            height: 270px;
          }

          .article-layout {
            grid-template-columns: 1fr;
            gap: 35px;
            padding: 38px 6% 55px;
          }

          .article-body > p {
            font-size: 13px;
          }

          .article-section {
            margin: 34px 0;
          }

          .article-sidebar {
            position: static;
          }

          .article-related {
            padding: 48px 6%;
          }

          .article-related-grid {
            grid-template-columns: 1fr;
          }

          .article-related-card {
            display: grid;
            grid-template-columns: 115px minmax(0, 1fr);
          }

          .article-related-card img {
            height: 100%;
            min-height: 170px;
          }

          .article-related-copy {
            padding: 16px;
          }

          .article-related-copy h3 {
            font-size: 20px;
          }

          .article-final-cta {
            padding: 42px 6%;
            align-items: flex-start;
            flex-direction: column;
            gap: 22px;
          }

          .article-footer {
            padding: 22px 6%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .article-page *,
          .article-page *::before,
          .article-page *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />

      <div className="article-topbar">
        <span>NAKURU, KENYA</span>
        <span>WHERE TRANQUILITY MEETS EXCELLENCE</span>
        <a href={`https://wa.me/254759713882`}>WHATSAPP US</a>
      </div>

      <header className="article-nav">
        <Link className="article-brand" href="/" aria-label="La Quita homepage">
          <img
            src="/images/laquita-logo.jpg"
            alt="La Quita Hotel & Suites logo"
          />
          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </Link>

        <nav className="article-navlinks" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/accommodation">Stay</Link>
          <Link href="/restaurant">Dining</Link>
          <Link href="/conferences">Meetings</Link>
          <Link href="/blog">Journal</Link>
          <Link className="article-contact-link" href="/contact">Contact</Link>
        </nav>
      </header>

      <header className="article-hero">
        <div className="article-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Journal</Link>
          <span>/</span>
          <span>{post.category}</span>
        </div>

        <p className="article-category">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-excerpt">{post.excerpt}</p>

        <div className="article-meta">
          <span>
            <BookOpen size={14} />
            La Quita Journal
          </span>
          <span>
            <MapPin size={14} />
            Nakuru, Kenya
          </span>
          <span>
            <CalendarDays size={14} />
            Practical travel guide
          </span>
        </div>

        <div className="article-cover">
          <img src={post.image} alt={post.imageAlt} />
        </div>

        {post.imageNote && (
          <p className="article-image-note">{post.imageNote}</p>
        )}
      </header>

      <div className="article-layout">
        <article className="article-body">
          {post.introduction.map((paragraph, index) => (
            <p key={`intro-${index}`}>{paragraph}</p>
          ))}

          {post.sections.map((section) => (
            <section className="article-section" key={section.heading}>
              <h2>{section.heading}</h2>

              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.heading}-${index}`}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul className="article-bullets">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="article-inline-cta">
            <h2>Planning a visit to Nakuru?</h2>
            <p>
              Contact La Quita Hotel & Suites to enquire about the services
              that match your plans. Confirm current prices, availability and
              booking arrangements directly with the team.
            </p>
            <Link href={post.serviceHref}>
              {post.serviceLabel} <ArrowRight size={15} />
            </Link>
          </div>
        </article>

        <aside className="article-sidebar">
          <div className="article-side-card">
            <p className="article-side-label">PLAN WITH LA QUITA</p>
            <h3>Have a question about your stay?</h3>
            <p>
              Send an enquiry directly to the hotel. Include your dates and
              requirements so the team can provide relevant information.
            </p>
            <a
              className="article-side-button"
              href={`https://wa.me/254759713882?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              Contact on WhatsApp
            </a>
          </div>

          <div className="article-side-card">
            <p className="article-side-label">EXPLORE THE HOTEL</p>
            <h3>Useful pages</h3>
            <div className="article-side-links">
              <Link href="/accommodation">Accommodation</Link>
              <Link href="/restaurant">Restaurant & Dining</Link>
              <Link href="/lounge">Bar & Lounge</Link>
              <Link href="/conferences">Meetings & Conferences</Link>
              <Link href="/contact">Contact & Directions</Link>
            </div>
          </div>

          <div className="article-side-card">
            <p className="article-side-label">OUR LOCATION</p>
            <h3>Pipeline, Nakuru</h3>
            <p>La Quita Hotel & Suites, Nakuru, Kenya.</p>
            <a
              className="article-side-button"
              href="https://www.google.com/maps/search/?api=1&query=La+Quita+Hotel+and+Suites+Pipeline+Nakuru+Kenya"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={16} />
              Find us on Maps
            </a>
          </div>
        </aside>
      </div>

      <section className="article-related">
        <div className="article-related-heading">
          <p>KEEP EXPLORING</p>
          <h2>More from the La Quita Journal</h2>
        </div>

        <div className="article-related-grid">
          {relatedPosts.map((related) => (
            <Link
              className="article-related-card"
              href={`/blog/${related.slug}`}
              key={related.slug}
            >
              <img src={related.image} alt={related.imageAlt} loading="lazy" />
              <div className="article-related-copy">
                <span>{related.category}</span>
                <h3>{related.title}</h3>
                <p>{related.excerpt}</p>
                <b>Read article →</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-final-cta">
        <div>
          <p>WHERE TRANQUILITY MEETS EXCELLENCE</p>
          <h2>
            Your next visit starts here.
            <br />
            <i>Make yourself at home.</i>
          </h2>
        </div>
        <a
          href={`https://wa.me/254759713882?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={17} /> Talk to La Quita
        </a>
      </section>

      <footer className="article-footer">
        <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
        <span>Pipeline, Nakuru, Kenya</span>
        <Link href="/blog">
          <ArrowLeft size={13} /> Back to Journal
        </Link>
        <Link href="/">Homepage</Link>
      </footer>
    </main>
  );
}
