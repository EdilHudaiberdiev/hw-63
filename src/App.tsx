import Toolbar from './Components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './Containers/AboutUs/AboutUs';
import Contacts from './Containers/Contacts/Contacts';
import EditPostPage from './Containers/EditPostPage/EditPostPage';
import FullPostPage from './Containers/FullPostPage/FullPostPage';
import Home from './Containers/Home/Home';
import AddPost from './Containers/AddPost/AddPost';

const App = () => {

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container">
        <Routes>
          <Route path="/posts" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts/add" element={<AddPost/>}/>
          <Route path="/posts/:id" element={<FullPostPage/>}/>
          <Route path="/posts/:id/edit" element={<EditPostPage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={(<h1>Not found</h1>)}/>
        </Routes>
      </main>
    </>
  );
};

export default App
