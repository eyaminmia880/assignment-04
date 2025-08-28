function calculateTax(income, expenses) {
    if (typeof income !== "number" || typeof expenses !== "number" || income <= 0 || expenses <= 0) {
        return "Invalid Input";
    }  
    else if (expenses > income){
        return "Invalid Input";
    }

    let profit = income - expenses;
    let tax = profit * 0.20;
    return tax;
}

console.log(calculateTax(10000, 30000));
console.log(calculateTax(34000, 17530));
console.log(calculateTax(5000, 1500));