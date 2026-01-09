"use client";

import Image from "next/image";

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
  const getAgeBadgeColor = () => {
    switch (variant) {
      case "final":
        return "text-primaryOrange";
      case "migrated":
        return "text-primaryGreen";
      default:
        return "text-primaryBlue";
    }
  };

  const getBuyButtonColor = () => {
    switch (variant) {
      case "final":
        return "bg-primaryOrange hover:bg-primaryOrangeHover text-black";
      case "migrated":
        return "bg-primaryGreen hover:brightness-110 text-black";
      default:
        return "bg-primaryBlue hover:bg-primaryBlueHover text-black";
    }
  };

  const getProgressColor = () => {
    switch (variant) {
      case "final":
        return "bg-primaryOrange";
      case "migrated":
        return "bg-primaryGreen";
      default:
        return "bg-primaryBlue";
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case "final":
        return "border-primaryOrange/20";
      case "migrated":
        return "border-primaryGreen/20";
      default:
        return "border-primaryStroke";
    }
  };

  return (
    <div className={`bg-[#101114] border ${getBorderColor()} rounded-[8px] p-[10px] hover:bg-[#14151a] transition-colors cursor-pointer`}>
      <div className="flex gap-[8px]">
        {/* Token image */}
        <div className="relative w-[52px] h-[52px] rounded-[6px] overflow-hidden bg-[#1a1b1f] flex-shrink-0">
          {token.image ? (
            <Image src={token.image} alt={token.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-textSecondary text-[24px] font-semibold bg-[#1a1b1f]">
              {token.imageText || token.ticker.charAt(0)}
            </div>
          )}
          {/* Live indicator */}
          <div className="absolute bottom-[3px] left-[3px] w-[8px] h-[8px] rounded-full bg-primaryGreen border-[2px] border-[#101114]"></div>
        </div>

        {/* Middle content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Row 1: Name and ticker */}
          <div className="flex items-center gap-[4px]">
            <span className="text-textPrimary text-[13px] font-semibold truncate">{token.name}</span>
            <span className="text-textTertiary text-[12px] truncate">{token.ticker}</span>
            {token.hasAudit && <i className="ri-shield-check-fill text-primaryGreen text-[12px]"></i>}
          </div>
          
          {/* Row 2: Age, icons, holders */}
          <div className="flex items-center gap-[4px] mt-[2px] text-[11px] flex-wrap">
            <span className={`${getAgeBadgeColor()} font-medium`}>{token.age}</span>
            
            {token.badges?.map((badge, i) => (
              <span key={i} className={`px-[4px] py-[0px] rounded-[2px] text-[10px] font-medium ${
                badge.type === "ds" ? "bg-decrease/20 text-decrease" :
                badge.type === "time" ? "bg-primaryGreen/20 text-primaryGreen" :
                badge.type === "social" ? "bg-primaryStroke text-textTertiary" :
                "bg-primaryOrange/20 text-primaryOrange"
              }`}>
                {badge.value}
              </span>
            ))}
            
            <div className="flex items-center gap-[3px] text-textTertiary">
              <i className="ri-edit-line text-[11px]"></i>
              <i className="ri-search-line text-[11px]"></i>
            </div>
            
            <div className="flex items-center gap-[2px] text-textTertiary">
              <i className="ri-team-line text-[11px]"></i>
              <span>{token.holders || 0}</span>
            </div>
            
            <div className="flex items-center gap-[2px] text-textTertiary">
              <i className="ri-chat-1-line text-[11px]"></i>
              <span>{token.comments || 0}</span>
            </div>
            
            {token.bondingCurve && (
              <div className="flex items-center gap-[2px] text-textTertiary">
                <i className="ri-plant-line text-[11px]"></i>
                <span>{token.bondingCurve}</span>
              </div>
            )}
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-[6px] mt-[6px] flex-wrap">
            {token.stats.map((stat, i) => (
              <span key={i} className={`text-[11px] font-medium flex items-center gap-[2px] ${
                stat.color === "green" ? "text-increase" :
                stat.color === "red" ? "text-decrease" :
                stat.color === "paid" ? "text-primaryYellow" :
                "text-textTertiary"
              }`}>
                {stat.icon && <i className={`${stat.icon} text-[10px]`}></i>}
                {stat.prefix && <span className="text-textTertiary">{stat.prefix}</span>}
                {stat.value}
              </span>
            ))}
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col items-end justify-between flex-shrink-0 min-w-[80px]">
          <div className="text-right">
            <div className="flex items-center gap-[4px] justify-end">
              <span className="text-textTertiary text-[10px]">MC</span>
              <span className="text-textPrimary text-[12px] font-semibold">{token.marketCap}</span>
            </div>
            <div className="flex items-center gap-[4px] justify-end">
              <span className="text-textTertiary text-[10px]">V</span>
              <span className="text-textSecondary text-[11px]">{token.volume}</span>
            </div>
            <div className="flex items-center gap-[4px] justify-end text-[10px]">
              <span className="text-textTertiary">F</span>
              <span className="text-textSecondary">{token.floor}</span>
              <span className="text-textTertiary">TX</span>
              <span className="text-textTertiary">{token.txCount}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-[3px] bg-primaryStroke rounded-full mt-[4px] overflow-hidden">
            <div className={`h-full ${getProgressColor()} rounded-full`} style={{ width: `${token.progress}%` }}></div>
          </div>
          
          {/* Buy button */}
          <button className={`${getBuyButtonColor()} h-[22px] px-[8px] rounded-full text-[11px] font-semibold transition-colors flex items-center gap-[3px] mt-[6px]`}>
            <i className="ri-add-line text-[12px]"></i>
            {token.buyAmount || 0} SOL
          </button>
        </div>
      </div>

      {/* Bottom address row */}
      <div className="flex items-center gap-[4px] mt-[6px] ml-[60px]">
        <span className="text-[10px] text-textTertiary">{token.id}</span>
        <button className="text-textTertiary hover:text-textSecondary">
          <i className="ri-file-copy-line text-[11px]"></i>
        </button>
      </div>
    </div>
  );
}
