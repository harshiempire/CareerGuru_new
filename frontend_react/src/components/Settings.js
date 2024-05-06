import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";
import Bottombar from "./Bottombar";

const Settings = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  const callSettings = async () => {
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

      console.log(res);
      setUserSkills(data.skills);

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
    callSettings();
  }, []);

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
              <div className="col-lg-10 catter">
                <Setting userData={userData} userSkills={userSkills} />
              </div>
              <Bottombar val={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
