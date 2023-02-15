import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Login from "./js/login";
import { getDataAsync } from "./js/Data";
import { useEffect, useState } from "react";

function App() {
  const [overviewData, setOverviewData] = useState();

  useEffect(() => {
    console.log("get data");
    Login("user@gmail.com", "password");
    const tempOverviewData = localStorage.getItem("overviewData");
    if (tempOverviewData) {
      setOverviewData(JSON.parse(tempOverviewData));
    }
    getDataAsync().then((d) => {
      if (d.success) {
        setOverviewData(d.data);
        localStorage.setItem("overviewData", JSON.stringify(d.data));
        console.log("data received");
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
