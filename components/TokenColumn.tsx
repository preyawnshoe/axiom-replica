"use client";

import { TokenCard, TokenData } from "./TokenCard";

interface TokenColumnProps {
  title: string;
  tokens: TokenData[];
  variant: "new" | "final" | "migrated";
  count?: number;
}

export function TokenColumn({ title, tokens, variant, count = 0 }: TokenColumnProps) {
  const getHeaderColor = () => {
    switch (variant) {
      case "final":
        return "text-primaryOrange";
      case "migrated":
        return "text-primaryGreen";
      default:
        return "text-textPrimary";
    }
  };

  return (
    <div className="flex-1 min-w-[320px] flex flex-col">
      {/* Column header */}
      <div className="flex items-center justify-between px-[4px] py-[8px] border-b border-primaryStroke mb-[8px]">
        <h3 className={`text-[14px] font-semibold ${getHeaderColor()}`}>{title}</h3>
        
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center gap-[4px] text-textTertiary">
            <i className="ri-arrow-up-down-line text-[14px]"></i>
            <span className="text-[12px]">{count}</span>
          </div>
          
          <div className="flex items-center gap-[2px]">
            <button className="px-[6px] py-[2px] text-[11px] text-textTertiary hover:text-textPrimary">P1</button>
            <button className="px-[6px] py-[2px] text-[11px] text-textTertiary hover:text-textPrimary">P2</button>
            <button className="px-[6px] py-[2px] text-[11px] text-textTertiary hover:text-textPrimary">P3</button>
          </div>
          
          <button className="text-textTertiary hover:text-textPrimary">
            <i className="ri-equalizer-line text-[16px]"></i>
          </button>
        </div>
      </div>

      {/* Token list */}
      <div className="flex flex-col gap-[8px] overflow-y-auto flex-1 pr-[4px]">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} variant={variant} />
        ))}
      </div>
    </div>
  );
}
