import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-yellow-200 flex flex-col items-center">
      <h1>TODO APP</h1>
      <input placeholder="Input new todo list"></input>
      <div className="bg-red-300">
        <h3>Your todo list</h3>
        <ul>
          <li>Todo list 1</li>
          <li>Todo list 2</li>
          <li>Todo list 3</li>
          <li>Todo list 4</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
