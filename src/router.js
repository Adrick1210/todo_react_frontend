import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/index";
import { todosLoader } from "./loader";
import { createAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Index />} loader={todosLoader}/>
      <Route path="create" action={createAction}/>
    </Route>
  )
);

export default router;
