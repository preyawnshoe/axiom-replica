"use client";

import { useState } from "react";

type Tab = "layout" | "metrics" | "row" | "extras";

export function DisplaySettings() {
  const [activeTab, setActiveTab] = useState<Tab>("layout");
  const [selectedMetric, setSelectedMetric] = useState<"small" | "large">("large");
  const [selectedQuickBuy, setSelectedQuickBuy] = useState<"small" | "large" | "mega" | "ultra">("small");

  return (
    <div className="flex flex-col min-w-[344px] overflow-hidden h-full" style={{ maxHeight: "769.151px" }}>
      {/* Metrics Section */}
      <div className="flex flex-col gap-[12px] px-[16px] py-[16px] flex-shrink-0">
        <span className="text-textSecondary text-[12px]">Metrics</span>
        <div className="flex flex-row gap-[8px]">
          <button
            onClick={() => setSelectedMetric("small")}
            className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
              selectedMetric === "small"
                ? "bg-secondaryStroke text-textSecondary"
                : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
            }`}
          >
            <div className="flex flex-col gap-[4px] justify-start items-center">
              <div className="flex flex-row gap-[4px] h-[16px] justify-start items-center text-textTertiary">
                <span>MC</span>
                <span className="text-[12px] font-medium">77K</span>
              </div>
              <span className="text-[12px] text-textTertiary">Small</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedMetric("large")}
            className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
              selectedMetric === "large"
                ? "bg-secondaryStroke text-textSecondary"
                : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
            }`}
          >
            <div className="flex flex-col gap-[4px] justify-start items-center">
              <div className="flex flex-row gap-[4px] h-[16px] justify-end items-center text-textSecondary">
                <span className="text-[12px] pt-[4px]">MC</span>
                <span className="text-[16px] font-medium">77K</span>
              </div>
              <span className="text-[12px] text-textSecondary">Large</span>
            </div>
          </button>
        </div>
      </div>

      {/* Quick Buy Section */}
      <div className="flex flex-col gap-[12px] px-[16px] flex-shrink-0">
        <span className="text-textSecondary text-[12px]">Quick Buy</span>
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-row gap-[8px]">
            <button
              onClick={() => setSelectedQuickBuy("small")}
              className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
                selectedQuickBuy === "small"
                  ? "bg-secondaryStroke text-textSecondary"
                  : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
              }`}
            >
              <div className="flex flex-col gap-[4px] justify-start items-center">
                <div className="flex flex-row gap-[4px] h-[16px] justify-center items-end">
                  <div className="w-[20px] h-[8px] bg-primaryBlue rounded-full flex flex-row gap-[1px] justify-center items-center">
                    <i className="ri-flashlight-fill text-[6px] font-bold text-[#090909]"></i>
                    <span className="text-[6px] font-bold text-[#090909]">7</span>
                  </div>
                </div>
                <span className="text-[12px] text-textSecondary">Small</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedQuickBuy("large")}
              className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
                selectedQuickBuy === "large"
                  ? "bg-secondaryStroke text-textSecondary"
                  : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
              }`}
            >
              <div className="flex flex-col gap-[4px] justify-start items-center">
                <div className="flex flex-row gap-[4px] h-[16px] justify-center items-end">
                  <div className="w-[24px] h-[10px] bg-primaryBlue rounded-full flex flex-row gap-[1px] justify-center items-center">
                    <i className="ri-flashlight-fill text-[7px] font-bold text-[#090909]"></i>
                    <span className="text-[7px] font-bold text-[#090909]">7</span>
                  </div>
                </div>
                <span className="text-[12px] text-textTertiary">Large</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedQuickBuy("mega")}
              className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
                selectedQuickBuy === "mega"
                  ? "bg-secondaryStroke text-textSecondary"
                  : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
              }`}
            >
              <div className="flex flex-col gap-[4px] justify-start items-center">
                <div className="flex flex-row gap-[4px] h-[16px] justify-center items-end">
                  <div className="w-[32px] h-[14px] bg-primaryBlue rounded-[2px] flex flex-row gap-[1px] justify-center items-center">
                    <i className="ri-flashlight-fill text-[7px] font-bold text-[#090909]"></i>
                    <span className="text-[7px] font-bold text-[#090909]">7</span>
                  </div>
                </div>
                <span className="text-[12px] text-textTertiary">Mega</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedQuickBuy("ultra")}
              className={`flex-1 h-[52px] rounded-[4px] text-[12px] border border-secondaryStroke/50 font-medium transition-colors duration-150 ease-in-out ${
                selectedQuickBuy === "ultra"
                  ? "bg-secondaryStroke text-textSecondary"
                  : "bg-transparent text-textSecondary hover:bg-secondaryStroke/40"
              }`}
            >
              <div className="flex flex-col gap-[4px] justify-start items-center">
                <div className="flex flex-row gap-[4px] h-[16px] justify-center items-end">
                  <div className="relative w-[40px] h-[18px] rounded-[1px] flex flex-row gap-[1px] justify-center items-center bg-textTertiary/20 overflow-hidden">
                    <div
                      className="absolute w-[24px] h-[12px] bottom-0 right-0 translate-x-1 translate-y-1 rounded-full opacity-10 z-10"
                      style={{ background: "radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 70%)" }}
                    ></div>
                    <i className="ri-flashlight-fill text-[8px] font-bold text-primaryBlueHover"></i>
                    <span className="text-[8px] font-bold text-primaryBlueHover">7</span>
                  </div>
                </div>
                <span className="text-[12px] text-textTertiary">Ultra</span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
            <i className="ri-sun-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
            <span className="text-[14px] text-textPrimary font-medium">Grey</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-row gap-[8px] px-[16px] mt-[8px] w-full h-[36px] justify-start items-center border-b border-secondaryStroke pb-[3px] flex-shrink-0">
        <button
          onClick={() => setActiveTab("layout")}
          className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center rounded-full h-[20px] ${
            activeTab === "layout"
              ? "bg-secondaryStroke text-textPrimary"
              : "bg-secondary/80 text-textTertiary"
          }`}
        >
          <div className="flex flex-row flex-1 h-[28px] gap-[4px] justify-center items-center">
            <span className="text-[14px] font-medium">Layout</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center rounded-full h-[20px] ${
            activeTab === "metrics"
              ? "bg-secondaryStroke text-textPrimary"
              : "bg-secondary/80 text-textTertiary"
          }`}
        >
          <div className="flex flex-row flex-1 h-[28px] gap-[4px] justify-center items-center">
            <span className="text-[14px] font-medium">Metrics</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("row")}
          className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center rounded-full h-[20px] ${
            activeTab === "row"
              ? "bg-secondaryStroke text-textPrimary"
              : "bg-secondary/80 text-textTertiary"
          }`}
        >
          <div className="flex flex-row flex-1 h-[28px] gap-[4px] justify-center items-center">
            <span className="text-[14px] font-medium">Row</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab("extras")}
          className={`text-nowrap flex flex-row h-[32px] px-[12px] gap-[4px] justify-center items-center rounded-full h-[20px] ${
            activeTab === "extras"
              ? "bg-secondaryStroke text-textPrimary"
              : "bg-secondary/80 text-textTertiary"
          }`}
        >
          <div className="flex flex-row flex-1 h-[28px] gap-[4px] justify-center items-center">
            <span className="text-[14px] font-medium">Extras</span>
          </div>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[0px] py-[16px] min-h-0">
        {activeTab === "layout" && (
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[8px] px-[16px]">
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-search-fill text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">Show Search Bar</span>
              </button>
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-hashtag text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">No Decimals</span>
              </button>
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-eye-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">Show Hidden Tokens</span>
              </button>
              <div className="pl-[12px] pr-0">
                <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                  <div className="flex flex-row gap-[2px] items-center">
                    <i className="ri-eye-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                  </div>
                  <span className="text-[14px] text-textPrimary font-medium">Unhide on Migrated</span>
                </button>
              </div>
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-rectangle-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">Circle Images</span>
              </button>
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-loader-4-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">Progress Bar</span>
              </button>
              <button className="flex items-center gap-[8px] px-[12px] hover:bg-secondaryStroke/60 rounded-[4px] transition-colors w-full text-left justify-start h-[36px] group duration-0">
                <i className="ri-layout-grid-line text-textSecondary text-[16px] group-hover:text-textPrimary transition-colors duration-125 ease-in-out"></i>
                <span className="text-[14px] text-textPrimary font-medium">Spaced Tables</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "row" && (
          <>
            <div className="h-[1px] bg-secondaryStroke/50 my-[16px]"></div>
            <div className="flex flex-col gap-[12px] px-[16px]">
              <span className="text-[12px] text-textSecondary">Customize rows</span>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Twitter Handle</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke/50 hover:bg-secondaryStroke/30">
                    <span className="text-[12px] font-medium text-textTertiary">Twitter Following</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Twitter Followers</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke/50 hover:bg-secondaryStroke/30">
                    <span className="text-[12px] font-medium text-textTertiary">Image Reuse</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Market Cap</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Volume</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Fees</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">TX</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Socials</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Holders</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Pro Traders</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">KOLs</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Dev Migrations</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Dev Creations</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Recent Visitors</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Top 10 Holders</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Dev Holding</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Tracked Dev</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Funding Time</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke/50 hover:bg-secondaryStroke/30">
                    <span className="text-[12px] font-medium text-textTertiary">Tax</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Snipers</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Insiders</span>
                  </button>
                </div>
                <div className="flex flex-row gap-[8px]">
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Bundlers</span>
                  </button>
                  <button className="text-nowrap flex items-center gap-[8px] px-[7px] border rounded-[4px] text-left justify-start h-[28px] group transition-colors duration-75 ease-in border-secondaryStroke bg-secondaryStroke/60 hover:bg-secondaryStroke">
                    <span className="text-[12px] font-medium text-textSecondary">Dex Paid</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
