import React, { useCallback } from "react";

import { TreeView, TreeItem } from "@mui/lab";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineFolderAdd } from "react-icons/ai";

import "./styles.css";

import { connect } from "react-redux";
import { ADD_LEAF, ADD_CONTAINER } from "../../redux/actions";

const TreeViewTab = ({ containers, dispatch, count }) => {
  const clickHandler = useCallback((event) => {
    event.stopPropagation();
    if (event.target instanceof Element) {
      const isIcon = !!event.target.closest(".MuiTreeItem-iconContainer");
      if (isIcon) {
        return;
      }
    }
  }, []);

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
          <div className="parent-container" onClick={clickHandler}>
            {nodes.title}
            {
              <div className="icon-container">
                <AiOutlinePlus
                  className="plus-icon"
                  onClick={() =>
                    dispatch({ type: ADD_LEAF, payload: { id: nodes.id } })
                  }
                />
                <AiOutlineFolderAdd
                  className="folder-plus-icon"
                  onClick={() =>
                    dispatch({ type: ADD_CONTAINER, payload: { id: nodes.id } })
                  }
                />
              </div>
            }
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
        height: window.outerHeight,
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
