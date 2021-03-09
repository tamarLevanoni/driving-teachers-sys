import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Students from "./components/Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentsContext from "./contexts/StudentsContext";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/students"); //"https://fakestoreapi.com/products");
      const studentsJson = await res.json();
      setStudents(studentsJson);
    }

    fetchData();
  }, []);

  return (
    <StudentsContext.Provider value={[students, setStudents]}>
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
    </StudentsContext.Provider>
  );
};

export default App;
