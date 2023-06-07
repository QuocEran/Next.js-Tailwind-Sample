export function exchangePoint(point: number, ratio: number): number {
  const response = Number((point * ratio * 1000).toFixed(0));

  return response;
}
