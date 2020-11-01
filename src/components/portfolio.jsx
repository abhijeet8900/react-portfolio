import React from "react";
import getInformation from "../information_loader";

class Portfolio extends React.Component {
  portfolio = getInformation("portfolio");
  content = this.portfolio.content;
  showcases = this.portfolio.show_case;
  images = importAll(require.context("../img", false, /\.(png|jpe?g|svg)$/));
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">{this.content}</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.showcases.map((item) => {
              var showCaseImages = item.images;
              return (
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={this.images[showCaseImages]} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={this.images[showCaseImages]} alt="" className="img-fluid" />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{item.title}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">{item.short_description}</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-more">
                              <a href={item.link}>
                              <span className="w-ctegory">View Project</span>
                                {/* <span className="ion-ios-eye-outline"></span> */}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* {showCaseImages.map((image) => {
                      return (
                        <a href={this.images[image]} data-lightbox="gallery-vmarine" style={{ display: "none" }}>
                          jsx-a11y/anchor-has-content warning
                        </a>
                      );
                    })} */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export default Portfolio;
