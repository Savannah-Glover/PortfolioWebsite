import "../styles/Home.css";

import Chip from "../components/Chip";
import Panel from "../components/Panel";

const featuredProject = {
  title: "Futoshiki Solver",
  description:
    "A puzzle solver that takes a grid with inequality constraints and finds valid solutions. Includes a step-by-step mode so you can see how the solver prunes the search space.",
  tech: [
    { label: "React", variant: "frontend" },
    { label: "JavaScript", variant: "frontend" },
    { label: "Algorithms", variant: "backend" },
  ],
};


export default function Home() {
  return (
    <div className="page">
      <div className="grid2">
        {/* Left: Intro/About */}
        <Panel>
          <p className="pageSubtitle">Hi, my name is</p>
          <h1 className="pageTitle">My Name</h1>
          <p className="pageSubtitle">
            I build practical internal tools and I’m learning React by shipping projects.
          </p>

          <div className="section">
            <h2 className="sectionTitle">About</h2>
            <p>
              This site is a living portfolio: projects, writeups, and interactive demos.
            </p>
          </div>
        </Panel>
        {/* Right: Tech Stack */}
        <Panel title="Tech Stack">
          <div className="section">
            <h3>Frontend</h3>
            <div className="chipGroup">
              <Chip label="React" variant="frontend" />
              <Chip label="JavaScript" variant="frontend" />
              <Chip label="HTML" variant="frontend" />
              <Chip label="CSS" variant="frontend" />
            </div>
          </div>

          <div className="section">
            <h3>Backend & Data</h3>
            <div className="chipGroup">
              <Chip label="C#" variant="backend" />
              <Chip label="SQL Server" variant="backend" />
              <Chip label="MS Access" variant="backend" />
            </div>
          </div>

          <div className="section">
            <h3>Automation & Tools</h3>
            <div className="chipGroup">
              <Chip label="VBA: Excel & Access" variant="tools" />
              <Chip label="GitHub" variant="tools" />
            </div>
          </div>
        </Panel>
      </div>
      <div className="section">
        <Panel title="Featured Project">
          <h3 style={{ marginTop: 0}}>{featuredProject.title}</h3>
          <p className="pageSubtitle">{featuredProject.description}</p>

          <div className="chipGroup">
            {featuredProject.tech.map((item) => (
              <Chip
                key={item.label}
                label={item.label}
                variant={item.variant}
              />
            ))}
          </div>

          <div
            style={{
              marginTop: "14px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a className="btn" href="#/projects">View all projects</a>
            <a className="btn btnPrimary" href="#/projects">Read more</a>
          </div>
        </Panel>
      </div>
    </div>
  );
}



