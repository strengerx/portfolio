import { motion } from "framer-motion";
import { ArrowRight, GitBranch, Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true">
        <span style={{ left: "0%" }} />
        <span style={{ left: "33%" }} />
        <span style={{ left: "66%" }} />
      </div>

      <div className="container hero-inner">
        <div>
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <span className="dot" aria-hidden="true" />
            {profile.availability}
          </motion.p>

          <motion.h1
            className="hero-name"
            initial="hidden"
            animate="show"
            custom={0.08}
            variants={fadeUp}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero-role"
            initial="hidden"
            animate="show"
            custom={0.16}
            variants={fadeUp}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial="hidden"
            animate="show"
            custom={0.24}
            variants={fadeUp}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial="hidden"
            animate="show"
            custom={0.32}
            variants={fadeUp}
          >
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's talk
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-meta"
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
        >
          <div className="hero-meta-row">
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={14} aria-hidden="true" style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }} />
              @{profile.handle}
            </a>
          </div>
          <div className="hero-meta-row">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>
              <Mail size={14} aria-hidden="true" style={{ display: "inline", marginRight: 6, verticalAlign: "-2px" }} />
              {profile.email}
            </a>
          </div>
          <div className="hero-meta-row">
            <span>Based in</span>
            {profile.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
