import React, { useState } from 'react';
import { SinglePageFundMatrix } from './components/SinglePageFundMatrix';
import { MUTUAL_FUNDS } from './data/funds';
import { MutualFund } from './types';

export default function App() {
  const [funds] = useState<MutualFund[]>(MUTUAL_FUNDS);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1C1E] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Application Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold text-[#1A1C1E] tracking-tight">
              OrkanPoints
            </h1>
            <p className="text-xs text-gray-500 font-normal">
              All-Country Mutual Fund Holding Point Comparison
            </p>
          </div>
        </div>
      </header>

      {/* Main Single Page Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* The Core Single-Page Matrix with Mutual Funds */}
        <SinglePageFundMatrix funds={funds} />
      </main>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="font-medium text-gray-600">OrkanPoints</span>
          <span>SBI証券 • 楽天証券 • マネックス証券</span>
        </div>
      </footer>
    </div>
  );
}

