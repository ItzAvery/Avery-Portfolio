import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function TopNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="flex items-center justify-between px-7 py-4 bg-cream sticky top-0 z-50 border-b-2 border-blue">
      <Link to="/" className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue tracking-tight hover:opacity-80 transition-opacity">
        Portfolio
      </Link>
      <ul className="flex gap-3 list-none items-center">
        <li>
          <Link
            to="/"
            className={cn(
              "flex items-center justify-center rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105",
              path === '/' ? "w-20 h-20 text-[10px] bg-yellow text-dark" : "w-[68px] h-[68px] bg-yellow text-dark"
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={cn(
              "flex items-center justify-center rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105",
              path.startsWith('/work') || path.startsWith('/project') ? "w-20 h-20 text-[10px] bg-blue text-white" : "w-[68px] h-[68px] bg-blue text-white"
            )}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={cn(
              "flex items-center justify-center rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-200 hover:scale-105",
              path === '/about' ? "w-20 h-20 text-[10px] bg-orange text-white" : "w-[68px] h-[68px] bg-orange text-white"
            )}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
