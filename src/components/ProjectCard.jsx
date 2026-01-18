import { Link } from "react-router-dom";
import Chip from "./Chip";

export default function ProjectCard({ project }) {
  return (
    <div className="panel projectCard">
      <div className="projectCard__header">
        <h2 className="projectCard__title">{project.title}</h2>

        {project.status && (
          <span className="projectCard__status">{project.status}</span>
        )}
      </div>

      <p className="projectCard__desc">{project.description}</p>

      <div className="chipGroup">
        {project.tech.map((t) => (
          <Chip key={t.label} label={t.label} variant={t.variant} />
        ))}
      </div>

      {project.to && (
        <div className="projectCard__footer">
          <Link className="projectCard__link" to={project.to}>
            Open demo →
          </Link>
        </div>
      )}
    </div>
  );
}
