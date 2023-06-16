import React, { useState } from "react";

export function ProjectsCard(props) {
    const project = props.project;
    const [shadow, setShadow] = useState("");
  return (
    <div
      className={`card text-light ${shadow}`}
      onMouseEnter={() => setShadow("shadow")}
      onMouseLeave={() => setShadow("")}
      style={{ backgroundColor: "rgb(43, 48, 53)" }}
    >
      <img src={project.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.open(project.link, "_blank")}
        >
          View Project
        </button>
      </div>
    </div>
  );
}
