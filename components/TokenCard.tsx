"use client";

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
  devSold?: boolean;
  devSoldPercent?: string;
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
}

interface TokenCardProps {
  token: TokenData;
  variant?: "new" | "final" | "migrated";
}

export function TokenCard({ token, variant = "new" }: TokenCardProps) {
  const getVariantColor = () => {
    switch (variant) {
      case "final":
        return "text-primaryBlue";
      case "migrated":
        return "text-primaryGreen";
      default:
        return "text-primaryYellow";
    }
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

  return (
    <div className="border-primaryStroke/50 border-b-[1px] flex flex-col w-full justify-start items-center cursor-pointer relative overflow-hidden hover:bg-primaryStroke/50 group h-[142px] min-h-[142px] sm:h-[116px] sm:min-h-[116px] md:h-[142px] md:min-h-[142px] lg:h-[142px] lg:min-h-[142px] xl:h-[116px] xl:min-h-[116px]">
      {/* Right side stats section */}
      <div className="absolute right-[16px] top-[16px] z-10 block">
        <div className="flex flex-col gap-[2px] items-end">
          {/* Market Cap */}
          <div className="relative">
            <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
              <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
            </div>
            <div className="relative flex flex-row gap-[8px] justify-end items-end z-20">
              <span className="contents">
                <div className="flex flex-row h-[18px] gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px]">MC</span>
                  <span className={`text-[16px] font-medium ${getVariantColor()}`}>{token.marketCap}</span>
                </div>
              </span>
            </div>
          </div>

          {/* Volume */}
          <div className="relative">
            <div className="absolute z-0" style={{ inset: '-12px -8px 1px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-10"></div>
              <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
            </div>
            <div className="relative flex flex-row gap-[8px] justify-start items-start z-20">
              <span className="contents">
                <div className="flex flex-row h-[18px] flex-1 gap-[4px] justify-end items-end">
                  <span className="text-textTertiary text-[12px] font-medium pb-[1.6px] flex justify-center items-center">V</span>
                  <span className="text-[16px] font-medium text-textPrimary">{token.volume}</span>
                </div>
              </span>
            </div>
          </div>

          {/* Floor and TX */}
          <div className="relative flex flex-row gap-[8px] justify-start items-start -mt-[2px]">
            <div className="absolute z-0" style={{ inset: '-2px -8px -4px -4px' }}>
              <div className="group-hover:bg-primaryStroke/50 absolute inset-0 z-[5]"></div>
              <div className="bg-backgroundSecondary absolute inset-0 z-0"></div>
            </div>
            <span className="contents">
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">F</span>
                <div className="flex flex-row gap-[2px] items-center">
                  <img alt="SOL" loading="eager" width="14" height="14" className="w-[14px] h-[14px]" src="/images/sol-fill.svg" />
                  <span className="text-textPrimary text-[12px] font-medium">{token.floor}</span>
                </div>
              </div>
            </span>
            <span className="contents">
              <div className="relative flex flex-row justify-end items-center h-[12px] gap-[4px] flex-shrink-0 group/image text-nowrap z-20">
                <span className="text-textTertiary text-[11px] font-medium">TX <span className="text-textPrimary text-[11px] font-medium">{token.txCount}</span></span>
                <div className="flex flex-row flex-1 min-w-[24px] max-w-[24px] h-[2px] bg-secondaryStroke rounded-full overflow-hidden">
                  <div className="h-[3px] bg-increase" style={{ width: '95%' }}></div>
                  <div className="h-[3px] bg-decrease" style={{ width: '5%' }}></div>
                </div>
              </div>
            </span>
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
              <div className="bg-backgroundSecondary flex p-[2px] justify-start items-center rounded-[3px]">
                <div className="w-[68px] h-[68px] flex-shrink-0 group/image relative">
                  <div className="w-full h-full relative">
                    <div className="pointer-events-none border-textPrimary/10 border-[1px] absolute w-[68px] h-[68px] z-10 rounded-[1px]"></div>
                    {token.image ? (
                      <img alt={token.name} loading="eager" width="68" height="68" className="rounded-[1px] w-[68px] h-[68px] object-cover" src={token.image} style={{ objectFit: 'cover' }} />
                    ) : (
                      <div className="w-[68px] h-[68px] rounded-[1px] flex items-center justify-center text-textSecondary text-[24px] font-semibold bg-backgroundSecondary">
                        {token.imageText || token.ticker.charAt(0)}
                      </div>
                    )}
                    <button className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 flex items-center justify-center">
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
                <div className="justify-start items-start" style={{ minWidth: '120px' }}>
                  <div className="flex flex-row gap-[4px] justify-start items-center">
                    <div className="min-w-0 whitespace-nowrap overflow-hidden truncate text-textPrimary text-[16px] font-medium tracking-[-0.02em]" style={{ maxWidth: 'calc(120px)' }}>
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
              
              {/* Social icons */}
              <div className="flex flex-row flex-shrink-0 gap-[8px] justify-start items-center [&_i]:text-[16px]">
                <div className="flex flex-row gap-[4px] justify-start items-center">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <i className="icon-pill text-textSecondary hover:text-primaryBlueHover transition-colors duration-[125ms]" style={{ fontSize: '16px' }}></i>
                  </a>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <i className="text-textSecondary ri-search-line text-[16px] hover:text-primaryBlueHover transition-colors duration-[125ms]"></i>
                </a>
              </div>

              {/* Stats icons - hidden on some breakpoints */}
              <div className="flex-row flex-1 h-[18px] gap-[8px] justify-start items-center hidden sm:flex md:hidden lg:hidden xl:flex">
                <span className="contents">
                  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center">
                    <i className="text-textTertiary ri-group-line text-[16px]"></i>
                    <span className="text-[12px] font-medium text-textPrimary">{token.holders || 0}</span>
                  </div>
                </span>
                <span className="contents">
                  <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                    <div className="flex justify-center items-center min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]">
                      <i className="icon-pro-trader text-textTertiary text-[16px]" style={{ fontSize: '14px' }}></i>
                    </div>
                    <span className="text-textPrimary text-[12px] font-medium">0</span>
                  </div>
                </span>
                <span className="contents">
                  <div className="flex flex-row gap-[2px] h-[16px] justify-center items-center flex-shrink-0">
                    <i className="ri-trophy-line text-textTertiary text-[16px]"></i>
                    <span className="text-textPrimary text-[12px] font-medium">0</span>
                  </div>
                </span>
                <span className="contents">
                  <div className="flex flex-row gap-[2px] h-[16px] justify-start items-center cursor-pointer">
                    <i className="text-textTertiary ri-vip-crown-2-line text-[16px] pb-[1.2px]"></i>
                    <span className="text-textPrimary text-[12px] font-medium">0/{token.holders || 0}</span>
                  </div>
                </span>
                <span className="contents">
                  <div className="inline-flex items-center justify-center gap-1 text-textSecondary leading-none">
                    <i className="ri-eye-line text-[9px] sm:text-[16px] flex items-center"></i>
                    <span className="text-[11px] sm:text-[11px] font-medium flex items-center">{token.comments || 0}</span>
                  </div>
                </span>
              </div>
            </div>

            {/* Badges row - hidden on some breakpoints */}
            <div className="hidden sm:flex md:hidden lg:hidden xl:flex flex-row w-full h-[24px] gap-[4px] justify-start items-end">
              <div>
                <div className="flex flex-row gap-[4px] flex-shrink-0 h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                  <i className="ri-user-star-line text-[14px] text-primaryGreen"></i>
                  <span className="text-primaryGreen text-[12px] font-medium">0%</span>
                </div>
              </div>
              <span className="contents">
                <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] pl-[5px] pr-[4px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                  <div className="w-[16px] h-[16px] flex items-center justify-center">
                    <i className="icon-chef-hat text-primaryGreen" style={{ fontSize: '12px' }}></i>
                  </div>
                  <span className="text-primaryGreen text-[12px] font-medium">0%</span>
                  <img alt="Coinbase" loading="eager" width="12" height="12" className="w-[12px] object-cover rounded-full" src="/images/funding-logos/coinbase.webp" />
                  <span className="text-textSecondary text-[11px] leading-[16px] font-medium whitespace-nowrap">53m</span>
                </div>
              </span>
              <span className="contents">
                <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                  <i className="ri-crosshair-2-line text-[14px] text-primaryGreen"></i>
                  <span className="text-primaryGreen text-[12px] font-medium">0%</span>
                </div>
              </span>
              <span className="contents">
                <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                  <i className="ri-ghost-line text-[14px] text-primaryGreen"></i>
                  <span className="text-primaryGreen text-[12px] font-medium">0%</span>
                </div>
              </span>
              <span className="contents">
                <div className="flex flex-row gap-[4px] flex-shrink-0 w-fit h-[24px] px-[5px] justify-start items-center rounded-full bg-backgroundSecondary border-primaryStroke/50 border-[1px]">
                  <div className="flex justify-center items-center min-w-[14px] min-h-[14px] max-w-[14px] max-h-[14px]">
                    <i className="icon-boxes text-[14px] text-primaryGreen" style={{ fontSize: '12px' }}></i>
                  </div>
                  <span className="text-primaryGreen text-[12px] font-medium">0%</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
