import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import People from "./Components/People";
import CharacterInfo from "./Components/CharecterInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={People} />
          <Route exact path="/characterInfo/:id" component={CharacterInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
