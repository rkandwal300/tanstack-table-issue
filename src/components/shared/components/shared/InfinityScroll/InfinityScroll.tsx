'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import LoadMore from '@/components/shared/InfinityScroll/LoadMore';

export default function InfinityScroll({
  currentPage,
  pageSize,
  children,
  className,
}: {
  className?: string;
  pageSize: number;
  currentPage: number;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex flex-1', className)}>
      {children}
      {currentPage < pageSize && (
        <LoadMore currentPage={currentPage} pageSize={pageSize} />
      )}
    </div>
  );
}
