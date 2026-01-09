"use client";

import { useState } from "react";
import { TokenCard, TokenData } from "@/components/TokenCard";
import { useSorting, SortButton } from "@/hooks/useSorting";

interface SortableTokenColumnProps {
  tokens: TokenData[];
  variant: "new" | "final" | "migrated";
}

export function SortableTokenColumn({ tokens, variant }: SortableTokenColumnProps) {
  const { sortedData, sortConfig, requestSort } = useSorting<TokenData>(tokens, 'marketCap');

  return (
    <div className="flex flex-col w-full">
      {/* Sorting Header */}
      <div className="flex items-center gap-4 px-4 py-2 bg-backgroundSecondary border-b border-primaryStroke">
        <SortButton
          active={sortConfig.key === 'marketCap'}
          direction={sortConfig.direction}
          onClick={() => requestSort('marketCap')}
        >
          Market Cap
        </SortButton>
        
        <SortButton
          active={sortConfig.key === 'volume'}
          direction={sortConfig.direction}
          onClick={() => requestSort('volume')}
        >
          Volume
        </SortButton>
        
        <SortButton
          active={sortConfig.key === 'holders'}
          direction={sortConfig.direction}
          onClick={() => requestSort('holders')}
        >
          Holders
        </SortButton>
        
        <SortButton
          active={sortConfig.key === 'txCount'}
          direction={sortConfig.direction}
          onClick={() => requestSort('txCount')}
        >
          Transactions
        </SortButton>
      </div>

      {/* Token List */}
      <div className="flex flex-col">
        {sortedData.map((token) => (
          <TokenCard key={token.id} token={token} variant={variant} />
        ))}
      </div>
    </div>
  );
}
