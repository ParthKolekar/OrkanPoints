export type BrokerageId = 'sbi' | 'rakuten' | 'monex';

export interface MutualFund {
  id: string;
  nameJa: string;
  symbolOrCode: string;
  isin?: string;
  issuerJa: string;
  brokeragePoints: Record<BrokerageId, { pointPct: number | null }>;
  isCustom?: boolean;
  lastAnalyzed?: string;
}

export type SortField = 'symbol' | 'name' | 'sbi' | 'rakuten' | 'monex';

