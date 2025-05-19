import { Link } from "react-router-dom";
import "./Header.scss";
import { routes } from "../../config/routes";

export default function Header() {
  return (
    <header className="header">
      <h1>Talescope</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.favorites}>Favorites</Link>
          </li>
          <li>
            <Link to={routes.readingList}>Reading-List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
