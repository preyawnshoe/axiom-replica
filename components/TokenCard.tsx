"use client";

import { useState, memo } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/Tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from "./ui/Modal";

export interface TokenData {
  id: string;
  name: string;
  ticker: string;
  image?: string;
  imageText?: string;
  age: string;
  marketCap: string;
  volume: string;
  floor: string;
  txCount: number;
  progress: number;
  holders?: number;
  comments?: number;
  bondingCurve?: string;
  lastUpdated?: number;
  devSold?: boolean;
  devSoldPercent?: string;
  platform?: 'raydium' | 'jupiter' | 'pump' | 'bags' | string;
  stats: {
    icon?: string;
    value: string;
    color: "green" | "red" | "neutral" | "paid";
    prefix?: string;
  }[];
  badges?: {
    type: "ds" | "ld" | "time" | "social";
    value: string;
    color?: string;
  }[];
  hasAudit?: boolean;
  buyAmount?: number;
  proTraders?: number;
  views?: number;
  twitter?: string;
  followers?: number;
  tweetLink?: string;
  communityLink?: string;
  website?: string;
  github?: string;
  kolPercent?:number;
  devPercent?: string;
  sniperPercent?: number;
  insiderPercent?: number;
  bundlePercent?: number;
  paid?: boolean;
}

interface TokenCardProps {
  token: TokenData;
  variant?: "new" | "final" | "migrated";
  flashState?: 'increase' | 'decrease' | 'neutral' | null;
  chain?: 'sol' | 'bnb';
}

/**
 * TokenCard component - Memoized for performance
 * 
 * Performance optimizations:
 * - React.memo with custom comparison prevents unnecessary re-renders
 * - Only re-renders when token data or flash state actually changes
 * - Image dimensions are explicit (74x74) to prevent layout shifts
 */
