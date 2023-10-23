dayRate = a => a*8

console.log(dayRate(89));

daysInBudget = (a) => {
    console.log(Math.floor(a/dayRate(89)))
}
daysInBudget(20000);

const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const billableDaysPerMonth = 22;
    const discountRate = (100 - (discount * 100)) / 100;
    const excessDays = numDays % billableDaysPerMonth;

    const finalRate = (dayRate(ratePerHour) * (numDays - excessDays) * discountRate) + (dayRate(ratePerHour) * excessDays);
    return Math.ceil(finalRate);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))
console.log("🤓")