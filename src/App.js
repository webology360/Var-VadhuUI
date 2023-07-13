import Header from "./components/Header/Header";
import Router from "./router/Router";
import classes from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";
import ToastMessage from "./features/Common/ToastMessage/ToastMessage";

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
      <ToastMessage />
    </BrowserRouter>
  );
}

export default App;
