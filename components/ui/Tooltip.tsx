"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    variant?: "default" | "simple";
  }
>(({ className = "", sideOffset = 4, children, variant = "default", ...props }, ref) => {
  if (variant === "simple") {
    return (
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className="fixed translate-x-[-50%] z-[99999] pointer-events-none"
        {...props}
      >
        <div className="relative" style={{ width: 'auto', maxWidth: '200px', minWidth: 'auto', opacity: 1, transform: 'none' }}>
          <div className="bg-backgroundTertiary border-borderSubtle border rounded-[4px] py-[4px] text-xs text-textSecondary shadow-lg text-center font-normal text-[11px] leading-[16px] overflow-y-auto" style={{ maxHeight: '300px', paddingLeft: '8px', paddingRight: '8px' }}>
            {children}
          </div>
        </div>
      </TooltipPrimitive.Content>
    );
  }

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={`z-50 overflow-hidden rounded-[4px] bg-backgroundSecondary border border-primaryStroke px-3 py-1.5 text-sm text-textPrimary shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-primaryStroke" />
    </TooltipPrimitive.Content>
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
