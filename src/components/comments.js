import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./comments.css";

const CommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://allin1app-backend.onrender.com/api/comments');
      setComments(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting comment:', { name, comment });
    try {
      await axios.post('https://allin1app-backend.onrender.com/api/comments', { name, comment });
      alert('Comment submitted successfully');
      setName('');
      setComment('');
      fetchComments();
    } catch (err) {
      console.error(err);
      alert('Error submitting comment');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://allin1app-backend.onrender.com/api/comments/${id}`);
      alert('Comment deleted successfully');
      fetchComments();
    } catch (err) {
      console.error(err);
      alert('Error deleting comment');
    }
  };

  return (
    <div className='comment-section'>
      <h2>Feel free to leave a comment</h2>
      <form className="comment-form"onSubmit={handleSubmit}>
        <label>
          Name:
          <input className='name-input'
            type="text"
            placeholder='enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Comment: <br/>
          <textarea
            className='comment-input'
            placeholder='drop comment here :)'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button className="submit-btn"type="submit">Submit</button>
      </form>
      <div>
        <ul className=''>
          {comments.map((comment) => (
            <li key={comment._id}>
              <strong>{comment.name}: </strong>
              {comment.comment}
              <button className="delete-comment-btn"onClick={() => handleDelete(comment._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentForm;
