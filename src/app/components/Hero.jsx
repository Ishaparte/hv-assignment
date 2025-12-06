"use client";
import { motion } from "framer-motion";
import { urlFor } from "@/lib/image";
import "../styles/hero.css";

export default function Hero({ data }) {
  if (!data) return null;

  const bg = data.backgroundImage ? urlFor(data.backgroundImage).url() : null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
      style={{
        backgroundImage: bg ? `url(${bg})` : "none",
      }}
    >

      {/* -------- NAVIGATION (from Sanity) -------- */}
      <nav className="hero-nav">

        {/* Left side nav links */}
        <ul className="nav-links">
          {data.navLinks?.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>

        {/* Logo text from Sanity */}
        <h1 className="hero-logo">{data.logo}</h1>

        {/* Subscribe text from Sanity */}
        <button className="subscribe-btn">
          {data.subscribeText} →
        </button>
      </nav>

      {/* -------- MIDDLE LINE WORDS (from Sanity) -------- */}
      <div className="hero-line">
        {data.middleWords?.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>

      {/* -------- MAIN HEADING (from Sanity) -------- */}
      <div className="hero-heading">
        <h2>
          {data.mainHeading?.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h2>
      </div>

    </motion.section>
  );
}
