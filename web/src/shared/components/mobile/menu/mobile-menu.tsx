import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { navigationLinks } from "@/app/router/navigation";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "lucide-react";

// const MobileMenu = () => {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function toggleMenu() {
//     setIsMenuOpen((prev) => !prev);
//   }

//   useEffect(() => {
//     const handleClickOutsise = (event: MouseEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutsise);
//     return () => document.removeEventListener("mousedown", handleClickOutsise);
//   }, []);

//   useEffect(() => {
//     const handleClickoutside = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickoutside);
//     return () => document.removeEventListener("mousedown", handleClickoutside);
//   }, [isMenuOpen]);

//   return (
//     <div ref={ref} className="lg:hidden relative block">
//       <button
//         onClick={toggleMenu}
//         className="text-white hover:bg-none text-3xl bg-transparent"
//       >
//         {isMenuOpen ? <MdClose /> : <HiMenu />}
//       </button>

//       <AnimatePresence mode="wait">{isMenuOpen && <Menu />}</AnimatePresence>
//     </div>
//   );
// };

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="block lg:hidden">
        <MenuIcon size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        {navigationLinks.map((nav) =>
          nav.submenu ? (
            <DropdownMenuSub key={nav.id}>
              <DropdownMenuSubTrigger>{nav.label}</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {nav.submenu.map((sub) => (
                    <DropdownMenuItem
                      key={sub.link}
                      className="text-white"
                      onClick={() => navigate(sub.link)}
                    >
                      {sub.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem
              key={nav.id}
              className="text-white"
              onClick={() => navigate(nav.link)}
            >
              {nav.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
