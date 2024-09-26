/* eslint-disable react/prop-types */
import { useId } from "react";
function InputBox({
  label, //from and to pass krna hai label se
  amount, //kaise amount display krna hai
  onAmountChange, //amount ka state hone pe
  onCurrencyChange, //currency ka state change hone pe
  currencyOptions = [], // all the currencies such as inr, usd, euro will be stored in an array
  selectCurrency = "usd", //the by default currency we are selecting is usd
  amountDisable = false,
  currencyDisable = false,
  className = "", //if user khudki css likhna chahta ho uskeliye
}) {
  const amountInputId = useId(); //this function gives a unique value of random numbers converted to string

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
