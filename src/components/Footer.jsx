import { profile } from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <a href={profile.github} target="_blank" rel="noreferrer">
          github.com/{profile.handle}
        </a>
      </div>
    </footer>
  );
}
