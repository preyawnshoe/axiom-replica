"use client";

import Link from 'next/link';

interface MobileNavBarProps {
  activeRoute?: 'discover' | 'trackers' | 'pulse' | 'perpetuals' | 'portfolio';
  chain?: 'sol' | 'bnb';
}

export function MobileNavBar({ activeRoute = 'pulse', chain = 'sol' }: MobileNavBarProps) {
  const navItems = [
    {
      id: 'discover',
      label: 'Trending',
      icon: 'ri-fire-line',
      href: '/discover',
    },
    {
      id: 'trackers',
      label: 'Track',
      icon: 'ri-radar-line',
      href: `/trackers?chain=${chain}`,
    },
    {
      id: 'pulse',
      label: 'Pulse',
      icon: 'ri-pulse-line',
      href: `/pulse?chain=${chain}`,
    },
    {
      id: 'perpetuals',
      label: 'Perpetuals',
      icon: 'ri-exchange-line',
      href: `/perpetuals?chain=${chain}`,
    },
    {
      id: 'portfolio',
      label: 'Account',
      icon: 'ri-folder-user-line',
      href: `/portfolio?chain=${chain}`,
    },
  ];

  return (
    <div className="sm:hidden z-30 ios-h-fix">
      <div className="mobile-navbar flex flex-col w-full bg-background border-primaryStroke border-t justify-start items-center">
        <div className="flex flex-row justify-evenly items-center w-full h-[56px]">
          {navItems.map((item) => {
            const isActive = activeRoute === item.id;
            return (
              <Link key={item.id} href={item.href}>
                <button className="group flex flex-col justify-center items-center gap-[4px]">
                  <div className="h-[20px] flex items-center justify-center">
                    <i 
                      className={`${item.icon} text-[20px] transition-colors duration-125 ease-in-out group-active:text-textSecondary ${
                        isActive ? 'text-textPrimary' : 'text-textTertiary'
                      }`}
                      style={{ fontSize: 20 }}
                    />
                  </div>
                  <span 
                    className={`text-[12px] leading-[16px] font-medium transition-colors duration-125 ease-in-out group-active:text-textPrimary ${
                      isActive ? 'text-textPrimary' : 'text-textTertiary'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
