"use client";

import { useState } from 'react';

interface MobileHeaderProps {
  chain?: 'sol' | 'bnb';
  onChainChange?: (chain: 'sol' | 'bnb') => void;
  activeTab?: 'new-pairs' | 'final-stretch' | 'migrated';
  onTabChange?: (tab: 'new-pairs' | 'final-stretch' | 'migrated') => void;
}

export function MobileHeader({ 
  chain = 'sol', 
  onChainChange,
  activeTab = 'final-stretch',
  onTabChange
}: MobileHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-[0px] pt-[16px] pb-[4px] overflow-hidden justify-start items-center transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
      {/* Top Section */}
      <div className="flex flex-col w-full justify-start items-center border-b pb-[16px] border-transparent">
        {/* Chain Selector & Tabs Row */}
        <div className="flex flex-row w-full h-[24px] px-[16px] gap-[8px] justify-between items-center">
          {/* Left: Chain Selector & Tabs */}
          <div className="flex flex-row items-center gap-[8px] flex-1 min-w-0">
            {/* Chain Selector */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                className={`
                  relative flex items-center justify-center
                  w-[32px] h-[32px] rounded-full
                  transition-all duration-150
                  ${chain === 'sol' ? 'bg-primaryStroke/60 scale-110' : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'}
                `}
                aria-label="Switch to Solana"
                onClick={() => onChainChange?.('sol')}
              >
                <img alt="SOL" loading="lazy" width="20" height="20" decoding="async" className="" src="/images/sol-fill.svg" />
              </button>
              <button
                type="button"
                className={`
                  relative flex items-center justify-center
                  w-[32px] h-[32px] rounded-full
                  transition-all duration-150
                  ${chain === 'bnb' ? 'bg-primaryStroke/60 scale-110' : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'}
                `}
                aria-label="Switch to BNB"
                onClick={() => onChainChange?.('bnb')}
              >
                <img 
                  alt="BNB" 
                  loading="lazy" 
                  width="20" 
                  height="20" 
                  decoding="async" 
                  className="grayscale-[0.3]" 
                  src="/images/bnb-fill.svg" 
                />
              </button>
            </div>

            {/* Tabs */}
            <div className="relative flex flex-row flex-1 min-w-0">
              <div className="flex flex-row gap-[8px] items-center overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <button
                  className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
                    rounded-full 
                    ${activeTab === 'new-pairs' 
                      ? 'bg-secondaryStroke text-textPrimary' 
                      : 'bg-background text-textTertiary'
                    } 
                    active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
                    h-[24px]`}
                  onClick={() => onTabChange?.('new-pairs')}
                >
                  <div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
                    <span className="text-[14px] font-medium">New Pairs</span>
                  </div>
                </button>
                <button
                  className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
                    rounded-full 
                    ${activeTab === 'final-stretch' 
                      ? 'bg-secondaryStroke text-textPrimary' 
                      : 'bg-background text-textTertiary'
                    } 
                    active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
                    h-[24px]`}
                  onClick={() => onTabChange?.('final-stretch')}
                >
                  <div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
                    <span className="text-[14px] font-medium">Final Stretch</span>
                  </div>
                </button>
                <button
                  className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center min-w-max 
                    rounded-full 
                    ${activeTab === 'migrated' 
                      ? 'bg-secondaryStroke text-textPrimary' 
                      : 'bg-background text-textTertiary'
                    } 
                    active:scale-[0.98] active:opacity-[0.95] transition-all duration-[65ms] ease-out
                    h-[24px]`}
                  onClick={() => onTabChange?.('migrated')}
                >
                  <div className="flex flex-row flex-1 h-[32px] gap-[4px] justify-center items-center">
                    <span className="text-[14px] font-medium">Migrated</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Settings Button */}
          <div className="flex items-center gap-[8px]">
            <button
              type="button"
              className="relative border border-primaryStroke bg-transparent text-textSecondary min-w-[36px] h-[36px] pl-[9px] pr-[6px] gap-[7px] flex justify-center items-center rounded-full active:scale-[0.96] active:bg-primaryStroke/40 transition-scale duration-[65ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex flex-row gap-[4px] items-center">
                <span className="text-[14px] font-medium">P1</span>
              </div>
              <i className={`ri-settings-3-line text-[20px] transition-all duration-[135ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]`}></i>
              <div className="absolute -top-[-2px] -right-[-1px] w-[7px] h-[7px] rounded-full bg-primaryBlue border border-primaryStroke"></div>
            </button>
          </div>
        </div>

        {/* Expandable Controls Section */}
        <div 
          className={`overflow-hidden w-full px-[16px] transition-all duration-[135ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex sm:hidden flex-col w-full gap-[16px] pt-[24px] justify-start items-start">
            {/* First Row: Display, Bookmark, Sniper Buttons */}
            <div className="flex flex-row w-full gap-[16px] justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                {/* Display Dropdown */}
                <div className="relative flex">
                  <div data-state="closed">
                    <button className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full 
                      active:bg-secondaryStroke/80 active:scale-[0.96] transition-all duration-[65ms] ease-out">
                      <div className="relative">
                        <i className="ri-list-check text-[18px] text-textPrimary"></i>
                      </div>
                      <div className="whitespace-nowrap flex flex-row gap-[4px] justify-start items-center">
                        <span className="text-[14px] font-bold text-textPrimary">Display</span>
                      </div>
                      <i className="ri-arrow-down-s-line text-[18px] text-textPrimary"></i>
                    </button>
                  </div>
                </div>

                {/* Bookmark Button */}
                <button
                  type="button"
                  className="group flex items-center justify-center w-8 h-8 bg-background active:bg-primaryStroke/60 active:scale-[0.96] transition-all duration-[65ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] relative rounded-full"
                >
                  <i className="icon-bookmark-x text-textSecondary group-active:text-textPrimary" style={{ fontSize: 20 }}></i>
                </button>

                {/* Sniper Settings Button */}
                <button
                  type="button"
                  className="group flex items-center justify-center w-8 h-8 bg-background active:bg-primaryStroke/60 active:scale-[0.96] transition-all duration-[65ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] relative rounded-full"
                >
                  <i className="ri-crosshair-2-line text-textSecondary group-active:text-textPrimary text-[20px]"></i>
                  <i className="ri-settings-3-line text-[12px] text-textSecondary group-active:text-textPrimary absolute bottom-0 right-[-3px]"></i>
                </button>
              </div>

              {/* Help & Filter Buttons */}
              <div className="flex flex-row gap-2 items-center">
                <button
                  type="button"
                  className="flex flex-row w-[24px] h-[24px] justify-center items-center"
                >
                  <i className="ri-question-line text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150 ease-in-out"></i>
                </button>
                <button
                  type="button"
                  className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full active:bg-secondaryStroke/80 active:scale-[0.96] transition-all duration-[65ms] ease-out"
                >
                  <div className="relative">
                    <i className="ri-equalizer-3-line text-[18px] text-textPrimary"></i>
                    <div className="absolute -top-[1px] -right-[4px] w-[7px] h-[7px] rounded-full bg-primaryBlue border border-primaryStroke"></div>
                  </div>
                  <div className="whitespace-nowrap flex flex-row gap-[4px] justify-start items-center">
                    <span className="text-[14px] font-bold text-textPrimary">Filter</span>
                  </div>
                  <i className="ri-arrow-down-s-line text-[18px] text-textPrimary"></i>
                </button>
              </div>
            </div>

            {/* Second Row: Wallet & Quick Buy */}
            <div className="flex flex-row w-full gap-[16px] justify-between items-center">
              <div className="flex flex-row h-full gap-[8px] items-center flex-1 justify-between">
                {/* Wallet Dropdown */}
                <div className="relative flex">
                  <div data-state="closed">
                    <button
                      type="button"
                      className="flex border border-primaryStroke group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center 
                        active:bg-primaryStroke/35 active:scale-[0.96] transition-all duration-[65ms] ease-out rounded-[8px] rounded-full"
                    >
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <i className="ri-wallet-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer"></i>
                        <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">1</span>
                      </div>
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <img alt="SOL" loading="lazy" width="16" height="16" decoding="async" src="/images/sol-fill.svg" />
                        <span className="text-[14px] text-textPrimary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                          <span>0</span>
                        </span>
                      </div>
                      <i className="ri-arrow-down-s-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer"></i>
                    </button>
                  </div>
                </div>

                {/* Quick Buy Input */}
                <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row flex-1 h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full  active:bg-primaryStroke/35 transition-all duration-[65ms] ease-out rounded-[8px]">
                  <span className="flex text-[14px] text-textTertiary font-medium">
                    <i className="ri-flashlight-fill"></i>
                  </span>
                  <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                    <input
                      placeholder="0.0"
                      className="text-[14px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left"
                      type="text"
                      defaultValue="0"
                    />
                  </div>
                  <img alt="SOL" loading="lazy" width="16" height="16" decoding="async" src="/images/sol-fill.svg" />
                  <div className="border-primaryStroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center cursor-pointer">
                    <button
                      type="button"
                      className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10"
                    >
                      <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                    </button>
                    <button
                      type="button"
                      className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60"
                    >
                      <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                    </button>
                    <button
                      type="button"
                      className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60"
                    >
                      <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
