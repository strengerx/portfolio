import { about } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <h2>About</h2>
          <span className="section-index mono">01</span>
        </div>

        <div className="about-grid">
          <p className="eyebrow">
            <span className="dot" aria-hidden="true" />
            Full-stack, backend-leaning
          </p>

          <div>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
