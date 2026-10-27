
"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

type SiteHeaderProps = {
  isHome?: boolean;
};

export default function SiteHeader({
  isHome = false,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionLink = (section: string) =>
    isHome ? `#${section}` : `/#${section}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topline">
        <span>NAKURU, KENYA</span>

        <span className="top-center">
          WHERE TRANQUILITY MEETS EXCELLENCE
        </span>

        <a
          href="https://wa.me/254759713882"
          target="_blank"
          rel="noreferrer"
        >
          WHATSAPP US <ArrowRight size={13} />
        </a>
      </div>

      <header className="nav">
        <a
          className="brand"
          href={isHome ? "#home" : "/"}
          aria-label="La Quita home"
        >
          <span className="brand-mark">LQ</span>

          <span>
            <b>LA QUITA</b>
            <small>HOTEL &amp; SUITES</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a onClick={closeMenu} href={sectionLink("stay")}>
            Stay
          </a>

          <a onClick={closeMenu} href={sectionLink("experiences")}>
            Experiences
          </a>

          <a onClick={closeMenu} href={sectionLink("meetings")}>
            Meetings
          </a>

          <a onClick={closeMenu} href={sectionLink("about")}>
            Our story
          </a>

          <a
            className="nav-cta"
            onClick={closeMenu}
            href={sectionLink("enquire")}
          >
            Enquire now <ArrowRight size={15} />
          </a>
        </nav>
      </header>
    </>
  );
}
