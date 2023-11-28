import {useEffect, useState} from 'react';
import {IPost} from '../../types';
import axiosApi from '../../axiosApi';
import PostsShortItem from '../../Components/PostsShortItem/PostsShortItem';

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
              date: value.date,
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

  console.log(posts);

  return (
    <>
      {posts.map(post => (
        <PostsShortItem post={post} key={post.id}/>
      ))}
    </>
  );
};

export default Home;