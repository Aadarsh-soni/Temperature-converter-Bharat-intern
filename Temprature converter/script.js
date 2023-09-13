document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert');

    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            alert('Please enter a valid temperature in Celsius.');
        }
    });
});
