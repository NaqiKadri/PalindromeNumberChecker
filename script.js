document.getElementById('palindromeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const number = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
    
    function isPalindrome(number) {
        const str = number.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    if (isPalindrome(number)) {
        resultDiv.innerHTML = `<p>The number ${number} is a Palindrome number.</p>`;
    } else {
        resultDiv.innerHTML = `<p>The number ${number} is not a Palindrome number.</p>`;
    }
});

document.getElementById('explanationButton').addEventListener('click', function() {
    const explanationDiv = document.getElementById('explanation');
    explanationDiv.classList.toggle('hidden');
});

// document.getElementById('videoButton').addEventListener('click', function() {
//     window.location.href = 'https://leetcode.com/problems/two-sum/editorial/';
// });
// Cause there is no proper video explanation for these specific problem regarding to this solution