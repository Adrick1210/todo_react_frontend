import { useLoaderData, Form } from "react-router-dom";

function Index() {
  const todos = useLoaderData();

  return (
    <div>
      <Form action="/create" method="post">
        <h1>Create a Todo</h1>
        <input type="text" name="title" placeholder="Add Todo"/>
        <input type="checkbox" name="isComplete"/>
        <input type="submit" value={"Create"}/>
      </Form>
      <div className="list-container">
        {todos.map((todo) => {
          return (
            <div className="todo-item" key={todo._id}>
              <h1>{todo.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Index;
