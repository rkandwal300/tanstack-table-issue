'use client';
import Link from 'next/link';
import { type NavItem } from '@/lib/data/sidebarItems';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDispatch } from 'react-redux';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';

interface SideNavProps {
  items: NavItem[];
  className?: string;
  sidebarOpen: Boolean;
  setOpen?: (open: boolean) => void;
}

export function SideNav({
  items,
  setOpen,
  sidebarOpen,
  className,
}: SideNavProps) {
  const path = usePathname();
  //   const { sidebarOpen } = useSidebar();

  const [openItem, setOpenItem] = useState('');
  const [lastOpenItem, setLastOpenItem] = useState('');
  const dispatch = useDispatch();
  return (
    <ScrollArea className="flex-1">
      {items.map(item =>
        item.isChildren ? (
          <Accordion
            type="single"
            collapsible
            key={item.title}
            value={sidebarOpen ? openItem : sidebarOpen}
            onValueChange={setOpenItem}
          >
            <AccordionItem value={item.title} className="my-1 border-none">
              <AccordionTrigger
                icon={!sidebarOpen ? false : true}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: { sidebarOpen } ? 'default' : 'icon',
                  }),
                  ' #hover:bg-muted-foreground group flex justify-between px-4 py-2 text-sm duration-200 hover:bg-muted hover:no-underline',

                  item.children?.some(item => item.href === path) &&
                    'bg-muted text-foreground hover:bg-muted',
                )}
                onClick={() =>
                  sidebarOpen == false
                    ? dispatch(setSidebarOpen(!sidebarOpen))
                    : null
                }
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center justify-start">
                        {item.icon && (
                          <item.icon
                            className={cn(
                              'h-4 w-4',
                              sidebarOpen && 'mr-2',
                              item.color,
                            )}
                          />
                        )}

                        <div
                          className={cn(
                            ' text-sm',
                            !sidebarOpen && className,
                            item.color,
                          )}
                        >
                          {item.title}
                        </div>
                      </div>
                    </TooltipTrigger>
                    {sidebarOpen ? (
                      <></>
                    ) : (
                      <TooltipContent>
                        <p>{item.title}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </AccordionTrigger>

              <AccordionContent className="ml-2 p-0">
                {item.children?.map(child => (
                  <Link
                    key={child.title}
                    href={child.href}
                    onClick={() => {
                      if (setOpen) setOpen(false);

                      if (sidebarOpen == false) {
                        dispatch(setSidebarOpen(!sidebarOpen));
                      }
                    }}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        size: { sidebarOpen } ? 'sm' : 'icon',
                      }),
                      'group my-1 flex justify-start gap-x-3',
                      path === child.href && 'bg-muted hover:bg-muted',
                    )}
                  >
                    {/* Use child.icon aqui em vez de item.icon */}
                    {child.icon && (
                      <child.icon className={cn('h-4 w-4', child.color)} />
                    )}

                    <div
                      className={cn(
                        'text-sm',
                        !sidebarOpen && className,
                        child.color,
                      )}
                    >
                      {child.title}
                    </div>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <TooltipProvider key={item.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={() => {
                    if (setOpen) setOpen(false);
                  }}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      size: { sidebarOpen } ? 'default' : 'icon',
                    }),
                    '#hover:bg-muted-foreground group relative my-1 flex justify-start',
                    path === item.href &&
                      '#border-l-2 #border-primary bg-muted text-foreground hover:bg-muted',
                  )}
                >
                  {item.icon && (
                    <item.icon
                      className={cn(
                        'h-4 w-4',
                        sidebarOpen && 'mr-2',
                        item.color,
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      'text-sm',
                      path === item.href && ' bg-muted hover:bg-muted',
                      !sidebarOpen && className,
                      item.color,
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </TooltipTrigger>
              {sidebarOpen ? (
                <></>
              ) : (
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ),
      )}
    </ScrollArea>
  );
}
