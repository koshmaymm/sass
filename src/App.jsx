import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./context/GlobalContext";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";

import "./styles/App.css";
import "./styles/index.css";
import "./styles/Hello.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalContext>
          <Navigation />
          <Layout />
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
