'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface DesktopNavProps {
  mainNav: { title: string; href: string }[];
}

const DesktopNav: FC<DesktopNavProps> = ({ mainNav }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {mainNav.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  navigationMenuTriggerStyle(),
                  'font-medium',
                  pathname === item.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
