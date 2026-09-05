export function formatPct(val: number, decimals: number = 4): string {
  return `${Number(val.toFixed(decimals))}%`;
}


