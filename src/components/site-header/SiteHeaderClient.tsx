'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './DesktopNavClient';
import { ThemeToggle } from './ThemeToggleClient';
import { Button } from '../ui/button';
import MobileNav from './MobileNavClient';
import { usePathname, useRouter } from 'next/navigation';

const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'The A-Team', href: '/about' },
  { title: 'Explore Roadmaps', href: '/roadmaps' },
  { title: 'Ping Us', href: '/contact' },
];

const SiteHeader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type ButtonClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

  const handleButtonClick = (e: ButtonClickEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('how-it-works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#how-it-works');
    }
  };

  return (
    <header className="bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Navigation */}
      <div
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled && 'fixed bg-background/65 backdrop-blur-sm shadow-md'
        )}
      >
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <span className="md:hidden lg:flex">CuriosityCove</span>
              <span className="hidden md:flex lg:hidden">CC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav mainNav={mainNav} />

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex">
              <Button
                asChild
                variant="outline"
                className="mr-2 dark:hover:text-foreground"
              >
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="dark:text-foreground">
                <Link href="/#how-it-works" onClick={handleButtonClick}>
                  Discover How
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNav mainNav={mainNav} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div>{children}</div>
    </header>
  );
};
export default SiteHeader;
