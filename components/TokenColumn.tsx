"use client";

import Image from "next/image";
import { TokenCard, TokenData } from "./TokenCard";
import { PriceFlash } from "@/hooks/useRealtimePrices";

interface TokenColumnProps {
  title: string;
  tokens: TokenData[];
  variant: "new" | "final" | "migrated";
  count?: number;
  priceFlash?: PriceFlash;
  chain?: 'sol' | 'bnb';
}

export function TokenColumn({ title, tokens, variant, count = 0, priceFlash = {}, chain = 'sol' }: TokenColumnProps) {

  return (
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
                />
              </div>
              <Image alt={chain === 'sol' ? "SOL" : "BNB"} loading="lazy" width={14} height={14} src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
              
              <div className="border-primaryStroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10" suppressHydrationWarning={true}>
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
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
            {/* Settings button */}
            <span className="contents">
              <button type="button" className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] hover:bg-primaryStroke/30" suppressHydrationWarning={true}>
                <i className="ri-equalizer-3-line text-[16px] text-textSecondary"></i>
              </button>
            </span>
          </div>
        </div>
        </div>
      </div>
      
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
  );
}
