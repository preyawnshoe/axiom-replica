"use client";

import Image from "next/image";
import { TokenCard, TokenData } from "./TokenCard";
import { PriceFlash } from "@/hooks/useRealtimePrices";
import { useState, memo, useCallback } from "react";
import { SettingsModal } from "./SettingsModal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";

interface TokenColumnProps {
  title: string;
  tokens: TokenData[];
  variant: "new" | "final" | "migrated";
  count?: number;
  priceFlash?: PriceFlash;
  chain?: 'sol' | 'bnb';
}

/**
 * TokenColumnComponent - Displays a vertical column of token cards
 * 
 * Performance optimizations:
 * - Memoized component prevents unnecessary re-renders
 * - Fixed height container (h-full) prevents layout shifts
 * - useCallback for event handlers to maintain referential equality
 */
const TokenColumnComponent = ({ title, tokens, variant, count = 0, priceFlash = {}, chain = 'sol' }: TokenColumnProps) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<'P1' | 'P2' | 'P3'>('P1');

  const handlePresetClick = useCallback((preset: 'P1' | 'P2' | 'P3') => {
    setActivePreset(preset);
    // Here you can add logic to apply the preset settings
  }, []);

  return (
    <TooltipProvider delayDuration={0}>
    <div className="border-r-[1px] border-primaryStroke md:border-r-[1px] flex flex-1 flex-col h-full justify-start items-center overflow-hidden last:border-r-0">
      {/* Column header */}
      <div className="sticky top-0 z-30 w-full">
        {/* Main header with title and controls */}
        <div className="hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-[12px] min-h-[48px] justify-end items-center pr-[12px] pl-[4px] lg:pl-[12px] xl:pl-[12px] border-b-[1px] border-primaryStroke">
        <div className="flex flex-row items-center gap-[16px] flex-1">
          <span className="text-textPrimary text-[16px] font-medium flex-1">{title}</span>
        </div>
        
        <div className="flex flex-row items-center gap-[12px]">
          {/* Input field with SOL and presets */}
          <div className="hidden lg:block">
            <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row h-[28px] pl-[4px] gap-[6px] justify-start items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
              <span className="flex text-[14px] text-textTertiary font-medium">
                <i className="ri-flashlight-fill"></i>
              </span>
              <div className="flex flex-1 sm:max-w-[32px] min-w-[0px]">
                <input 
                  placeholder="0.0" 
                  className="text-[12px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left" 
                  type="text" 
                  defaultValue="0"
                  suppressHydrationWarning={true}
                />
              </div>
              <Image alt={chain === 'sol' ? "SOL" : "BNB"} loading="lazy" width={14} height={14} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
              
              <div className="border-primaryStroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        type="button" 
                        className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 cursor-pointer hover:bg-primaryBlueHover/10"
                        onClick={() => handlePresetClick('P1')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P1'
                            ? 'text-primaryBlueHover'
                            : 'text-textSecondary'
                        }`}>P1</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="p-0 border-0 bg-transparent shadow-none">
                      <div className="fixed translate-x-[-50%] z-[99999] pointer-events-none" style={{ width: 'auto', height: 'auto' }}>
                        <div className="relative" style={{ width: 'auto', maxWidth: '200px', minWidth: 'auto', opacity: 1, transform: 'none' }}>
                          <div className="bg-backgroundTertiary border-borderSubtle border rounded-[4px] py-[4px] text-xs text-textSecondary shadow-lg text-center font-normal text-[11px] leading-[16px] overflow-y-auto" style={{ maxHeight: '300px', paddingLeft: '8px', paddingRight: '8px' }}>
                            <div className="flex flex-col gap-[8px] justify-start items-start pb-[2px]">
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <img alt="Slippage" loading="lazy" width="13" height="13" src="/images/slippage.svg" style={{ color: 'transparent' }} />
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">20%</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-gas-station-line text-[13px] text-primaryYellow"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-primaryYellow">0.001</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-coin-line text-[13px] text-textTertiary"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-textSecondary">0.01</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="icon-shieldline text-[13px] text-textTertiary" style={{ fontSize: '11px' }}></i>
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">Off</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        type="button" 
                        className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 cursor-pointer hover:bg-primaryStroke/60"
                        onClick={() => handlePresetClick('P2')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P2'
                            ? 'text-primaryBlueHover'
                            : 'text-textSecondary'
                        }`}>P2</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="p-0 border-0 bg-transparent shadow-none">
                      <div className="fixed translate-x-[-50%] z-[99999] pointer-events-none" style={{ width: 'auto', height: 'auto' }}>
                        <div className="relative" style={{ width: 'auto', maxWidth: '200px', minWidth: 'auto', opacity: 1, transform: 'none' }}>
                          <div className="bg-backgroundTertiary border-borderSubtle border rounded-[4px] py-[4px] text-xs text-textSecondary shadow-lg text-center font-normal text-[11px] leading-[16px] overflow-y-auto" style={{ maxHeight: '300px', paddingLeft: '8px', paddingRight: '8px' }}>
                            <div className="flex flex-col gap-[8px] justify-start items-start pb-[2px]">
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <img alt="Slippage" loading="lazy" width="13" height="13" src="/images/slippage.svg" style={{ color: 'transparent' }} />
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">20%</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-gas-station-line text-[13px] text-primaryYellow"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-primaryYellow">0.001</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-coin-line text-[13px] text-textTertiary"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-textSecondary">0.01</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-capsule-line text-[13px] text-textTertiary" style={{ fontSize: '11px' }}></i>
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">Off</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button 
                        type="button" 
                        className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 cursor-pointer hover:bg-primaryStroke/60"
                        onClick={() => handlePresetClick('P3')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P3'
                            ? 'text-primaryBlueHover'
                            : 'text-textSecondary'
                        }`}>P3</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="p-0 border-0 bg-transparent shadow-none">
                      <div className="fixed translate-x-[-50%] z-[99999] pointer-events-none" style={{ width: 'auto', height: 'auto' }}>
                        <div className="relative" style={{ width: 'auto', maxWidth: '200px', minWidth: 'auto', opacity: 1, transform: 'none' }}>
                          <div className="bg-backgroundTertiary border-borderSubtle border rounded-[4px] py-[4px] text-xs text-textSecondary shadow-lg text-center font-normal text-[11px] leading-[16px] overflow-y-auto" style={{ maxHeight: '300px', paddingLeft: '8px', paddingRight: '8px' }}>
                            <div className="flex flex-col gap-[8px] justify-start items-start pb-[2px]">
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <img alt="Slippage" loading="lazy" width="13" height="13" src="/images/slippage.svg" style={{ color: 'transparent' }} />
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">20%</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-gas-station-line text-[13px] text-primaryYellow"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-primaryYellow">0.001</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="ri-coin-line text-[13px] text-textTertiary"></i>
                                  </div>
                                  <span className="text-[12px] font-regular text-textSecondary">0.01</span>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center items-center">
                                <div className="flex flex-row gap-[6px] justify-center items-center">
                                  <div className="flex w-[13px] h-[13px] justify-center items-center">
                                    <i className="icon-shieldline text-[13px] text-textTertiary" style={{ fontSize: '11px' }}></i>
                                  </div>
                                  <span className="text-[12px] text-textSecondary font-regular">Off</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </span>
              </div>
            </div>
          </div>
        </div>

       

        {/* Settings button */}
        <button 
          type="button" 
          className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primaryStroke/30" 
          suppressHydrationWarning={true}
          onClick={() => setIsSettingsOpen(true)}
        >
          <i className="ri-equalizer-3-line text-[16px] text-textSecondary"></i>
        </button>
        </div>

        {/* Mobile header */}
        <div className="flex sm:hidden sticky top-0 z-30 flex-row w-full min-h-[40px] justify-between items-center px-[12px] border-b-[1px] border-primaryStroke">
          <span className="text-textPrimary text-[16px] font-medium">{title}</span>
          <div className="flex items-center gap-[8px]">
            {/* Mobile input field */}
            <div className="hidden xs:flex overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row h-[28px] pl-[4px] gap-[6px] justify-start items-center rounded-full">
              <span className="flex text-[14px] text-textTertiary font-medium">
                <i className="ri-flashlight-fill"></i>
              </span>
              <div className="flex flex-1 min-w-[40px]">
                <input 
                  placeholder="0.0" 
                  className="text-[12px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left" 
                  type="text" 
                  defaultValue="0"
                />
              </div>
              <Image alt={chain === 'sol' ? "SOL" : "BNB"} loading="lazy" width={14} height={14} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
            </div>
            {/* Filter button */}
            <span className="contents">
              <button type="button" className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] hover:bg-primaryStroke/30" suppressHydrationWarning={true}>
                <i className="ri-filter-line text-[16px] text-textSecondary"></i>
              </button>
            </span>
            {/* Settings button */}
            <button 
              type="button" 
              className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] hover:bg-primaryStroke/30" 
              suppressHydrationWarning={true}
              onClick={() => setIsSettingsOpen(true)}
            >
              <i className="ri-equalizer-3-line text-[16px] text-textSecondary"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Settings Modal */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      
      {/* Token list */}
      <div className="flex flex-1 w-full relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex flex-col">
            {tokens.map((token) => (
              <TokenCard 
                key={token.id} 
                token={token} 
                variant={variant}
                flashState={priceFlash[token.id] || null}
                chain={chain}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};

/**
 * Memoized TokenColumn export
 * Performance: Only re-renders when tokens array, variant, or priceFlash changes
 */
export const TokenColumn = memo(TokenColumnComponent, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.tokens === nextProps.tokens &&
    prevProps.variant === nextProps.variant &&
    prevProps.chain === nextProps.chain &&
    JSON.stringify(prevProps.priceFlash) === JSON.stringify(nextProps.priceFlash)
  );
});
