import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

              <a className="mailto" href="mailto:rgarza.ux@gmail.com">
              <h4 className="contacticon"> ✉️: {resumeData.email}</h4>
              </a>

              <h4 className="contacticon"> 📞: {resumeData.phonenumber}</h4>

                <a href="https://www.linkedin.com/in/raul-eduardo-garza/">
                <h4 className="contacticon"> 🔌: {resumeData.linkedinId}</h4>
                </a>

                <a href="images/raulgarza.pdf">
                <h4 className="contacticon"> 📂 Resume </h4>
                </a>

              </div>
            </aside>
          </div>
        </section>
        );
  }
}
