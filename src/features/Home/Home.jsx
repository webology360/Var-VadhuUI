import SearchForm from "./SearchForm/SearchForm";
import classes from "./Home.module.scss";
import SearchList from "./SearchList/SearchList";
import { useSelector } from "react-redux";
import BackgroundContainer from "./BackgroundContainer/BackgroundContainer";

const Home = () => {
  const homeState = useSelector((state) => state.home);
  const { profilesCount } = homeState;
  return (
    <div className={classes.home}>
      <div className={classes.home__formContainer}>
        <SearchForm />
      </div>
      <div className={classes.home__mainContainer}>
        {profilesCount > 0 ? <SearchList /> : <BackgroundContainer />}
      </div>
    </div>
  );
};

export default Home;
