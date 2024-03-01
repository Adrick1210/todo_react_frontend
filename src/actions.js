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
