import React from "react";
// import { Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";

const Modal = (props) => {
  const modalId = `exampleModal${props._id}`;
  return (
    <div
      className="row mt-1 mb-3 mx-1 p-3 border border-right border-dark"
      id={props._id}
    >
      <div className="col-2">
        <div className="border border-dark h-100  bg-warning-subtle"></div>
      </div>
      <div className="col-7">
        <div className="container">
          <h3>{props.companyName}</h3>
          <p className="p-1">{props.role}</p>
        </div>
      </div>

      <div className="col-3">
        <button
          type="button"
          className="btn btn-dark text-light"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
        >
          <i className="bi bi-caret-right-fill"></i>
          <span className="d-none d-md-block"> Show More </span>
        </button>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id={modalId}
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
                      <h3>{props.role}</h3>
                      <p className="p-1">{props.companyName}</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="border mx-2 border-dark h-100"></div>
                  </div>
                </div>
                <div className="mx-5">
                  <div className="fs-5 p-3">
                    <span className="fw-bold">Role: </span>
                    {props.role}
                  </div>
                  <div className="fs-5 p-3">
                    <span className="fw-bold">Desired Skills: </span>
                    {props.desiredSkills.map((skill, index) => {
                      if (props.desiredSkills.length - 1 !== index)
                        return `${skill}, `;
                      else return `${skill}`;
                    })}
                  </div>
                  <div className="fs-5 p-3">
                    <span className="fw-bold">Years of Experience: </span>
                    {props.yearsOfExperience}
                  </div>
                  <div className="fs-5 p-3">
                    <span className="fw-bold">Job Description: </span>
                    {props.jobDescription}
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
    // <div className="m-5">
    //   <Card className="p-2" size="3">
    //     <Text size="8">{props.companyName}</Text>
    //   </Card>
    // </div>
  );
};

export default Modal;
