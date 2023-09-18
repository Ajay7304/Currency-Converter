document.addEventListener("DOMContentLoaded", () => {
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const convertButton = document.getElementById("convert");
  const resultText = document.getElementById("result");

  // Make API request to fetch currency data and populate dropdowns
  fetch(
    "https://v6.exchangerate-api.com/v6/04a0cbf41b6b9f8e1e7a3258/latest/USD"
  )
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data.conversion_rates);
      currencies.forEach((currency) => {
        fromCurrencySelect.innerHTML += `<option value="${currency}">${currency}</option>`;
        toCurrencySelect.innerHTML += `<option value="${currency}">${currency}</option>`;
      });
    })
    .catch((error) => {
      console.error(error);
    });
  // Handle currency conversion on button click

  convertButton.addEventListener("click", () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Make API request to get exchange rate
    fetch(
      `https://v6.exchangerate-api.com/v6/04a0cbf41b6b9f8e1e7a3258/latest/${fromCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        resultText.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
          2
        )} ${toCurrency}`;
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
