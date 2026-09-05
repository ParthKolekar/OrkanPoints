export type BrokerageId = 'sbi' | 'rakuten' | 'monex';

export interface BrokeragePoint {
  pointPct: number; // Annual point return rate e.g. 0.0175%
  isOffered?: boolean; // false if not handled by this brokerage (取扱なし)
}

export interface MutualFund {
  id: string;
  nameJa: string;
  symbolOrCode: string;
  isin?: string;
  issuerJa: string;
  brokeragePoints: Record<BrokerageId, BrokeragePoint>;
  isCustom?: boolean;
  lastAnalyzed?: string;
}

export type SortField = 'symbol' | 'name' | 'sbi' | 'rakuten' | 'monex';

