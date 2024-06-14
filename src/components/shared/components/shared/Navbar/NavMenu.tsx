'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Features,
  ResourcesBlogs,
  ResourcesCompany,
  ResourcesProcurement,
} from './Navbar';

export function NavMenu() {
  return (
    <NavigationMenu className="hidden shadow-none md:block" delayDuration={0}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href="/marketplace" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Marketplace
            </NavigationMenuLink>
          </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex items-center justify-center gap-6 p-8">
              <ul className="grid flex-1 grid-cols-3 justify-items-start gap-2">
                {Features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListCard
                      key={feature.title}
                      title={feature.title}
                      icon={feature?.icon}
                      href={feature.href}
                    >
                      {feature.description}
                    </ListCard>
                  </ListItem>
                ))}
              </ul>
              <Link
                className="flex w-[200px] select-none flex-col items-start justify-end gap-4 self-stretch rounded-md p-2 no-underline outline-none focus:shadow-md md:max-w-[300px]"
                href="/"
              >
                <Image
                  src="/navbar/commingsoon.png"
                  alt="comming soon"
                  width={'240'}
                  height={'160'}
                />
                <div className="flex w-[170px] flex-1 flex-col items-start self-stretch lg:max-w-[270px]">
                  <span className="mb-2 mt-4 text-base  font-semibold">
                    Upcoming Features!
                  </span>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Check out the all new features in pipeline.
                  </p>
                </div>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex items-start justify-center gap-6 self-stretch bg-background p-8 shadow-lg">
              <ul className="flex flex-1 flex-col items-start gap-2 ">
                <li className="flex items-center gap-3 ">
                  <span className="text-sm font-medium text-primary ">
                    Blogs & Videos
                  </span>
                  <p className="bg-[#e0fff2] px-2 text-sm font-semibold text-[#027A48]">
                    Free
                  </p>
                </li>
                {ResourcesBlogs.map((component, index) => (
                  <ListItem key={index}>
                    <ListCard
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component?.icon}
                    >
                      {component.description}
                    </ListCard>
                  </ListItem>
                ))}
              </ul>
              <ul className="flex flex-1 flex-col items-start gap-2 ">
                <li className="flex items-center gap-3 ">
                  <span className="text-sm font-medium text-primary ">
                    Resources
                  </span>
                  <p className="bg-[#e0fff2] px-2 text-sm font-semibold text-[#027A48]">
                    Free
                  </p>
                </li>
                {ResourcesProcurement.map((component, index) => (
                  <ListItem key={index} href={component.href}>
                    <ListCard
                      key={component.title}
                      title={component.title}
                      icon={component?.icon}
                      href={component.href}
                    >
                      {component.description}
                    </ListCard>
                  </ListItem>
                ))}
              </ul>
              <ul className="flex flex-1 flex-col items-start gap-2 ">
                <li className="flex items-center gap-3 ">
                  <span className="text-sm font-medium text-primary ">
                    Company
                  </span>
                </li>
                {ResourcesCompany.map((component, index) => (
                  <ListItem key={index}>
                    <ListCard
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component?.icon}
                    >
                      {component.description}
                    </ListCard>
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn('', className)} {...props}>
          {/* <div className="text-sm font-medium leading-none">{title}</div> */}
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground"> */}
          {children}
          {/* </p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const ListCard = ({ icon, title, href, children, badge }: any) => {
  return (
    <Link
      href={href || '#'}
      className="flex select-none  items-start gap-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <Image
        src={icon}
        alt={title || ''}
        width="24"
        height="24"
        className=" pt-2"
      />
      <div className="flex flex-1 flex-col items-start gap-1 ">
        <div className="flex items-center  gap-1.5 text-sm font-medium">
          {title}{' '}
          {badge && (
            <Badge className="bg-[#027A48]/10 text-xs font-semibold text-[#027A48]">{`We're hiring!`}</Badge>
          )}
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{children}</p>
      </div>
    </Link>
  );
};
// ListItem.displayName = "ListItem";
