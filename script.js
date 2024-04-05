

document.getElementById("checkPalindrome").addEventListener("click", palindromeChecker);

function isPalindrome(str) {

    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversestr = cleanstr.split("").reverse().join("");
    return cleanstr === reversestr;
}

function palindromeChecker() {

    const userInput = document.getElementById("inputText");
    const result = document.getElementById("result");

    if(isPalindrome(userInput.value)) {
        alert("Your input is a palindrome!");
        result.textContent = `"${userInput.value} "Your input is a palindrome!`;
    } else {    
        alert("Your input is not a palindrome!");
        result.textContent = `"${userInput.value} "Your input is not a palindrome!`;
    }

}