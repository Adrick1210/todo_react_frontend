import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </TodoProvider>
  );
}

export default App;
