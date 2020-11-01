import React from "react";
import getInformation from "../information_loader";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: getInformation("skills"),
      about_me: getInformation("about")
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5" style={{ margin: "0 auto" }}>
                        <div className="about-img" style={{ textAlign: "center" }}>
                          <img className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill, index) => {
                        return (
                          <React.Fragment key={index}>
                            <span>{skill.name}</span> <span className="pull-right">{skill.proficiency_percentage+"%"}</span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.proficiency_percentage + "%" }}
                                aria-valuenow={skill.proficiency_percentage}
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content, index) => {
                        return (
                          <p className="lead" key={index}>
                            {content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
