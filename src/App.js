import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import GlobalStyle from "./styles/Global";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Home />
    </Router>
  );
}

export default App;
