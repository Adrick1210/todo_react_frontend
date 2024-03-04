import { Form } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Form</h1>
      <Form action="/login" method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="username" />

        <label>Password: </label>
        <input type="password" name="password" placeholder="password" />

        <input type="submit" value="submit" />
      </Form>
    </div>
  );
}
export default Login;
