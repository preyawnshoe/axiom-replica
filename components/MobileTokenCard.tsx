'use client';

import Image from 'next/image';

interface TokenCardProps {
  name: string;
  symbol: string;
  address: string;
  marketCap: string;
  mcColor: string;
  volume: string;
  fees: string;
  transactions: number;
  buyPercent: number;
  sellPercent: number;
  image: string;
  platform: 'pump' | 'bags';
  progress: number;
  age: string;
  holders: number;
  proTraders: number;
  views: number;
  twitterHandle?: string;
  followers?: string;
  tweetLink?: string;
  communityLink?: string;
  websiteLink?: string;
  githubLink?: string;
  isPriority?: boolean;
  indicators?: {
    kol?: number;
    dev?: number | string;
    sniper?: number;
    insider?: number;
    bundle?: number;
    paid?: boolean;
  };
}

export function MobileTokenCard({
  name,
  symbol,
  address,
  marketCap,
  mcColor,
  volume,
  fees,
  transactions,
  buyPercent,
  sellPercent,
  image,
  platform,
  progress,
  age,
  holders,
  proTraders,
  views,
  twitterHandle,
  followers,
  tweetLink,
  communityLink,
  websiteLink,
  githubLink,
  isPriority = false,
  indicators,
}: TokenCardProps) {
  const shortAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : 'N/A';
  const platformColor = platform === 'pump' ? 'pump' : 'bags';

  return (
    <div className="border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center cursor-pointer relative overflow-hidden hover:bg-primaryStroke/50 group h-[142px] min-h-[142px]">
      <div className="w-full h-full flex flex-col">
        {/* Quick Actions (Hidden by default, shown on hover) */}
        <button
          type="button"
          className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] bg-backgroundTertiary border border-secondaryStroke/50"
          style={{ top: '6px', left: '6px' }}
         
        >
          <i className="ri-eye-off-line text-[14px]"></i>
        </button>
        <button
          type="button"
          className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-backgroundTertiary text-textTertiary hover:text-primaryBlueHover w-[24px] h-[24px] flex items-center justify-center rounded-[4px] border border-secondaryStroke/50"
          style={{ top: '32px', left: '6px' }}
         
        >
          <i className="icon-chefhat-off text-[12px]"></i>
        </button>

        {/* Quick Buy Button - Mobile (Always visible) */}
        <div className="absolute right-[12px] bottom-[10px] z-20 block sm:hidden">
          <button
            type="button"
            className="bg-primaryBlue hover:bg-primaryBlueHover text-[#090909] flex flex-row gap-[4px] justify-center items-center rounded-[999px] h-[24px] px-[6px] whitespace-nowrap transition-all"
           
          >
            <i className="ri-flashlight-fill text-[16px] flex items-center relative z-10"></i>
            <span className="text-[12px] font-bold relative z-10">0 SOL</span>
          </button>
        </div>

        {/* Market Stats (Top Right) */}
        <div className="absolute right-[16px] top-[16px] z-10 block">
          <div className="flex flex-col gap-[2px] items-end">
            {/* Market Cap */}
            <div className="relative">
              <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
                <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
                <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
              </div>
              <div className="relative flex flex-row gap-[8px] justify-end items-end z-20">
                <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">MC</span>
                  <span className="text-[16px] font-medium" style={{ color: mcColor }}>
                    {marketCap}
                  </span>
                </div>
              </div>
            </div>

            {/* Volume */}
            <div className="relative">
              <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
                <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
                <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
              </div>
              <div className="relative flex flex-row gap-[8px] justify-start items-start z-20">
                <div className="flex flex-row h-[18px] flex-1 gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">V</span>
                  <span className="text-[16px] font-medium text-textPrimary">{volume}</span>
                </div>
              </div>
            </div>

            {/* Fees and Transactions */}
            <div className="relative flex flex-row gap-[8px] justify-start items-start -mt-[2px]">
              <div className="absolute z-0" style={{ inset: '-2px -8px -4px -4px' }}>
                <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-[5]"></div>
                <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
              </div>
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">F</span>
                <div className="flex flex-row gap-[2px] items-center">
                  <Image alt="SOL" width={14} height={14} src="/images/sol-fill.svg" className="w-[14px] h-[14px]" {...(isPriority && { priority: true })} />
                  <span className="text-textPrimary text-[12px] font-medium">{fees}</span>
                </div>
              </div>
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">
                  TX <span className="text-textPrimary text-[11px] font-medium">{transactions}</span>
                </span>
                <div className="flex flex-row flex-1 min-w-[24px] max-w-[24px] h-[2px] bg-secondaryStroke rounded-full overflow-hidden">
                  <div className="h-[3px] bg-increase" style={{ width: `${buyPercent}%` }}></div>
                  <div className="h-[3px] bg-decrease" style={{ width: `${sellPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row w-full gap-[12px] pl-[12px] pr-[12px] pt-[12px] pb-[2px] justify-start items-center">
          {/* Token Image with Platform Badge */}
          <div className="flex flex-col items-center gap-[4px]">
            <div className="relative w-[74px] h-[74px] justify-center items-center">
              {/* Platform Badge */}
              <div className={`flex bg-${platformColor} absolute bottom-[-4px] right-[-4px] p-[1px] w-[16px] h-[16px] justify-center items-center rounded-full z-30`}>
                <div className="flex justify-center items-center bg-background absolute w-[14px] h-[14px] rounded-full z-30">
                  <Image
                    alt={platform === 'pump' ? 'Pump V1' : 'Virtual Curve'}
                    width={10}
                    height={10}
                    src={`/images/${platform}.svg`}
                    {...(isPriority && { priority: true })}
                  />
                </div>
              </div>

              {/* Token Image with Border */}
              <div className={`bg-${platformColor}/20 absolute flex p-[1px] justify-start items-center rounded-[4px] z-20`}>
                <div className="bg-backgroundSecondary flex p-[2px] justify-start items-center rounded-[3px]">
                  <div className="w-[68px] h-[68px] flex-shrink-0 group/image relative">
                    <div className="w-full h-full relative">
                    <div className="pointer-events-none border-textPrimary/10 border-[1px] absolute w-[68px] h-[68px] z-10 rounded-[1px]"></div>
                    {image ? (
                      <Image
                        alt={name}
                        width={68}
                        height={68}
                        src={image}
                        className="rounded-[1px] w-[68px] h-[68px] object-cover"
                        {...(isPriority ? { priority: true, loading: 'eager' } : { loading: 'lazy' })}
                      />
                    ) : (
                      <div className="rounded-[1px] w-[68px] h-[68px] bg-primaryStroke flex items-center justify-center">
                        <span className="text-textSecondary text-[12px] font-bold">{symbol}</span>
                      </div>
                    )}
                      <button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <i className="ri-camera-line text-white text-[24px]"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Ring */}
              <div className="absolute top-0 left-0 w-[74px] h-[74px] rounded-[4px] z-10 flex items-center justify-center">
                <svg width="78" height="78" viewBox="0 0 78 78">
                  <path
                    className={`text-${platformColor} opacity-40`}
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth="1"
                    d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
                  />
                  <path
                    className={`text-${platformColor} transition-all duration-300 ease-in-out`}
                    stroke="currentColor"
                    fill="transparent"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeDasharray="296"
                    strokeDashoffset={296 - (296 * progress) / 100}
                    d="M 76 76 L 6 76 Q 2 76 2 72 L 2 6 Q 2 2 6 2 L 72 2 Q 76 2 76 6 L 76 72 Q 76 76 76 76"
                  />
                </svg>
              </div>
            </div>

            {/* Address */}
            <span className="text-textTertiary text-[12px] font-medium text-center max-w-[74px]">
              <button type="button" className="text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] text-[12px] font-medium flex items-center gap-[4px]">
                <span>{shortAddress}</span>
              </button>
            </span>
          </div>

          {/* Token Details */}
          <div className="flex flex-col flex-1 h-full justify-between items-start pt-[0px] pb-[4px] overflow-hidden">
            {/* Token Name and Symbol */}
            <div className="flex flex-col w-full gap-[2px] justify-start items-start min-w-0">
              <div className="flex flex-row min-h-[18px] w-full gap-[4px] justify-between items-start min-w-0">
                <div className="overflow-hidden">
                  <div className="flex flex-row gap-[4px] justify-start items-center">
                    <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em] max-w-[120px]">
                      {symbol}
                    </div>
                    <div className="min-w-0 flex-1 overflow-hidden">
                      <span className="flex flex-row gap-[4px] justify-start items-center text-textTertiary hover:text-primaryBlueHover transition-colors duration-[125ms] min-w-0 overflow-hidden cursor-pointer">
                        <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-inherit text-[16px] font-medium tracking-[-0.02em] max-w-[48px]">
                          {name}
                        </div>
                        <i className="text-inherit ri-file-copy-line text-[14px]"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Age and Social Links */}
              <div className="flex flex-col w-full gap-[2px]">
                <div className="flex flex-row w-full h-[18px] gap-[12px] justify-start items-center">
                  <div className="flex items-center gap-[8px]">
                    <span className="text-primaryGreen text-[14px] font-medium">{age}</span>
                  </div>
                  <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&_i]:text-[16px]">
                    {tweetLink && (
                      <a href={tweetLink} target="_blank" rel="noopener noreferrer">
                        <i className="ri-quill-pen-line text-primaryGreen hover:text-primaryBlueHover transition-colors text-[16px]"></i>
                      </a>
                    )}
                    {communityLink && (
                      <a href={communityLink} target="_blank" rel="noopener noreferrer">
                        <i className="ri-group-3-line text-[#5DBCFF] hover:text-[#70c4ff] transition-colors text-[16px]"></i>
                      </a>
                    )}
                    {websiteLink && (
                      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                        <i className="ri-global-line text-textSecondary hover:text-primaryBlueHover transition-colors text-[16px]"></i>
                      </a>
                    )}
                    {githubLink && (
                      <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="text-textSecondary hover:text-primaryBlueHover transition-colors text-[16px] ri-github-line"></i>
                      </a>
                    )}
                    <a href={`https://x.com/search?q=${address}`} target="_blank" rel="noopener noreferrer">
                      <i className="ri-search-line text-textSecondary hover:text-primaryBlueHover transition-colors text-[16px]"></i>
                    </a>
                  </div>

                  {/* Stats - Hidden on sm, shown on larger */}
                  <div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex">
                    <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
                      <i className="text-textTertiary ri-group-line text-[16px]"></i>
                      <span className="text-[12px] font-medium text-textPrimary">{holders}</span>
                    </div>
                    <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center">
                      <i className="icon-pro-trader text-textTertiary text-[14px]"></i>
                      <span className="text-textPrimary text-[12px] font-medium">{proTraders}</span>
                    </div>
                    <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                      <i className="ri-eye-line text-[16px]"></i>
                      <span className="text-[11px] font-medium">{views}</span>
                    </div>
                  </div>
                </div>

                {/* Twitter Handle */}
                {twitterHandle && (
                  <div className="flex flex-row gap-[8px] items-center text-[11px] mt-[1px]">
                    <a
                      href={`https://x.com/${twitterHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5DBCFF] font-medium hover:underline hover:text-[#70c4ff] transition-colors"
                    >
                      {twitterHandle.startsWith('by @') ? twitterHandle : `by @${twitterHandle}`}
                    </a>
                    {followers && (
                      <span className="text-[#5DBCFF] font-medium flex items-center gap-[2px] cursor-default">
                        <i className="ri-user-line text-[12px]"></i>
                        <span>{followers}</span>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Stats - Mobile only */}
              <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row flex-1 h-[18px] gap-[8px] justify-start items-center pt-[3px]">
                <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
                  <i className="text-textTertiary ri-group-line text-[16px]"></i>
                  <span className="text-[12px] font-medium text-textPrimary">{holders}</span>
                </div>
                <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center">
                  <i className="icon-pro-trader text-textTertiary text-[14px]"></i>
                  <span className="text-textPrimary text-[12px] font-medium">{proTraders}</span>
                </div>
                <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                  <i className="ri-eye-line text-[16px]"></i>
                  <span className="text-[11px] font-medium">{views}</span>
                </div>
              </div>

              {/* Indicators */}
              {indicators && (
                <div className="flex sm:hidden md:flex lg:flex xl:hidden flex-row w-full h-[24px] gap-[4px] px-[12px] justify-start items-end">
                  {indicators.kol !== undefined && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className={`ri-user-star-line text-[14px] ${indicators.kol < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}></i>
                      <span className={`text-[12px] font-medium ${indicators.kol < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}>
                        {Math.abs(indicators.kol)}%
                      </span>
                    </div>
                  )}
                  {indicators.dev !== undefined && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className={`icon-chef-hat text-[12px] ${indicators.dev === 'DS' ? 'text-primaryBlue' : typeof indicators.dev === 'number' && indicators.dev < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}></i>
                      <span className={`text-[12px] font-medium ${indicators.dev === 'DS' ? 'text-primaryBlue' : typeof indicators.dev === 'number' && indicators.dev < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}>
                        {indicators.dev === 'DS' ? 'DS' : `${Math.abs(indicators.dev as number)}%`}
                      </span>
                    </div>
                  )}
                  {indicators.sniper !== undefined && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className={`ri-crosshair-2-line text-[14px] ${indicators.sniper < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}></i>
                      <span className={`text-[12px] font-medium ${indicators.sniper < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}>
                        {Math.abs(indicators.sniper)}%
                      </span>
                    </div>
                  )}
                  {indicators.insider !== undefined && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className={`ri-ghost-line text-[14px] ${indicators.insider < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}></i>
                      <span className={`text-[12px] font-medium ${indicators.insider < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}>
                        {Math.abs(indicators.insider)}%
                      </span>
                    </div>
                  )}
                  {indicators.bundle !== undefined && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className={`icon-boxes text-[12px] ${indicators.bundle < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}></i>
                      <span className={`text-[12px] font-medium ${indicators.bundle < 0 ? 'text-primaryRed' : 'text-primaryGreen'}`}>
                        {Math.abs(indicators.bundle)}%
                      </span>
                    </div>
                  )}
                  {indicators.paid && (
                    <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                      <i className="icon-dex-paid text-[12px] text-increase"></i>
                      <span className="text-primaryGreen text-[12px] font-medium">Paid</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
