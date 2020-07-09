import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {
    Route,
    Switch,
} from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import HomePage from "./home/HomePage";
import CategoryPage from "./category/CategoryPage";

const App = () => {
  return(
    <>
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
    </>
  );
}

export default App;
