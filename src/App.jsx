import { useState } from "react";
import { Input } from "./Components";
import useCurrency from "./hooks/Currency";

function App() {
  const [ammount, setAmmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(convertedAmmount);
  };

  const convert = () => {
    setConvertedAmmount(ammount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center">
      <div className=" border-2 w-200   bg-[#87d3d3]  h-105 m-auto mt-60 p-auto  text-center items-center rounded ">
        <h1 className=" mt-2">CURRENCY CONVERTER</h1>
        <div className="  p-2 ">
          <div className="  p-2">
            <form
              className="bg-[#87d3d3]"
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="shadow m-2   rounded ">
                <Input
                  label="From"
                  className="bg-[#87d3d3]"
                  ammount={ammount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmmountChange={(ammount) => setAmmount(ammount)}
                />
              </div>

              <div className=" bg-[#87d3d3] p-2 ">
                <button
                  className="shadow rounded p-2 text-white hover:bg-blue-800 bg-blue-600"
                  type="button"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="shadow rounded m-2    ">
                <Input
                  label="TO"
                  ammount={convertedAmmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  ammountDisable
                />
              </div>
              <button
                className=" rounded  m-2  p-2  text-white hover:bg-blue-800 bg-blue-600 "
                type="submit"
              >
                CONVERT {from.toUpperCase()} TO {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
