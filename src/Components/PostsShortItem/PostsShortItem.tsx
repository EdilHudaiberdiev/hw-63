import React from 'react';
import {IPost} from '../../types';
import {NavLink} from 'react-router-dom';

interface Props {
  post: IPost
}

const PostsShortItem: React.FC<Props> = ({post}) => {
  return (
    <>
     <p>{post.date}</p>
     <p>{post.title}</p>
      <NavLink to={`/posts/${post.id}`}> Read more</NavLink>
    </>
  );
};

export default PostsShortItem;