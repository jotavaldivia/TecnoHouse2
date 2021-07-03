import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/Navbar.js'
import Home from './components/Home/Home.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
function App() {

  return (
    <Router>
      <NavBar logo={'./TECNO-HOGAR.png'}></NavBar>
      <Switch>
        <Route path="/item/:id">
          <ItemDetailContainer></ItemDetailContainer>
        </Route>
        <Route path="/category/:id">
        <div className="App">
            <Home name={"Tecno Hogar"}></Home>
            <div className="App__counter">
              {/* <Counter /> */}
              <ItemListContainer />
            </div>
          </div>
        </Route>
        <Route exact path="/">
          <div className="App">
            <Home name={"Tecno Hogar"}></Home>
            <div className="App__counter">
              <ItemListContainer />
            </div>
          </div>
          <Route path="*">
          La página que buscar no existe
          </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
