import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navigation";
// import { Home, Blog } from "./Router";
import Home from "./Router/Home";
import Blog from "./Router/Blog";

function Routing() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
}
export default Routing;
