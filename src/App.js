import "./App.css";
import LeftDashboard from "./components/LeftDashboard/LeftDashboard";
import Navbar from "./components/Navbar/Navbar";

import { createStore } from "redux";
import { reducer } from "./redux/reducer";
import { Provider } from "react-redux";
import { containers } from "./data/containers";

// fetching stored state from local storage to ensure
// that the data stays on reloads
const storedState = JSON.parse(localStorage.getItem("state"));

const initialStore =
  storedState === null
    ? {
        // if its the first load, default state gets rendered
        containers: containers,
        count: 5,
      }
    : storedState;

const store = createStore(reducer, initialStore);

function App() {
  return (
    <Provider store={store} className="app">
      <Navbar />
      <LeftDashboard />
    </Provider>
  );
}

export default App;
