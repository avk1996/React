import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CounterClasscomponent from "./components/CounterClassComponent";
import CounterFunctionalComponent from "./components/CounterFunctionalityComponent";

function App() {
  //declaring a array
  let nameArray = ["Govinda", "Jayesh", "Avinash", "Sandy"];
  return (
    <div>
      <h1>Entering into class and functional component</h1>
      <header></header>
      <CounterClasscomponent></CounterClasscomponent>
      <CounterFunctionalComponent></CounterFunctionalComponent>
    </div>
  );
}

export default App;
