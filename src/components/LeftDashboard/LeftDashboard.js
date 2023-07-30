import React, { useState } from "react";

import { Tabs, Tab, Box } from "@mui/material";

import "./styles.css";
import TreeViewTab from "../TreeView/TreeViewTab";

const LeftDashboard = () => {
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => setValue(newValue);

  const renderSwitch = () => {
    switch (value) {
      case "board":
        return <h1 className="tab-content">Board Tab Content</h1>;
      case "graph":
        return <h1 className="tab-content">Graph View</h1>;
      case "recent":
        return <h1 className="tab-content">Recent Tab Content</h1>;
      default:
        return <TreeViewTab />;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="Different Views"
      >
        <Tab value="all" label="All"></Tab>
        <Tab value="board" label="Board" />
        <Tab value="graph" label="Graph" />
        <Tab value="recent" label="Recent" />
      </Tabs>

      {renderSwitch()}
    </Box>
  );
};

export default LeftDashboard;
