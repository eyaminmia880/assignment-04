function sendNotification(email) {
    if (typeof email !== "string" || !email.includes("@")){
        return "Invalid Email";
    }

    let parts = email.split("@");

    let username = parts[0];
    let domain = parts[1];

    if(username === "" || domain === ""){
        return "Invalid Email";
    }

    return `${username} sent you an email from ${domain}`;
}

console.log(sendNotification('eyamin@gmail.com'));
console.log(sendNotification('eyamin-gmail.com'));