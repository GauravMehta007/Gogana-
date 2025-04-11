import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-[#2C5F2D] shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex space-x-4 items-center">
          <img
            src="/hill.png"
            alt="Logo"
            className="w-10 h-10 bg-transparent rounded-full"
          />
          <div className="flex ">
            <span className="font-['Playfair_Display'] font-bold text-2xl text-white">
              Gogana
            </span>
            <span className="font-['Caveat'] text-xl text-white ml-1">
              Village
            </span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8 text-white font-medium">
          <Link href="/" className="hover:text-[#CB997E] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#CB997E] transition-colors"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="hover:text-[#CB997E] transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/attractions"
            className="hover:text-[#CB997E] transition-colors"
          >
            Attractions
          </Link>
          <Link
            href="/location"
            className="hover:text-[#CB997E] transition-colors"
          >
            Location
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#CB997E] transition-colors"
          >
            Contact
          </Link>
          <Link href="/news" className="hover:text-[#CB997E] transition-colors">
            News
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="flex flex-col space-y-4 p-5">
          <Link href="/" className="hover:text-[#2C5F2D] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#2C5F2D] transition-colors"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="hover:text-[#2C5F2D] transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/attractions"
            className="hover:text-[#2C5F2D] transition-colors"
          >
            Attractions
          </Link>
          <Link
            href="/location"
            className="hover:text-[#2C5F2D] transition-colors"
          >
            Location
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#2C5F2D] transition-colors"
          >
            Contact
          </Link>
          <Link href="/news" className="hover:text-[#2C5F2D] transition-colors">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
