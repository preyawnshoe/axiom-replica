"use client";

import React, { useState } from "react";

interface TradingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Type definitions
type TradingConfig = {
  slippage: string;
  priority: string;
  bribe: string;
  autoFee: boolean;
  maxFee: string;
  mevMode: 'off' | 'reduced' | 'secure';
  rpc: string;
};

type PresetConfig = {
  buy: TradingConfig;
  sell: TradingConfig;
};

const DEFAULT_CONFIG: TradingConfig = {
  slippage: "20",
  priority: "0.001",
  bribe: "0.01",
  autoFee: false,
  maxFee: "0.1",
  mevMode: "off",
  rpc: ""
};

export function TradingSettingsModal({ isOpen, onClose }: TradingSettingsModalProps) {
  const [selectedPreset, setSelectedPreset] = useState<number>(1);
  const [settingsMode, setSettingsMode] = useState<'buy' | 'sell'>('buy');
  
  // Store all configs in state
  const [presets, setPresets] = useState<Record<number, PresetConfig>>({
    1: { buy: { ...DEFAULT_CONFIG }, sell: { ...DEFAULT_CONFIG } },
    2: { buy: { ...DEFAULT_CONFIG }, sell: { ...DEFAULT_CONFIG } },
    3: { buy: { ...DEFAULT_CONFIG }, sell: { ...DEFAULT_CONFIG } },
  });

  // Helper to get current config
  const currentConfig = presets[selectedPreset][settingsMode];

  // Helper to update current config
  const updateConfig = (key: keyof TradingConfig, value: any) => {
    setPresets(prev => ({
      ...prev,
      [selectedPreset]: {
        ...prev[selectedPreset],
        [settingsMode]: {
          ...prev[selectedPreset][settingsMode],
          [key]: value
        }
      }
    }));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-[#090909]/40 flex items-center justify-center z-[10000]" 
      style={{ opacity: 1 }}
      onClick={onClose}
    >
      <div 
        className="relative w-[364px] max-h-[880px]" 
        tabIndex={0} 
        style={{ opacity: 1, transform: "translateY(4px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col w-full h-full bg-[#18181A] border-[1px] border-secondaryStroke rounded-[8px] sm:rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]">
          {/* Header */}
          <div className="flex flex-row w-full h-[44px] pl-[16px] pr-[12px] justify-between items-center border-b-[1px] border-b-secondaryStroke">
            <span className="text-textPrimary text-[14px] leading-[20px] tracking-[-0.02em] font-medium">Trading Settings</span>
            <button 
              className="group flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-secondaryStroke/20 rounded-[8px] sm:rounded-[4px] transition-colors duration-150 ease-in-out"
              onClick={onClose}
            >
              <i className="ri-close-line text-textSecondary text-[16px] group-hover:text-textPrimary"></i>
            </button>
          </div>

          <div className="flex flex-col p-[16px] gap-[16px]">
            {/* Presets */}
            <div className="border border-secondaryStroke/50 flex flex-row rounded-[8px] p-[4px]">
              <button 
                onClick={() => setSelectedPreset(1)}
                className={`flex-1 h-[28px] rounded-[4px] sm:rounded-[4px] font-medium text-[14px] transition-colors duration-150 ${
                  selectedPreset === 1 
                    ? "bg-primaryBlue/20 text-primaryBlue" 
                    : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                }`}
              >
                PRESET 1
              </button>
              <button 
                onClick={() => setSelectedPreset(2)}
                className={`flex-1 h-[28px] rounded-[4px] sm:rounded-[4px] font-medium text-[14px] transition-colors duration-150 ${
                  selectedPreset === 2
                    ? "bg-primaryBlue/20 text-primaryBlue" 
                    : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                }`}
              >
                PRESET 2
              </button>
              <button 
                onClick={() => setSelectedPreset(3)}
                className={`flex-1 h-[28px] rounded-[4px] sm:rounded-[4px] font-medium text-[14px] transition-colors duration-150 ${
                  selectedPreset === 3
                    ? "bg-primaryBlue/20 text-primaryBlue" 
                    : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                }`}
              >
                PRESET 3
              </button>
            </div>
          </div>

          <div className="flex flex-col p-[16px] gap-[16px]">
            {/* Buy/Sell Toggle */}
            <div className="border border-secondaryStroke/50 flex flex-row rounded-[8px] p-[4px]">
              <button 
                onClick={() => setSettingsMode('buy')}
                className={`flex-1 h-[28px] rounded-[4px] sm:rounded-[4px] font-medium text-[14px] transition-colors duration-150 ${
                  settingsMode === 'buy'
                    ? "bg-primaryGreen/20 text-primaryGreen"
                    : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                }`}
              >
                Buy Settings
              </button>
              <button 
                onClick={() => setSettingsMode('sell')}
                className={`flex-1 h-[28px] rounded-[4px] sm:rounded-[4px] font-medium text-[14px] transition-colors duration-150 ${
                  settingsMode === 'sell'
                    ? "bg-decrease/20 text-decrease"
                    : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                }`}
              >
                Sell Settings
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-1 p-[16px] gap-[16px] justify-start">
            {/* Inputs Row */}
            <div className="flex flex-row w-full gap-[16px] justify-start items-center">
              <div className="flex flex-row flex-1 gap-[16px] justify-start items-center">
                
                {/* Slippage */}
                <div className="border border-secondaryStroke flex flex-col flex-1 h-[52px] justify-center items-center rounded-[8px] sm:rounded-[4px] group hover:border-textPrimary/10 focus-within:border-textPrimary/10 transition-colors duration-[150ms] ease-in-out cursor-text">
                  <div className="bg-secondaryStroke/50 border-b border-secondaryStroke flex flex-row w-full h-[28px]">
                    <div className="relative flex flex-row w-full h-full items-center justify-center">
                      <input 
                        placeholder="0.0" 
                        className="w-[calc(100%-20px)] px-[12px] text-textPrimary text-[14px] outline-none placeholder:text-textTertiary leading-[28px] text-center align-middle bg-transparent" 
                        type="text" 
                        value={currentConfig.slippage}
                        onChange={(e) => updateConfig('slippage', e.target.value)}
                      />
                      <span className="pointer-events-none absolute right-[0px] text-textTertiary text-[14px] w-[20px]">%</span>
                    </div>
                  </div>
                  <div className="flex flex-row w-full h-[24px] justify-center items-center">
                    {/* Replaced img with div/icon or Image since local path might not exist. Using Image nicely. */}
                     <span className="text-textTertiary mr-[4px]">
                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1"/>
                       </svg>
                     </span>
                    <span className="text-textTertiary text-[12px] leading-[16px] font-normal">SLIPPAGE</span>
                  </div>
                </div>

                {/* Priority */}
                <div className="border border-secondaryStroke flex flex-col flex-1 h-[52px] justify-center items-center rounded-[8px] sm:rounded-[4px] group hover:border-textPrimary/10 focus-within:border-textPrimary/10 transition-colors duration-[150ms] ease-in-out cursor-text">
                  <input 
                    placeholder="0.0" 
                    className="rounded-0 bg-secondaryStroke/50 border-b border-secondaryStroke flex flex-row w-full h-[28px] px-[12px] text-textPrimary text-[14px] outline-none placeholder:text-textTertiary leading-[28px] text-center" 
                    type="text" 
                    value={currentConfig.priority}
                    onChange={(e) => updateConfig('priority', e.target.value)}
                  />
                  <div className="flex flex-row w-full h-[24px] justify-center items-center">
                    <i className="ri-gas-station-line text-textTertiary text-[12px] mr-[4px]"></i>
                    <span className="text-textTertiary text-[12px] leading-[16px] font-normal">PRIORITY</span>
                  </div>
                </div>

                {/* Bribe */}
                <div className="border border-secondaryStroke flex flex-col flex-1 h-[52px] justify-center items-center rounded-[8px] sm:rounded-[4px] group hover:border-textPrimary/10 focus-within:border-textPrimary/10 transition-colors duration-[150ms] ease-in-out cursor-text">
                  <input 
                    placeholder="0.0" 
                    className="rounded-0 bg-secondaryStroke/50 border-b border-secondaryStroke flex flex-row w-full h-[28px] px-[12px] text-textPrimary text-[14px] outline-none placeholder:text-textTertiary leading-[28px] text-center" 
                    type="text" 
                    value={currentConfig.bribe}
                    onChange={(e) => updateConfig('bribe', e.target.value)}
                  />
                  <div className="flex flex-row w-full h-[24px] justify-center items-center">
                    <i className="ri-coin-line text-textTertiary text-[12px] mr-[4px]"></i>
                    <span className="text-textTertiary text-[12px] leading-[16px] font-normal">BRIBE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Fee + Max Fee */}
            <div className="flex flex-row w-full h-[32px] gap-[16px] justify-start items-center">
              <div className="flex flex-row w-full max-w-[100px] min-w-[100px] h-[32px] gap-[16px] justify-start items-center">
                <span className="contents">
                  <div className=" flex-1 whitespace-nowrap">
                    <div 
                      className="inline-flex flex-row h-[16px] gap-[8px] justify-start items-center cursor-pointer"
                      onClick={() => updateConfig('autoFee', !currentConfig.autoFee)}
                    >
                      <div className={`border-[1px] border-secondaryStroke flex flex-row w-[16px] h-[16px] p-[2px] justify-center items-center rounded-[4px] cursor-pointer ${currentConfig.autoFee ? 'bg-primaryBlue' : ''}`}>
                        {currentConfig.autoFee && <i className="ri-check-line text-white text-[10px]"></i>}
                      </div>
                      <span className="text-textPrimary text-[12px] font-medium text-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span>Auto Fee</span>
                        </div>
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              <div className={`opacity-[0.5] cursor-not-allowed pointer-events-none relative overflow-hidden border-secondaryStroke font-normal border-[1px] flex flex-row w-full h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full ${currentConfig.autoFee ? 'opacity-50' : ''}`}>
                <span className="flex-shrink-0 text-[14px] text-textTertiary font-medium">MAX FEE</span>
                <input 
                  placeholder="0.0" 
                  className="flex-1 min-w-0 text-[14px] text-textPrimary placeholder:text-textTertiary font-normal outline-none bg-transparent " 
                  type="text" 
                  value={currentConfig.maxFee}
                  onChange={(e) => updateConfig('maxFee', e.target.value)}
                  disabled={currentConfig.autoFee}
                />
              </div>
            </div>

            {/* MEV Mode */}
            <div className="flex flex-row w-full justify-start items-center gap-[16px]">
              <div className="flex flex-row w-full h-[32px] gap-[16px] max-w-[100px] min-w-[100px] justify-start items-center">
                <span className="contents">
                  <div className="flex flex-row h-[32px] gap-[4px] justify-start items-center">
                    <h3 className="text-textPrimary text-[12px] font-medium">MEV Mode</h3>
                    <i className="ri-information-line text-textTertiary text-[14px]"></i>
                  </div>
                </span>
              </div>
              <div className="border border-secondaryStroke/50 flex flex-row w-full gap-[1px] rounded-[8px] p-[4px]">
                <button 
                  onClick={() => updateConfig('mevMode', 'off')}
                  className={`flex-1 h-[24px] rounded-[4px] sm:rounded-[4px] transition-colors duration-150 ${
                    currentConfig.mevMode === 'off'
                      ? "bg-primaryBlue/20 text-primaryBlue"
                      : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                  }`}
                >
                  <div className="flex flex-row justify-center items-center gap-[2px]">
                    <i className={`ri-shield-line ${currentConfig.mevMode === 'off' ? "text-primaryBlue" : "text-textTertiary"}`} style={{ fontSize: "10px" }}></i>
                    <span className="text-[12px] font-medium">Off</span>
                  </div>
                </button>
                <button 
                  onClick={() => updateConfig('mevMode', 'reduced')}
                  className={`flex-1 h-[24px] rounded-[4px] sm:rounded-[4px] transition-colors duration-150 ${
                    currentConfig.mevMode === 'reduced'
                      ? "bg-primaryBlue/20 text-primaryBlue"
                      : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                  }`}
                >
                  <div className="flex flex-row justify-center items-center gap-[2px]">
                    <i className={`ri-shield-line text-[12px] ${currentConfig.mevMode === 'reduced' ? "text-primaryBlue" : "text-textTertiary"}`}></i>
                    <span className="text-[12px] font-medium">Reduced</span>
                  </div>
                </button>
                <button 
                  onClick={() => updateConfig('mevMode', 'secure')}
                  className={`flex-1 h-[24px] rounded-[4px] sm:rounded-[4px] transition-colors duration-150 ${
                    currentConfig.mevMode === 'secure'
                      ? "bg-primaryBlue/20 text-primaryBlue"
                      : "bg-transparent text-textSecondary hover:bg-primaryStroke/40"
                  }`}
                >
                  <div className="flex flex-row justify-center items-center gap-[2px]">
                    <i className={`ri-shield-check-line mr-[1px] ${currentConfig.mevMode === 'secure' ? "text-primaryBlue" : "text-textTertiary"}`} style={{ fontSize: "11px" }}></i>
                    <span className="text-[12px] font-medium">Secure</span>
                  </div>
                </button>
              </div>
            </div>

            {/* RPC */}
            <div className="flex flex-row w-full gap-[16px] justify-start items-center">
              <div className="relative overflow-hidden border-secondaryStroke hover:border-textPrimary/10 focus-within:border-textPrimary/10 hover:bg-primaryStroke/10 focus-within:bg-primaryStroke/10 font-normal border-[1px] flex flex-row w-full h-[32px] pl-[12px] gap-[8px] justify-start items-center rounded-full">
                <span className="flex-shrink-0 text-[14px] text-textTertiary font-medium">RPC</span>
                <input 
                  placeholder="https://a...e.com" 
                  className="flex-1 min-w-0 text-[14px] text-textPrimary placeholder:text-textTertiary font-normal outline-none bg-transparent " 
                  type="text" 
                  value={currentConfig.rpc}
                  onChange={(e) => updateConfig('rpc', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-secondaryStroke/50 flex flex-row w-full h-[68px] justify-end items-center p-[16px] pb-[20px]">
            <div className="flex flex-row flex-1 justify-end items-center">
              <button 
                className="flex-1 bg-primaryBlue flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-[150ms] cursor-pointer"
                onClick={onClose}
              >
                <span className="text-[14px] font-bold text-background">Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
