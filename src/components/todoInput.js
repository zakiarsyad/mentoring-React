const TodoInput = (props) => {
  const { handleAdd, handleChange, inputItem } = props;

  return (
    <div>
      <input
        placeholder="Input new todo list"
        onChange={handleChange}
        value={inputItem}
      />
      <button className="bg-gray-400" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
