import React, {Fragment, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    Route,
    Switch,
    useParams
} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import HomePage from "./HomePage";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <HomePage />
    </Fragment>
  );
}

export default App;
