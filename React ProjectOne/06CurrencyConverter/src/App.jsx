import { useState } from "react";
import { InputBox } from "./components/InputBox";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  // Fetching currency info using custom hooks
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
const convert = (e) => {
  setConvertedAmount(amount * currencyInfo[to])
}
console.log(options);
  return (
    <>
      <h1 className="text-green-50">Hello Vite + React!</h1>
      <App />
      <InputBox />
      <useCurrencyInfo />
    </>
  );
}

export default App;
