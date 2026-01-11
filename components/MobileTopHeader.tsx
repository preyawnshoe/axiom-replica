"use client";

import Image from 'next/image';

interface MobileTopHeaderProps {
  chain?: 'sol' | 'bnb';
}

export function MobileTopHeader({ chain = 'sol' }: MobileTopHeaderProps) {
  return (
    <div className="sm:hidden">
      <div className="flex sm:hidden flex-row w-full h-[44px] bg-background border-b border-primaryStroke justify-between items-center px-[8px] gap-[4px]">
        {/* Logo Button */}
        <button
          type="button"
          className="flex flex-row justify-center items-center h-[24px] w-[24px] active:scale-95 transition-transform"
        >
          <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-textPrimary">
            <g clipPath="url(#clip0_88_28967)">
              <path d="M24.1384 17.3876H11.8623L18.0001 7.00012L24.1384 17.3876Z" fill="currentColor"></path>
              <path d="M31 29.0003L5 29.0003L9.96764 20.5933L26.0324 20.5933L31 29.0003Z" fill="currentColor"></path>
            </g>
            <defs>
              <clipPath id="clip0_88_28967">
                <rect width="26" height="22" fill="white" transform="translate(5 7)"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* Spacer */}
        <div className="flex-1 min-w-0"></div>

        {/* Right Side Actions */}
        <div className="flex flex-row gap-[4px] justify-end items-center relative">
          {/* Wallet Button */}
          <button
            type="button"
            className="flex flex-row flex-shrink min-w-[70px] max-w-[180px] h-[32px] bg-primaryStroke rounded-full justify-end items-center px-[6px] gap-[3px] active:scale-95 transition-transform hover:bg-opacity-80 hover:bg-secondaryStroke/80"
          >
            <i className="ri-wallet-line text-textPrimary text-[13px] flex-shrink-0"></i>
            <div className="flex flex-row gap-[3px] justify-center items-center min-w-0">
              <img
                alt={chain === 'sol' ? 'SOL' : 'BNB'}
                loading="lazy"
                width="11"
                height="11"
                decoding="async"
                src={chain === 'sol' ? '/images/sol-fill.svg' : '/images/bnb-fill.svg'}
              />
              <span className="text-textPrimary text-[12px] font-semibold truncate">
                <span>0</span>
              </span>
            </div>
            <div className="w-[1px] h-[16px] bg-secondaryStroke flex-shrink-0"></div>
            <div className="flex flex-row gap-[3px] justify-center items-center min-w-0 flex-shrink-0">
              <img
                alt="USDC"
                loading="lazy"
                width="11"
                height="14"
                decoding="async"
                src="/images/usdc-perps.svg"
              />
              <span className="text-textPrimary text-[12px] font-semibold truncate">0</span>
            </div>
            <i className="ri-arrow-down-s-line text-textPrimary text-[13px] flex-shrink-0 transition-transform"></i>
          </button>

          {/* Paste CA Button */}
          <div className="relative">
            <button
              type="button"
              className="flex flex-row h-[32px] px-[10px] gap-[3px] bg-primaryStroke rounded-full justify-center items-center hover:bg-secondaryStroke/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              aria-label="Paste Contract Address"
            >
              <i className="ri-file-copy-line text-textPrimary text-[14px]"></i>
              <span className="text-textPrimary text-[11px] font-medium">Paste CA</span>
            </button>
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="flex flex-row justify-center items-center h-[32px] w-[32px] bg-primaryStroke rounded-full hover:bg-secondaryStroke/80 transition-colors active:scale-95"
            aria-label="Search"
          >
            <i className="ri-search-2-line text-textPrimary text-[14px]"></i>
          </button>

          {/* User Avatar Button */}
          <button
            type="button"
            className="flex flex-row w-[28px] h-[28px] justify-center items-center rounded-full relative overflow-visible transition-all duration-150 ease-in-out active:scale-[0.96]
              border-transparent bg-primaryStroke hover:bg-secondaryStroke/80 hover:border-transparent"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full border-white/[0.1] border-[1px] z-[15] pointer-events-none rounded-full"></div>
              <img
                alt="User"
                draggable="false"
                loading="eager"
                decoding="async"
                className="object-cover transition-all duration-150 brightness-100 hover:brightness-110"
                src="data:image/svg+xml,%0A%20%20%20%20%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22grad-427283577%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3Ahsl(297%2C%2057%25%2C%2057%25)%3Bstop-opacity%3A1%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3Ahsl(74%2C%2057%25%2C%2047%25)%3Bstop-opacity%3A1%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22url(%23grad-427283577)%22%20%2F%3E%0A%20%20%20%20%20%20%3Ctext%0A%20%20%20%20%20%20%20%20x%3D%2250%25%22%0A%20%20%20%20%20%20%20%20y%3D%2250%25%22%0A%20%20%20%20%20%20%20%20dominant-baseline%3D%22central%22%0A%20%20%20%20%20%20%20%20text-anchor%3D%22middle%22%0A%20%20%20%20%20%20%20%20font-family%3D%22system-ui%2C%20-apple-system%2C%20sans-serif%22%0A%20%20%20%20%20%20%20%20font-size%3D%2248%22%0A%20%20%20%20%20%20%20%20font-weight%3D%22600%22%0A%20%20%20%20%20%20%20%20fill%3D%22white%22%0A%20%20%20%20%20%20%20%20opacity%3D%220.95%22%0A%20%20%20%20%20%20%3ED2%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E%0A%20%20"
                style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px' }}
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-[-2px] right-[-2px] w-[14px] h-[14px] rounded-full bg-background z-[20] flex items-center justify-center">
              <div className="w-[8px] h-[8px] rounded-full bg-primaryGreen"></div>
            </div>
          </button>

          {/* Menu Button */}
          <button
            type="button"
            className="flex flex-row justify-center items-center h-[32px] w-[32px] bg-primaryStroke rounded-full hover:bg-secondaryStroke/80 transition-colors active:scale-95"
          >
            <i className="ri-menu-line text-textPrimary text-[18px]"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
