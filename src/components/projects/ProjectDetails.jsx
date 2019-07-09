import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            quas dolorum rem sunt iusto nam magnam neque deserunt nihil omnis
            dicta consequatur facilis libero, perspiciatis incidunt. Illum
            suscipit porro sed?
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September, 2 am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
