'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { FiMoreHorizontal, FiShoppingBag, FiTrendingUp } from 'react-icons/fi';
import { AiOutlineShop } from 'react-icons/ai';
import CreateNew from './CreateNew';
import { RiMessage3Line, RiMoreLine } from '@remixicon/react';
import { setSidebarOpen } from '@/redux/features/SideBarSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function BottomBar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector(
    (state: RootState) => state.sidebar.sidebarOpen,
  );

  return (
    <section
      className={`${/* fixed bottom-0 z-90 */ ''}  sticky bottom-0 z-10 flex w-full items-center justify-between rounded-t-3xl border-t bg-background py-1 backdrop-blur-lg md:hidden`}
    >
      <Link href="/sales" className="flex-1">
        <Button
          variant={`${pathname === '/sales' ? 'link' : 'ghost'}`}
          size="lg"
          className="h-fit w-full flex-col gap-y-1 p-2 font-normal hover:bg-inherit hover:text-primary"
        >
          <FiTrendingUp className="h-4 w-4" />
          <p className="text-xs">Leads</p>
        </Button>
      </Link>
      <Link href="/marketplace" className="flex-1">
        <Button
          variant={`${pathname === '/marketplace' ? 'link' : 'ghost'}`}
          size="lg"
          className="h-fit w-full flex-col gap-y-1 p-2 font-normal hover:bg-inherit hover:text-primary"
        >
          <AiOutlineShop className="h-4 w-4" />
          <p className="text-xs">Market</p>
        </Button>
      </Link>
      <Link href="/purchase" className="flex-1">
        <Button
          variant={`${pathname === '/purchase' ? 'link' : 'ghost'}`}
          size="lg"
          className="h-fit w-full flex-col gap-y-1 p-2 font-normal hover:bg-inherit hover:text-primary"
        >
          <FiShoppingBag className="h-4 w-4" />
          <p className="text-xs">Purchase</p>
        </Button>
      </Link>

      <Link href="/chat" className="flex-1">
        <Button
          variant={`${pathname === '/chat' ? 'link' : 'ghost'}`}
          size="lg"
          className="h-fit w-full flex-col gap-y-1 p-2 font-normal hover:bg-inherit hover:text-primary"
        >
          <RiMessage3Line className="h-4 w-4" />
          <p className="text-xs">Chat</p>
        </Button>
      </Link>
      <CreateNew className="flex-1" sidebarOpen={true} classNameMobile={true} />

      <Button
        variant={`${pathname === '/sales' ? 'link' : 'ghost'}`}
        size="lg"
        className="gap flex-1 flex-col px-2 font-normal"
        onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
      >
        <RiMoreLine size={16} />
        <p className="text-xs">More</p>
      </Button>
    </section>
  );
}
