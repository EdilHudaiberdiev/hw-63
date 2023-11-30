import {useParams} from 'react-router-dom';


const PostFullView = () => {

  const params = useParams();
  console.log(params.id)

  return (
    <div>

    </div>
  );
};

export default PostFullView;