import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewSlide } from "./../../store/actions/slideoActions";

function AddNewSlideModal({ addNewSlide }) {
  const [text, setText] = useState("");
  const addNewSlideHandler = () => {
    const data = {
      text: text.split(/\r?\n/),
    };

    addNewSlide(data);
    setText("");
  };
  return (
    <div
      id="addNewSlideModal"
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addNewSlideModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-center">
            <h5 className="modal-title ">Add A New Slide</h5>
          </div>

          <div className="modal-body d-flex justify-content-center">
            <form>
              <textarea
                type="text"
                className="input d-flex align-items-top"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary swal-btn"
              id="pay"
              data-dismiss="modal"
              onClick={() => addNewSlideHandler()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addNewSlide })(AddNewSlideModal);
