import dayjs from 'dayjs';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {IPost} from '../../types';

const FullPostPage = () => {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const Navigation = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axiosApi.get(`/posts/${params.id}.json`);
        const post: IPost = response.data;

        if (response.data !== null) {
          setPost(post);
        }
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData().catch(e => console.error(e));
    }

  }, [params.id]);

  const deletePost = async () => {
    setLoading(true);
    try {
      await axiosApi.delete(`/posts/${params.id}.json`);
      setLoading(false);
      Navigation('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {loading ? <Spinner/> :
        <>
          {post ?
            <div>
              <div className="mb-3">
                <button className="btn btn-danger me-3" type="button" onClick={deletePost}>Delete post</button>
                <button
                  className="btn btn-warning" type="button"
                  onClick={() => Navigation(`/posts/${params.id}/edit`)}
                >Edit post</button>
              </div>
              <hr/>
              <h1>{post.title}</h1>
              <p>{dayjs(post.date).format('DD/MM/YYYY h:mm A')}</p>
              <p>{post.description}</p>
            </div>
            :
            null
          }
        </>
      }
    </>
  );
};

export default FullPostPage;