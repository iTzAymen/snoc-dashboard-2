import Overview from "../components/Overview";
import { Login } from "../js/Login";
import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import { timeout } from "../js/Utils";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const loadingTime = 1500;
  async function stopLoading() {
    await timeout(loadingTime);
    setLoading(false);
  }
  useEffect(() => {
    Login("user@gmail.com", "password");
    stopLoading();
  }, []);

  return (
    <>
      <LoadingPage loading={loading} />
      <main className=" md:container p-4 md:mt-4 min-screen-height">
        <Overview />
      </main>
    </>
  );
}
