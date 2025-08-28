function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Name";
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= "0" && name[i] <= "9"){
            return true;
        }
    }
    return false;

}

console.log(checkDigitsInName("eyamin87"));
console.log(checkDigitsInName(456));
console.log(checkDigitsInName("sumon"));


