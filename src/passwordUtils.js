function GeneratePassword(passwordLength) {   

    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

    let password = "";

    for(let i=0; i<passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}


export default GeneratePassword