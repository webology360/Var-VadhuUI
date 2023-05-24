import Header from "./components/Header/Header";
import Router from "./router/Router";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <div className={classes.app__main}>
          <Router />
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
