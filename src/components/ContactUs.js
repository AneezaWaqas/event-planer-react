import React from "react";
import Footer from "./Footer";
import emailjs from "emailjs-com";
function ContactUs() {
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log("2ooo")
    emailjs
      .sendForm(
        "service_neecluo",
        "template_8qij2g4",
        e.target,
        "user_lEwtJpHJw775EtA8c8DTE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    // <div className="section">

    <>
      <div className="container-fluid ContactUs">
        <div className="row">
          <div className="col-md-12 p-5">
            <div className="section-title mt-5">
              <h1 className="title text-center mb-4">Contact Us</h1>
              <p>
                Let us know what you think! In order to provide better service,
                please do not hesitate to give us your feedback. Thank you.
              </p>
              <hr />
              <form id="contact-form" onSubmit={sendEmail}>
                <div className="form-group p-2">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <input
                        placeholder="Name"
                        id="name"
                        type="text"
                        className="form-control"
                        required
                        name="name"
                        //    value={this.state.name}
                        //    onChange={this.onNameChange.bind(this)}
                      />
                    </div>
                    {/* <div className="col-md-6 col-sm-12">
                                <input placeholder = "Subject"  id="subject" type="text"
                                      className="form-control" required
                                      
                                    //    value={this.state.subject}
                                    //   onChange={this.onSubjectChange.bind(this)}
                                      />
                                </div> */}
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <input
                      placeholder="Email"
                      id="email"
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      name="user_email"
                      required
                      //   value={this.state.email}
                      //    onChange=
                      //   {this.onEmailChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <div className="form-group p-2">
                    <textarea
                      placeholder="Message"
                      id="message"
                      className="form-control"
                      rows="3"
                      name="message"
                      required
                      //     value={this.state.message}
                      //    onChange= {this.onMsgChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="col-md-6 offset-md-3">
                  <button
                    type="submit"
                    className="primary-btn submit contactBtn"
                    style={{ backgroundColor: "#FAEBE0" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
