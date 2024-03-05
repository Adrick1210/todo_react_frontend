const URL = process.env.REACT_APP_URL;

export const todosLoader = async () => {
  const res = await fetch(`${URL}/todos`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
  const todos = await res.json();
  return todos;
};

export const todoLoader = async ({ params }) => {
  const res = await fetch(`${URL}/todos/${params.id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
  });
  const todo = await res.json();
  return todo;
};
