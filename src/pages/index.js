import { useLoaderData, Form, Link } from "react-router-dom";

function Index() {
  const todos = useLoaderData();

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
            <div className="todo-item" key={todo._id}>
              <Link to={todo._id}>
              <h1>{todo.title}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Index;
