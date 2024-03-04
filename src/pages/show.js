import { useLoaderData, Link, Form } from "react-router-dom";

function Show() {
  const todo = useLoaderData();

  return (
    <div>
      <div>
        <h1>{todo.title}</h1>
        <h2>{todo.isComplete ? "complete" : "incomplete"}</h2>

        <Form action={`/update/${todo._id}`} method="post">
          <h2>Create a Todo</h2>
          <input type="text" name="title" placeholder={todo.title} />
          <input type="checkbox" name="isComplete" />
          <input type="submit" value={"Update"} />
        </Form>

        <Form action={`/delete/${todo._id}`} method="post">
            <button>Delete</button>
        </Form>
      </div>

      <Link to="/">
        <h3>Return to List</h3>
      </Link>
    </div>
  );
}
export default Show;
