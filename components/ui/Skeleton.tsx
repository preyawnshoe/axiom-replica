/**
 * Skeleton Component
 * 
 * Performance optimization: Prevents layout shifts during loading
 * Always specify explicit dimensions matching the content it replaces
 * 
 * Usage:
 * <Skeleton className="h-16 w-full" /> - Token card skeleton
 * <Skeleton className="h-8 w-8 rounded-full" /> - Avatar skeleton
 */

import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton = React.memo(({ className = '', ...props }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-primaryStroke/50 rounded ${className}`}
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';

/**
 * TokenCardSkeleton - Exact dimensions matching TokenCard
 * Prevents layout shifts during token loading
 */
export const TokenCardSkeleton = React.memo(() => {
  return (
    <div className="border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center relative overflow-hidden h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[142px] md:min-h-[142px] lg:h-[142px] lg:min-h-[142px] xl:h-[116px] xl:min-h-[116px]">
      <div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px] justify-start items-center">
        {/* Token image skeleton */}
        <Skeleton className="w-[74px] h-[74px] rounded-full flex-shrink-0" />
        
        {/* Token info skeleton */}
        <div className="flex-1 flex flex-col gap-[8px]">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
        
        {/* Stats skeleton */}
        <div className="flex flex-col gap-[4px] items-end">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
});

TokenCardSkeleton.displayName = 'TokenCardSkeleton';
