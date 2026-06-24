export const amountHelper = (amount) => {
  if (amount >= 1000 && amount < 1000000) {
    return `${Math.round(amount / 1000)} тыс.`;
  }
  if (amount >= 1000000 && amount < 1000000000) {
    return `${Math.round(amount / 1000000)} млн.`;
  }
  if (amount >= 1000000000) {
    return `${Math.round(amount / 1000000000)} млрд.`;
  }
  return amount;
};
