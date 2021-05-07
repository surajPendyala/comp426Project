import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Navigation, FoodWarehouse,Proverb, Bored, Music, Snake} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/recipe" exact component={() => <FoodWarehouse />} />
          <Route path="/proverb" exact component={() => <Proverb />} />
          <Route path="/bored" exact component={() => <Bored />} />
          <Route path="/music" exact component={() => <Music />} />
          <Route path="/snake" exact component={() => <Snake />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;