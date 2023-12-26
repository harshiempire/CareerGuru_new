import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import Bottombar from "./Bottombar";

export default function UserInfo() {
  const navigate = useNavigate();
  const [options] = useState([
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C#",
    "Ruby",
    "Swift",
    "PHP",
    "Go",
    "Rust",
    "Kotlin",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "R",
    "MATLAB",
    "Perl",
    "Shell scripting languages (e.g., Bash)",
    "Dart",
    "Scala",
    "Lua",
    "Haskell",
    "Objective-C",
    "Assembly languages",
    "COBOL",
    "Lisp",
    "Fortran",
    "Julia",
    "Groovy",
    // Additional programming languages
    "Clojure",
    "Elixir",
    "Erlang",
    "F#",
    "Scheme",
    "Ada",
    "D",
    "ActionScript",
    "Dart",
    "Crystal",
    "Racket",
    "Dylan",
    "Rust",
    "Elm",
    "Rust",
    "Perl 6",
    "Hack",
    // Additional frontend frameworks and libraries
    "Vue.js",
    "React Native",
    "Angular",
    "Svelte",
    "Ember.js",
    "Backbone.js",
    "Polymer",
    // Additional backend frameworks and libraries
    "Node.js",
    ".NET Core",
    "Spring Boot",
    "Flask",
    "Django",
    "Laravel",
    "Express.js",
    // Additional databases
    "MongoDB",
    "Cassandra",
    "CouchDB",
    "Neo4j",
    // Additional cloud services and platforms
    "AWS",
    "Azure",
    "Google Cloud",
    "Heroku",
    // Additional version control and CI/CD tools
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jenkins",
    "Travis CI",
    "CircleCI",
    // Additional testing frameworks
    "Jest",
    "Mocha",
    "Chai",
    "Selenium",
    "Appium",
    // Additional build tools
    "Webpack",
    "Babel",
    // Additional frontend technologies
    "Sass",
    "Less",
    "Styled-components",
    "Tailwind CSS",
    // Additional state management libraries
    "Redux",
    "Mobx",
    "Vuex",
    // Additional API-related technologies
    "GraphQL",
    "RESTful APIs",
    // Additional mobile development frameworks
    "React Native",
    "Flutter",
    "Xamarin",
    // Additional containerization and orchestration tools
    "Docker",
    "Kubernetes",
  ]);

  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState();

  const [userSkills, setUserSkills] = useState([]);
  const [skills, setSkills] = useState([""]);

  const [edit, setEdit] = useState(false);

  let name, value;
  const PostData = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("/update", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: "include",
      });
      const res = await data.json();
      console.log("res value before checking", data.status);
      if (!(data.status === 200)) {
        const err = new Error(res.error);
        throw err;
      } else {
        console.log(res);
        setUserSkills(res.skills);
        setSkills(res.skills);
        setUserData(res);
        setUser(res);
        Swal.fire("SUCCESS!", "Login successful", "success");
        navigate("/settings");
      }
    } catch (err) {
      const error = new Error(err);
      navigate("/settings");
      throw error;
    }
  };

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const callUser = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log(res);
      setUserSkills(data.skills);
      setSkills(data.skills);
      setUserData(data);
      setUser(data);
      if (!(res.status === 200)) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  useEffect(() => {
    const fetchapi = async () => {
      await callUser();
    };
    fetchapi();
  }, []);

  useEffect(() => {
    console.log(userSkills);
    console.log("skills inside the useEffect:", skills);
    setEdit(false);
  }, [userSkills]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar name={userData.name} />
          <div className="col-lg-9 matter ">
            <div className="row">
              <div className="col-lg topbar border border-dark">
                <h2>Settings</h2>
              </div>
              {edit ? (
                <div className="col-lg-10 catter">
                  <h3>Edit User Information</h3>
                  <form method="POST">
                    <div className="col">
                      <div className="form-row">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control my-3 p-2"
                          autoComplete="off"
                          value={user.name}
                          name="name"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="email"
                          placeholder="Email-Address"
                          className="form-control my-3 p-2"
                          autoComplete="off"
                          value={user.email}
                          name="email"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <input
                          type="number"
                          placeholder="Mobile Number"
                          className="form-control my-3 p-2"
                          autoComplete="off"
                          value={user.mobilenumber}
                          name="mobilenumber"
                          onChange={handleInputs}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Current Location</label>
                      <select
                        className="form-control"
                        id="location"
                        onChange={handleInputs}
                        value={user.loc}
                        name="loc"
                      >
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>Kolkata</option>
                        <option>Bangalore</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="experience">Total Experience</label>
                      <select
                        className="form-control"
                        id="experience"
                        onChange={handleInputs}
                        value={user.exp}
                        name="exp"
                      >
                        <option>0-1</option>
                        <option>1-2</option>
                        <option>2-3</option>
                        <option>3-4</option>
                        <option>4-5</option>
                      </select>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 mb-2">
                        <form className="row g-3" method="post">
                          <div className="col-md">
                            <label className="form-label"> Skills </label>

                            <div className="text-dark">
                              <Multiselect
                                isObject={false}
                                name="skills"
                                value={skills}
                                onRemove={(event) => {
                                  setSkills(event);
                                  console.log(event);
                                  setUser({ ...user, skills });
                                }}
                                onSelect={(event) => {
                                  setSkills(event);
                                  console.log(event);
                                  setUser({ ...user, skills });
                                  // console.log("skills=", skills);
                                }}
                                options={options}
                                showCheckbox
                                selectionLimit={10}
                                selectedValues={skills}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={PostData}
                    >
                      SUBMIT
                    </button>
                  </form>
                  <button
                    onClick={() => {
                      setEdit(false);
                    }}
                    className="btn btn-primary my-2"
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <div className="col-lg-10 catter">
                  {/* Display user information */}
                  <div className="user-info">
                    <h3 className="mb-4">User Information</h3>
                    <p className="info-item">
                      <strong>Name:</strong> {userData.name}
                    </p>
                    <p className="info-item">
                      <strong>Email:</strong> {userData.email}
                    </p>
                    <p className="info-item">
                      <strong>Mobile Number:</strong> {userData.mobilenumber}
                    </p>
                    <p className="info-item">
                      <strong>Experience:</strong> {userData.exp}
                    </p>
                    <p className="info-item">
                      <strong>Location:</strong> {userData.loc}
                    </p>
                  </div>

                  {/* Display user skills */}
                  <div className="user-skills mt-4">
                    <h3>Skills</h3>
                    <ul className="list-unstyled">
                      {userSkills.map((skill) => (
                        <li key={skill} className="mb-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Edit button */}
                  <button
                    onClick={() => {
                      setEdit(true);
                    }}
                    className="btn btn-primary my-2"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
          <Bottombar />
        </div>
      </div>
    </div>
  );
}
