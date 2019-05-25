import Nav from './Nav';

const Header = (props) => {
  return(
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  );
}

export default Header;