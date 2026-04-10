import { Outlet } from 'react-router-dom';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { Footer } from './Footer';
import { StripeSection } from './StripeSection';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <StripeSection />
      <BottomNav />
      <Footer />
    </div>
  );
}
