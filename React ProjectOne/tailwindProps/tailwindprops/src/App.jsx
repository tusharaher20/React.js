import { useState } from "react";
import Newton from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let infoHere = {
    name: "Tushar",
    age: "23years",
  };

  return (
    <div className="bg-blue">
      <h1 className="text-4xl text-red-600 bg-white font-bold text-center mb-5">
        Tailwind is kind
      </h1>
      <Newton myInfo="TusharaherisTheGreatest" btnText="clickhere" />

      <Newton myInfo="tusharaher20 is my username" btnText="donotclick" />
    </div>
  );
}

export default App;
