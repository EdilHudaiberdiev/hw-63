import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to='/' className="navbar-brand">Edil's App</NavLink>
        <ul className="navbar-nav mr-auto fles-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts/add" className="nav-link">Add</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" className="nav-link">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;