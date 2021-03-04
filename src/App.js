import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/Global";
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Contact from "./pages/ContactPage/Contact";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
