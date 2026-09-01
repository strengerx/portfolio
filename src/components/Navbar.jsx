import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { nav, profile } from "../data/portfolio";
import "./Navbar.css";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.22 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });
  const backdropOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  // Lock body scroll while the fullscreen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);
    window.setTimeout(() => scrollToSection(id), open ? 250 : 0);
  };

  return (
    <header className="nav">
      <motion.div className="nav-backdrop" style={{ opacity: backdropOpacity }} />
      <motion.div className="nav-progress" style={{ scaleX: progress }} />

      <div className="container nav-inner">
        <a
          className="nav-logo"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          BH<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavClick(item.id)}
            >
              <i>{item.index}</i>
              {item.label}
            </button>
          ))}
        </nav>

        <span className="nav-divider" aria-hidden="true" />

        <a
          className="nav-github"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch size={15} aria-hidden="true" />
          GitHub
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            style={{ width: 26 }}
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
          <motion.span
            style={{ width: 26, marginTop: 7 }}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            style={{ width: 18, marginTop: 7 }}
            animate={open ? { rotate: -45, y: -7, width: 26 } : { rotate: 0, y: 0, width: 18 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ clipPath: "circle(0% at calc(100% - 30px) 30px)" }}
            animate={{ clipPath: "circle(141% at calc(100% - 30px) 30px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 30px) 30px)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="nav-mobile-grid" aria-hidden="true">
              <span style={{ left: "33%" }} />
              <span style={{ left: "66%" }} />
            </div>

            <motion.nav
              className="nav-mobile-list"
              aria-label="Mobile"
              variants={listVariants}
              initial="hidden"
              animate="show"
            >
              {nav.map((item) => (
                <motion.div
                  className="nav-mobile-item"
                  key={item.id}
                  variants={itemVariants}
                >
                  <i>{item.index}</i>
                  <button onClick={() => handleNavClick(item.id)}>
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div className="nav-mobile-footer" variants={itemVariants} initial="hidden" animate="show">
              <span>Kolkata, India</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/{profile.handle}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
