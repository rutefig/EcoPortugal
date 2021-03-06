import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {
    Route,
    Switch,
} from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import Footer from "./common/Footer";
import HomePage from "./home/HomePage";
import CategoryPage from "./category/CategoryPage";
import RecyclePointPage from "./recyclepoint/RecyclePointPage";
import AddRecyclePointWithMap from "./recyclepoint/AddRecyclePointWithMap";
import AddRecyclePoint from "./recyclepoint/AddRecyclePoint";
import SuggestionPage from "./suggestion/SuggestionPage";

const App = () => {
  return(
    <>
        <NavigationBar />
        <Container fluid className="content">
            <Switch>
              <Route path="/sugerir">
                <SuggestionPage />
              </Route>
              <Route path="/:selectedCategory/addPointWithMap">
                <AddRecyclePointWithMap />
              </Route>
              <Route path="/:selectedCategory/addPointForm">
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
        <Footer />
    </>
  );
}

export default App;
