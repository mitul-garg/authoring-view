import React from "react";

import { TreeView, TreeItem } from "@mui/lab";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import "./styles.css";

import { connect } from "react-redux";
import { ADD_LEAF, ADD_CONTAINER } from "../../redux/actions";

const TreeViewTab = ({ containers, dispatch }) => {
  const renderTree = (nodes) => {
    const isParent = Array.isArray(nodes.children);
    if (!isParent)
      return (
        <TreeItem
          key={nodes.id}
          nodeId={nodes.id}
          label={<div>{nodes.title}</div>}
        ></TreeItem>
      );

    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={
          <div className="parent-container">
            {nodes.title}
            {/* {count} */}
            {nodes.id !== "root" && (
              <AiOutlinePlus
                className="plus-icon"
                onClick={() =>
                  dispatch({ type: ADD_LEAF, payload: { id: nodes.id } })
                }
              />
            )}
            {nodes.id === "root" && (
              <AiOutlinePlus
                className="plus-icon"
                onClick={() =>
                  dispatch({ type: ADD_CONTAINER, payload: { id: nodes.id } })
                }
              />
            )}
          </div>
        }
      >
        {nodes.children.map((node) => renderTree(node))}
      </TreeItem>
    );
  };

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<BsChevronDown />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<BsChevronRight />}
      sx={{
        height: 400,
        flexGrow: 1,
        maxWidth: 300,
        overflowY: "auto",
        marginLeft: 2,
        marginTop: 2,
      }}
    >
      {renderTree(containers)}
    </TreeView>
  );
};

const mapStateToProps = (store) => {
  return {
    containers: store.containers,
    count: store.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addLeaf: (id) => dispatch({ type: ADD_LEAF, payload: { id } }),
//   };
// };

export default connect(mapStateToProps)(TreeViewTab);
