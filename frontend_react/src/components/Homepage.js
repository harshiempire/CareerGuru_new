import React from "react";
import Navbar from "./Navbar";
import homeimg from "../assets/images/image1.png";
import dashimg from "../assets/images/dashboard.png";
import "./css/style.css";
import { NavLink } from "react-router-dom";

// const linearGradient =
//   "linear-gradient(200deg ,rgb(0, 102, 255),rgb(0, 204, 255));";

const Homepage = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="p-3 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-items-between">
            <div>
              <h1 className="headtext">Stuck deciding your career?</h1>
              <p className="lead my-4">
                Greetings, Trailblazer! Welcome to Career Guru, not just a
                platform but your epic saga in the vast landscape of
                professional possibilities! 🌟 Our commitment is to be your
                unwavering guiding light, casting brilliance on the intricate
                pathways that lead to a profoundly satisfying and triumphant
                future.
              </p>
              <NavLink
                className="btn btn-primary text-white btn-lg"
                // style={{
                //   backgroundImage: linearGradient,
                // }}
                to="/signup"
              >
                Get Started
              </NavLink>
            </div>
            <img
              className="img-fluid w-50 d-none d-md-block"
              src={homeimg}
              alt="showcaseimage"
            />
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-2">
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor: "linear-gradient(200deg, #bad0e4, #5090cc);",
                }}
              >
                <div className="card-body text-center">
                  <h1>2L+</h1>
                  <p>Users on the platform</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor:
                    "linear-gradient(200deg,rgb(58, 83, 227),rgb(0, 153, 255));",
                }}
              >
                <div className="card-body text-center">
                  <h1>1K+</h1>
                  <p>So many more who secured their dream job</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div
                className="card text-white"
                style={{
                  backgroundColor:
                    "linear-gradient(200deg,rgb(77, 75, 81),rgb(41, 40, 43));",
                }}
              >
                <div className="card-body text-center">
                  <h1>10K+</h1>
                  <p>Satisfied job seekers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* <!-- two sections --> */}
      <section id="knowmore" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={dashimg} className="img-fluid" alt="dashboardimg" />
            </div>
            <div className="col-md p-4">
              <h2>Lorem blah blah blah</h2>

              <p className="lead">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="howto" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-4">
              <h2>Lorem blah blah blah</h2>

              <p className="lead">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first
                true generator on the Internet.
              </p>
            </div>
            <div className="col-md">
              <img src={dashimg} className="img-fluid" alt="dashboardimg" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Q&A --> */}
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-1"
              >
                What is Career Guru, and how can it help me?
              </button>
            </h2>
            <div
              id="question-1"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Career Guru is your personalized compass in the professional
                world. We guide you through diverse career paths, help you
                discover your passions, provide educational insights, and
                empower you to make informed decisions. Think of us as your
                companion on the journey to a fulfilling and successful future.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-2"
              >
                How do I navigate the various career paths on Career Guru?
              </button>
            </h2>
            <div
              id="question-2"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Navigating career paths on Career Guru is intuitive. Explore our
                curated content on different professions, from technology to the
                arts. Dive into our insights, which offer a blend of
                ground-level details and high-level perspectives. Your career
                journey begins with a click!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-3"
              >
                How can I stay updated on the latest trends and breakthroughs in
                my chosen field?
              </button>
            </h2>
            <div
              id="question-3"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Stay connected with Career Guru! We regularly update our
                platform with the latest trends, breakthroughs, and insights in
                various fields. Follow our blog, subscribe to newsletters, and
                immerse yourself in the wealth of knowledge we provide.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ContactUs and info --> */}
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span>50 Main Street,
                  Boston
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Phone Number:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email Address:</span>50 main strrn
                  ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Customer Support:</span>50 main
                  strrn ostonst
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Social Media:</span>50 main strrn
                  ostonst
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="p-3 text-white bg-dark position-relative" id="contact">
        <div className="container">
          <p className="lead">Copyright &copy; 2022 CareerGuru</p>
        </div>
      </footer>
      {/* <!-- <div className="container-fluid d-flex flex-row-md flex-col-sm mb-3"> */}
    </div>
  );
};

export default Homepage;
