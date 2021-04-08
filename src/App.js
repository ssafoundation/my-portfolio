import "./App.css";
import "./main.css";
import Home from "./components/page/home.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainBody from "./components/MainBody.jsx/MainBody";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import FrontPage from "./components/page/FrontPage";
import Skill from "./components/skill/Skill";
import Blogs from "./components/blog/Blogs";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import Registetion from "./components/Admin/registetion/Registetion";
import Login from "./components/Admin/Login/Login";
function App() {
  return (

    <div>
      <Router>
        <div>
          <Home />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/home">
              <MainBody />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/skill">
              <Skill/>
            </Route>
            <Route path="/blog">
              <Blogs/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/account">
              <Admin/>
            </Route>
            <Route path="/registetion">
              <Registetion/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exect path="/">
              <FrontPage />
            </Route>

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
