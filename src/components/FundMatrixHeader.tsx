import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortField } from '../types';

interface FundMatrixHeaderProps {
  sortField: SortField;
  sortAsc: boolean;
  onSort: (field: SortField) => void;
}

export const FundMatrixHeader: React.FC<FundMatrixHeaderProps> = ({
  sortField,
  sortAsc,
  onSort,
}) => {
  const getHeaderSortIconClass = (field: SortField) => {
    return sortField === field ? 'text-gray-900 font-bold' : 'text-gray-400';
  };

  return (
    <thead>
      <tr className="bg-gray-50/90 border-b border-gray-200 text-gray-700 uppercase font-semibold text-[11px] tracking-wider select-none">
        {/* Symbol / Code Column */}
        <th
          onClick={() => onSort('symbol')}
          className="py-3.5 px-4 w-32 cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap"
          title="協会コード / 銘柄コード (Association Symbol Code)"
        >
          <div className="flex items-center gap-1">
            <span>コード (Code)</span>
            <ArrowUpDown className={`w-3 h-3 ${getHeaderSortIconClass('symbol')}`} />
          </div>
        </th>

        {/* Fund Name Column */}
        <th
          onClick={() => onSort('name')}
          className="py-3.5 px-4 min-w-[280px] max-w-[420px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-1.5">
            <span>投資信託銘柄 (Mutual Fund)</span>
            <ArrowUpDown className={`w-3 h-3 ${getHeaderSortIconClass('name')}`} />
          </div>
        </th>

        {/* SBI Securities */}
        <th
          onClick={() => onSort('sbi')}
          className="py-3.5 px-4 text-right cursor-pointer hover:bg-blue-50/50 transition-colors border-l border-gray-200/80 bg-blue-50/30"
        >
          <div className="flex items-center justify-end gap-1 text-blue-800 font-bold text-xs">
            <span>SBI証券</span>
            <ArrowUpDown className="w-3 h-3 text-blue-400" />
          </div>
        </th>

        {/* Rakuten Securities */}
        <th
          onClick={() => onSort('rakuten')}
          className="py-3.5 px-4 text-right cursor-pointer hover:bg-red-50/50 transition-colors border-l border-gray-200/80 bg-red-50/30"
        >
          <div className="flex items-center justify-end gap-1 text-red-800 font-bold text-xs">
            <span>楽天証券</span>
            <ArrowUpDown className="w-3 h-3 text-red-400" />
          </div>
        </th>

        {/* Monex Securities */}
        <th
          onClick={() => onSort('monex')}
          className="py-3.5 px-4 text-right cursor-pointer hover:bg-amber-50/50 transition-colors border-l border-gray-200/80 bg-amber-50/30"
        >
          <div className="flex items-center justify-end gap-1 text-amber-800 font-bold text-xs">
            <span>マネックス証券</span>
            <ArrowUpDown className="w-3 h-3 text-amber-400" />
          </div>
        </th>
      </tr>
    </thead>
  );
};
