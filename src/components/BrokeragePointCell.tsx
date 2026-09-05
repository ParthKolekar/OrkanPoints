import React from 'react';
import { MutualFund, BrokerageId } from '../types';
import { formatPct } from '../utils/calculator';

interface BrokeragePointCellProps {
  fund: MutualFund;
  brokerageId: BrokerageId;
  maxRate: number;
  themeColor: 'blue' | 'red' | 'amber';
}

export const BrokeragePointCell: React.FC<BrokeragePointCellProps> = ({
  fund,
  brokerageId,
  maxRate,
  themeColor,
}) => {
  const point = fund.brokeragePoints[brokerageId];
  const isOffered = point.isOffered !== false;
  const rate = point.pointPct;
  const isTopYield = isOffered && rate === maxRate && rate > 0;

  let text = formatPct(rate);
  let title = `Holding point return: ${rate}% p.a.`;
  let cellClass = 'text-gray-800 font-bold';

  if (!isOffered) {
    text = '取扱なし';
    title = `${fund.nameJa} is not offered at this brokerage.`;
    cellClass = 'bg-gray-50/60 text-gray-400 font-medium';
  } else if (rate === 0) {
    text = '0.000%';
    title = `${fund.nameJa} is offered, but excluded from holding points (0.000%).`;
    cellClass = 'bg-gray-50/30 text-gray-400 font-normal';
  } else if (isTopYield) {
    const topYieldClasses = {
      blue: 'bg-blue-50/40 text-blue-900 font-bold',
      red: 'bg-red-50/40 text-red-900 font-bold',
      amber: 'bg-amber-50/40 text-amber-900 font-bold',
    }[themeColor];
    cellClass = topYieldClasses;
  }

  return (
    <td
      className={`py-3 px-4 text-right font-mono border-l border-gray-100 ${cellClass}`}
      title={title}
    >
      <span className="text-xs">
        {text}
      </span>
    </td>
  );
};
