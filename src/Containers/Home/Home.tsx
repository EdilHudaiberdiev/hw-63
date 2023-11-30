import {useEffect, useState} from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {IPost} from '../../types';
import axiosApi from '../../axiosApi';
import PostsShortItem from '../../Components/PostsShortItem/PostsShortItem';
// import dayjs from "dayjs";
import dayjs from "dayjs";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let postsArray = [];
        const response = await axiosApi.get('/posts.json');
        const posts: {[key: string]: IPost} = response.data;

        if (response.data !== null) {
          for (const [key, value] of Object.entries(posts)) {
            postsArray.push({
              id: key,
              title: value.title,
              description: value.description,
              date: dayjs(value.date).format('DD/MM/YYYY h:mm A'),
            });
          }

          setPosts(postsArray.reverse());
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData().catch(e => console.error(e));
  }, []);

  return (
    <>
      {loading ? <Spinner/> :
        <>
          {posts.length > 0 ?
            <>
              {posts.map(post => (
                <PostsShortItem post={post} key={post.id}/>
              ))}
            </>
            :
            <h4>No posts yet</h4>
          }
        </>
      }
    </>
  );
};

export default Home;