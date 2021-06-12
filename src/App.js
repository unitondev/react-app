import "./App.css";
import CounterWrapperContainer from "./containers/CounterWrapperContainer";
import AboutContainer from "./containers/AboutContainer";
import NotFoundView from "./views/NotFound/NotFoundView";
import NavBarView from "./views/Navbar/NavBarView";
import LoginContainer from "./containers/LoginContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <NavBarView />
                </Route>
                <Route path="/about">
                    <AboutContainer />
                </Route>
                <Route path="/counters">
                    <CounterWrapperContainer />
                </Route>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/404">
                    <NotFoundView />
                </Route>
                <Redirect from="/" to="/404"></Redirect>
            </Switch>
        </Router>
    );
}

export default App;
