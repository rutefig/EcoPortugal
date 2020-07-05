import React, {Fragment, Component} from 'react';
import {Container} from "react-bootstrap";
import './App.css';
import {
    Route,
    Switch,
    useParams
} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Container fluid>
        <Switch>
          <Route path="/:selectedCategory">
            <CategoryPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
