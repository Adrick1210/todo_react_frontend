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
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdTodo),
  });
  return redirect("/");
};

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();

  const updatedTodo = {
    title: formData.get("title"),
    isComplete: formData.get("isComplete"),
  };

  await fetch(`${URL}/todos/${params.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTodo),
  });
  return redirect("/");
};

export const deleteAction = async ({ params }) => {
  await fetch(`${URL}/todos/${params.id}`, {
    method: "delete",
  })
  return redirect("/");
}