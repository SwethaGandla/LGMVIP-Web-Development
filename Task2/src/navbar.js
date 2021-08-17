import "./navbar.css";

const Navbar = ({ buttonclicked }) => {
  const clicked = () => {
    buttonclicked(true);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Lets Grow More</h1>
      <button className="nav-button" onClick={clicked}>
        Get Users
      </button>
    </nav>
  );
};
export default Navbar;
