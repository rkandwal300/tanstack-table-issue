import { RemixiconComponentType } from '@remixicon/react';
import React from 'react';
import {
  Tabs as Tab,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export type TabsProps = {
  title: React.ReactNode | string;
  value: string;
  content?: React.ReactNode;
  icon?: RemixiconComponentType;
  onClick?: () => void;
};

type TabHocProps = {
  variant?: 'primary' | 'secondary' | null | undefined;
  rightSection?: React.ReactNode;
  tabs: TabsProps[];
  tabWidth?: 'full' | 'fit' | null | undefined;
  isResponsiveTitle?: boolean;
  isResponsiveIcon?: boolean;
};

export default function Tabs({
  variant,
  tabWidth,
  isResponsiveTitle,
  isResponsiveIcon,
  rightSection,
  tabs,
}: TabHocProps) {
  return (
    <Tab defaultValue={tabs[0].value} className="flex w-full flex-1 flex-col">
      <div
        className={cn(
          '#bg-red-300 flex w-full flex-1 items-start px-4',
          variant !== 'secondary' ? 'border-b' : null,
        )}
      >
        <TabsList variant={variant} width={tabWidth} className="h-fit ">
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              variant={variant}
              width={tabWidth}
              onClick={() => {
                tab.onClick && tab.onClick();
              }}
            >
              {tab.icon ? (
                <tab.icon
                  size={16}
                  className={cn(
                    'mr-2',
                    isResponsiveIcon ? 'hidden md:block' : '',
                  )}
                />
              ) : null}
              <span
                className={cn(
                  'text-sm',
                  isResponsiveTitle ? 'hidden md:block' : '',
                )}
              >
                {tab.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {rightSection}
      </div>

      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value} className="flex flex-1">
          {tab.content}
        </TabsContent>
      ))}
    </Tab>
  );
}
