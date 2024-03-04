import { Form } from "react-router-dom";
function Signup() {
  return (
    <div>
      <Form action="/signup" method="POST">
        <h1>Signup</h1>
        <label>Username: </label>
        <input type="text" name="username" placeholder="username" />

        <label>Password: </label>
        <input type="password" name="password" placeholder="password" />

        <input type="submit" value="signup" />
      </Form>
    </div>
  );
}

export default Signup;
