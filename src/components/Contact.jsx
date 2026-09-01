import { GitBranch, Mail } from "lucide-react";
import { contact, profile } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="contact-heading">{contact.heading}</h2>

        <p className="contact-body">{contact.body}</p>

        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
          <a
            className="btn btn-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={16} aria-hidden="true" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
