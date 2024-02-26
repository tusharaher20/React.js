import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  // const [count, setCount] = useState(0);
  const fruits = [
    { id: 1, name: "apple", calouries: 65 },
    { id: 2, name: "banana", calouries: 244 },
    { id: 3, name: "coconut", calouries: 55 },
    { id: 4, name: "pineapple", calouries: 47 },
    { id: 5, name: "orange", calouries: 138 },
  ];
  const vegetables = [
    { id: 6, name: "carrot", calouries: 65 },
    { id: 7, name: "brinjal", calouries: 244 },
    { id: 8, name: "potato", calouries: 55 },
    { id: 9, name: "ladyfinger", calouries: 47 },
    { id: 10, name: "broccolli", calouries: 138 },
  ];

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      ) }
    </>
  );
}

export default App;
