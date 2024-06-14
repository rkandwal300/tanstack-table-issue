'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import {
  Features,
  ResourcesBlogs,
  ResourcesCompany,
  ResourcesProcurement,
} from './Navbar';
import { IoMdClose } from 'react-icons/io';

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = React.useState(false);
  const [isResourceOpen, setIsResourceOpen] = React.useState(false);
  return (
    <DropdownMenu onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger asChild className="block lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="m-0 h-8 w-8 p-0 text-center text-xl font-bold focus-visible:ring-0"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-8" />
          ) : (
            <AiOutlineMenu className="w-8" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative top-3 w-screen flex-1 border-none pb-6 md:hidden">
        <div className="h-fit max-h-[calc(100vh-160px)] min-h-[calc(100vh-100px)] flex-1 overflow-y-scroll border border-destructive bg-background shadow-lg">
          <DropdownMenuGroup className="gap-1 py-2">
            {/* <Link
              href="/marketplace"
              className="flex items-center gap-4 self-stretch  text-sm font-semibold cursor-pointer"
            >
              <DropdownMenuItem className="w-full p-3">
                Marketplace
              </DropdownMenuItem>
            </Link> */}

            <Collapsible
              open={isFeatureOpen}
              onOpenChange={setIsFeatureOpen}
              className=""
            >
              <CollapsibleTrigger asChild>
                <div className=" flex w-full cursor-pointer items-center justify-between gap-4 self-stretch px-3 py-2 text-sm font-semibold">
                  <span>Features</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 p-0 hover:bg-background active:bg-background"
                  >
                    {isFeatureOpen ? (
                      <MdOutlineKeyboardArrowUp className="h-4 w-4" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle</span>
                  </Button>
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="gap-2 px-3">
                <ul className=" flex flex-col items-start gap-1 self-stretch  ">
                  {Features &&
                    Features.map((feature, index) => (
                      <ListCard
                        key={feature.title}
                        title={feature.title}
                        icon={feature?.icon}
                        href={feature.href}
                      >
                        {feature.description}
                      </ListCard>
                    ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={isResourceOpen}
              onOpenChange={setIsResourceOpen}
              className=""
            >
              <CollapsibleTrigger asChild>
                <div className=" flex w-full cursor-pointer items-center justify-between gap-4 self-stretch px-3 py-2 text-sm font-semibold">
                  <span>Resources</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 p-0 hover:bg-background active:bg-background"
                  >
                    {isResourceOpen ? (
                      <MdOutlineKeyboardArrowUp className="h-4 w-4" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle</span>
                  </Button>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="gap-2 px-3">
                <ul className="flex flex-col items-start gap-1 self-stretch">
                  {ResourcesBlogs &&
                    ResourcesBlogs.map((component) => (
                      <ListCard
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component?.icon}
                      >
                        {component.description}
                      </ListCard>
                    ))}
                  {ResourcesProcurement &&
                    ResourcesProcurement.map((component) => (
                      <ListCard
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component?.icon}
                      >
                        {component.description}
                      </ListCard>
                    ))}
                  {ResourcesCompany &&
                    ResourcesCompany.map((component) => (
                      <ListCard
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        icon={component?.icon}
                      >
                        {component.description}
                      </ListCard>
                    ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/pricing"
              className="flex cursor-pointer items-center gap-4 self-stretch text-sm font-semibold"
            >
              <DropdownMenuItem className="w-full px-3 py-4">
                Pricing
              </DropdownMenuItem>
            </Link>
            <Link
              href="/about"
              className="flex cursor-pointer items-center gap-4  self-stretch text-sm font-semibold"
              onClick={() => setIsMenuOpen(!setIsMenuOpen)}
            >
              <DropdownMenuItem className="w-full px-3 py-4">
                About us
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="flex flex-col items-start gap-8 self-stretch p-6">
            <div className="w-full gap-3">
              <DropdownMenuItem>
                <Button
                  variant={'outline'}
                  className="h-fit w-full border border-[#F75123] bg-background py-2 text-[#F75123] hover:bg-background hover:text-[#F75123] md:hidden"
                >
                  Book a Demo
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="bg-btn-Nav hover:bg-btn-Nav h-fit w-full py-2 md:hidden">
                  Start Free Trail
                </Button>
              </DropdownMenuItem>
            </div>
          </DropdownMenuGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const ListCard = ({ icon, title, children, badge, href }: any) => {
  return (
    <Link href={href} className="w-full">
      <DropdownMenuItem className="flex w-full select-none items-start gap-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <Image
          src={icon}
          alt={title || ''}
          width="24"
          height="24"
          className=" pt-2"
        />
        <div className="flex flex-1 flex-col items-start gap-1 ">
          <div className="flex items-center  gap-1.5 text-sm font-medium">
            {title}
            {badge && (
              <Badge className="bg-[#027A48]/10 text-xs font-semibold text-[#027A48]">
                {" We're hiring!"}
              </Badge>
            )}
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {children}
          </p>
        </div>
      </DropdownMenuItem>
    </Link>
  );
};
