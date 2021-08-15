import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {

    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      
      var projects = this.props.resumeProjects.map(function (projects) {
        const technologies = projects.technologies;
        // alert(JSON.stringify(technologies))

        if (technologies) {
          var tech = technologies.map((icons, i) => {
            return (
              <li className="list-inline-item mx-3 mx-auto" key={i}>
                <span>
                  <div className="text-center">
                    <i className={icons.class} style={{ fontSize: "200%" }}>
                      <p className="text-center" style={{ fontSize: "30%" }}>
                        {icons.name}
                      </p>
                    </i>
                  </div>
                </span>
              </li>
            );
          });
        }

        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  {/* <img
                    src={projects.images[0]}
                    alt="projectImages"
                    width="230"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  /> */}
                  
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title} 
                  </p>
                  
                  <div className="mx-auto project-div" id="about">
                    <p>{projects.description}</p>
                    <br />
                    {tech}
                  </div>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
