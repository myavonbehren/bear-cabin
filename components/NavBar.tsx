import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoIosClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

// Types
interface NavigationItem {
  href: string;
  label: string;
}

interface HeaderProps {
  className?: string;
}

// Constants
const navigationItems: NavigationItem[] = [
  { href: '/about', label: 'About' },
  { href: '/photos', label: 'Photos' },
  { href: '/videos', label: 'Videos' },
  { href: '/things-to-do', label: 'Things to Do' },
] ;
// Main Component
const NavBar = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActiveRoute = useCallback((href: string) => {
    return router.pathname === href;
  }, [router.pathname]);

  return (
    <>
      <header 
        className={`bg-[#001d3d] sticky top-0 z-50 ${className}`}
        role="banner"
      >
        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center justify-between px-5 py-3 mx-1"
          role="navigation"
          aria-label="Main navigation">
          <Link 
            href="/" 
            className="font-['ivypresto-display',_serif] font-thin text-2xl text-white ml-5 hover:opacity-80 transition-opacity duration-200"
            aria-label="Bear Cabin - Go to homepage">
            BEAR CABIN
          </Link>

          <div className="flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-base text-white mr-5 transition-colors duration-200 hover:text-gray-300 ${
                  isActiveRoute(item.href) 
                    ? 'text-gray-300 border-b-2 border-white' 
                    : ''
                }`}
                aria-current={isActiveRoute(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav 
          className="md:hidden flex items-center justify-between px-4 py-2"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link 
            href="/" 
            className="font-['ivypresto-display',_serif] ml-1 font-thin text-2xl text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Bear Cabin - Go to homepage"
          >
            BEAR CABIN
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:bg-white/10 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            {isMobileMenuOpen ? <IoIosClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden fixed top-[55px] left-0 right-0 z-50 bg-[#001d3d] border-t border-white/20 transform transition-transform duration-300 ease-in-out translate-y-0"
            role="menu"
            aria-hidden={false}
          >
            <div>
                {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`nav-link block text-[18px] text-white py-6 px-6 transition-colors duration-200 hover:bg-white/10 ${
                    isActiveRoute(item.href) 
                      ? 'bg-white/20 text-gray-300' 
                      : ''
                  }`}
                  role="menuitem"
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/50"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </header>

      {/* Prevent body scroll when mobile menu is open */}
      {isMobileMenuOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
};

export default NavBar;