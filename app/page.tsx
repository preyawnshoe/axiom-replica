'use client';

import { useState, useCallback } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Header } from "@/components/Header";
import { Toolbar } from "@/components/Toolbar";
import { TokenColumn } from "@/components/TokenColumn";
import { BottomBar } from "@/components/BottomBar";
import { DisplaySettings } from "@/components/DisplaySettings";
import { TokenData } from "@/components/TokenCard";
import { newPairsTokens, finalStretchTokens, migratedTokens, bnbNewPairsTokens, bnbFinalStretchTokens, bnbMigratedTokens } from "@/lib/mockData";
import { useRealtimePrices } from "@/hooks/useRealtimePrices";
import { PriceUpdate } from "@/lib/websocket-mock";

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<'sol' | 'bnb'>('sol');
  const [newPairs, setNewPairs] = useState<TokenData[]>(newPairsTokens);
  const [finalStretch, setFinalStretch] = useState<TokenData[]>(finalStretchTokens);
  const [migrated, setMigrated] = useState<TokenData[]>(migratedTokens);
  const [isDisplaySettingsOpen, setIsDisplaySettingsOpen] = useState(false);
  const [displayOptions, setDisplayOptions] = useState({
    showNewPairs: true,
    showFinalStretch: true,
    showMigrated: true,
  });

  const switchChain = useCallback((chain: 'sol' | 'bnb') => {
    setSelectedChain(chain);
    if (chain === 'sol') {
      setNewPairs(newPairsTokens);
      setFinalStretch(finalStretchTokens);
      setMigrated(migratedTokens);
    } else {
      setNewPairs(bnbNewPairsTokens);
      setFinalStretch(bnbFinalStretchTokens);
      setMigrated(bnbMigratedTokens);
    }
  }, []);

  // Handle real-time price updates
  const handlePriceUpdate = useCallback((update: PriceUpdate) => {
    // Update newPairs tokens
    setNewPairs(prevTokens => {
      const updatedTokens = prevTokens.map(token => 
        token.id === update.id 
          ? {
              ...token,
              marketCap: update.marketCap,
              volume: update.volume,
              floor: update.floor,
              lastUpdated: update.timestamp,
            }
          : token
      );
      // Sort by lastUpdated timestamp (most recent first)
      return updatedTokens.sort((a, b) => (b.lastUpdated || 0) - (a.lastUpdated || 0));
    });

    // Update finalStretch tokens
    setFinalStretch(prevTokens => {
      const updatedTokens = prevTokens.map(token => 
        token.id === update.id 
          ? {
              ...token,
              marketCap: update.marketCap,
              volume: update.volume,
              floor: update.floor,
              lastUpdated: update.timestamp,
            }
          : token
      );
      // Sort by lastUpdated timestamp (most recent first)
      return updatedTokens.sort((a, b) => (b.lastUpdated || 0) - (a.lastUpdated || 0));
    });

    // Update migrated tokens
    setMigrated(prevTokens => {
      const updatedTokens = prevTokens.map(token => 
        token.id === update.id 
          ? {
              ...token,
              marketCap: update.marketCap,
              volume: update.volume,
              floor: update.floor,
              lastUpdated: update.timestamp,
            }
          : token
      );
      // Sort by lastUpdated timestamp (most recent first)
      return updatedTokens.sort((a, b) => (b.lastUpdated || 0) - (a.lastUpdated || 0));
    });
  }, []);

  // Get price flash states for animations
  const priceFlash = useRealtimePrices(handlePriceUpdate);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-background">
      {/* Header */}
      <Header chain={selectedChain} onChainChange={setSelectedChain} />
      
      {/* Toolbar */}
      <Toolbar />

      {/* Main content */}
      <div className="flex flex-1 min-h-0 overflow-auto">
        <audio></audio>
        <audio></audio>
        <audio></audio>
        <div className="flex flex-col w-full h-full gap-[16px] py-[16px] px-[12px] sm:py-[24px] sm:px-[16px] lg:px-[24px] justify-start items-center overflow-hidden">
          {/* Page header */}
          <div className="flex-none flex flex-col sm:flex-row w-full gap-3 sm:gap-0 sm:h-[32px] justify-start items-start sm:items-center">
            <div className="flex-1 flex items-center gap-3 mb-3 sm:mb-0">
              <span className="text-textPrimary text-[20px] font-medium">Pulse</span>
              <div className="flex items-center gap-1">
                <span className="contents">
                  <button type="button" className={`relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 ${selectedChain === 'sol' ? 'bg-primaryStroke/60 scale-110' : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'}`} aria-label="Switch to Solana" suppressHydrationWarning={true} onClick={() => switchChain('sol')}>
                    <img alt="SOL" width="20" height="20" src="/images/sol-fill.svg" className="" />
                  </button>
                </span>
                <span className="contents">
                  <button type="button" className={`relative flex items-center justify-center w-[32px] h-[32px] rounded-full transition-all duration-150 ${selectedChain === 'bnb' ? 'bg-primaryStroke/60 scale-110' : 'hover:bg-primaryStroke/30 opacity-60 hover:opacity-100'}`} aria-label="Switch to BNB" suppressHydrationWarning={true} onClick={() => switchChain('bnb')}>
                    <img alt="BNB" width="20" height="20" src="/images/bnb-fill.svg" className={selectedChain === 'bnb' ? '' : 'grayscale-[0.3]'} />
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-start sm:justify-end w-full sm:w-auto">
              <span className="contents">
                <button type="button" className="flex flex-row w-[24px] h-[24px] justify-center items-center" suppressHydrationWarning={true}>
                  <i className="ri-question-line text-[20px] text-textTertiary hover:text-textSecondary transition-all duration-150 ease-in-out"></i>
                </button>
              </span>
              <div className="relative flex">
                <div className="w-full">
                  <span className="contents">
                    <button 
                      onClick={() => setIsDisplaySettingsOpen(true)}
                      className="bg-primaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-secondaryStroke/80 transition-color duration-[150ms] ease-in-out" 
                      suppressHydrationWarning={true}
                    >
                      <div className="relative">
                        <i className="ri-list-check text-[18px] text-textPrimary"></i>
                      </div>
                      <div className="whitespace-nowrap flex flex-row gap-[4px] justify-start items-center">
                        <span className="text-[14px] font-bold text-textPrimary">Display</span>
                      </div>
                      <i className="ri-arrow-down-s-line text-[18px] text-textPrimary"></i>
                    </button>
                  </span>
                </div>
              </div>
              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full" suppressHydrationWarning={true}>
                  <i className="icon-bookmark-x text-textSecondary group-hover:text-textPrimary" style={{ fontSize: '16px' }}></i>
                </button>
              </span>
              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 relative rounded-full hover:bg-primaryStroke/60 bg-transparent transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]" suppressHydrationWarning={true}>
                  <i className="ri-keyboard-box-line text-[16px] text-textSecondary group-hover:text-textPrimary"></i>
                </button>
              </span>
              <span className="contents">
                <button type="button" className="-mr-[5px] group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full" suppressHydrationWarning={true}>
                  <i className="ri-volume-up-line text-[16px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out"></i>
                </button>
              </span>
              <span className="contents">
                <button type="button" className="group flex items-center justify-center w-8 h-8 bg-background hover:bg-primaryStroke/60 transition-colors relative rounded-full" suppressHydrationWarning={true}>
                  <i className="ri-crosshair-2-line text-textSecondary group-hover:text-textPrimary text-[16px]"></i>
                  <i className="ri-settings-3-line text-[12px] text-textSecondary group-hover:text-textPrimary absolute bottom-0 right-0"></i>
                </button>
              </span>
              <div className="relative flex">
                <div className="w-full">
                  <span className="contents">
                    <button type="button" className="flex border border-primaryStroke group flex-row p-[4px] pr-[12px] pl-[12px] h-[32px] gap-[8px] justify-center items-center hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer rounded-full" suppressHydrationWarning={true}>
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <i className="ri-wallet-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer"></i>
                        <span className="text-[14px] text-textSecondary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">1</span>
                      </div>
                      <div className="flex flex-row gap-[4px] justify-center items-center">
                        <img alt={selectedChain === 'sol' ? "SOL" : "BNB"} width="16" height="16" src={selectedChain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                        <span className="text-[14px] text-textPrimary font-medium group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer">
                          <span>0</span>
                        </span>
                      </div>
                      <i className="ri-arrow-down-s-line text-[18px] text-textSecondary group-hover:text-textPrimary transition-colors duration-150 ease-in-out cursor-pointer"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div className="hidden sm:block lg:hidden">
                <div className="flex flex-row h-full gap-[8px] items-center justify-start">
                  <div className="overflow-hidden whitespace-nowrap border-primaryStroke font-normal border-[1px] flex flex-row min-w-[216px] h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full hover:bg-primaryStroke/35 transition-colors duration-125 cursor-pointer">
                    <span className="flex text-[14px] text-textTertiary font-medium">
                      <i className="ri-flashlight-fill"></i>
                    </span>
                    <div className="flex flex-1 sm:max-w-[60px] min-w-[0px]">
                      <input placeholder="0.0" className="text-[14px] w-full text-textPrimary placeholder:text-textTertiary font-medium outline-none bg-transparent text-left" type="text" defaultValue="0" />
                    </div>
                    <img alt={selectedChain === 'sol' ? "SOL" : "BNB"} width="16" height="16" src={selectedChain === 'sol' ? "/images/sol-fill.svg" : "/images/bnb-fill.svg"} />
                    <div className="border-primaryStroke border-l-[1px] flex h-full pr-[3px] pl-[3px] gap-[6px] justify-center items-center cursor-pointer">
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryBlueHover/10" suppressHydrationWarning={true}>
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-primaryBlue hover:text-primaryBlueHover">P1</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P2</span>
                        </button>
                      </span>
                      <span className="contents">
                        <button type="button" className="group w-[24px] h-[24px] flex flex-row gap-[4px] rounded-r-full rounded-l-[4px] justify-center items-center transition-colors ease-in-out duration-125 hover:bg-primaryStroke/60" suppressHydrationWarning={true}>
                          <span className="text-[13px] gap-[4px] flex flex-row justify-center items-center font-medium transition-colors ease-in-out duration-125 text-textSecondary">P3</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three columns */}
          <div className="flex-1 border-primaryStroke border-[1px] flex flex-col md:flex-row w-full justify-start items-start rounded-[8px] sm:rounded-[4px] overflow-hidden" style={{ backgroundColor: '#101114' }}>
            <div className="flex flex-col md:flex-row w-full h-full rounded-[8px] sm:rounded-[4px] overflow-hidden" style={{ backgroundColor: '#101114' }}>
              {displayOptions.showNewPairs && (
                <TokenColumn 
                  title="New Pairs" 
                  tokens={newPairs} 
                  variant="new" 
                  count={0}
                  priceFlash={priceFlash}
                  chain={selectedChain}
                />
              )}
              {displayOptions.showFinalStretch && (
                <TokenColumn 
                  title="Final Stretch" 
                  tokens={finalStretch} 
                  variant="final" 
                  count={0}
                  priceFlash={priceFlash}
                  chain={selectedChain}
                />
              )}
              {displayOptions.showMigrated && (
                <TokenColumn 
                  title="Migrated" 
                  tokens={migrated} 
                  variant="migrated" 
                  count={0}
                  priceFlash={priceFlash}
                  chain={selectedChain}
                />
              )}
              {!displayOptions.showNewPairs && !displayOptions.showFinalStretch && !displayOptions.showMigrated && (
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="text-center">
                    <i className="ri-eye-off-line text-[48px] text-textTertiary mb-4"></i>
                    <p className="text-textSecondary text-lg font-medium">No columns selected</p>
                    <p className="text-textTertiary text-sm">Use the Display button to show token columns</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <BottomBar chain={selectedChain} />
      
      {/* Display Settings Modal */}
      <DisplaySettings 
        isOpen={isDisplaySettingsOpen} 
        onClose={() => setIsDisplaySettingsOpen(false)}
        style={{
          inset: "148px 335.641px auto auto"
        }}
      />
    </div>
  );
}
