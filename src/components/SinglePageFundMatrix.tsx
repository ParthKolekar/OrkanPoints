import React, { useState } from 'react';
import { MutualFund, BrokerageId, SortField } from '../types';
import { FundMatrixHeader } from './FundMatrixHeader';
import { FundMatrixRow } from './FundMatrixRow';

interface SinglePageFundMatrixProps {
  funds: MutualFund[];
}

export const SinglePageFundMatrix: React.FC<SinglePageFundMatrixProps> = ({
  funds,
}) => {
  const [sortField, setSortField] = useState<SortField>('symbol');
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(field === 'symbol' || field === 'name');
    }
  };

  // Helper to get sort score for a brokerage point:
  // - If not handled (null): -1
  // - If offered with 0%: 0
  // - If offered with >0%: the point rate
  const getBrokerageSortScore = (fund: MutualFund, bId: BrokerageId): number => {
    return fund.brokeragePoints[bId].pointPct ?? -1;
  };

  // Sort funds
  const sortedFunds = [...funds].sort((a, b) => {
    let comparison = 0;
    switch (sortField) {
      case 'symbol':
        comparison = a.symbolOrCode.localeCompare(b.symbolOrCode);
        break;
      case 'name':
        comparison = a.nameJa.localeCompare(b.nameJa);
        break;
      case 'sbi':
        comparison = getBrokerageSortScore(b, 'sbi') - getBrokerageSortScore(a, 'sbi');
        break;
      case 'rakuten':
        comparison = getBrokerageSortScore(b, 'rakuten') - getBrokerageSortScore(a, 'rakuten');
        break;
      case 'monex':
        comparison = getBrokerageSortScore(b, 'monex') - getBrokerageSortScore(a, 'monex');
        break;
    }
    return sortAsc ? comparison : -comparison;
  });

  return (
    <div className="space-y-3">
      {/* Main 7-Symbol Comparison Matrix */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <FundMatrixHeader
              sortField={sortField}
              sortAsc={sortAsc}
              onSort={handleSort}
            />

            <tbody className="divide-y divide-gray-100">
              {sortedFunds.map((fund) => (
                <FundMatrixRow key={fund.id} fund={fund} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
