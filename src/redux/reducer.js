import { ADD_LEAF, ADD_CONTAINER } from "./actions";

export const reducer = (state, action) => {
  if (action.type === ADD_LEAF) {
    const id = action.payload.id;
    const newCount = state.count + 1;
    const newNode = {
      id: state.count + "",
      title: "Container " + state.count,
    };

    let newContainers = new Object(state.containers);

    for (let i = 0; i < newContainers.children.length; i++) {
      if (newContainers.children[i].id === id) {
        newContainers.children[i].children.push(newNode);
        break;
      }
    }

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
    const newCount = state.count + 1;
    const newNode = {
      id: state.count + "",
      title: "Container " + state.count,
      children: [],
    };

    let newContainers = new Object(state.containers);

    newContainers.children.push(newNode);

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
