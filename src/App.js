import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/faq">
            <FAQ></FAQ>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
