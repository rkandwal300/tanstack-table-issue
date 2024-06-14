'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Toggle } from '../ui/toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ModeToggle({ sidebarOpen }: { sidebarOpen?: boolean }) {
  const { setTheme } = useTheme();
  const [darkTheme, setDarkTheme] = React.useState(false);
  React.useEffect(() => {
    if (darkTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkTheme]);
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex w-full justify-center ">
              <Toggle
                aria-label="Toggle italic"
                pressed={darkTheme}
                onPressedChange={setDarkTheme}
                className="w-full"
              >
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only ">Toggle theme</span>
              </Toggle>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{`Toggle theme`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
