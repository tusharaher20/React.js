
import { useState } from "react";
import "./App.css";
import UserGreeting from "./UserGreeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserGreeting isLoggedIn={false} username="tusharaher20" />
      <UserGreeting />
    </>
  );
}

export default App;
