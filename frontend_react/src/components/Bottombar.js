import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

export default function Bottombar({ val }) {
  const [value, setValue] = useState(val);
  return (
    <div className="bottombar">
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log(value);
            setValue(newValue);
          }}
        >
          {" "}
          <NavLink to="/dashboard" className="">
            <BottomNavigationAction
              label="Dashboard"
              icon={<DashboardIcon />}
            />
          </NavLink>
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <NavLink to="/settings" className="">
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
          </NavLink>
          <NavLink to="/logout" className="">
            <BottomNavigationAction label="Logout" icon={<LogoutIcon />} />
          </NavLink>
        </BottomNavigation>
      </Box>
    </div>
  );
}
