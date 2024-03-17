import { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";
import { updateBoxToggle } from "../actions";
import '../style.css'

function Index() {
  const { todos, updateTodo } = useContext(TodoContext);

  const handleCheckboxChange = async (todo) => {
    const updatedTodo = await updateBoxToggle({
      ...todo,
      isComplete: !todo.isComplete,
    });
    updateTodo(updatedTodo);
  };

  return (
    <div>
      <nav>
        <Form action="/create" method="post">
          <h2>Create a Todo</h2>
          <input type="text" name="title" placeholder="Add Todo" />
          <input type="checkbox" name="isComplete" />
          <input type="submit" value={"Create"} />
        </Form>
      </nav>

      <div className="list-container">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo._id}>
              <Link to={todo._id}>
                <h1>{todo.title}</h1>
              </Link>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="isComplete"
                  checked={todo.isComplete}
                  onChange={() => handleCheckboxChange(todo)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Index;
