import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {IPostSend} from '../../types';



const EditPostPage = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const Navigation = useNavigate();
  const [post, setPost] = useState<IPostSend>({
    title: '',
    description: '',
    date: new Date()
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axiosApi.get(`/posts/${params.id}.json`);
        const post = response.data;

        if (response.data !== null) {
          setPost({
            ...post,
            title: post.title,
            description: post.description
          });
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData().catch(e => console.error(e));
    }

  }, [params.id]);


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
      await axiosApi.put(`/posts/${params.id}.json`, post);
    } finally {
      setLoading(false);
      Navigation('/');
    }
  };

  return (
    <>
      {loading ? <Spinner/>  :
        <form onSubmit={onFormSubmit}>
          <h2 className="text-center mb-4">Edit post</h2>
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
            <button type="submit" className="btn btn-primary">Edit</button>
          </div>
        </form>
      }
    </>
  );
};

export default EditPostPage;