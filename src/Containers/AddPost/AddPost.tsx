import React, {useState} from 'react';
import axiosApi from '../../axiosApi';
import {useNavigate} from 'react-router-dom';

interface IPostSend {
  title: string,
  description: string,
  date: Date,
}

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
      <form onSubmit={onFormSubmit}>
        <h4>Send form</h4>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={post.title}
          onChange={changeForm}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={post.description}
          onChange={changeForm}
        ></textarea>
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

export default AddPost;