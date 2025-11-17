import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/2 backdrop-blur-sm border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="nav-link">
          <h1 className="text-2xl font-heading">Tailor's Mirror</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link to="/browse" className="nav-link">Browse</Link>
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-text"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white/5 backdrop-blur-xl border-t border-white/10">
          <Link to="/browse" className="nav-link">Browse</Link>
          <Link to="/create" className="nav-link">Create</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
      )}
    </nav>
  );
}
