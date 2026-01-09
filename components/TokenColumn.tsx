"use client";

import Image from "next/image";
import { TokenCard, TokenData } from "./TokenCard";

interface TokenColumnProps {
  title: string;
  tokens: TokenData[];
  variant: "new" | "final" | "migrated";
  count?: number;
}

export function TokenColumn({ title, tokens, variant, count = 0 }: TokenColumnProps) {
  return (
    <div className="border-r-[1px] border-primaryStroke flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
      {/* Column header */}
      <div className="sticky top-0 z-30 w-full">
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
              <Image alt="SOL" loading="lazy" width={14} height={14} src="/images/sol-fill.svg" />
              
              <div className="border-primaryStroke border-l-[1px] flex h-full pr-[2px] pl-[2px] gap-[3px] justify-center items-center cursor-pointer">
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10">
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className="group w-[22px] h-[22px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60">
                    <span className="text-[12px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings button */}
        <span className="contents">
          <button type="button" className="flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center transition-opacity duration-150 ease-in-out cursor-pointer rounded-[8px] sm:rounded-[4px] relative hover:bg-primaryStroke/30">
            <i className="ri-equalizer-3-line text-[16px] text-textSecondary"></i>
          </button>
        </span>
        </div>
      </div>
      
      {/* Token list */}
      <div className="flex flex-1 w-full relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="flex flex-col">
            {tokens.map((token) => (
              <TokenCard key={token.id} token={token} variant={variant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
