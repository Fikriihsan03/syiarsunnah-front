import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navigation";
// import { Home, Blog } from "./Router";
import Home from "./Router/Home/Home";
import Blog from "./Router/Blog";
import Footer from "../components/Footer/Footer";

function Routing() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default Routing;
