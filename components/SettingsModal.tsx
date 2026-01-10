"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 bg-[#090909]/40 flex items-center justify-center z-[200]" 
      style={{ opacity: 1 }}
      onClick={onClose}
    >
      <div 
        className="bg-backgroundTertiary relative w-[452px] h-[calc(100vh-72px)] max-h-[880px]" 
        style={{ opacity: 1, transform: "translateY(4px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col w-full h-full border border-secondaryStroke rounded-[4px] shadow-[0_4px_4px_0_rgba(0,0,0,0.30),0_8px_8px_0_rgba(0,0,0,0.45)]">
          <div className="flex flex-col w-full h-[calc(100%-68px)] overflow-hidden">
            <div className=" flex flex-row w-full min-h-[44px] h-[44px] pl-[16px] pr-[12px] justify-between items-center border-b border-secondaryStroke/0">
              <span className="text-textPrimary text-[14px] leading-[20px] tracking-[-0.02em] font-medium">Filters</span>
              <button type="button" className="group flex flex-row p-[4px] w-[24px] h-[24px] justify-center items-center hover:bg-secondaryStroke/20 rounded-[4px] transition-colors duration-150 ease-in-out" onClick={onClose}>
                <i className="ri-close-line text-textSecondary text-[16px] group-hover:text-textPrimary"></i>
              </button>
            </div>
            <div className="flex flex-row flex-1 pl-[8px] pr-[12px] min-h-[36px] max-h-[36px] border-b border-secondaryStroke justify-between items-center">
              <div className="flex flex-row gap-[16px] justify-start items-center">
                <button className="group relative text-nowrap flex flex-row px-[8px] gap-[4px] justify-start items-center group false transition-colors rounded-[4px] h-[28px] ">
                  <div className="border-textPrimary border-b-[2px] pt-[2px] flex flex-row flex-1 h-[36px] gap-[4px] justify-start items-center">
                    <span className="text-textPrimary text-[14px] font-medium">New Pairs</span>
                  </div>
                </button>
                <button className="group relative text-nowrap flex flex-row px-[8px] gap-[4px] justify-start items-center group hover:bg-primaryStroke/40 transition-colors rounded-[4px] h-[28px] ">
                  <div className="absolute inset-0 rounded-[4px] z-[1] pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100 overflow-hidden">
                    <div className="absolute top-[0px] -bottom-[1px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-textTertiary/[0.05] border-[1px]"></div>
                    <div className="absolute -top-[1px] bottom-[0px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-black/[0.05] border-[1px]"></div>
                  </div>
                  <div className=" flex flex-row flex-1 h-[36px] gap-[4px] justify-start items-center">
                    <span className="text-textSecondary text-[14px] font-medium">Final Stretch</span>
                  </div>
                </button>
                <button className="group relative text-nowrap flex flex-row px-[8px] gap-[4px] justify-start items-center group hover:bg-primaryStroke/40 transition-colors rounded-[4px] h-[28px] ">
                  <div className="absolute inset-0 rounded-[4px] z-[1] pointer-events-none transition-opacity duration-150 opacity-0 group-hover:opacity-100 overflow-hidden">
                    <div className="absolute top-[0px] -bottom-[1px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-textTertiary/[0.05] border-[1px]"></div>
                    <div className="absolute -top-[1px] bottom-[0px] -right-[1px] -left-[1px] rounded-[4px] pointer-events-none border-black/[0.05] border-[1px]"></div>
                  </div>
                  <div className=" flex flex-row flex-1 h-[36px] gap-[4px] justify-start items-center">
                    <span className="text-textSecondary text-[14px] font-medium">Migrated</span>
                  </div>
                </button>
              </div>
              <div className="hidden sm:flex flex-row gap-[16px] justify-end items-center">
                <span className="contents">
                  <button className="group flex flex-row p-[6px] h-[24px] w-[24px] gap-[4px] justify-center items-center hover:bg-primaryStroke/60 transition-all duration-150 ease-in-out cursor-pointer rounded-[4px]">
                    <i className="ri-reset-left-line text-[16px] text-textSecondary"></i>
                  </button>
                </span>
              </div>
            </div>
            <div className="flex flex-col h-[calc(100%-156px)] sm:h-[calc(100%-80px)]">
              <div className="flex flex-col gap-[16px] p-[16px] border-b border-secondaryStroke/50 h-[100px] shrink-0">
                <div className="flex flex-row gap-[16px]">
                  <div className="flex flex-col gap-[12px] flex-1">
                    <span className="text-textSecondary text-[12px] leading-[16px] font-normal">Search Keywords</span>
                    <div className="flex flex-col w-full gap-[4px] justify-start items-start ">
                      <div className="relative flex w-full">
                        <input 
                          placeholder="keyword1, keyword2..." 
                          className="text-textPrimary placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[8px] pr-[8px] gap-[4px] justify-start items-center rounded-[8px] sm:rounded-[4px] outline-none transition-colors duration-150 ease-in-out bg-transparent border border-secondaryStroke hover:border-textPrimary/10 focus:border-textPrimary/10 hover:bg-secondaryStroke/10 focus:bg-secondaryStroke/10 text-left" 
                          type="text" 
                          defaultValue="" 
                        />
                        <div className="absolute right-[2px] top-1/2 -translate-y-1/2 flex items-center"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[12px] flex-1">
                    <span className="text-textSecondary text-[12px] leading-[16px] font-normal">Exclude Keywords</span>
                    <div className="flex flex-col w-full gap-[4px] justify-start items-start ">
                      <div className="relative flex w-full">
                        <input 
                          placeholder="keyword1, keyword2..." 
                          className="text-textPrimary placeholder:text-textTertiary text-[12px] leading-[16px] font-normal flex flex-row w-full h-[32px] px-[8px] pr-[8px] gap-[4px] justify-start items-center rounded-[8px] sm:rounded-[4px] outline-none transition-colors duration-150 ease-in-out bg-transparent border border-secondaryStroke hover:border-textPrimary/10 focus:border-textPrimary/10 hover:bg-secondaryStroke/10 focus:bg-secondaryStroke/10 text-left" 
                          type="text" 
                          defaultValue="" 
                        />
                        <div className="absolute right-[2px] top-1/2 -translate-y-1/2 flex items-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-[16px] h-[calc(100%-100px)] overflow-hidden">
                <div className="flex flex-row flex-1 px-[16px] min-h-[36px] max-h-[36px] justify-start items-center">
                  <div className="flex flex-row flex-1 gap-[12px] justify-start items-center">
                    <button className="flex flex-row bg-primaryStroke px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
                      <span className="text-textPrimary text-[14px] font-medium whitespace-nowrap">Protocols</span>
                    </button>
                    <button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
                      <span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">Audit</span>
                    </button>
                    <button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
                      <span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">$ Metrics</span>
                    </button>
                    <button className="flex flex-row hover:bg-primaryStroke/40 px-[12px] gap-[4px] justify-start items-center group transition-colors ease-in-out duration-150 rounded-full h-[28px]">
                      <span className="text-textTertiary text-[14px] font-medium whitespace-nowrap">Socials</span>
                    </button>
                  </div>
                </div>
                <div className="h-[calc(100%-52px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="flex flex-col p-[16px] pb-[16px] gap-[16px]">
                    <div className="flex flex-col gap-[12px] w-full">
                      <div className="flex flex-row h-[24px] min-h-[24px] justify-between items-center">
                        <span className="text-textSecondary text-[12px] leading-[16px] font-normal">Protocols</span>
                        <button type="button" className="group text-textPrimary flex flex-row gap-[4px] text-[12px] leading-[16px] font-medium justify-start items-center rounded-full px-[7px] h-[24px] transition-colors duration-125 ease-in-out hover:border-transparent border-[1px] bg-secondaryStroke/30 border-secondaryStroke/20 hover:bg-secondaryStroke/60">
                          <span className="text-textPrimary text-[12px] leading-[16px] font-medium">Select All</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-[12px]">
                        {/* Protocol buttons content here */}
                        <div className="text-textSecondary text-[12px]">Protocols grid</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] w-full">
                      <div className="flex flex-row h-[24px] min-h-[24px] justify-between items-center">
                        <span className="text-textSecondary text-[12px] leading-[16px] font-normal">Quote Tokens</span>
                        <button type="button" className="group text-textPrimary flex flex-row gap-[4px] text-[12px] leading-[16px] font-medium justify-start items-center rounded-full px-[7px] h-[24px] transition-colors duration-125 ease-in-out border-secondaryStroke border-[1px] bg-secondaryStroke/60 hover:bg-secondaryStroke/90">
                          <span className="text-textPrimary text-[12px] leading-[16px] font-medium">Unselect All</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-[12px]">
                        {/* Quote tokens content here */}
                        <div className="text-textSecondary text-[12px]">Quote tokens grid</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondaryStroke hidden sm:flex flex-row w-full h-[68px] justify-between items-center p-[16px] pb-[20px] z-50">
            <div className="flex flex-row justify-start items-center gap-[16px]">
              <button type="button" className="bg-secondaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center hover:bg-secondaryStroke/65 cursor-pointer rounded-full">
                <span className="text-textPrimary text-[14px] leading-[16px] font-bold">Import</span>
              </button>
              <button type="button" className="bg-secondaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center hover:bg-secondaryStroke/65 cursor-pointer rounded-full">
                <span className="text-textPrimary text-[14px] leading-[16px] font-bold">Export</span>
              </button>
              <button type="button" className="bg-secondaryStroke flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center hover:bg-secondaryStroke/65 cursor-pointer rounded-full">
                <span className="text-textPrimary text-[14px] leading-[16px] font-bold">Share</span>
              </button>
            </div>
            <div className="flex flex-row justify-end items-center">
              <button type="button" className="bg-primaryBlue flex flex-row h-[32px] px-[12px] gap-[8px] justify-center items-center rounded-full hover:bg-primaryBlue/80 hover:brightness-110 transition-all duration-[150ms] cursor-pointer">
                <span className="text-[14px] font-bold text-background">Apply All</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
