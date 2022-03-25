import React from "react";
import "../component/Modal.css";

function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-btn" onClick={props.onClose}>
          x
        </button>
        <p className="modal-message">{props.message}</p>
      </div>
    </div>
  );
}

export default Modal;
