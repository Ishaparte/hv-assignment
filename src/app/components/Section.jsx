"use client";

import { urlFor } from "@/lib/image";
import "../styles/section.css";

export default function Section({ data }) {
  if (!data) return null;

  const imageUrl = data.Image ? urlFor(data.Image).url() : null;

  return (
    <section className="solutions-section">

      {/* ---------- TOP BIG PARAGRAPH (SIDE TEXT) ---------- */}
      <h1 className="solutions-top-text">{data.startText}</h1>

      {/* ---------- IMAGE + RIGHT CONTENT GRID ---------- */}
      <div className="solutions-grid">

        {/* LEFT IMAGE */}
        <div className="solutions-left">
          {imageUrl && <img src={imageUrl} alt="Solutions" />}
        </div>

        {/* RIGHT CONTENT */}
        <div className="solutions-right">

          {/* SMALL SUBTEXT */}
          <p className="solutions-small-text">{data.sideText}</p>

          {/* OUR PLANS TITLE */}
          <h3 className="solutions-title">Our Plans</h3>

          {/* PLAN LIST */}
          <div className="solutions-plans">
            {data.PlansLink?.map((plan, i) => (
              <div key={i} className="plan-item">
                {plan}
                <span className="plan-arrow">↘</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ---------- BIG MAIN HEADING BELOW IMAGE ---------- */}
      <h2 className="solutions-main-heading">{data.mainHeading}</h2>

    </section>
  );
}
