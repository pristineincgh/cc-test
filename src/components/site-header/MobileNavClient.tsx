'use client';

import React, { FC } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggleClient';

interface MobileNavProps {
  mainNav: { title: string; href: string }[];
}

const MobileNav: FC<MobileNavProps> = ({ mainNav }) => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader className="">
            <SheetTitle className="font-heading text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CuriosityCove
            </SheetTitle>
            <SheetDescription>
              Learn programming, data science, and digital skills
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 px-6">
            {mainNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.title}
              </Link>
            ))}

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground/70">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup">Book a demo</Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
