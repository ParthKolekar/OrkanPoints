import React from 'react';
import { MutualFund } from '../types';
import { BrokeragePointCell } from './BrokeragePointCell';

interface FundMatrixRowProps {
  fund: MutualFund;
}

export const FundMatrixRow: React.FC<FundMatrixRowProps> = ({ fund }) => {
  const sbiRate = fund.brokeragePoints.sbi.isOffered !== false ? fund.brokeragePoints.sbi.pointPct : 0;
  const rakutenRate = fund.brokeragePoints.rakuten.isOffered !== false ? fund.brokeragePoints.rakuten.pointPct : 0;
  const monexRate = fund.brokeragePoints.monex.isOffered !== false ? fund.brokeragePoints.monex.pointPct : 0;

  // Max holding point rate across the 3 brokerages for highlight
  const maxRate = Math.max(sbiRate, rakutenRate, monexRate);

  return (
    <tr className="hover:bg-slate-50/80 transition-colors group">
      {/* Symbol Code Badge */}
      <td className="py-3.5 px-4 font-mono text-xs whitespace-nowrap">
        <span className="bg-slate-100 text-slate-800 font-bold px-2 py-1 rounded border border-slate-200 tracking-wider">
          {fund.symbolOrCode}
        </span>
      </td>

      {/* Fund Details */}
      <td className="py-3.5 px-4 max-w-[380px]">
        <div className="font-semibold text-gray-900 text-xs leading-relaxed">
          {fund.nameJa}
        </div>
      </td>

      {/* SBI Column */}
      <BrokeragePointCell
        fund={fund}
        brokerageId="sbi"
        maxRate={maxRate}
        themeColor="blue"
      />

      {/* Rakuten Column */}
      <BrokeragePointCell
        fund={fund}
        brokerageId="rakuten"
        maxRate={maxRate}
        themeColor="red"
      />

      {/* Monex Column */}
      <BrokeragePointCell
        fund={fund}
        brokerageId="monex"
        maxRate={maxRate}
        themeColor="amber"
      />
    </tr>
  );
};
