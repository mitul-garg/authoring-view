import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../SearchBar/SearchBar";

import { GrNotification } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io";

import "./styles.css";
import ProfileToggler from "../ProfileToggler/ProfileToggler";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <Sidebar />
        <SearchBar />
      </div>
      <div className="right-nav">
        <div className="invite-team-member">
          <IoMdPersonAdd className="nav-icon" />
          <div>Invite Team Member</div>
        </div>
        <div>
          <GrNotification className="nav-icon" />
        </div>
        <ProfileToggler />
      </div>
    </div>
  );
};

export default Navbar;
