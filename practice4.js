function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    let { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== "string" ||
        typeof testScore !== "number" || testScore > 50 ||
        typeof schoolGrade !== "number" || schoolGrade > 30 ||
        typeof isFFamily !== "boolean") {

            return "Invalid Input";
        }

        let finalScore = testScore + schoolGrade;
        if(isFFamily){
            finalScore +=20;
        }

        return finalScore >=80;
}
 console.log(calculateFinalScore({
    name:"Eyamin",
    testScore: 40,
    schoolGrade: 15,
    isFFamily:true
 }));