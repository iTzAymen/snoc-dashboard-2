import "../css/App.css";
import logo from "../assets/djezzy.svg";
import { MenuIcon } from "../assets/icons";
import ProfileBtn, { ProfileCard } from "./ProfileBtn";
import { useEffect, useRef, useState } from "react";

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
      <nav className="z-50 bg-zinc-900 w-full shadow-lg sticky top-0">
        <div className="md:container flex justify-between px-4 py-4">
          <div className="flex mx-auto justify-between gap-4 flex-grow md:flex-grow-0">
            <Logo className="h-16 transition-all"></Logo>
            <h1
              id="nav-title"
              className="text-white transition-all text-lg xs:text-3xl font-semibold m-auto"
            >
              SNOC DASHBOARD
            </h1>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="z-50 bg-zinc-900 w-full shadow-lg sticky top-0">
      <div className="md:container flex justify-between px-4 py-4">
        <div className="flex justify-between gap-4 flex-grow md:flex-grow-0">
          <Logo className="h-16 transition-all"></Logo>
          <h1
            id="nav-title"
            className="text-white transition-all text-lg xs:text-3xl font-semibold m-auto"
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
          {window_width <= 650 && <ProfileCard username="Aymen" rank="admin" />}
          <a href="/" className="nav-menu-button rounded-lg focus-zinc">
            Overview
          </a>
          <a href="/pos" className="nav-menu-button rounded-lg focus-zinc">
            Points Of Sale
          </a>
          <a href="/history" className="nav-menu-button rounded-lg focus-zinc">
            History
          </a>
          {window_width > 650 && (
            <li id="profile-btn" className="nav-menu-button">
              <ProfileBtn>User</ProfileBtn>
            </li>
          )}

          {window_width <= 650 && (
            <div className="w-full flex flex-col gap-2 mt-auto">
              <button className="mx-6 p-3 rounded-lg border-2 border-zinc-500 text-zinc-500 hover:border-zinc-50 hover:text-zinc-50">
                Settings
              </button>
              <button className="mx-6 p-3 rounded-lg border-2 border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white hover:bg-opacity-50">
                Sign out
              </button>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
