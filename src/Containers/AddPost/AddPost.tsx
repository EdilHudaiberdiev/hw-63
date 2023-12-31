import React, {useState} from 'react';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {IPostSend} from '../../types';

const AddPost = () => {
  const Navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPostSend>({
    title: '',
    description: '',
    date: new Date()
  });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)

    try {
      await axiosApi.post('posts.json', post);
    } finally {
      setLoading(false);
      Navigation('/');
    }
  };

  return (
    <>
      {loading ? <Spinner/> :
        <form onSubmit={onFormSubmit}>
          <h2 className="text-center mb-4">Add new post</h2>
          <div className="mb-3 w-75 mx-auto">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={post.title}
              onChange={changeForm}
            />
          </div>

          <div className="mb-3 w-75 mx-auto">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              value={post.description}
              onChange={changeForm}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      }
    </>
  );
};

export default AddPost;