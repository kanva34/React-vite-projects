import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        const rates = res[currency];
        // Round all numbers to 2 decimals
        const roundedRates = Object.fromEntries(
          Object.entries(rates).map(([key, value]) => [key, Number(value.toFixed(2))])
        );
        setData(roundedRates);
      })
      .catch((err) => console.error("Error fetching currency data:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
