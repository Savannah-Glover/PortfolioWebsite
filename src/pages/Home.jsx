import "./Home.css"

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
              <span className="chip chip--frontend">React</span>
              <span className="chip chip--frontend">JavaScript</span>
              <span className="chip chip--frontend">HTML</span>
              <span className="chip chip--frontend">CSS</span>
            </div>
          </div>

          <div className="section">
            <h3>Backend & Data</h3>
            <div className="chipGroup">
              <span className="chip chip--backend">C#</span>
              <span className="chip chip--backend">SQL Server</span>
              <span className="chip chip--backend">SQLite</span>
            </div>
          </div>

          <div className="section">
            <h3>Automation & Tools</h3>
            <div className="chipGroup">
              <span className="chip chip--tools">Excel / VBA</span>
              <span className="chip chip--tools">Access</span>
              <span className="chip chip--tools">GitHub</span>
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
            <span
              key={item.label}
              className={`chip chip--${item.variant}`}
            >
              {item.label}
            </span>
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



