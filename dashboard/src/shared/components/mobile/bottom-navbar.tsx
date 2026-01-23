import Icon from '../ui/icon';
import MobileMenuButton from './mobile-menu-button';
import { useAuth } from '@/app/context/auth-context';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MOBILE_NAVBAR, RoleType } from '@/app/constants/links';

export default function BottomNavbar() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const ADD_RESULTS_PATH = '/resultados/adicionar';
  const isInAddResultsPage = pathname.includes(ADD_RESULTS_PATH);

  const userRole = user!.role as RoleType;
  const canAddResults = ['admin', 'studio'].includes(userRole);

  return (
    <nav className="lg:hidden flex z-[9999] items-center fixed bottom-0 w-full bg-LT-RED-200 py-4">
      <ul className="relative main w-full flex items-center justify-around">
        {MOBILE_NAVBAR[0]
          .filter((link) => link.allowedRoles.includes(userRole))
          .map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `flex flex-col gap-1 items-center w-full h-full ${isActive ? 'text-LT-YELLOW' : 'text-white'}`
                }
              >
                <Icon name={link.icon} />
                <span className="text-[14px]">{link.label}</span>
              </NavLink>
            </li>
          ))}
        <MobileMenuButton />
      </ul>

      {canAddResults && !isInAddResultsPage && (
        <Link
          to="/resultados/adicionar"
          className="absolute right-[20px] p-4 -top-[65px] cursor-pointer size-[57px] rounded-full bg-LT-RED-200 flex items-center justify-center"
        >
          <Icon name="plus" />
        </Link>
      )}
    </nav>
  );
}
