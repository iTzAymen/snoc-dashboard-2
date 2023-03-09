import "../css/App.css";
import logo from "../assets/djezzy.svg";
import { MenuIcon } from "../assets/icons";
import ProfileBtn, { ProfileCard } from "./ProfileBtn";
import { useEffect, useRef, useState } from "react";
import { Logout } from "../js/Login";
import DarkmodeToggle from "./DarkmodeToggle";

function Logo({ className }) {
  return (
    <img id="nav-logo" className={`${className}`} src={logo} alr="logo"></img>
  );
}

export default function Navbar() {
  let navRef = useRef();
  const [window_width, setWindow_width] = useState(window.innerWidth);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
    navRef.current.classList.toggle("hidden");
  };

  function handleScroll() {
    const logoRef = document.querySelector("#nav-logo");
    const titleRef = document.querySelector("#nav-title");
    if (window.scrollY > 0) {
      logoRef.classList.remove("h-16");
      logoRef.classList.add("h-10");

      titleRef.classList.add("xs:text-2xl");
      titleRef.classList.remove("xs:text-3xl");
    } else {
      logoRef.classList.remove("h-10");
      logoRef.classList.add("h-16");

      titleRef.classList.add("xs:text-3xl");
      titleRef.classList.remove("xs:text-2xl");
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    function handle_resize() {
      setWindow_width(window.innerWidth);
    }

    window.addEventListener("resize", handle_resize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

  if (window.location.href.endsWith("/login")) {
    return (
      <nav className="z-50 bg-white dark:bg-zinc-900 w-full shadow-lg sticky top-0">
        <div className="md:container flex justify-between px-4 py-4">
          <div className="flex mx-auto justify-between gap-4 flex-grow md:flex-grow-0">
            <Logo className="h-16 transition-all"></Logo>
            <h1
              id="nav-title"
              className="text-dark dark:text-white transition-all text-lg xs:text-3xl font-semibold m-auto"
            >
              SNOC DASHBOARD
            </h1>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="z-50 bg-white dark:bg-zinc-900 w-full shadow-lg sticky top-0">
      <div className="md:container flex justify-between px-4 py-4">
        <div className="flex justify-between gap-4 flex-grow md:flex-grow-0">
          <Logo className="h-16 transition-all"></Logo>
          <h1
            id="nav-title"
            className="text-dark dark:text-white transition-all text-lg xs:text-3xl font-semibold m-auto"
          >
            SNOC DASHBOARD
          </h1>
        </div>
        <button
          onClick={showNavbar}
          className="block md:hidden z-20 focus-zinc"
        >
          <MenuIcon className="w-10 h-10 my-auto" />
        </button>
        <ul
          ref={navRef}
          className="nav-menu z-10 hidden md:flex my-auto md:gap-4"
        >
          {window_width <= 768 && (
            <ProfileCard username="SNOC USER" rank="admin" />
          )}
          <a href="/" className="nav-menu-button rounded-lg focus-zinc">
            Overview
          </a>
          <a href="/pos" className="nav-menu-button rounded-lg focus-zinc">
            Points Of Sale
          </a>
          <a href="/history" className="nav-menu-button rounded-lg focus-zinc">
            History
          </a>
          {window_width > 768 && (
            <li id="profile-btn" className="nav-menu-button">
              <ProfileBtn>Profile</ProfileBtn>
            </li>
          )}

          {window_width <= 768 && (
            <div className="w-full flex flex-col gap-2 mt-auto">
              <div className="mx-6 p-3 border rounded-full thin-zinc-border">
                <DarkmodeToggle />
              </div>
              <button className="hidden mx-6 p-3 rounded-full border-2 border-zinc-900 text-zinc-900 hover:border-zinc-900 hover:text-white hover:bg-zinc-900  dark:border-zinc-500 dark:text-zinc-500 dark:hover:border-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-dark">
                Settings
              </button>
              <button
                onClick={Logout}
                className="mx-6 p-3 rounded-full border-2 border-rose-700 text-rose-700 hover:bg-rose-700 hover:text-white   dark:border-rose-900 dark:text-rose-900 dark:hover:bg-rose-900 dark:hover:text-white"
              >
                Sign out
              </button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
