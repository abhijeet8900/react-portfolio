import React from "react";
import getInformation from "../information_loader";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      education: getInformation("education")
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
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Education Details</h5>
                      </div>
                      {this.state.education.map((content, index) => {
                        return (
                          <p className="lead" key={index}>
                            From : {content.from} To : {content.to} Course : {content.course} Institute :{content.institute}
                          </p>
                        );
                      })}
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

export default Education;
