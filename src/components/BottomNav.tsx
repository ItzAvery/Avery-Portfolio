import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bg-cream border-t-2 border-blue flex justify-center items-end gap-8 px-7 h-20 overflow-hidden">
      <Link
        to="/"
        className={cn(
          "rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-start justify-center pt-4 shrink-0 hover:translate-y-[35%]",
          path === '/' ? "translate-y-[40%] w-32 h-32 text-[10px] pt-[18px] bg-yellow text-dark" : "translate-y-[50%] w-[110px] h-[110px] bg-yellow text-dark"
        )}
      >
        Home
      </Link>
      <Link
        to="/work"
        className={cn(
          "rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-start justify-center pt-4 shrink-0 hover:translate-y-[35%]",
          path.startsWith('/work') || path.startsWith('/project') ? "translate-y-[40%] w-32 h-32 text-[10px] pt-[18px] bg-blue text-white" : "translate-y-[50%] w-[110px] h-[110px] bg-blue text-white"
        )}
      >
        Work
      </Link>
      <Link
        to="/about"
        className={cn(
          "rounded-full font-display text-[9px] font-bold tracking-wider uppercase transition-all duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-start justify-center pt-4 shrink-0 hover:translate-y-[35%]",
          path === '/about' ? "translate-y-[40%] w-32 h-32 text-[10px] pt-[18px] bg-orange text-white" : "translate-y-[50%] w-[110px] h-[110px] bg-orange text-white"
        )}
      >
        About
      </Link>
    </div>
  );
}
