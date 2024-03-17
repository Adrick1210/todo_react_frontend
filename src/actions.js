import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const createAction = async ({ request }) => {
  const formData = await request.formData();

  const createdTodo = {
    title: formData.get("title"),
    isComplete: formData.get("isComplete"),
  };
  console.log(createdTodo);
  await fetch(`${URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(createdTodo),
  });
  return redirect("/dashboard");
};

export const updateAction = async ({ request, params }) => {
  const id = params.id;
  const formData = await request.formData();

  const updatedTodo = {
    title: formData.get("title"),
    isComplete: formData.get("isComplete"),
  };

  await fetch(`${URL}/todos/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updatedTodo),
  });
  return redirect(`/${id}`);
};

export const updateBoxToggle = async (todo) => {
  const id = todo._id;

  const updatedTodo = {
    title: todo.title,
    isComplete: todo.isComplete,
  };

  const response = await fetch(`${URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(updatedTodo),
  });
  return response.json();
};

export const deleteAction = async ({ params }) => {
  await fetch(`${URL}/todos/${params.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return redirect("/dashboard");
};

export const signupAction = async ({ request }) => {
  const formData = await request.formData();

  const newUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const response = await fetch(`${URL}/signup`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status >= 400) {
    alert(response.statusText);
    return redirect("/signup");
  }
  return redirect("/login");
};

export const loginAction = async ({ request }) => {
  const formData = await request.formData();

  const newUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  const response = await fetch(`${URL}/login`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status >= 400) {
    alert(response.statusText);
    return redirect("/signup");
  }
  const data = await response.json();
  console.log(data);
  localStorage.setItem("token", data.token);

  return redirect("/dashboard");
};