const TokenCardComponent = ({ token, variant = "new", flashState = null, chain = 'sol' }: TokenCardProps) => {
  const [chefPopoverOpen, setChefPopoverOpen] = useState(false);

  // List of available images from public/images/
  const availableImages = [
    '/images/bags.svg',
    '/images/bnb-fill.svg',
    '/images/bonk-grad.svg',
    '/images/bonk.svg',
    '/images/btc-fill.svg',
    '/images/daosfun.svg',
    '/images/eth-fill.svg',
    '/images/material-symbols-candlestick-chart.svg',
    '/images/mayhem.svg',
    '/images/pump.svg',
    '/images/sol-fill.svg',
    '/images/usd1.svg',
    '/images/usdc-perps.svg',
    '/images/usdc.svg',
    '/images/virtual-curve-grad.svg',
    '/images/virtual-curve.svg',
  ];

  // Function to get deterministic random image based on token id
  const getRandomImage = (id: string) => {
    // Simple hash function for the id
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      const char = id.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    const index = Math.abs(hash) % availableImages.length;
    return availableImages[index];
  };

  // Use token.image if available, otherwise deterministic random image
  const displayImage = token.image || getRandomImage(token.id);
  
  const getVariantColor = () => {
    // Use token.id to create a consistent random color selection
    const colors = ['text-primaryGreen', 'text-primaryYellow', 'text-primaryBlue'];
    const hash = token.id.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  };

  const getBorderColor = () => {
    switch (variant) {
      case "final":
        return "bg-primaryBlue/20";
      case "migrated":
        return "bg-primaryGreen/20";
      default:
        return "bg-pump/20";
    }
  };

  const getPlatformColor = () => {
    switch (variant) {
      case "final":
        return "bg-primaryBlue";
      case "migrated":
        return "bg-primaryGreen";
      default:
        return "bg-pump";
    }
  };

  // Generate deterministic random badge values for each token
  const getBadgeValue = (badgeIndex: number) => {
    let hash = 0;
    for (let i = 0; i < token.id.length; i++) {
      const char = token.id.charCodeAt(i);
      hash = ((hash << 5) - hash) + char + badgeIndex * 17;
      hash = hash & hash;
    }
    // Generate value between -15% and +15%
    const value = (Math.abs(hash) % 31) - 15;
    return value;
  };

  const getBadgeColor = (value: number) => {
    if (value < 0) {
      return {
        color: '#FF4D4D',
        borderColor: 'rgba(255, 77, 77, 0.4)'
      };
    }
    return {
      color: '#12AF80',
      borderColor: 'rgba(18, 175, 128, 0.4)'
    };
  };

  const badge1 = getBadgeValue(0);
  const badge2 = getBadgeValue(1);
  const badge3 = getBadgeValue(2);
  const badge4 = getBadgeValue(3);
  const badge5 = getBadgeValue(4);

  const badge1Color = getBadgeColor(badge1);
  const badge2Color = getBadgeColor(badge2);
  const badge3Color = getBadgeColor(badge3);
  const badge4Color = getBadgeColor(badge4);
  const badge5Color = getBadgeColor(badge5);

  return (
    <TooltipProvider delayDuration={0}>
    <div className="border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center relative overflow-hidden hover:bg-primaryStroke/50 group h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[142px] md:min-h-[142px] lg:h-[142px] lg:min-h-[142px] xl:h-[116px] xl:min-h-[116px]">
      {/* Right side stats section */}
      <div className="absolute right-[16px] top-[16px] z-10 block">
        <div className="flex flex-col gap-[2px] items-end">
          {/* Market Cap */}
          <div className="relative">
            <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
              <div className="absolute inset-0 z-0" style={{ backgroundColor: '#101114' }}></div>
            </div>
            <div className="relative flex flex-row gap-[8px] justify-end items-end z-20">
              <span className="contents">
                <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">MC</span>
                  <span className={`text-[16px] font-medium price-transition ${getVariantColor()}`}>{token.marketCap}</span>
                </div>
              </span>
            </div>
          </div>

          {/* Volume */}
          <div className="relative">
            <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
              <div className="absolute inset-0 z-0" style={{ backgroundColor: '#101114' }}></div>
            </div>
            <div className="relative flex flex-row gap-[8px] justify-start items-start z-20">
              <span className="contents">
                <div className="flex flex-row h-[18px] flex-1 gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px] flex justify-center items-center">V</span>
                  <span className={`text-[16px] font-medium price-transition text-textPrimary`}>{token.volume}</span>
                </div>
              </span>
            </div>
          </div>

          {/* Floor and TX */}
          <div className="relative flex flex-row gap-[8px] justify-start items-start -mt-[2px]">
            <div className="absolute z-0" style={{ inset: '-2px -8px -4px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-[5]"></div>
              <div className="absolute inset-0 z-0" style={{ backgroundColor: '#101114' }}></div>
            </div>
            <span className="contents">
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">F</span>
                <div className="flex flex-row gap-[2px] items-center">
                  <img alt={chain === 'sol' ? "SOL" : "BNB"} loading="eager" width="14" height="14" className="w-[14px] h-[14px]" src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                  <span className="text-textPrimary text-[12px] font-medium">{token.floor}</span>
                </div>
              </div>
            </span>
            <span className="contents">
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">TX <span className="text-textPrimary text-[11px] font-medium">{token.txCount}</span></span>
                <div className="relative flex-1 min-w-[24px] max-w-[24px] h-[3px] bg-secondaryStroke rounded-full overflow-hidden z-20">
                  <div className="absolute left-0 top-0 h-full bg-increase z-10" style={{ width: '95%' }}></div>
                  <div className="absolute right-0 top-0 h-full bg-decrease z-10" style={{ width: '5%' }}></div>
                </div>
              </div>
            </span>
          </div>
          
          {/* Buy button */}
          <div className="relative mt-[8px] flex gap-2">
            <button
              type="button"
              className="flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] whitespace-nowrap transition-all duration-0 relative overflow-hidden group/quickBuyButton"
              style={{ paddingLeft: 6, paddingRight: 6, backgroundColor: '#6683FF' }}
             
            >
              <i className="ri-flashlight-fill text-[16px] flex items-center relative z-10 text-black"></i>
              <span className="text-[12px] font-bold relative z-10 text-black">0 {chain === 'sol' ? 'SOL' : 'BNB'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] sm:pr-[16px] pt-[12px] pb-[2px] justify-start items-center">
        {/* Token image section */}
        <div className="flex flex-col items-center gap-[4px]">
          <div className="relative w-[74px] h-[74px] justify-center items-center">
            {/* Platform badge */}
            <span className="contents">
              <div className={`flex ${getPlatformColor()} absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] justify-center items-center rounded-full z-30`}>
                <div className="flex justify-center items-center bg-background absolute w-[14px] h-[14px] rounded-full z-30">
                  <img alt="Pump V1" loading="eager" width="10" height="10" src="https://axiom.trade/images/pump.svg" style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </span>
            
            {/* Image container with border */}
            <div className={`${getBorderColor()} absolute flex p-[1px] justify-start items-center rounded-[4px] z-20`}>
              <div className="flex p-[2px] justify-start items-center rounded-[3px]" style={{ backgroundColor: '#101114' }}>
                <div className="w-[68px] h-[68px] flex-shrink-0 group/image relative">
                  <div className="w-full h-full relative">
                    <div className="pointer-events-none border-textPrimary/10 border-[1px] absolute w-[68px] h-[68px] z-10 rounded-[1px]"></div>
                    {displayImage ? (
                      <img alt={token.name} loading="eager" width="68" height="68" className="rounded-[1px] w-[68px] h-[68px] object-cover" src={displayImage} style={{ objectFit: 'cover' }} />
                    ) : (
                      <div className="w-[68px] h-[68px] rounded-[1px] flex items-center justify-center text-textSecondary text-[24px] font-semibold" style={{ backgroundColor: '#101114' }}>
                        {token.imageText || token.ticker.charAt(0)}
                      </div>
                    )}
                    <button className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center" style={{ backgroundColor: 'rgba(82, 111, 255, 0.5)' }}>
                      <i className="ri-camera-line text-white text-[24px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress SVG ring */}
            <div className="absolute top-0 left-0 w-[74px] h-[74px] rounded-[4px] z-10 flex items-center justify-center">
              <div className="inline-flex items-center justify-center">
                <svg width="78" height="78" viewBox="0 0 78 78">
                  <path className={`${variant === "final" ? "text-primaryBlue" : variant === "migrated" ? "text-primaryGreen" : "text-virtualCurve"} opacity-40`} stroke="currentColor" fill="transparent" strokeWidth="1" d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"></path>
                  <path className={`${variant === "final" ? "text-primaryBlue" : variant === "migrated" ? "text-primaryGreen" : "text-virtualCurve"} transition-all duration-300 ease-in-out`} stroke="currentColor" fill="transparent" strokeWidth="1" strokeLinecap="round" strokeDasharray="296" strokeDashoffset={296 - (296 * token.progress / 100)} d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"></path>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <span className="contents">
            <span className="text-textTertiary text-[12px] font-medium text-center max-w-[74px]">
              <button type="button" className="text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] text-[12px] font-medium text-center max-w-[74px] flex items-center gap-[4px] group/copy">
                <span>{token.id.slice(0, 4)}...{token.id.slice(-4)}</span>
              </button>
            </span>
          </span>
        </div>

        {/* Content section */}
        <div className="flex flex-col flex-1 h-full gap-[20px] justify-start items-start pt-[0px] pb-[12px] overflow-hidden">
          {/* Name and ticker row */}
          <div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
            <div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0">
              <div className="overflow-hidden">
                <div className="justify-start items-start" style={{ minWidth: '143px' }}>
                  <div className="flex flex-row gap-[4px] justify-start items-center">
                    <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em] truncate" style={{ maxWidth: 'calc(120px)' }}>
                      {token.ticker}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <span className="contents">
                        <button type="button" className="flex flex-row gap-[4px] justify-start items-center text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] min-w-0 overflow-hidden">
                          <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] sm:text-[16px] lg:text-[14px] xl:text-[16px] text-left font-medium tracking-[-0.02em] xl:truncate xl:max-w-full block">
                            {token.name}
                          </div>
                          <i className="text-inherit ri-file-copy-fill text-[14px]"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Age and icons row */}
            <div className="flex flex-row w-full h-[18px] gap-[12px] lg:gap-[8px] xl:gap-[12px] justify-start items-center">
              <div className="flex items-center gap-[8px]">
                <span className={`${getVariantColor()} text-[14px] font-medium`}>{token.age}</span>
              </div>
              <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&_i]:text-[16px]">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={`https://x.com/search?q=${token.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                      <i className="ri-twitter-x-line text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]" style={{ fontSize: '16px' }}></i>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Search on X (Twitter)</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <a href={`https://pump.fun/coin/${token.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                        <i className="text-textSecondary ri-global-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">View on Pump.fun</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-row gap-[4px] justify-start items-center">
                      <a href={`https://pump.fun/coin/${token.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                        <i className="ri-capsule-line text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]" style={{ fontSize: '16px' }}></i>
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Token Contract</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="flex items-center cursor-pointer">
                          <i className="text-textSecondary ri-search-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64">
                        <div className="space-y-3">
                          <h4 className="font-medium text-sm text-textPrimary">Quick Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-textTertiary">Volume</span>
                          <span className="text-textPrimary font-medium">{token.volume}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-textTertiary">Floor</span>
                          <span className="text-textPrimary font-medium">{token.floor} SOL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-textTertiary">Holders</span>
                          <span className="text-textPrimary font-medium">{token.holders || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-textTertiary">Transactions</span>
                          <span className="text-textPrimary font-medium">{token.txCount}</span>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Quick Stats</TooltipContent>
                </Tooltip>
              </div>
              <div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex">
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                        <i className="text-textTertiary ri-group-line text-[16px]"></i>
                        <span className="text-[12px] font-medium text-textPrimary">{token.holders || 7}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent variant="simple" side="bottom">Holders</TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                        <div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
                          <i className="ri-vip-diamond-line text-textTertiary text-[16px]" style={{ fontSize: '14px' }}></i>
                        </div>
                        <span className="text-textPrimary text-[12px] font-medium">0</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent variant="simple" side="bottom">Pro Traders</TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                        <i className="ri-trophy-line text-textTertiary text-[16px]"></i>
                        <span className="text-textPrimary text-[12px] font-medium">0</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent variant="simple" side="bottom">Top Holders</TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                        <i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
                        <span className="text-textPrimary text-[12px] font-medium">0/1</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent variant="simple" side="bottom">Paid Calls</TooltipContent>
                  </Tooltip>
                </span>
                <span className="contents">
                  <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                    <i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
                    <span className="text-[11px] sm:text-[11px] font-medium flex items-center">{token.comments || 5}</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                    <i className="text-textTertiary ri-group-line text-[16px]"></i>
                    <span className="text-[12px] font-medium text-textPrimary">{token.holders || 7}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Holders</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                    <img alt="Pro Traders" loading="eager" width="16" height="16" decoding="async" data-nimg="1" className="w-[16px] h-[16px]" src="https://axiom.trade/images/material-symbols-candlestick-chart.svg?dpl=dpl_5G4ryX3zuK1ww4wDVa4KiL6hZ3yn" style={{ color: 'transparent', objectFit: 'cover' }} />
                    <span className="text-textPrimary text-[12px] font-medium">0</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Pro Traders</TooltipContent>
              </Tooltip>
              <span className="contents">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0 cursor-pointer">
                      <i className="ri-trophy-line text-textTertiary text-[16px]"></i>
                      <span className="text-textPrimary text-[12px] font-medium">0</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Top Holders</TooltipContent>
                </Tooltip>
              </span>
              <span className="contents">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                      <i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
                      <span className="text-textPrimary text-[12px] font-medium">0/1</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Paid Calls</TooltipContent>
                </Tooltip>
              </span>
              <span className="contents">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none cursor-pointer">
                      <i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
                      <span className="text-[11px] sm:text-[11px] font-medium flex items-center">{token.comments || 5}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Views</TooltipContent>
                </Tooltip>
              </span>
            </div>
          </div>
          
          {/* Badges for tablet and desktop xl+ */}
          <div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge1Color.borderColor }}>
                  <i className="ri-user-star-line text-[14px]" style={{ color: badge1Color.color }}></i>
                  <span className="text-[12px] font-medium" style={{ color: badge1Color.color }}>{Math.abs(badge1)}%</span>
                </div>
              </TooltipTrigger>
              <TooltipContent variant="simple" side="bottom">Bubble Map</TooltipContent>
            </Tooltip>
            <Popover open={chefPopoverOpen} onOpenChange={setChefPopoverOpen}>
              <PopoverTrigger asChild>
                <div 
                  className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer hover:bg-primaryStroke/30 transition-colors" 
                  style={{ backgroundColor: '#101114', borderColor: badge2Color.borderColor }}
                  onMouseEnter={() => setChefPopoverOpen(true)}
                  onMouseLeave={() => setChefPopoverOpen(false)}
                >
                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <i className="ri-restaurant-2-fill text-[12px]" style={{ color: badge2Color.color }}></i>
                  </div>
                  <span className="text-[12px] font-medium" style={{ color: badge2Color.color }}>{Math.abs(badge2)}%</span>
                </div>
              </PopoverTrigger>
              <PopoverContent 
                className="w-[280px] p-0 z-[100] rounded-lg shadow-xl" 
                sideOffset={8}
                onMouseEnter={() => setChefPopoverOpen(true)}
                onMouseLeave={() => setChefPopoverOpen(false)}
                style={{ backgroundColor: '#101114', borderColor: 'rgb(34, 36, 45)' }}
              >
                <div className="flex flex-col w-full h-full gap-[8px] justify-start items-center p-[8px] pb-[10px]">
                  <div className="flex flex-row justify-between w-full items-center gap-[4px]">
                    <button className="group flex flex-row gap-[2px] justify-start items-center hover:bg-secondaryStroke/40 px-[4px] py-[2px] rounded-[4px] transition-all duration-150 ease-in-out flex-shrink-0">
                      <span className="text-textTertiary group-hover:text-textSecondary text-[12px] leading-[16px] font-normal transition-all duration-150">Aae8FpM1Z5bD...5KNn</span>
                      <i className="ri-file-copy-line text-[12px] text-textTertiary group-hover:text-textSecondary transition-all duration-150"></i>
                    </button>
                  </div>
                  <div className="flex flex-row w-full gap-[8px]">
                    <div className="flex-1 border border-secondaryStroke/30 pt-[6px] pb-[7px] px-[8px] flex flex-col w-full justify-start items-center rounded-[4px] gap-[4px]">
                      <div className="flex flex-row h-[18px] gap-[4px] flex-1 justify-start items-center">
                        <i className="ri-wallet-line text-[14px] text-textSecondary"></i>
                        <div className="flex flex-row items-center gap-[2px]">
                          <img alt={chain === 'sol' ? "SOL" : "BNB"} loading="eager" width="14" height="14" className="w-[14px] h-[14px]" src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                          <span className="text-[14px] leading-[16px] font-normal text-textPrimary">753.1</span>
                        </div>
                      </div>
                      <div className="flex flex-row flex-1 justify-start items-center">
                        <span className="text-textTertiary text-[12px] leading-[16px] font-normal">$102K</span>
                      </div>
                    </div>
                    <div className="flex-1 border border-secondaryStroke/30 pt-[6px] pb-[7px] px-[8px] flex flex-col w-full justify-start items-center rounded-[4px] gap-[4px]">
                      <div className="flex flex-row h-[18px] gap-[4px] flex-1 justify-start items-center">
                        <i className="ri-time-line text-[14px] text-textSecondary"></i>
                        <span className="text-[14px] leading-[16px] font-normal text-textPrimary cursor-default">2h</span>
                      </div>
                      <div className="flex flex-row flex-1 justify-start items-center">
                        <span className="text-textTertiary text-[12px] leading-[16px] font-normal">Funded</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full min-h-[1px] max-h-[1px] bg-secondaryStroke/50"></div>
                  <div className="flex flex-row justify-between w-full gap-[8px]">
                    <a href="https://solscan.io/tx/2oDc8QSQm6WivpWdBe26LxfV7xKjS5J3qp7cTpREehoqQBEzmvoGCjiUYTRTtthkRDPaZppCPTobrwceTA9XDH4W" target="_blank" rel="noopener noreferrer" className="group flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-secondaryStroke/40 cursor-pointer rounded-[4px] transition-all duration-150 ease-in-out">
                      <i className="ri-share-box-line text-[14px] text-textSecondary group-hover:text-textPrimary transition-all duration-150"></i>
                    </a>
                    <a href="https://solscan.io/account/DgKaZ4Qi7rbUTWpGEfQn9dcDALDnrMYZbDFEDDqfnNwb" target="_blank" rel="noopener noreferrer" className="bg-secondaryStroke/35 hover:bg-secondaryStroke/50 flex flex-row justify-start items-center gap-[4px] pl-[4px] pr-[6px] py-[2px] rounded-full transition-all duration-150 ease-in-out cursor-pointer">
                      <i className="ri-arrow-up-line text-[14px] text-textSecondary"></i>
                      <span className="text-textSecondary text-[12px] leading-[16px] font-medium">DgKaZ4Qi7rbU...nNwb</span>
                    </a>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge3Color.borderColor }}>
                    <i className="ri-crosshair-2-line text-[14px]" style={{ color: badge3Color.color }}></i>
                    <span className="text-[12px] font-medium" style={{ color: badge3Color.color }}>{Math.abs(badge3)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Snipers Holding</TooltipContent>
              </Tooltip>
            </span>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge4Color.borderColor }}>
                    <i className="ri-ghost-line text-[14px]" style={{ color: badge4Color.color }}></i>
                    <span className="text-[12px] font-medium" style={{ color: badge4Color.color }}>{Math.abs(badge4)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Suspicious Activity</TooltipContent>
              </Tooltip>
            </span>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge5Color.borderColor }}>
                    <div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
                      <i className="ri-stack-fill text-[12px]" style={{ color: badge5Color.color }}></i>
                    </div>
                    <span className="text-[12px] font-medium" style={{ color: badge5Color.color }}>{Math.abs(badge5)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Concentration</TooltipContent>
              </Tooltip>
            </span>
          </div>
          
          {/* Badges for tablet md-lg range (768px-1024px) */}
          <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row w-full h-[24px] gap-[4px] px-[12px] justify-start items-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge1Color.borderColor }}>
                  <i className="ri-user-star-line text-[14px]" style={{ color: badge1Color.color }}></i>
                  <span className="text-[12px] font-medium" style={{ color: badge1Color.color }}>{Math.abs(badge1)}%</span>
                </div>
              </TooltipTrigger>
              <TooltipContent variant="simple" side="bottom">Bubble Map</TooltipContent>
            </Tooltip>
            <Popover open={chefPopoverOpen} onOpenChange={setChefPopoverOpen}>
              <PopoverTrigger asChild>
                <div 
                  className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer hover:bg-primaryStroke/30 transition-colors" 
                  style={{ backgroundColor: '#101114', borderColor: badge2Color.borderColor }}
                  onMouseEnter={() => setChefPopoverOpen(true)}
                  onMouseLeave={() => setChefPopoverOpen(false)}
                >
                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <i className="ri-restaurant-2-fill text-[12px]" style={{ color: badge2Color.color }}></i>
                  </div>
                  <span className="text-[12px] font-medium" style={{ color: badge2Color.color }}>{Math.abs(badge2)}%</span>
                </div>
              </PopoverTrigger>
              <PopoverContent 
                className="w-[280px] p-0 z-[100] rounded-lg shadow-xl" 
                sideOffset={8}
                onMouseEnter={() => setChefPopoverOpen(true)}
                onMouseLeave={() => setChefPopoverOpen(false)}
                style={{ backgroundColor: '#101114', borderColor: 'rgb(34, 36, 45)' }}
              >
                <div className="flex flex-col w-full h-full gap-[8px] justify-start items-center p-[8px] pb-[10px]">
                  <div className="flex flex-row justify-between w-full items-center gap-[4px]">
                    <button className="group flex flex-row gap-[2px] justify-start items-center hover:bg-secondaryStroke/40 px-[4px] py-[2px] rounded-[4px] transition-all duration-150 ease-in-out flex-shrink-0">
                      <span className="text-textTertiary group-hover:text-textSecondary text-[12px] leading-[16px] font-normal transition-all duration-150">Aae8FpM1Z5bD...5KNn</span>
                      <i className="ri-file-copy-line text-[12px] text-textTertiary group-hover:text-textSecondary transition-all duration-150"></i>
                    </button>
                  </div>
                  <div className="flex flex-row w-full gap-[8px]">
                    <div className="flex-1 border border-secondaryStroke/30 pt-[6px] pb-[7px] px-[8px] flex flex-col w-full justify-start items-center rounded-[4px] gap-[4px]">
                      <div className="flex flex-row h-[18px] gap-[4px] flex-1 justify-start items-center">
                        <i className="ri-wallet-line text-[14px] text-textSecondary"></i>
                        <div className="flex flex-row items-center gap-[2px]">
                          <img alt={chain === 'sol' ? "SOL" : "BNB"} loading="eager" width="14" height="14" className="w-[14px] h-[14px]" src={chain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                          <span className="text-[14px] leading-[16px] font-normal text-textPrimary">753.1</span>
                        </div>
                      </div>
                      <div className="flex flex-row flex-1 justify-start items-center">
                        <span className="text-textTertiary text-[12px] leading-[16px] font-normal">$102K</span>
                      </div>
                    </div>
                    <div className="flex-1 border border-secondaryStroke/30 pt-[6px] pb-[7px] px-[8px] flex flex-col w-full justify-start items-center rounded-[4px] gap-[4px]">
                      <div className="flex flex-row h-[18px] gap-[4px] flex-1 justify-start items-center">
                        <i className="ri-time-line text-[14px] text-textSecondary"></i>
                        <span className="text-[14px] leading-[16px] font-normal text-textPrimary cursor-default">2h</span>
                      </div>
                      <div className="flex flex-row flex-1 justify-start items-center">
                        <span className="text-textTertiary text-[12px] leading-[16px] font-normal">Funded</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full min-h-[1px] max-h-[1px] bg-secondaryStroke/50"></div>
                  <div className="flex flex-row justify-between w-full gap-[8px]">
                    <a href="https://solscan.io/tx/2oDc8QSQm6WivpWdBe26LxfV7xKjS5J3qp7cTpREehoqQBEzmvoGCjiUYTRTtthkRDPaZppCPTobrwceTA9XDH4W" target="_blank" rel="noopener noreferrer" className="group flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-secondaryStroke/40 cursor-pointer rounded-[4px] transition-all duration-150 ease-in-out">
                      <i className="ri-share-box-line text-[14px] text-textSecondary group-hover:text-textPrimary transition-all duration-150"></i>
                    </a>
                    <a href="https://solscan.io/account/DgKaZ4Qi7rbUTWpGEfQn9dcDALDnrMYZbDFEDDqfnNwb" target="_blank" rel="noopener noreferrer" className="bg-secondaryStroke/35 hover:bg-secondaryStroke/50 flex flex-row justify-start items-center gap-[4px] pl-[4px] pr-[6px] py-[2px] rounded-full transition-all duration-150 ease-in-out cursor-pointer">
                      <i className="ri-arrow-up-line text-[14px] text-textSecondary"></i>
                      <span className="text-textSecondary text-[12px] leading-[16px] font-medium">DgKaZ4Qi7rbU...nNwb</span>
                    </a>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge3Color.borderColor }}>
                    <i className="ri-crosshair-2-line text-[14px]" style={{ color: badge3Color.color }}></i>
                    <span className="text-[12px] font-medium" style={{ color: badge3Color.color }}>{Math.abs(badge3)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Snipers Holding</TooltipContent>
              </Tooltip>
            </span>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge4Color.borderColor }}>
                    <i className="ri-ghost-line text-[14px]" style={{ color: badge4Color.color }}></i>
                    <span className="text-[12px] font-medium" style={{ color: badge4Color.color }}>{Math.abs(badge4)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Suspicious Activity</TooltipContent>
              </Tooltip>
            </span>
            <span className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full border-[1px] cursor-pointer" style={{ backgroundColor: '#101114', borderColor: badge5Color.borderColor }}>
                    <div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
                      <i className="ri-stack-fill text-[12px]" style={{ color: badge5Color.color }}></i>
                    </div>
                    <span className="text-[12px] font-medium" style={{ color: badge5Color.color }}>{Math.abs(badge5)}%</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent variant="simple" side="bottom">Concentration</TooltipContent>
              </Tooltip>
            </span>
            {token.paid && (
              <div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px] cursor-pointer">
                      <div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
                        <i className="text-[14px] text-increase" style={{ fontSize: '12px' }}>💰</i>
                      </div>
                      <span className="text-primaryGreen text-[12px] font-medium">Paid</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="simple" side="bottom">Paid Promotion</TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};

/**
 * Memoized TokenCard export with custom comparison function
 * Only re-renders when critical props change (token id, prices, flashState)
 */
export const TokenCard = memo(TokenCardComponent, (prevProps, nextProps) => {
  // Custom comparison for optimal performance
  return (
    prevProps.token.id === nextProps.token.id &&
    prevProps.token.marketCap === nextProps.token.marketCap &&
    prevProps.token.volume === nextProps.token.volume &&
    prevProps.token.floor === nextProps.token.floor &&
    prevProps.flashState === nextProps.flashState &&
    prevProps.variant === nextProps.variant &&
    prevProps.chain === nextProps.chain
  );
});

