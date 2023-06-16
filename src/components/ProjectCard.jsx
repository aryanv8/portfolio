import React, { useState } from "react";

export function ProjectsCard(props) {
  const project = props.project;
  const [shadow, setShadow] = useState("");
  return (
    <div
      className={`card m-3 col bg-body-tertiary bs-bg-opacity text-light ${shadow}`}
      onMouseEnter={() => setShadow("shadow shadow-lg")}
      onMouseLeave={() => setShadow("")}
      // style={{ backgroundColor: "rgb(43, 48, 53)" }}
      // style={{ backgroundColor: "rgb(33, 37, 41)" }}
      style={{
        // backgroundColor: "rgb(52, 58, 64)",
        maxWidth: "25rem",
        height: "37rem",
        opacity: ".7",
        // --bs-bg-opacity: .5; write its alternative
      }}
    >
      <img
        src={project.image}
        className="card-img-top"
        alt="..."
        style={{ height: "350px", width: "auto" }}
      />
      <div className="card-body h-100">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-text">{project.description}</p>
      </div>
      <div className="card-footer border-0 mx-0">
        <button
          className="btn btn-outline-primary w-100 mx-0"
          onClick={() => window.open(project.link, '_self')}
        >
          View Project
        </button>
      </div>
    </div>
  );
}
