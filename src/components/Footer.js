import React from "react";
// import '../App.css'
function Footer() {
  return (
    <>
      {/* Site footer */}
      <section className="footer text-light p-5">
        <div className="container-fluid">
          <div className="row divider">
            <div className="col-md-6">
              <div className="footer-content">
                <h5>About</h5>
                <p>
                  Scanfcode.com CODE WANTS TO BE SIMPLE is an initiative to help
                  the upcoming programmers with the code. Scanfcode focuses on
                  providing the most efficient code or snippets as the code
                  wants to be simple.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h5>CATEGORIES</h5>
              <ul className="list-unstyled center">
                <li>C</li>
                <li>java</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <div className="col-md-3">
            <h5>QUICK LINKS</h5>
              <ul className="list-unstyled center">
                <li>C</li>
                <li>java</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
            <span class="border-bottom "></span>
            <div className="col-md-12">
              aaa
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Footer;
