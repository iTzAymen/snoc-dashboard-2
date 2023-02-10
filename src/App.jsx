import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Login from "./js/login";
import { getDataAsync } from "./js/Data";
import { useEffect, useState } from "react";

function App() {
  const tempData = localStorage.getItem("overviewData")
    ? JSON.parse(localStorage.getItem("overviewData"))
    : null;
  const [overviewData, setOverviewData] = useState();

  useEffect(() => {
    console.log("get data");
    Login("user@gmail.com", "password");
    getDataAsync().then((d) => {
      if (d.success) {
        setOverviewData(d.data);
        localStorage.setItem("overviewData", JSON.stringify(d.data));
      }
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className=" md:container p-4 md:mt-4">
        <Overview overviewData={overviewData} />
      </main>
    </div>
  );
}

export default App;
