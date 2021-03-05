import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/Global";
import { Footer, Navbar } from "./components";
import { Home, ContactPage } from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
