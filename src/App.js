import logo from "./logo.svg";
import "./App.css";
import CounterWrapperContainer from "./containers/CounterWrapperContainer";

function App() {
    console.log("App return starts from ReactDOM.render");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CounterWrapperContainer />
            </header>
        </div>
    );
}

export default App;
