import React from "react";
import { Projectsdb } from "../ProjectsDatabase/ProjectDb";
import { Link } from "react-router-dom";
const Projects = () => {
  console.log(Projectsdb.image);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <h2 className="projects">My Projects</h2>
          {Projectsdb.map((x) => {
            return (
              <>
                <div className="col-lg-4 col-sm-12 col-md-6 ">
                  <img src={x.Photo} className="image mt-2" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{x.title}</h5>
                    <Link  
                      to={x.link}
                      className="btn btn-dark text-decoration-none mt-2 "
                    >
                      Project Link
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
