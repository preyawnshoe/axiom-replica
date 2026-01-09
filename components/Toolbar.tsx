"use client";

export function Toolbar() {
  return (
    <div className="flex flex-row w-full h-[28px] gap-[8px] px-[16px] lg:px-[24px] border-b border-primaryStroke/50 items-center">
      {/* Settings */}
      <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors rounded-[4px]">
        <i className="ri-settings-3-line text-[14px]"></i>
      </button>

      <div className="w-[1px] h-[16px] bg-primaryStroke"></div>

      {/* Star and chart */}
      <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textSecondary hover:bg-primaryStroke/60 transition-colors rounded-[4px]">
        <i className="ri-star-line text-[14px]"></i>
      </button>
      <button className="min-w-[24px] min-h-[24px] flex items-center justify-center text-textTertiary hover:text-textSecondary hover:bg-primaryStroke/60 transition-colors rounded-[4px]">
        <i className="ri-line-chart-line text-[14px]"></i>
      </button>

      <div className="w-[1px] h-[16px] bg-primaryStroke"></div>

      {/* Ticker scroll area */}
      <div className="flex-1 overflow-hidden">
        <div className="flex gap-[8px] items-center overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {/* Ticker items would go here */}
        </div>
      </div>
    </div>
  );
}
