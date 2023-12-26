import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Multiselect from "multiselect-react-dropdown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Jobs = () => {
  const [options, setOptions] = useState([
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
    "HTML/CSS ",
    "SQL ",
    "R ",
    "MATLAB ",
    "Perl",
    "Shell scripting languages (e.g., Bash)",
    "Dart ",
    "Scala",
    "Lua",
    "Haskell",
    "Objective-C ",
    "Assembly languages ",
    "COBOL ",
    "Lisp ",
    "Fortran ",
    "Julia ",
    "Groovy",
    "PHP",
    "Dart",
  ]);
  const [desiredSkills, setSkills] = useState([""]);
  const [container, setContainer] = useState(null);
  const [job, setJob] = useState({
    companyName: "",
    role: "",
    desiredSkills: [""], // Include desiredSkills in the job object
    location: "hyderabad",
    yearsOfExperience: "0-1",
    jobDescription: "",
  });
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setJob({ ...job, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log(job);
    const {
      companyName,
      role,
      location,
      yearsOfExperience,
      desiredSkills,
      jobDescription,
    } = job;

    const res = await fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        role,
        location,
        yearsOfExperience,
        desiredSkills,
        jobDescription,
      }),
    });
    const data = await res.json();
    setContainer(data);
    console.log("container", container);
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire("SUCCESS!", "Login successful", "success");
    } else {
      // window.alert("Invalid Crdentials");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Crdentials",
      });
    }
  };

  useEffect(() => {
    console.log("Use effect - ", container);
  }, [container]);

  return (
    <div className=" ">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Edit Jobs</Button>
            <Button color="inherit">Add Jobs</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <form className="container mt-4" method="POST">
        <div className="col">
          <div className="form-row">
            <label for="companyName">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="form-control "
              autoComplete="off"
              value={job.name}
              name="companyName"
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-row">
            <label for="companyName">Role</label>
            <input
              type="text"
              placeholder="Roles"
              className="form-control "
              autoComplete="off"
              value={job.role}
              name="role"
              onChange={handleInputs}
            />
          </div>
        </div>
        {/* <div className="form-group">
                <label for="mobile">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number for"
                />
              </div> */}
        <div className="form-group">
          <label for="location">Current Location</label>
          <select
            className="form-control"
            id="location"
            onChange={handleInputs}
            value={job.location}
            name="location"
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
          <label for="experience">Total Experience</label>
          <select
            className="form-control"
            id="experience"
            onChange={handleInputs}
            value={job.yearsOfExperience}
            name="yearsOfExperience"
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
                    name="desiredSkills"
                    value={desiredSkills}
                    onRemove={(event) => {
                      setSkills(event);
                      console.log(event);
                      setJob({ ...job, desiredSkills });
                    }}
                    onSelect={(event) => {
                      setSkills(event);
                      console.log(event);
                      setJob({ ...job, desiredSkills });
                      // console.log("desiredSkills=", desiredSkills);
                    }}
                    options={options}
                    showCheckbox
                    selectionLimit={20}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            rows="3"
            name="jobDescription"
            className="form-control"
            onChange={handleInputs}
            value={job.jobDescription}
          />
        </div>
        {/* <div className="row">
                <div className="col-sm-12 mb-2">
                  <form className="row g-3" method="post">
                    <div className="col-md">
                      <label className="form-label"> Skills </label>

                      <div className="text-dark">
                        <Multiselect
                          isObject={false}
                          name="desiredSkills"
                          value={desiredSkills}
                          onRemove={(event) => {
                            setSkills(event);
                            console.log(event);
                          }}
                          onSelect={(event) => {
                            setSkills(event);
                            console.log(desiredSkills);
                          }}
                          options={options}
                          showCheckbox
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}

        <button type="submit" className="btn btn-primary" onClick={PostData}>
          SUBMIT
        </button>
      </form>
      {container === null ? (
        ""
      ) : (
        <div>
          <div className="row mt-1 mb-3 mx-1 p-3 border border-right border-dark">
            <div className="col-2">
              <div className="border border-dark h-100  bg-warning-subtle"></div>
            </div>
            <div className="col-7">
              <div className="container">
                <h3>{container.companyName}</h3>
                <p className="p-1">
                  {container.desiredSkills.map((skill, index) => {
                    if (container.desiredSkills.length - 1 !== index)
                      return `${skill}, `;
                    else return `${skill}`;
                  })}
                </p>
              </div>
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-dark text-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <i className="bi bi-caret-right-fill"></i>
                <span className="d-none d-md-block"> Show More </span>
              </button>
              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div
                        className="modal-title h-1 fs-5"
                        id="exampleModalLabel"
                      ></div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row mt-1 mb-3 mx-5 py-3 border border-dark">
                        <div className="col-10">
                          <div className="container">
                            <h3>{container.role}</h3>
                            <p className="p-1">{container.companyName}</p>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="border mx-2 border-dark h-100"></div>
                        </div>
                      </div>
                      <div className="mx-5">
                        <div className="fs-5 p-3">
                          <span className="fw-bold">Role:</span>
                          {container.role}
                        </div>
                        <div className="fs-5 p-3">
                          <span className="fw-bold">Desired Skills:</span>
                          {container.desiredSkills.map((skill, index) => {
                            if (container.desiredSkills.length - 1 !== index)
                              return `${skill}, `;
                            else return `${skill}`;
                          })}
                        </div>
                        <div className="fs-5 p-3">
                          <span className="fw-bold">Years of Experience:</span>
                          {container.yearsOfExperience}
                        </div>
                        <div className="fs-5 p-3">
                          <span className="fw-bold">Job Description:</span>
                          {container.jobDescription}
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
