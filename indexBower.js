window.totalRepayment = function (amount, term, weeklyRate, originationFeePercentage) {
    return (amount * term * weeklyRate) + amount + (amount * originationFeePercentage);
}
window.originationFee = function (amount, originationFeePercentage) {
    return amount * originationFeePercentage;
}
window.weeklyInterestPayment = function (amount, weeklyRate) {
    return amount * weeklyRate;
}
window.weeklyPrincipalPayment = function (amount, term) {
    return amount / term;
}
window.weeklyTotalPayment = function (amount, term, weeklyRate) {
    return (amount / term) + amount * weeklyRate;
}
window.centsOnTheDollar = function (amount, term, weeklyRate, originationFeePercentage) {
    return ((amount * originationFeePercentage) + (amount * term * weeklyRate)) / amount;
}
window.totalFinanceCharges = function (amount, term, weeklyRate, originationFeePercentage) {
    return (amount * originationFeePercentage) + (amount * term * weeklyRate);
}