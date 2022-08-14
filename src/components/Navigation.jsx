import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/hello">
        Hello
      </Link>
    </nav>
  );
};

export default Navigation;
