import React from 'react';
import {IPost} from '../../types';
import {NavLink} from 'react-router-dom';

interface Props {
  post: IPost
}

const PostsShortItem: React.FC<Props> = ({post}) => {
  return (
    <div className="card mb-3 w-50">
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.date}</p>
        <NavLink className="btn btn-primary" to={`/posts/${post.id}`}>Read more</NavLink>
      </div>
    </div>
  );
};

export default PostsShortItem;