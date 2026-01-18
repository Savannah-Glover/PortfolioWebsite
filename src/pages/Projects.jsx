import Chip from "../components/Chip";
import ProjectCard from "../components/ProjectCard";


const projects = [
  {
    id: "futoshiki",
    title: "Futoshiki Solver",
    description:
      "Solves Futoshiki puzzles by applying inequality constraints and backtracking. Includes an interactive grid and a step-by-step solve mode.",
    tech: [
      { label: "React", variant: "frontend" },
      { label: "Algorithms", variant: "backend" },
      { label: "JavaScript", variant: "frontend" },
    ],
    to: "/projects/futoshiki",
    status: "In Progress",
  }
];


export default function Projects() {
  return (
    <div className="page">
      <h1 className="pageTitle" style={{textAlign: 'center'}}>Projects</h1>
      <p className="pageSubtitle" style={{textAlign: 'center'}}>
        These are projects built into this website so you can see them working live.
      </p>

      <div className="projectGrid">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

    </div>
  );
}
