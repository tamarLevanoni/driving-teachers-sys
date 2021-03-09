import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Students from "./components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/products"); //"https://fakestoreapi.com/products");
      const json = await res.json();
      setStudents(json);
    }

    fetchData();
  }, []);
  return (
    <Router>
      {/* <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav> */}

      <Switch>
        <Route path="/students" component={Students} />
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
