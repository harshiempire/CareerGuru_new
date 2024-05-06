import React, { useEffect, useState } from "react";
import "./css/dashboard.css";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Bottombar from "./Bottombar";

const Dashboard = () => {
  const [joblist, setJobList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  // const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const match = (userS, jobS) => {
    const intersection = userS.filter((skill) => jobS.includes(skill));

    // console.log("user:", userS, "jobs:", jobS, "intersection:", intersection);

    const union = [...new Set([...userS, ...jobS])];

    const similarity = (intersection.length / union.length) * 100;
    return similarity;
  };

  const callDashboard = async () => {
    try {
      const res = await fetch("https://careerguru-new.onrender.com/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserSkills([...data.skills]);

      setUserData(data);
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
    const fetchData = async () => {
      callDashboard();
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array, runs only once when the component mounts

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://careerguru-new.onrender.com/getdata");

        if (res.status === 200) {
          const filteredJobs = res.data.filter(
            (object) => match(userSkills, object.desiredSkills) > 0
          );
          setLoading(false);
          setJobList(filteredJobs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userSkills]);

  const jobcont = joblist.map((obj) => {
    return (
      <Modal
        companyName={obj.companyName}
        desiredSkills={obj.desiredSkills}
        jobDescription={obj.jobDescription}
        role={obj.role}
        yearsOfExperience={obj.yearsOfExperience}
        _id={obj._id}
      />
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar name={userData.name} />
          <div className="col-lg-9 matter ">
            <div className="row">
              <div className="col-lg topbar border border-dark">
                <span className="h2">Dashboard</span>
                {/* <button
                  className="btn btn-primary"
                  onClick={() => {
                    setRefresh((s) => s + 1);
                  }}
                >
                  Refresh
                </button> */}
              </div>
              <div className="col-lg-10 catter mb-5">
                {loading ? (
                  <div>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>
                  </div>
                ) : (
                  jobcont
                )}
              </div>
              <Bottombar val={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

//import React, { useEffect, useState } from "react";// import Navbar from "./Navbar";import axios from "axios";import "./css/dashboard.css";import Modal from "./Modal";import Sidebar from "./Sidebar";import { useNavigate } from "react-router-dom";const Dashboard = () => {  const [joblist, setJobList] = useState([]);  const [userData, setUserData] = useState([]);  const [userSkills, setUserSkills] = useState([]);  const [obj, setObj] = useState({});  const [refresh, setRefresh] = useState(0);  const navigate = useNavigate();  const callDashboard = async () => {    try {      const res = await fetch("/dashboard", {        method: "GET",        headers: {          Accept: "application/json",          "Content-Type": "application/json",        },        credentials: "include",      });      const data = await res.json();      console.log(res);      setUserSkills(data.skills);      setUserData(data);      if (!(res.status === 200)) {        const error = new Error(res.error);        throw error;      }    } catch (err) {      console.log(err);      navigate("/login");    }  };  const match = (userS, jobS) => {    let x = jobS.length;    let cnt = 0;    console.log("userS", userS);    console.log("jobS", jobS);    // console.log("x=", x, " cnt=", cnt);    // for (let i of jobS) {    //   console.log(i);    //   for (let j of userS) {    //     console.log("i=", i, " j=", j, " ", i === j);    //     if (i === j) {    //       cnt++;    //     }    //   }    // }    // console.log((x / cnt) * 100);    return 0.5 * 100;  };  const getData = async () => {    const res = await axios.get("/getdata");    console.log(res.status);    if (res.status === 200) {      console.log(res.data);      console.log(userSkills);      console.log(res.data[1].desiredSkills);      // res.data.map((object) => {      //   if (match(userSkills, obj.desiredSkills) > 45) {      //     setObj(...obj, object);      //   }      // });      const filteredJobs = res.data.filter(        (object) => match(userSkills, object.desiredSkills) > 45      );      console.log("filteredJobs", filteredJobs);      setJobList(filteredJobs);    }  };  useEffect(() => {    callDashboard();    getData();  }, [refresh]);  const jobcont = joblist.map((obj) => {    return (      <Modal        companyName={obj.companyName}        desiredSkills={obj.desiredSkills}        jobDescription={obj.jobDescription}        role={obj.role}        yearsOfExperience={obj.yearsOfExperience}        _id={obj._id}      />    );  });  return (    <div>      <div className="container-fluid">        <div className="row">          <Sidebar name={userData.name} />          <div className="col-lg-9 matter ">            <div className="row">              <div className="col-lg topbar border border-dark">                <span className="h2">Dashboard</span>                <button                  className="btn btn-primary"                  onClick={() => {                    setRefresh((s) => s + 1);                  }}                >                  Refresh                </button>              </div>              <div className="col-lg-10 catter">{jobcont}</div>            </div>          </div>        </div>      </div>    </div>  );};export default Dashboard;
