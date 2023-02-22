import Overview from "../components/Overview";
import Login from "../js/login";
import { useEffect, useState } from "react";

export default function HomePage() {
  useEffect(() => {
    Login("user@gmail.com", "password");
  }, []);

  return (
    <main className=" md:container p-4 md:mt-4">
      <Overview />
    </main>
  );
}
