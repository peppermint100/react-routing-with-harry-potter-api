import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import Spells from "./components/Spells";
import SpellDetail from "./components/SpellDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/spells" component={Spells} />
        <Route path="/spell/:id" component={SpellDetail} />
      </Router>
    </div>
  );
}

export default App;
