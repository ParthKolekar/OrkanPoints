import { MutualFund } from '../types';

/**
 * Benchmark 7 All-Country (オルカン) mutual funds with official names
 * registered with The Investment Trusts Association, Japan (投資信託協会):
 * 1. 01312237: はじめてのNISA・全世界株式インデックス（オール・カントリー）
 * 2. 02312234: Tracers MSCIオール・カントリー・インデックス（全世界株式）
 * 3. 0331418A: ｅＭＡＸＩＳ Ｓｌｉｍ 全世界株式（オール・カントリー）
 * 4. 47312197: たわらノーロード 全世界株式
 * 5. 89311221: ＳＢＩ・Ｖ・全世界株式インデックス・ファンド
 * 6. 8931217C: ＳＢＩ・全世界株式インデックス・ファンド
 * 7. 9I31123A: 楽天・プラス・オールカントリー株式インデックス・ファンド
 */
export const MUTUAL_FUNDS: MutualFund[] = [
  {
    id: 'fund-01312237',
    nameJa: 'はじめてのNISA・全世界株式インデックス（オール・カントリー）',
    symbolOrCode: '01312237',
    isin: 'JP90C000PSN7',
    issuerJa: '野村アセットマネジメント',
    brokeragePoints: {
      sbi: { pointPct: 0.0175 },
      rakuten: { pointPct: 0.0000 },
      monex: { pointPct: 0.0175 },
    },
  },
  {
    id: 'fund-02312234',
    nameJa: 'Tracers MSCIオール・カントリー・インデックス（全世界株式）',
    symbolOrCode: '02312234',
    isin: 'JP90C000PHR1',
    issuerJa: '日興アセットマネジメント',
    brokeragePoints: {
      sbi: { pointPct: 0.0175 },
      rakuten: { pointPct: 0.0000 },
      monex: { pointPct: 0.0175 },
    },
  },
  {
    id: 'fund-0331418A',
    nameJa: 'ｅＭＡＸＩＳ Ｓｌｉｍ 全世界株式（オール・カントリー）',
    symbolOrCode: '0331418A',
    isin: 'JP90C000H1T1',
    issuerJa: '三菱UFJアセットマネジメント',
    brokeragePoints: {
      sbi: { pointPct: 0.0175 },
      rakuten: { pointPct: 0.0000 },
      monex: { pointPct: 0.0175 },
    },
  },
  {
    id: 'fund-47312197',
    nameJa: 'たわらノーロード 全世界株式',
    symbolOrCode: '47312197',
    isin: 'JP90C000HZE8',
    issuerJa: 'アセットマネジメントOne',
    brokeragePoints: {
      sbi: { pointPct: 0.0500 },
      rakuten: { pointPct: 0.0000 },
      monex: { pointPct: 0.0300 },
    },
  },
  {
    id: 'fund-89311221',
    nameJa: 'ＳＢＩ・Ｖ・全世界株式インデックス・ファンド',
    symbolOrCode: '89311221',
    isin: 'JP90C000MWH8',
    issuerJa: 'SBIアセットマネジメント',
    brokeragePoints: {
      sbi: { pointPct: 0.0220 },
      rakuten: { pointPct: null },
      monex: { pointPct: null },
    },
  },
  {
    id: 'fund-8931217C',
    nameJa: 'ＳＢＩ・全世界株式インデックス・ファンド',
    symbolOrCode: '8931217C',
    isin: 'JP90C000FQR3',
    issuerJa: 'SBIアセットマネジメント',
    brokeragePoints: {
      sbi: { pointPct: 0.0220 },
      rakuten: { pointPct: 0.0000 },
      monex: { pointPct: 0.0220 },
    },
  },
  {
    id: 'fund-9I31123A',
    nameJa: '楽天・プラス・オールカントリー株式インデックス・ファンド',
    symbolOrCode: '9I31123A',
    isin: 'JP90C000Q2W2',
    issuerJa: '楽天投信投資顧問',
    brokeragePoints: {
      sbi: { pointPct: null },
      rakuten: { pointPct: 0.0170 },
      monex: { pointPct: null },
    },
  },
];
