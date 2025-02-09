function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">MyApp</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
