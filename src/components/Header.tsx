import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between">
      <h1 className="font-bold text-xl">XP Life Tracker</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pillars">Pillars</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
