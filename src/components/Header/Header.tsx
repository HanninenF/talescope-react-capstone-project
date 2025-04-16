import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <h1>Talescope</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
