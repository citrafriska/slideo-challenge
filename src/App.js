import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./screens/Main";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
