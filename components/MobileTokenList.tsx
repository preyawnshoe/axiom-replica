'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MobileTokenCard } from './MobileTokenCard';
import { TokenData } from './TokenCard';

interface MobileTokenListProps {
  selectedChain: 'sol' | 'bnb';
  onChainSwitch: (chain: 'sol' | 'bnb') => void;
  newPairs: TokenData[];
  finalStretch: TokenData[];
  migrated: TokenData[];
}

export function MobileTokenList({
  selectedChain,
  onChainSwitch,
  newPairs,
  finalStretch,
  migrated,
}: MobileTokenListProps) {
  const [selectedTab, setSelectedTab] = useState<'new' | 'final' | 'migrated'>('final');
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  // Get tokens for the selected tab
  const tokens = selectedTab === 'new' ? newPairs : selectedTab === 'final' ? finalStretch : migrated;

  return (
    <div className="flex flex-col flex-1 w-full h-full gap-[0px] pt-[16px] pb-[4px] overflow-hidden justify-start items-center">
      {/* Header Section */}
      <div className="flex flex-col w-full justify-start items-center border-b pb-[16px] border-transparent">
        {/* Chain Selector and Tabs */}
        <div className="flex flex-row w-full h-[24px] px-[16px] gap-[8px] justify-between items-center">
          {/* Chain Selection */}
          <div className="flex flex-row items-center gap-[8px] flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className={`relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 ${
                  selectedChain === 'sol'
                    ? 'bg-primaryStroke/60 scale-110'
                    : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'
                }`}
                onClick={() => onChainSwitch('sol')}
                aria-label="Switch to Solana"
              >
                <Image alt="SOL" width={20} height={20} src="/images/sol-fill.svg" />
              </button>
              <button
                type="button"
                className={`relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 ${
                  selectedChain === 'bnb'
                    ? 'bg-primaryStroke/60 scale-110'
                    : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'
                }`}
                onClick={() => onChainSwitch('bnb')}
                aria-label="Switch to BNB"
              >
                <Image
                  alt="BNB"
                  width={20}
                  height={20}
                  src="/images/bnb-fill.svg"
                  className={selectedChain !== 'bnb' ? 'grayscale-[0.3]' : ''}
                />
              </button>
            </div>

            {/* Tab Buttons */}
            <div className="relative flex flex-row flex-1 min-w-0">
              <div className="flex flex-row gap-[8px] items-center overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <button
                  className={`text-nowrap flex flex-row h-[24px] px-[12px] gap-[4px] justify-center items-center min-w-max rounded-full transition-all duration-[65ms] ease-out ${
                    selectedTab === 'new'
                      ? 'bg-secondaryStroke text-textPrimary'
                      : 'bg-secondary/80 text-textTertiary'
                  } active:scale-[0.98] active:opacity-[0.95]`}
                  onClick={() => setSelectedTab('new')}
                 
                >
                  <span className="text-[14px] font-medium">New Pairs</span>
                </button>
                <button
                  className={`text-nowrap flex flex-row h-[24px] px-[12px] gap-[4px] justify-center items-center min-w-max rounded-full transition-all duration-[65ms] ease-out ${
                    selectedTab === 'final'
                      ? 'bg-secondaryStroke text-textPrimary'
                      : 'bg-secondary/80 text-textTertiary'
                  } active:scale-[0.98] active:opacity-[0.95]`}
                  onClick={() => setSelectedTab('final')}
                 
                >
                  <span className="text-[14px] font-medium">Final Stretch</span>
                </button>
                <button
                  className={`text-nowrap flex flex-row h-[24px] px-[12px] gap-[4px] justify-center items-center min-w-max rounded-full transition-all duration-[65ms] ease-out ${
                    selectedTab === 'migrated'
                      ? 'bg-secondaryStroke text-textPrimary'
                      : 'bg-secondary/80 text-textTertiary'
                  } active:scale-[0.98] active:opacity-[0.95]`}
                  onClick={() => setSelectedTab('migrated')}
                 
                >
                  <span className="text-[14px] font-medium">Migrated</span>
                </button>
              </div>
            </div>
          </div>

          {/* Preset Button */}
          <div className="flex items-center gap-[8px]">
            <button
              type="button"
              className="relative border border-primaryStroke bg-transparent text-textSecondary min-w-[36px] h-[36px] pl-[9px] pr-[6px] gap-[7px] flex justify-center items-center rounded-full active:scale-[0.96] active:bg-primaryStroke/40 transition-scale duration-[65ms]"
             
            >
              <span className="text-[14px] font-medium">P1</span>
              <i className="ri-settings-3-line text-[20px]"></i>
              <div className="absolute -top-[-2px] -right-[-1px] w-[7px] h-[7px] rounded-full bg-primaryBlue border border-primaryStroke"></div>
            </button>
          </div>
        </div>

        {/* Expandable Filter Section */}
        <div
          className={`overflow-hidden w-full px-[16px] transition-all duration-[135ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            filtersExpanded ? 'max-h-[200px] opacity-100 mt-[16px]' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col w-full gap-[16px] pt-[24px] justify-start items-start">
            {/* Display and Filter Controls */}
            <div className="flex flex-row w-full gap-[16px] justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <button className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full active:bg-secondaryStroke/80 active:scale-[0.96] transition-all duration-[65ms]">
                  <i className="ri-list-check text-[18px] text-textPrimary"></i>
                  <span className="text-[14px] font-bold text-textPrimary">Display</span>
                  <i className="ri-arrow-down-s-line text-[18px] text-textPrimary"></i>
                </button>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <button type="button" className="flex flex-row w-[24px] h-[24px] justify-center items-center">
                  <i className="ri-question-line text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150"></i>
                </button>
                <button
                  type="button"
                  className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full active:bg-secondaryStroke/80 active:scale-[0.96] transition-all duration-[65ms]"
                  onClick={() => setFiltersExpanded(!filtersExpanded)}
                 
                >
                  <div className="relative">
                    <i className="ri-equalizer-3-line text-[18px] text-textPrimary"></i>
                    <div className="absolute -top-[1px] -right-[4px] w-[7px] h-[7px] rounded-full bg-primaryBlue border border-primaryStroke"></div>
                  </div>
                  <span className="text-[14px] font-bold text-textPrimary">Filter</span>
                  <i className="ri-arrow-down-s-line text-[18px] text-textPrimary"></i>
                </button>
              </div>
            </div>

            {/* Wallet and Amount Selector */}
            <div className="flex flex-row w-full gap-[16px] justify-between items-center">
              <div className="flex flex-row h-full gap-[8px] items-center flex-1 justify-between">
                {/* Wallet Selector */}
                <button
                  type="button"
                  className="flex border border-primaryStroke group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center active:bg-primaryStroke/35 active:scale-[0.96] transition-all duration-[65ms] rounded-full"
                 
                >
                  <div className="flex flex-row gap-[4px] justify-center items-center">
                    <i className="ri-wallet-line text-[18px] text-textSecondary group-hover:text-textPrimary"></i>
                    <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary">1</span>
                  </div>
                  <div className="flex flex-row gap-[4px] justify-center items-center">
                    <Image alt="SOL" width={16} height={16} src="/images/sol-fill.svg" />
                    <span className="text-[14px] text-textPrimary font-medium">0</span>
                  </div>
                  <i className="ri-arrow-down-s-line text-[18px] text-textSecondary group-hover:text-textPrimary"></i>
                </button>

                {/* Amount Input */}
                <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row flex-1 h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full active:bg-primaryStroke/35 transition-all duration-[65ms]">
                  <span className="flex text-[14px] text-textTertiary font-medium">
                    <i className="ri-flashlight-fill"></i>
                  </span>
                  <div className="flex flex-1 min-w-[0px]">
                    <input
                      placeholder="0.0"
                      className="text-[14px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left"
                      type="text"
                      defaultValue="0"
                    />
                  </div>
                  <Image alt="SOL" width={16} height={16} src="/images/sol-fill.svg" />
                  <div className="border-primaryStroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center">
                    <button className="group w-[24px] h-[24px] flex rounded-[4px] justify-center items-center hover:bg-primaryBlueHover/10">
                      <span className="text-[13px] font-medium text-primaryBlue hover:text-primaryBlueHover">P1</span>
                    </button>
                    <button className="group w-[24px] h-[24px] flex rounded-[4px] justify-center items-center hover:bg-primaryStroke/60">
                      <span className="text-[13px] font-medium text-textSecondary">P2</span>
                    </button>
                    <button className="group w-[24px] h-[24px] flex rounded-r-full rounded-l-[4px] justify-center items-center hover:bg-primaryStroke/60">
                      <span className="text-[13px] font-medium text-textSecondary">P3</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token List Container */}
      <div className="flex flex-col flex-1 w-full gap-[16px] px-[4px] justify-start items-center overflow-hidden">
        <div className="flex flex-col flex-1 w-full h-full lg:px-[24px] overflow-hidden justify-start items-start rounded-[8px] sm:rounded-[4px]">
          <div className="flex-1 border-primaryStroke bg-backgroundSecondary border-[1px] flex flex-row w-full justify-start items-start rounded-[8px] sm:rounded-[4px] overflow-hidden">
            <div className="flex flex-1 flex-col h-full justify-start items-center overflow-hidden">
              {/* Token Cards List */}
              <div className="flex flex-1 w-full relative">
                <div className="absolute inset-0 overflow-y-auto">
                  {tokens.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-textTertiary">
                      <p>No tokens available</p>
                    </div>
                  ) : (
                    tokens.map((token, index) => (
                      <MobileTokenCard
                        key={token.id}
                        name={token.name}
                        symbol={token.ticker}
                        address={token.id}
                        marketCap={token.marketCap}
                        mcColor="rgb(220, 193, 60)"
                        volume={token.volume}
                        fees={token.floor}
                        transactions={token.txCount || 0}
                        buyPercent={58}
                        sellPercent={42}
                        image={token.image || ''}
                        platform={token.platform === 'raydium' ? 'pump' : token.platform === 'jupiter' ? 'bags' : 'pump'}
                        progress={token.progress || 50}
                        age={token.age}
                        holders={token.holders || 0}
                        proTraders={token.proTraders || 0}
                        views={token.views || 0}
                        twitterHandle={token.twitter}
                        followers={token.followers?.toString()}
                        tweetLink={token.tweetLink}
                        communityLink={token.communityLink}
                        websiteLink={token.website}
                        githubLink={token.github}
                        isPriority={index < 3}
                        indicators={{
                          kol: token.kolPercent,
                          dev: token.devPercent,
                          sniper: token.sniperPercent,
                          insider: token.insiderPercent,
                          bundle: token.bundlePercent,
                          paid: token.paid,
                        }}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
