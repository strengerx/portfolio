import { skills } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
          <span className="section-index mono">02</span>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group} className="skill-col">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
