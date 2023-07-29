import React, { useState } from "react";

import { Popover } from "@mui/material";

import { profileElements } from "../../data/profileElements";
import Thor from "../../assests/thor.jpg";

import "./styles.css";

const ProfileToggler = () => {
  const [popover, setPopover] = useState(null);

  const handleClick = (event) => setPopover(event.currentTarget);

  const handleClose = () => setPopover(null);

  const id = Boolean(popover) ? "popover" : undefined;

  return (
    <div className="profile-toggler">
      <img
        src={Thor}
        alt="Thor Profile"
        className="profile-img"
        aria-describedby={id}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={Boolean(popover)}
        anchorEl={popover}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <div className="profile-elements">
          {profileElements.map(({ id, title }) => (
            <div className="profile-element" key={id}>
              {title}
            </div>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default ProfileToggler;
