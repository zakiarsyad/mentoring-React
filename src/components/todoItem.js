const TodoItem = (props) => {
  const { item, handlePlus, handleDelete } = props;

  return (
    <div>
      <li>- {item.desc}</li>
      <div className="flex">
        <button className="bg-gray-400 border-black" onClick={handlePlus}>
          +
        </button>
        <p>{item.count}</p>
        <button className="bg-gray-400 border-black" onClick={handleDelete}>
          -
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
