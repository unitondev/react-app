import logo from "./logo.svg";
import "./App.css";
import Counter from "./containers/CounterContainer";
import CounterWrapper from "./containers/CounterWrapperContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CounterWrapper />
            </header>
        </div>
    );
}

export default App;
