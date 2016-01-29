exports.totalRepayment = function (amount, term, weeklyRate, originationFeePercentage) {
    return (amount * term * weeklyRate) + amount + (amount * originationFeePercentage);
}
exports.originationFee = function (amount, originationFeePercentage) {
    return amount * originationFeePercentage;
}
exports.weeklyInterestPayment = function (amount, weeklyRate) {
    return amount * weeklyRate;
}
exports.weeklyPrincipalPayment = function (amount, term) {
    return amount / term;
}
exports.weeklyTotalPayment = function (amount, term, weeklyRate) {
    return (amount / term) + amount * weeklyRate;
}
exports.centsOnTheDollar = function (amount, term, weeklyRate, originationFeePercentage) {
    return ((amount * originationFeePercentage) + (amount * term * weeklyRate)) / amount;
}
exports.totalFinanceCharges = function (amount, term, weeklyRate, originationFeePercentage) {
    return (amount * originationFeePercentage) + (amount * term * weeklyRate);
}