import { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { TodoContext } from "../contexts/TodoContext";
import { updateBoxToggle } from "../actions";
import { useState } from "react";
import Modal from "../components/Modal";
import "../style.css";

function Index() {
  const { todos, updateTodo } = useContext(TodoContext);

  const handleCheckboxChange = async (todo) => {
    const updatedTodo = await updateBoxToggle({
      ...todo,
      isComplete: !todo.isComplete,
    });
    updateTodo(updatedTodo);
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <nav>
        <button onClick={handleOpenAddModal}>Add</button>

        {isAddModalOpen && (
          <Modal>
            <Form action="/create" method="post">
              <h2>Create a Todo</h2>
              <input type="text" name="title" placeholder="Add Todo" />
              <input type="checkbox" name="isComplete" />
              <input type="submit" value={"Create"} />
              <button onClick={handleCloseAddModal}>Close</button>
            </Form>
          </Modal>
        )}
      </nav>

      <div className="list-container">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo._id}>
              <Link to={todo._id}>
                <h1>{todo.title}</h1>
              </Link>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="isComplete"
                  checked={todo.isComplete}
                  onChange={() => handleCheckboxChange(todo)}
                />
              </div>
              {/* <button onClick={handleOpenEditModal}>Edit</button>

              {isEditModalOpen && (
                <Modal>
                  <Form action="/create" method="post">
                    <h2>Edit {todo.title}</h2>
                    <input type="text" name="title" value={todo.title} />
                    <input type="checkbox" name="isComplete" />
                    <input type="submit" value={`Edit ${todo.title}`} />
                    <button onClick={handleCloseEditModal}>Close</button>
                  </Form>
                </Modal>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Index;
