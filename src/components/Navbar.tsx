import { useState } from "react";
import { Menu, X, UserCircle } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">MU Sports</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary">Home</a>
            <a href="/about" className="text-gray-700 hover:text-primary">About</a>
            <a href="/games" className="text-gray-700 hover:text-primary">Games</a>
            <a href="/news" className="text-gray-700 hover:text-primary">News</a>
            <a href="/schedules" className="text-gray-700 hover:text-primary">Schedules</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
              <a href="/games" className="block px-3 py-2 text-gray-700 hover:text-primary">Games</a>
              <a href="/news" className="block px-3 py-2 text-gray-700 hover:text-primary">News</a>
              <a href="/schedules" className="block px-3 py-2 text-gray-700 hover:text-primary">Schedules</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
