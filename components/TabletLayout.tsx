"use client";

import { TokenCard, TokenData } from "./TokenCard";
import { PriceFlash } from "@/hooks/useRealtimePrices";
import { useState, useCallback } from "react";

interface TabletLayoutProps {
  newPairsTokens: TokenData[];
  finalStretchTokens: TokenData[];
  migratedTokens: TokenData[];
  priceFlash: PriceFlash;
  chain: 'sol' | 'bnb';
  activeTab: 'new-pairs' | 'final-stretch' | 'migrated';
  onTabChange: (tab: 'new-pairs' | 'final-stretch' | 'migrated') => void;
}

export const TabletLayout = ({ 
  newPairsTokens, 
  finalStretchTokens, 
  migratedTokens, 
  priceFlash, 
  chain,
  activeTab,
  onTabChange
}: TabletLayoutProps) => {
  const [activePreset, setActivePreset] = useState<'P1' | 'P2' | 'P3'>('P1');

  const handlePresetClick = useCallback((preset: 'P1' | 'P2' | 'P3') => {
    setActivePreset(preset);
  }, []);

  // Get current tokens based on active tab
  const currentTokens = activeTab === 'new-pairs' 
    ? newPairsTokens 
    : activeTab === 'final-stretch' 
    ? finalStretchTokens 
    : migratedTokens;

  return (
    <div className="flex-1 border-primaryStroke bg-backgroundSecondary border-[1px] flex flex-row w-full justify-start items-start rounded-[8px] sm:rounded-[4px] overflow-hidden">
      <div className="flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
        {/* Sticky header with tabs */}
        <div className="sticky top-0 z-30 w-full">
          <div className="hidden sm:flex sticky top-0 z-30 whitespace-nowrap flex-row w-full gap-[12px] min-h-[48px] justify-end items-center pr-[12px] pl-[4px] lg:pl-[12px] xl:pl-[12px] border-b-[1px] border-primaryStroke">
            {/* Tabs section */}
            <div className="flex flex-row items-center gap-[16px] flex-1">
              <div className="flex flex-row flex-1 gap-[8px] justify-start items-center">
                {/* New Pairs Tab */}
                <button 
                  onClick={() => onTabChange('new-pairs')}
                  className={`group relative text-nowrap flex flex-row px-[12px] gap-[4px] justify-start items-center group ${
                    activeTab === 'new-pairs' ? '' : 'hover:bg-primaryStroke/40'
                  } transition-colors rounded-[4px] h-[40px]`}
                  suppressHydrationWarning={true}
                >
                  {activeTab !== 'new-pairs' && (
                    <div className="absolute inset-0 rounded-[4px] z-[1] pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100 overflow-hidden">
                      <div className="absolute top-[0px] -bottom-[1px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-textTertiary/[0.05] border-[1px]"></div>
                      <div className="absolute -top-[1px] bottom-[0px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-black/[0.05] border-[1px]"></div>
                    </div>
                  )}
                  <div className={`${activeTab === 'new-pairs' ? 'border-textPrimary border-b-[2px] pt-[2px]' : ''} flex flex-row flex-1 h-[48px] gap-[4px] justify-start items-center`}>
                    <span className={`${activeTab === 'new-pairs' ? 'text-textPrimary' : 'text-textSecondary'} text-[16px] font-medium`}>
                      <span className="text-[16px] leading-[16px] font-medium">New Pairs</span>
                    </span>
                  </div>
                </button>

                {/* Final Stretch Tab */}
                <button 
                  onClick={() => onTabChange('final-stretch')}
                  className={`group relative text-nowrap flex flex-row px-[12px] gap-[4px] justify-start items-center group ${
                    activeTab === 'final-stretch' ? 'false' : 'hover:bg-primaryStroke/40'
                  } transition-colors rounded-[4px] h-[40px]`}
                  suppressHydrationWarning={true}
                >
                  {activeTab !== 'final-stretch' && (
                    <div className="absolute inset-0 rounded-[4px] z-[1] pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100 overflow-hidden">
                      <div className="absolute top-[0px] -bottom-[1px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-textTertiary/[0.05] border-[1px]"></div>
                      <div className="absolute -top-[1px] bottom-[0px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-black/[0.05] border-[1px]"></div>
                    </div>
                  )}
                  <div className={`${activeTab === 'final-stretch' ? 'border-textPrimary border-b-[2px] pt-[2px]' : ''} flex flex-row flex-1 h-[48px] gap-[4px] justify-start items-center`}>
                    <span className={`${activeTab === 'final-stretch' ? 'text-textPrimary' : 'text-textSecondary'} text-[16px] font-medium`}>
                      <span className="text-[16px] leading-[16px] font-medium">Final Stretch</span>
                    </span>
                  </div>
                </button>

                {/* Migrated Tab */}
                <button 
                  onClick={() => onTabChange('migrated')}
                  className={`group relative text-nowrap flex flex-row px-[12px] gap-[4px] justify-start items-center group ${
                    activeTab === 'migrated' ? '' : 'hover:bg-primaryStroke/40'
                  } transition-colors rounded-[4px] h-[40px]`}
                  suppressHydrationWarning={true}
                >
                  {activeTab !== 'migrated' && (
                    <div className="absolute inset-0 rounded-[4px] z-[1] pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100 overflow-hidden">
                      <div className="absolute top-[0px] -bottom-[1px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-textTertiary/[0.05] border-[1px]"></div>
                      <div className="absolute -top-[1px] bottom-[0px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-black/[0.05] border-[1px]"></div>
                    </div>
                  )}
                  <div className={`${activeTab === 'migrated' ? 'border-textPrimary border-b-[2px] pt-[2px]' : ''} flex flex-row flex-1 h-[48px] gap-[4px] justify-start items-center`}>
                    <span className={`${activeTab === 'migrated' ? 'text-textPrimary' : 'text-textSecondary'} text-[16px] font-medium`}>
                      <span className="text-[16px] leading-[16px] font-medium">Migrated</span>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Controls section */}
            <div className="flex flex-row items-center gap-[12px]">
              {/* Quick buy input - hidden on tablet, shown on desktop */}
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
                  <img alt={chain === 'sol' ? "SOL" : "BNB"} loading="lazy" width={14} height={14} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                  
                  <div className="border-primaryStroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                    <span className="contents">
                      <button 
                        type="button" 
                        className={`group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 ${
                          activePreset === 'P1' ? 'hover:bg-primaryBlueHover/10' : 'hover:bg-primaryStroke/60'
                        }`}
                        onClick={() => handlePresetClick('P1')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P1' ? 'text-primaryBlue hover:text-primaryBlueHover' : 'text-textSecondary'
                        }`}>P1</span>
                      </button>
                    </span>
                    <span className="contents">
                      <button 
                        type="button" 
                        className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60"
                        onClick={() => handlePresetClick('P2')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P2' ? 'text-primaryBlue hover:text-primaryBlueHover' : 'text-textSecondary'
                        }`}>P2</span>
                      </button>
                    </span>
                    <span className="contents">
                      <button 
                        type="button" 
                        className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60"
                        onClick={() => handlePresetClick('P3')}
                        suppressHydrationWarning={true}
                      >
                        <span className={`text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 ${
                          activePreset === 'P3' ? 'text-primaryBlue hover:text-primaryBlueHover' : 'text-textSecondary'
                        }`}>P3</span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              {/* Filter button */}
              <span className="contents">
                <button 
                  type="button" 
                  className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primaryStroke/30"
                  suppressHydrationWarning={true}
                >
                  <i className="ri-equalizer-3-line text-[16px] text-textSecondary"></i>
                  <div className="absolute -top-[2px] -right-[2px] w-[7px] h-[7px] rounded-full bg-primaryBlue border border-backgroundSecondary"></div>
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* Token list */}
        <div className="flex flex-1 w-full relative">
          <div className="absolute inset-0 overflow-y-auto">
            {currentTokens.map((token) => (
              <TokenCard 
                key={token.id} 
                token={token} 
                flashState={priceFlash[token.id]}
                chain={chain}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
