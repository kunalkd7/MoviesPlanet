  
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      M🌐vies Planet 
    </span>
  );
};

export default Header;