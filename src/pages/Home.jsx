import "../styles/Home.css";

import Chip from "../components/Chip";

const featuredProject = {
  title: "Futoshiki Solver",
  description:
    "A puzzle solver that takes a grid with inequality constraints and finds valid solutions. Includes a step-by-step mode so you can see how the solver prunes the search space.",
  tech: [
    { label: "React", variant: "frontend" },
    { label: "C#", variant: "backend" },
    { label: "Algorithms", variant: "backend" },
  ],
};


export default function Home() {
  return (
    <div className="page">
      <div className="grid2">
        {/* Left: Intro/About */}
        <div className="panel">
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
        </div>

        {/* Right: Tech Stack */}
        <div className="panel">
          <h2 className="sectionTitle">Tech Stack</h2>

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
        </div>
      </div>
      <div className="panel section">
        <h2 className="sectionTitle">Featured Project</h2>

        <h3 style={{ marginTop: 0 }}>{featuredProject.title}</h3>

        <p className="pageSubtitle">
          {featuredProject.description}
        </p>

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
          {/* <a className="btn" href="#/projects">View all projects</a>
          <a className="btn btnPrimary" href="#/projects">Read more</a> */}
        </div>
      </div>


    </div>
  );
}



