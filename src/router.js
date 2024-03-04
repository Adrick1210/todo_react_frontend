import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/index";
import Show from "./pages/show";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { todosLoader, todoLoader } from "./loader";
import { createAction, updateAction, deleteAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Main />}>
        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />}/>
      </Route>

      <Route path="/dashboard" element={<Index />} loader={todosLoader} />

      <Route path=":id" element={<Show />} loader={todoLoader} />

      <Route path="create" action={createAction} />

      <Route path="update/:id" action={updateAction} />

      <Route path="delete/:id" action={deleteAction} />
    </Route>
  )
);

export default router;
