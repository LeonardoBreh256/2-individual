document.getElementById('primeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');

    if (isPrime(number)) {
        resultElement.textContent = `${number} é um número primo.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${number} não é um número primo.`;
        resultElement.style.color = 'red';
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}