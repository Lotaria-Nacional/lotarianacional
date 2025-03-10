import Menu from "./menu";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MobileMenu = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    const handleClickOutsise = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsise);
    return () => document.removeEventListener("mousedown", handleClickOutsise);
  }, []);

  useEffect(() => {
    const handleClickoutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickoutside);
    return () => document.removeEventListener("mousedown", handleClickoutside);
  }, [isMenuOpen]);

  return (
    <div ref={ref} className="lg:hidden relative block">
      <button
        onClick={toggleMenu}
        className="text-white hover:bg-none text-3xl bg-transparent"
      >
        {isMenuOpen ? <MdClose /> : <HiMenu />}
      </button>

      <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
    </div>
  );
};

export default MobileMenu;
