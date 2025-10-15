import React from "react";

function Input({
  label,
  ammount,
  onAmmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  ammountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <>
      <div
        className={` justify-center p-3 rounded-lg text-sm bg-[#a6dddd] flex ${className}`}
      >
        <div className="w-1/2 ">
          <label className=" ">{label}</label>
          <input
            className=" outline-none w-full text-center bg-white py-1.5 border "
            type="number"
            placeholder="Ammount"
            disabled={ammountDisable}
            value={ammount}
            onChange={(e) =>
              onAmmountChange && onAmmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className=" w-1/2 flex flex-wrap justify-end text-right   ">
          <p className="text-black  mb-2 w-full  ">CURRENCY TYPE</p>
          <select
            className=" rounded px-1  bg-white  py-1 cursor-pointer  border "
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
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
    </>
  );
}

export default Input;
