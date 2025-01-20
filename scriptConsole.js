
function isPalindrome(number){

    const str = number.toString();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

const number = prompt("Enter a number");

if (isPalindrome(number)){
    console.log("The number ", number, " is Palindrome number");
}
else{
    console.log("The number ", number, " is not Palindrome number");
}