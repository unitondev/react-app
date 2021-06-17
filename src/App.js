import "./App.css";
import CounterWrapperContainer from "./containers/CounterWrapperContainer";
import AboutView from "./views/About/AboutView";
import NotFoundView from "./views/NotFound/NotFoundView";
import NavBarView from "./views/Navbar/NavBarView";
import LoginContainer from "./containers/LoginContainer";
import LoginReduxContainer from "./containers/LoginReduxContainer";
import LoginReduxSuccessContainer from "./containers/LoginReduxSuccessContainer";

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
                <Route path="/react-application">
                    <NavBarView />
                </Route>
                <Route path="/about">
                    <AboutView />
                </Route>
                <Route path="/counters">
                    <CounterWrapperContainer />
                </Route>
                <Route path="/login">
                    <LoginContainer />
                </Route>
                <Route path="/login-redux" exact>
                    <LoginReduxContainer />
                </Route>
                <Route path="/login-redux/success" exact>
                    <LoginReduxSuccessContainer />
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
