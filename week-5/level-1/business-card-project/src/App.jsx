import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BusinessCard from "./BusinessCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BusinessCard
        name="Manik"
        description="Hi, I'm a Software engineer."
        interests={["Coding", "Reading books", "Web dev"]}
      ></BusinessCard>
      <BusinessCard
        name="Manik"
        description="Hi, I'm a Software engineer."
        interests={["Coding", "Reading books", "Web dev"]}
      ></BusinessCard>
      <BusinessCard
        name="Manik"
        description="Hi, I'm a Software engineer."
        interests={["Coding", "Reading books", "Web dev"]}
      ></BusinessCard>
    </>
  );
}

export default App;
