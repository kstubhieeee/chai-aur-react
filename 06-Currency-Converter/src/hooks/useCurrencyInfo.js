import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //useEffect dekhta hai ki ham koi variable ko ched rahe hai ki nai
  // if ched rahe hai then ye wapas wapas call hota jayega
  //yaha ham currency variable ko ched rhe hai isiliye usse as a parameter pass kiya
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //har ek api se json object string ke form mei aata hai, ye line of code usse json mei convert krti hai
      .then((res) => setData(res[currency])); //idhr ham data variable mei currency ka value store krre hai
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
