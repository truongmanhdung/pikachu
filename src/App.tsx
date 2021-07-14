import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configStore";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components";
const store = configureStore();
class App extends Component {
  render() {
    return (

        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
  }
}

export default App;
