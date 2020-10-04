import React, { useState } from "react";

const CommentForm = (props) => {
  const { trackId, createComment } = props;
  const body = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("comment[body]", body.value);
    formData.append("comment[track_id]", trackId);

    createComment(formData);
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="comment-form-content">
          <div className="comment-form-wrapper">
            <img src={props.commenter.imageUrl} />
            <input
              type="text"
              className="comment-body-input"
              placeholder="Write a comment"
              {...body}
            />
          </div>
        </div>
        <button type="submit" className="comment-form-submit">
          Create Comment
        </button>
      </form>
    </div>
  );

  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.currentTarget.value);
    }

    return {
      value,
      onChange: handleChange,
    };
  }
};

export default CommentForm;
