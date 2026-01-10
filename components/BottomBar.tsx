"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TradingSettingsModal } from "./TradingSettingsModal";
import { DisplaySettings } from "./DisplaySettings";

export function BottomBar({ chain = 'sol' }: { chain?: 'sol' | 'bnb' }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDisplaySettingsOpen, setIsDisplaySettingsOpen] = useState(false);

  return (
    <>
      <div className="flex overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-row justify-between w-full h-[36px] min-h-[36px] border-t border-primaryStroke px-[12px] sm:px-[24px] gap-[8px] sm:gap-[16px] items-center min-w-0">
        {/* Left section */}
        <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center">
          {/* PRESET 1 button */}
          <span className="contents">
            <button 
              onClick={() => setIsSettingsOpen(true)}
              className="text-primaryBlue bg-primaryBlue/20 flex flex-row h-[24px] px-[8px] gap-[4px] justify-start items-center rounded-[4px] hover:bg-primaryBlue/25 transition-colors duration-[150ms] ease-in-out cursor-pointer" 
              suppressHydrationWarning={true}
            >
              <i className="ri-list-settings-line text-[16px]"></i>
              <span className="text-[12px] font-semibold">PRESET 1</span>
            </button>
          </span>

        {/* Wallet selector */}
        <div className="relative flex">
          <div className="w-full">
            <span className="contents">
              <button className="group/wallets border border-primaryStroke flex flex-row h-[24px] pl-[8px] pr-[5px] gap-[6px] justify-start items-center rounded-full hover:bg-primaryStroke/60 transition-colors duration-[125ms] ease-in-out cursor-pointer" suppressHydrationWarning={true}>
                <div className="flex flex-row gap-[4px] justify-start items-center">
                  <i className="ri-wallet-line text-[14px] text-textTertiary group-hover/wallets:text-textSecondary transition-colors duration-[125ms] ease-in-out"></i>
                  <span className="text-[12px] group-hover/wallets:text-textSecondary font-medium text-textSecondary transition-colors duration-[125ms] ease-in-out">1</span>
                </div>
                <div className="flex flex-row gap-[4px] justify-start items-center">
                  <Image alt={chain === 'sol' ? "SOL" : "BNB"} loading="lazy" width={14} height={14} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                  <span className="text-[12px] font-medium text-textSecondary">0</span>
                </div>
                <i className="ri-arrow-down-s-line text-[14px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

        {/* Action buttons */}
        <div className="flex flex-row gap-[8px] justify-start items-center">
          <span className="contents">
            <button 
              onClick={() => setIsDisplaySettingsOpen(true)}
              className="-mr-[4px] min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/40 transition-colors duration-125 ease-in-out rounded-[4px]" 
              suppressHydrationWarning={true}
            >
              <i className="ri-settings-3-line text-[14px]"></i>
            </button>
          </span>

          <span className="contents">
            <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
              <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
              <i className="text-[16px] ri-wallet-3-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Wallet</span>
            </button>
          </span>

          <span className="contents">
            <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
              <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
              <i className="text-[16px] ri-twitter-x-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Twitter</span>
            </button>
          </span>

          <span className="contents">
            <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
              <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
              <i className="text-[16px] ri-compass-3-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Discover</span>
            </button>
          </span>

          <span className="contents">
            <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
              <div className="border-[1px] border-solid border-background absolute top-[-1px] right-[-3px] w-[7px] h-[7px] bg-decrease rounded-full"></div>
              <i className="text-[16px] ri-pulse-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">Pulse</span>
            </button>
          </span>

          <span className="contents">
            <button className="group relative flex flex-row gap-[4px] h-[24px] px-[4px] justify-start items-center rounded-[4px] cursor-pointer hover:border-transparent border-[1px] border-transparent hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
              <i className="text-[16px] ri-bar-chart-line text-textTertiary hover:text-textSecondary transition-colors group-hover:text-textSecondary"></i>
              <span className="text-textSecondary text-[12px] leading-[16px] font-medium text-nowrap">PnL</span>
            </button>
          </span>
        </div>

        <div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

        {/* Multi-logo button */}
        <span className="contents">
          <button type="button" className="hidden lg:flex flex-row h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out" suppressHydrationWarning={true}>
            <div className="relative">
              <div className="relative flex flex-row h-[20px] px-[4px] gap-[4px] justify-start items-center rounded-full opacity-30" style={{ background: "linear-gradient(to right, rgb(83, 211, 142) 0%, rgb(231, 140, 25) 50%, rgb(62, 154, 0) 100%)", width: "40px" }}></div>
              <div className="absolute inset-[2px] bg-background rounded-full flex gap-[0px] justify-center items-center">
                <Image alt="Pump" draggable={false} loading="eager" width={11} height={11} src="/images/pump.svg" />
                <Image alt="Bonk" draggable={false} loading="eager" width={11} height={11} src="/images/bonk.svg" />
                <Image alt="Bags" draggable={false} loading="eager" width={11} height={11} src="/images/bags.svg" />
              </div>
            </div>
          </button>
        </span>

        <div className="hidden lg:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

        {/* Price displays */}
        <div className="flex flex-1 flex-row w-full gap-[8px] justify-start items-center">
          <span className="contents">
            <button className="hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out" style={{ color: "#F7931A" }} suppressHydrationWarning={true}>
              <Image alt="BTC" draggable={false} loading="lazy" width={16} height={16} src="/images/btc-fill.svg" />
              <span className="text-[12px] font-normal">$90.5K</span>
            </button>
          </span>

          <span className="contents">
            <button className="hidden 2xl:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[2px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out" style={{ color: "#497493" }} suppressHydrationWarning={true}>
              <Image alt="ETH" draggable={false} loading="lazy" width={16} height={16} src="/images/eth-fill.svg" />
              <span className="text-[12px] font-normal">$3081</span>
            </button>
          </span>

          <span className="contents">
            <button className="hidden lg:flex flex-row flex-shrink-0 h-[24px] px-[0px] gap-[4px] justify-start items-center hover:brightness-110 transition-all duration-125 ease-in-out" style={{ color: "#14F195" }} suppressHydrationWarning={true}>
              <Image alt={chain === 'sol' ? "SOL" : "BNB"} draggable={false} loading="lazy" width={16} height={16} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
              <span className="text-[12px] font-normal">{chain === 'sol' ? '$136.04' : '$245.67'}</span>
            </button>
          </span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-row flex-shrink-0 gap-[8px] justify-end items-center">
        {/* Stats */}
        <div className="hidden 2xl:flex">
          <span className="contents">
            <button className="-mr-[8px] group flex items-center gap-[4px] h-[24px] px-2 text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textTertiary transition-colors duration-150 ease-in-out" suppressHydrationWarning={true}>
              <i className="ri-capsule-line text-textTertiary group-hover:text-textSecondary transition-colors duration-150 ease-in-out" style={{ fontSize: "14px" }}></i>
              <span className="text-textTertiary text-[12px] font-normal group-hover:text-textSecondary transition-colors duration-150 ease-in-out">$55.9K</span>
            </button>
          </span>
        </div>

        <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
          <span className="contents">
            <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
              <i className="ri-gas-station-line text-textTertiary text-[16px]"></i>
              <span className="text-textTertiary text-[12px] font-normal">0.0<sub>2</sub>87</span>
            </div>
          </span>
        </div>

        <div className="hidden 2xl:flex flex-row gap-[4px] justify-start items-center">
          <span className="contents">
            <div className="flex flex-row gap-[4px] h-[24px] min-h-[24px] justify-start items-center">
              <i className="ri-coin-line text-textTertiary text-[16px]"></i>
              <span className="text-textTertiary text-[12px] font-normal">0.0306</span>
            </div>
          </span>
        </div>

        <div className="hidden 2xl:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

        {/* Connection status */}
        <div className="flex flex-row h-[24px] xl:px-[8px] gap-[4px] justify-start items-center rounded-[4px] text-primaryGreen xl:bg-primaryGreen/20">
          <div className="flex flex-row gap-[4px] justify-start items-center">
            <div className="bg-primaryGreen/20 w-[12px] h-[12px] rounded-full flex flex-row gap-[4px] justify-center items-center">
              <div className="bg-primaryGreen w-[8px] h-[8px] rounded-full"></div>
            </div>
          </div>
          <span className="hidden xl:flex text-[12px] font-medium">Connection is stable</span>
        </div>

        {/* GLOBAL dropdown */}
        <div className="relative flex">
          <div className="w-full">
            <button className="flex items-center gap-1 px-2 h-[24px] text-[12px] font-medium rounded hover:bg-secondaryStroke/40 text-textSecondary transition-colors duration-150" suppressHydrationWarning={true}>
              <span>GLOBAL</span>
              <i className="ri-arrow-down-s-line text-[14px]"></i>
            </button>
          </div>
        </div>

        <div className="w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

        {/* UI buttons */}
        <div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
          <span className="contents">
            <button className="flex items-center justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out text-textSecondary hover:bg-secondaryStroke/40" suppressHydrationWarning={true}>
              <i className="ri-layout-top-line text-[16px]"></i>
            </button>
          </span>

          <span className="contents">
            <button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out" suppressHydrationWarning={true}>
              <i className="ri-notification-3-line text-[16px]"></i>
            </button>
          </span>

          <span className="contents">
            <button className="text-[12px] hover:bg-secondaryStroke/40 flex items-center gap-1 justify-center w-[24px] h-[24px] rounded-[4px] transition-colors duration-150 ease-in-out" suppressHydrationWarning={true}>
              <i className="ri-palette-line text-[16px]"></i>
            </button>
          </span>
        </div>

        {/* Social links */}
        <div className="text-textSecondary flex flex-row gap-[8px] justify-start items-center">
          <div className="hidden md:flex w-[1px] h-[20px] bg-primaryStroke flex-shrink-0"></div>

          <div className="hidden md:flex flex-row gap-[16px] justify-start items-center">
            <span className="contents">
              <a href="https://discord.gg/axiomtrade" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <i className="ri-discord-fill text-[16px]"></i>
              </a>
            </span>

            <span className="contents">
              <a href="https://x.com/axiomexchange" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <i className="ri-twitter-x-line text-[16px]"></i>
              </a>
            </span>
          </div>

          <a href="https://docs.axiom.trade/" target="_blank" rel="noopener noreferrer" className="hidden md:flex flex-row gap-[2px] h-[24px] px-[8px] justify-start items-center rounded-[4px] hover:bg-hoverPrimary">
            <i className="ri-article-line text-[16px]"></i>
            <span className="hidden lg:flex text-[12px] font-normal">Docs</span>
          </a>
        </div>
      </div>
    </div>

    <TradingSettingsModal 
      isOpen={isSettingsOpen} 
      onClose={() => setIsSettingsOpen(false)} 
    />
    <DisplaySettings 
      isOpen={isDisplaySettingsOpen} 
      onClose={() => setIsDisplaySettingsOpen(false)} 
    />
    </>
  );
}
