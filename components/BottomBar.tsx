"use client";

import Image from "next/image";

export function BottomBar() {
  return (
    <div className="flex flex-row w-full h-[36px] px-[16px] lg:px-[24px] border-t border-primaryStroke items-center justify-between bg-backgroundSecondary">
      {/* Left side - Presets */}
      <div className="flex items-center gap-[8px]">
        <button className="flex items-center gap-[4px] h-[24px] px-[8px] bg-primaryStroke rounded text-[11px] text-textPrimary font-medium">
          <i className="ri-list-settings-line text-[14px]"></i>
          PRESET 1
        </button>
        
        <div className="flex items-center gap-[4px] text-textTertiary text-[11px]">
          <i className="ri-hashtag text-[12px]"></i>
          <span>1</span>
          <i className="ri-equal-line text-[12px]"></i>
          <span>0</span>
        </div>

        <div className="w-[1px] h-[16px] bg-primaryStroke"></div>

        <div className="hidden md:flex items-center gap-[12px]">
          <button className="flex items-center gap-[4px] text-[11px] text-textTertiary hover:text-textSecondary">
            <i className="ri-wallet-line text-[12px]"></i>
            Wallet
          </button>
          <button className="flex items-center gap-[4px] text-[11px] text-textTertiary hover:text-textSecondary">
            <i className="ri-twitter-x-line text-[12px]"></i>
            Twitter
          </button>
          <button className="flex items-center gap-[4px] text-[11px] text-textTertiary hover:text-textSecondary">
            <i className="ri-compass-3-line text-[12px]"></i>
            Discover
          </button>
          <button className="flex items-center gap-[4px] text-[11px] text-primaryBlue">
            <i className="ri-pulse-line text-[12px]"></i>
            Pulse
          </button>
          <button className="flex items-center gap-[4px] text-[11px] text-textTertiary hover:text-textSecondary">
            <i className="ri-bar-chart-line text-[12px]"></i>
            PnL
          </button>
        </div>
      </div>

      {/* Right side - Stats */}
      <div className="flex items-center gap-[12px]">
        <div className="hidden lg:flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px]">
            <div className="w-[8px] h-[8px] rounded-full bg-primaryOrange"></div>
            <span className="text-[11px] text-textSecondary">$90.6K</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image src="/images/sol-fill.svg" alt="SOL" width={12} height={12} />
            <span className="text-[11px] text-textSecondary">$3086</span>
          </div>
          <span className="text-[11px] text-increase">$136.2</span>
        </div>

        <div className="w-[1px] h-[16px] bg-primaryStroke"></div>

        <div className="hidden md:flex items-center gap-[8px] text-[11px] text-textTertiary">
          <span>$56K</span>
          <span>⊙ 0.025</span>
          <span>◇ 0.003</span>
        </div>

        <div className="flex items-center gap-[4px]">
          <div className="w-[6px] h-[6px] rounded-full bg-primaryGreen"></div>
          <span className="text-[11px] text-textSecondary">Connection is stable</span>
        </div>

        <button className="flex items-center gap-[4px] h-[22px] px-[8px] bg-primaryStroke rounded text-[11px] text-textPrimary">
          GLOBAL
          <i className="ri-arrow-down-s-line text-[12px]"></i>
        </button>

        <div className="flex items-center gap-[4px] text-textTertiary">
          <button className="hover:text-textSecondary"><i className="ri-refresh-line text-[14px]"></i></button>
          <button className="hover:text-textSecondary"><i className="ri-settings-3-line text-[14px]"></i></button>
        </div>

        <div className="flex items-center gap-[2px] text-textTertiary text-[11px]">
          <span>P1</span>
          <span>P2</span>
          <span>P3</span>
        </div>

        <button className="text-textTertiary hover:text-textSecondary">
          <i className="ri-equalizer-line text-[14px]"></i>
        </button>
      </div>
    </div>
  );
}
