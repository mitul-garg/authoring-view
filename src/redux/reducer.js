import { ADD_LEAF, ADD_CONTAINER } from "./actions";

export const reducer = (state, action) => {
  if (action.type === ADD_LEAF) {
    const id = action.payload.id;
    const newCount = state.count + 1;
    const newNode = {
      id: state.count + "",
      title: "Leaf " + state.count,
    };

    let newContainers = { ...state.containers };

    // a new node can be inserted directly if the parent is root
    if (id === "root") {
      newContainers.children.push(newNode);
    } else {
      insert(newContainers, newNode, id);
    }

    // storing the updated state in local storage
    localStorage.setItem(
      "state",
      JSON.stringify({
        count: newCount,
        containers: newContainers,
      })
    );

    return { ...state, count: newCount, containers: newContainers };
  }

  if (action.type === ADD_CONTAINER) {
    const id = action.payload.id;
    const newCount = state.count + 1;
    const newNode = {
      id: state.count + "",
      title: "Container " + state.count,
      children: [],
    };

    let newContainers = { ...state.containers };

    // a new node can be inserted directly if the parent is root
    if (id === "root") {
      newContainers.children.push(newNode);
    } else {
      insert(newContainers, newNode, id);
    }

    // storing the updated state in local storage
    localStorage.setItem(
      "state",
      JSON.stringify({
        count: newCount,
        containers: newContainers,
      })
    );

    return { ...state, count: newCount, containers: newContainers };
  }

  return { ...state };
};

// the node needs to inserted recursively in the targeted container
// the function calls itself for every children present in a parent node
const insert = (containers, node, id) => {
  if (containers.id === id) {
    containers.children.push(node);
    return true;
  }

  if (containers.children != null) {
    containers.children.forEach((obj) => {
      if (insert(obj, node, id)) return true;
    });
  }

  return false;
};
