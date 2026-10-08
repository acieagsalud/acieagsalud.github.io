"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site${scrolled ? " scrolled" : ""}`}>
      <div className="wrap bar">
        <a className="name" href="#top">{profile.name}</a>
        <nav aria-label="Main">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li className="hide-sm"><a href="#projects">Projects</a></li>
            <li className="hide-sm"><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a className="resume" href={`${base}/${profile.resumeFile}`}>Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
