
'use client';

import { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const fade = window.setTimeout(() => setLeaving(true), 800);
    const remove = window.setTimeout(() => setVisible(false), 1200);

    return () => {
      window.clearTimeout(fade);
      window.clearTimeout(remove);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#29231d',
        opacity: leaving ? 0 : 1,
        visibility: leaving ? 'hidden' : 'visible',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
      }}
      role="status"
      aria-label="Loading La Quita Hotel & Suites"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Strictly limited logo dimensions */}
        <img
          src="/images/laquita-logo.jpg"
          alt="La Quita Hotel & Suites"
          style={{
            display: 'block',
            width: '28px',
            height: '28px',
            minWidth: '28px',
            minHeight: '28px',
            maxWidth: '28px',
            maxHeight: '28px',
            objectFit: 'contain',
            flex: '0 0 28px',
            padding: 0,
            margin: 0,
            border: 0,
            borderRadius: 0,
          }}
        />

        <div
          style={{
            marginTop: '12px',
            color: '#fbf8f1',
            fontFamily: 'Georgia, serif',
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '3px',
          }}
        >
          LA QUITA
        </div>

        <div
          style={{
            marginTop: '5px',
            color: '#e5b84c',
            fontSize: '8px',
            letterSpacing: '2px',
          }}
        >
          HOTEL & SUITES
        </div>

        <div
          style={{
            width: '24px',
            height: '1px',
            marginTop: '17px',
            background: '#e5b84c',
          }}
        />

        <div
          style={{
            marginTop: '15px',
            color: '#d4c9b9',
            fontSize: '8px',
            letterSpacing: '1px',
          }}
        >
          WHERE TRANQUILITY MEETS EXCELLENCE
        </div>

        {/* Three animated gold dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            marginTop: '22px',
          }}
          aria-hidden="true"
        >
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              style={{
                display: 'block',
                width: '5px',
                height: '5px',
                minWidth: '5px',
                maxWidth: '5px',
                borderRadius: '50%',
                background: '#e5b84c',
                animation: `lq-small-dot 0.9s ease-in-out ${dot * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes lq-small-dot {
          0%, 60%, 100% {
            opacity: 0.35;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes lq-small-dot {
            0%, 100% {
              opacity: 0.8;
              transform: none;
            }
          }
        }
      `}</style>
    </div>
  );
}
