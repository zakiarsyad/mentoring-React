import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [items, setItems] = useState([
    // { desc: "Belajar HTML" },
    // { desc: "Belajar CSS" },
    // { desc: "Belajar Javascript" },
    // { desc: "Belajar React" },
  ]);

  const [inputItem, setInputItem] = useState("");

  const handleAdd = () => {
    // console.log("handleAdd");
    // console.log(inputItem);
    setItems([...items, { desc: inputItem }]);
    setInputItem("")
  };

  const handleChange = (event) => {
    // console.log("handleChange");
    // console.log(event.target.value)
    setInputItem(event.target.value);
  };

  return (
    <div className="bg-yellow-200 flex flex-col items-center">
      <h1 className="font-bold">TODO APP</h1>
      <TodoInput handleAdd={handleAdd} handleChange={handleChange} inputItem={inputItem}/>
      <TodoList items={items} />
    </div>
  );
}

export default App;
