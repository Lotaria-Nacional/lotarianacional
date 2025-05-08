import { useEffect, useRef, useState } from "react";
import MobileMenu from "./mobile-menu";
import Icon from "../ui/icon";

type Props = {};

export default function MobileMenuButton({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <button
      ref={menuRef}
      onClick={toggleMenu}
      className="flex flex-col w-fit items-center text-white"
    >
      <Icon name={isMenuOpen ? "close" : "menu"} className="text-[30px]" />
      <span>Menu</span>
      {isMenuOpen && <MobileMenu />}
    </button>
  );
}
