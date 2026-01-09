"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/Modal";

/**
 * Example: Tooltip Usage
 * Hover over an icon to show additional information
 */
export function TooltipExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="p-2 rounded hover:bg-primaryStroke/50">
            <i className="ri-information-line text-textSecondary" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This token has been audited by security experts</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/**
 * Example: Popover Usage  
 * Click to show detailed token statistics
 */
export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-3 py-1.5 text-sm rounded bg-primaryStroke hover:bg-secondaryStroke text-textPrimary">
          View Stats
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-textPrimary">Token Statistics</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-textTertiary">24h Volume</p>
              <p className="text-textPrimary font-medium">$125.4K</p>
            </div>
            <div>
              <p className="text-textTertiary">Holders</p>
              <p className="text-textPrimary font-medium">1,234</p>
            </div>
            <div>
              <p className="text-textTertiary">Liquidity</p>
              <p className="text-textPrimary font-medium">$45.2K</p>
            </div>
            <div>
              <p className="text-textTertiary">Transactions</p>
              <p className="text-textPrimary font-medium">892</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/**
 * Example: Modal Usage
 * Full token details dialog
 */
export function ModalExample() {
  return (
    <Modal>
      <ModalTrigger asChild>
        <button className="px-4 py-2 rounded bg-primaryBlue hover:bg-primaryBlueHover text-white font-medium">
          View Details
        </button>
      </ModalTrigger>
      <ModalContent className="max-w-2xl">
        <ModalHeader>
          <ModalTitle>Token Details</ModalTitle>
          <ModalDescription>
            Complete information about this token
          </ModalDescription>
        </ModalHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primaryStroke"></div>
            <div>
              <h3 className="text-lg font-bold text-textPrimary">Token Name</h3>
              <p className="text-textSecondary">$TICKER</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-backgroundSecondary rounded border border-primaryStroke">
              <p className="text-textTertiary text-sm">Market Cap</p>
              <p className="text-textPrimary text-lg font-bold">$3.81K</p>
            </div>
            <div className="p-4 bg-backgroundSecondary rounded border border-primaryStroke">
              <p className="text-textTertiary text-sm">Volume 24h</p>
              <p className="text-textPrimary text-lg font-bold">$125K</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 px-4 py-2 bg-increase hover:bg-increaseHover rounded text-white font-medium">
              Buy
            </button>
            <button className="flex-1 px-4 py-2 bg-decrease hover:bg-decreaseHover rounded text-white font-medium">
              Sell
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
