import { useEffect } from "react";
import Routes from "./Routes";

function App() {
  useEffect(() => {
    localStorage.getItem("dark") === "true" &&
      document.body.classList.toggle("dark");
  }, []);
  return <Routes />;
}

export default App;
