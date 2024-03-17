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
  const [editModalTodoId, setEditModalTodoId] = useState(null);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleOpenEditModal = (todoId) => {
    setEditModalTodoId(todoId);
  };

  const handleCloseEditModal = () => {
    setEditModalTodoId(null);
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
        {todos.map((todo) => (
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
            <button onClick={() => handleOpenEditModal(todo._id)}>Edit</button>
          </div>
        ))}

        {editModalTodoId && (
          <Modal className={editModalTodoId}>
            <Form action="/create" method="post">
              <h2>Edit {todos.title}</h2>
              <input type="text" name="title" value={todos.title} />
              <input type="checkbox" name="isComplete" />
              <input type="submit" value="Save" />
              <button onClick={handleCloseEditModal}>Close</button>
            </Form>
          </Modal>
        )}
      </div>
    </div>
  );
}
export default Index;
