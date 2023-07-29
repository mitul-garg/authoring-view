import React, { useState } from "react";

import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

import { sidebarElements } from "../../data/sidebarElements";

import "./styles.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((state) => !state);
  };

  if (!isOpen)
    return (
      <div className="closed-sidebar">
        <FaBars className="sidebar-icon" onClick={() => toggleSidebar()} />
      </div>
    );

  return (
    <div className={isOpen ? "opened-sidebar show-sidebar" : "opened-sidebar"}>
      <ImCross className="sidebar-icon" onClick={() => toggleSidebar()} />
      <div className="sidebar-elements">
        {sidebarElements.map(({ id, title }) => (
          <div key={id} className="sidebar-element">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
