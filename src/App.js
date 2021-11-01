import { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App(props) {
  const { items, setItems } = props;

  // const [items, setItems] = useState([
  //   // { desc: "Apple", count: 5 },
  //   // { desc: "Mango", count: 10 },
  // ]);

  const [inputItem, setInputItem] = useState("");

  const handleAdd = () => {
    const item = { desc: inputItem, count: 5 }

    setItems('ADD ITEM', item);
    setInputItem("");
  };

  const handleChange = (event) => {
    setInputItem(event.target.value);
  };

  const handlePlus = () => {
    const item = { desc: 'Orange', count: 5 }

    setItems('ADD COUNT', item);
  };

  const handleDelete = () => {
    const item = { desc: 'Orange', count: 5 }

    setItems('DELETE COUNT', item);
  };

  return (
    <div className="bg-yellow-200 flex flex-col items-center">
      <h1 className="font-bold">TODO APP</h1>
      <TodoInput
        handleAdd={handleAdd}
        handleChange={handleChange}
        inputItem={inputItem}
      />
      <TodoList
        items={items}
        handlePlus={handlePlus}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
