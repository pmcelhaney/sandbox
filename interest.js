function calculateCompoundingInterest(principal, interestRate, years) {
  const days = years * 365;
  const dailyRate = annualRate / 365;
  return principal * Math.pow(1 + interestRate, days);
}
