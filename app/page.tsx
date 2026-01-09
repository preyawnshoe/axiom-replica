import { Header } from "@/components/Header";
import { Toolbar } from "@/components/Toolbar";
import { TokenColumn } from "@/components/TokenColumn";
import { BottomBar } from "@/components/BottomBar";
import { newPairsTokens, finalStretchTokens, migratedTokens } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Toolbar */}
      <Toolbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden px-[16px] lg:px-[24px] py-[16px]">
        {/* Page header */}
        <div className="flex items-center justify-between mb-[16px]">
          <div className="flex items-center gap-[12px]">
            <h1 className="text-textPrimary text-[20px] font-medium">Pulse</h1>
            <button className="flex items-center justify-center w-[28px] h-[28px] bg-primaryBlue rounded-[4px]">
              <i className="ri-menu-line text-background text-[16px]"></i>
            </button>
            <button className="flex items-center justify-center w-[28px] h-[28px] bg-primaryStroke rounded-[4px] hover:bg-secondaryStroke/80">
              <i className="ri-bug-line text-textTertiary text-[16px]"></i>
            </button>
          </div>

          <div className="flex items-center gap-[8px]">
            <button className="flex items-center justify-center w-[28px] h-[28px] text-textTertiary hover:text-textSecondary">
              <i className="ri-question-line text-[18px]"></i>
            </button>
            
            <button className="flex items-center gap-[6px] h-[32px] px-[12px] bg-primaryStroke rounded-full hover:bg-secondaryStroke/80 transition-colors">
              <i className="ri-layout-grid-line text-textPrimary text-[16px]"></i>
              <span className="text-textPrimary text-[13px] font-medium">Display</span>
              <i className="ri-arrow-down-s-line text-textPrimary text-[16px]"></i>
            </button>

            <div className="hidden lg:flex items-center gap-[4px]">
              <button className="flex items-center justify-center w-[28px] h-[28px] text-textTertiary hover:text-textSecondary">
                <i className="ri-save-line text-[18px]"></i>
              </button>
              <button className="flex items-center justify-center w-[28px] h-[28px] text-textTertiary hover:text-textSecondary">
                <i className="ri-image-line text-[18px]"></i>
              </button>
              <button className="flex items-center justify-center w-[28px] h-[28px] text-textTertiary hover:text-textSecondary">
                <i className="ri-volume-up-line text-[18px]"></i>
              </button>
              <button className="flex items-center justify-center w-[28px] h-[28px] text-textTertiary hover:text-textSecondary">
                <i className="ri-refresh-line text-[18px]"></i>
              </button>
            </div>

            <div className="flex items-center gap-[4px] text-textTertiary text-[12px]">
              <i className="ri-hashtag text-[14px]"></i>
              <span>1</span>
              <i className="ri-equal-line text-[14px]"></i>
              <span>0</span>
            </div>

            <button className="text-textTertiary hover:text-textSecondary">
              <i className="ri-arrow-down-s-line text-[18px]"></i>
            </button>
          </div>
        </div>

        {/* Three columns */}
        <div className="flex-1 flex gap-[16px] overflow-hidden">
          <TokenColumn 
            title="New Pairs" 
            tokens={newPairsTokens} 
            variant="new" 
            count={0} 
          />
          <TokenColumn 
            title="Final Stretch" 
            tokens={finalStretchTokens} 
            variant="final" 
            count={0} 
          />
          <TokenColumn 
            title="Migrated" 
            tokens={migratedTokens} 
            variant="migrated" 
            count={0} 
          />
        </div>
      </main>

      {/* Bottom bar */}
      <BottomBar />
    </div>
  );
}
