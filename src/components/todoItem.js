const TodoItem = (props) => {
  const { item } = props;

  return (
    <div>
      <li>- {item.desc}</li>
      <button className="bg-gray-400 border-black">Edit</button>
      <button className="bg-gray-400 border-black">Delete</button>
      <button className="bg-gray-400 border-black">Mark as done</button>
    </div>
  );
};

export default TodoItem;
