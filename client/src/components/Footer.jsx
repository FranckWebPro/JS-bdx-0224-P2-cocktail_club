import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <a href="/"><img src="./src/assets/images/logo.svg" alt="Logo Cocktail Club" /></a>
      <Link to="/contact" className="contact">Contact</Link>
      <ul>
        <li>
          <Link to="/season/spring">Spring</Link>
        </li>
        <li>
          <Link to="/season/summer">Summer</Link>
        </li>
        <li>
          <Link to="/season/autumn">Autumn</Link>
        </li>
        <li>
          <Link to="/season/winter">Winter</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
