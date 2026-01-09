"use client";

import { useState, useMemo } from "react";

export type SortDirection = "asc" | "desc" | null;

export interface SortConfig<T> {
  key: keyof T | null;
  direction: SortDirection;
}

export function useSorting<T>(data: T[], initialKey?: keyof T) {
  const [sortConfig, setSortConfig] = useState<SortConfig<T>>({
    key: initialKey || null,
    direction: null,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortConfig.direction) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];

      // Handle numeric values (strings with K, M suffixes)
      const parseValue = (val: any): number => {
        if (typeof val === 'number') return val;
        if (typeof val === 'string') {
          const cleaned = val.replace(/[$,]/g, '');
          if (cleaned.endsWith('K')) {
            return parseFloat(cleaned) * 1000;
          }
          if (cleaned.endsWith('M')) {
            return parseFloat(cleaned) * 1000000;
          }
          const num = parseFloat(cleaned);
          return isNaN(num) ? 0 : num;
        }
        return 0;
      };

      const aNum = parseValue(aValue);
      const bNum = parseValue(bValue);

      if (sortConfig.direction === 'asc') {
        return aNum - bNum;
      } else {
        return bNum - aNum;
      }
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: SortDirection = 'asc';
    
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = null;
      }
    }

    setSortConfig({ key: direction ? key : null, direction });
  };

  return { sortedData, sortConfig, requestSort };
}

interface SortButtonProps {
  active: boolean;
  direction: SortDirection;
  onClick: () => void;
  children: React.ReactNode;
}

export function SortButton({ active, direction, onClick, children }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-textSecondary hover:text-textPrimary transition-colors duration-125 group"
    >
      <span className={active ? 'text-primaryBlue' : ''}>{children}</span>
      <span className="flex flex-col text-[10px] leading-none">
        <i className={`ri-arrow-up-s-fill ${active && direction === 'asc' ? 'text-primaryBlue' : 'text-textTertiary group-hover:text-textSecondary'}`} />
        <i className={`ri-arrow-down-s-fill -mt-1 ${active && direction === 'desc' ? 'text-primaryBlue' : 'text-textTertiary group-hover:text-textSecondary'}`} />
      </span>
    </button>
  );
}
