import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="">
      <section className="signup">
        <div className="container-page">
          <div className="signup-content">
            <div className="homepage">
              <h2 className="form-title">Welcome</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <h4>
                    To the best place to find new
                    <span style={{ textDecoration: "underline" }}> pro</span>
                    grammers!
                  </h4>
                </div>

                <div className="form-group form-button">
                <Link to="/login">
                  <h6 className="form-submit" style={{backgroundColor:"orange"}} >Start Now</h6>
                  </Link>
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img
                  src="https://res.cloudinary.com/mscsam/image/upload/v1607708997/homepage_dmphdx.jpg"
                  alt="homepage"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
