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
import RecyclePointPage from "./recyclepoint/RecyclePointPage";
import AddRecyclePointWithMap from "./recyclepoint/AddRecyclePointWithMap";
import AddRecyclePoint from "./recyclepoint/AddRecyclePoint";

const App = () => {
  return(
    <>
        <NavigationBar />
        <Container fluid>
            <Switch>
              <Route path="/addPointWithMap">
                <AddRecyclePointWithMap />
              </Route>
              <Route path="/addPointForm">
                <AddRecyclePoint />
              </Route>
              <Route path="/:selectedCategory/:selectedPoint/:coordinates">
                <RecyclePointPage />
              </Route>
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
