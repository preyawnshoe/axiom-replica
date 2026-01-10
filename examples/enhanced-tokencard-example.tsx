"use client";

/**
 * Enhanced TokenCard with Tooltip, Popover, and Modal Integration
 * This shows how to integrate all UI components into the existing TokenCard
 */

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/Modal";
import { TokenData } from "@/components/TokenCard";

interface EnhancedTokenCardProps {
  token: TokenData;
  variant: "new" | "final" | "migrated";
}

export function EnhancedTokenCard({ token, variant }: EnhancedTokenCardProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="border-b border-primaryStroke/50 p-4 hover:bg-primaryStroke/50 transition-colors">
        <div className="flex items-center justify-between">
          {/* Token Info with Tooltip */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primaryStroke" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-textPrimary font-medium">{token.name}</h3>
                
                {/* Audit Badge with Tooltip */}
                {token.hasAudit && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <i className="ri-shield-check-line text-primaryGreen text-sm" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Security audited</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
              <p className="text-textTertiary text-sm">{token.ticker}</p>
            </div>
          </div>

          {/* Stats with Popover */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-textTertiary text-xs">MC</p>
              <p className="text-textPrimary font-medium">{token.marketCap}</p>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <button className="p-2 hover:bg-primaryStroke rounded transition-colors">
                  <i className="ri-bar-chart-line text-textSecondary" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-textPrimary">Quick Stats</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-textTertiary text-sm">Volume</span>
                      <span className="text-textPrimary font-medium">{token.volume}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textTertiary text-sm">Floor</span>
                      <span className="text-textPrimary font-medium">{token.floor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textTertiary text-sm">Holders</span>
                      <span className="text-textPrimary font-medium">{token.holders || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textTertiary text-sm">TX Count</span>
                      <span className="text-textPrimary font-medium">{token.txCount}</span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {/* Full Details Modal */}
            <Modal>
              <ModalTrigger asChild>
                <button className="px-3 py-1.5 bg-primaryBlue hover:bg-primaryBlueHover text-white text-sm rounded transition-colors">
                  Details
                </button>
              </ModalTrigger>
              <ModalContent className="max-w-2xl">
                <ModalHeader>
                  <ModalTitle>{token.name} ({token.ticker})</ModalTitle>
                  <ModalDescription>
                    Complete token information and trading data
                  </ModalDescription>
                </ModalHeader>
                
                <div className="space-y-4">
                  {/* Token Header */}
                  <div className="flex items-center gap-4 p-4 bg-backgroundSecondary rounded border border-primaryStroke">
                    <div className="w-16 h-16 rounded-full bg-primaryStroke"></div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-textPrimary">{token.name}</h3>
                      <p className="text-textSecondary">{token.ticker}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-textTertiary text-sm">Age</p>
                      <p className="text-textPrimary font-medium">{token.age}</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-backgroundSecondary rounded border border-primaryStroke">
                      <p className="text-textTertiary text-xs mb-1">Market Cap</p>
                      <p className="text-textPrimary text-lg font-bold">{token.marketCap}</p>
                    </div>
                    <div className="p-3 bg-backgroundSecondary rounded border border-primaryStroke">
                      <p className="text-textTertiary text-xs mb-1">Volume 24h</p>
                      <p className="text-textPrimary text-lg font-bold">{token.volume}</p>
                    </div>
                    <div className="p-3 bg-backgroundSecondary rounded border border-primaryStroke">
                      <p className="text-textTertiary text-xs mb-1">Floor Price</p>
                      <p className="text-textPrimary text-lg font-bold">{token.floor} SOL</p>
                    </div>
                    <div className="p-3 bg-backgroundSecondary rounded border border-primaryStroke">
                      <p className="text-textTertiary text-xs mb-1">Transactions</p>
                      <p className="text-textPrimary text-lg font-bold">{token.txCount}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {token.progress && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-textTertiary">Bonding Curve Progress</span>
                        <span className="text-textPrimary font-medium">{token.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondaryStroke rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primaryBlue transition-all duration-300"
                          style={{ width: `${token.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-4 py-2.5 bg-increase hover:bg-increaseHover rounded text-white font-medium transition-colors">
                      Buy Token
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-primaryStroke hover:bg-secondaryStroke rounded text-textPrimary font-medium transition-colors">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
