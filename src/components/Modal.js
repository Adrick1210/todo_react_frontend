import  ReactDOM  from "react-dom";

function Modal({ children }) {
    const modalRoot = document.getElementById("modal-root");
    return ReactDOM.createPortal(
      <div className="modal">{children}</div>,
      modalRoot
    );
  }

  export default Modal;
