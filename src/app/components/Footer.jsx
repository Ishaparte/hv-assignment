"use client";

import "../styles/footer.css";

export default function Footer({ data }) {
  if (!data) return null;

  return (
    <footer className="footer-container">

      {/* TOP ROW */}
      <div className="footer-top">
        <div className="footer-links">
          {data.links?.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>

        <div className="footer-email">
          {data.email}
        </div>
      </div>

      {/* COPYRIGHT + SMALL TEXT */}
      <div className="footer-meta">
        <p className="footer-copy">{data.reserved}</p>
        <p className="footer-brand">{data.brandText}</p>
      </div>

      {/* BIG BACKGROUND TEXT */}
      <div className="footer-background">
        {data.bigText}
      </div>

    </footer>
  );
}
