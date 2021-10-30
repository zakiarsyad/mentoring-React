import TodoItem from "./todoItem"

const TodoList = (props) => {
  const { items } = props;

  return (
    <div className="bg-red-300">
      <h3 className="font-bold">Your todo list</h3>
      {!items.length ? (
        "You don't have any Todo Item!"
      ) : (
        <ul>
          {items.map((item) => {
            return <TodoItem item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
