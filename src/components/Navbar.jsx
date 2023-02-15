import "../css/App.css";
import logo from "../assets/djezzy.svg";
import { MenuIcon } from "../assets/icons";
import ProfileBtn from "./ProfileBtn";
import { useRef } from "react";

function Logo({ className }) {
  return <img className={`${className}`} src={logo} alr="logo"></img>;
}

export default function Navbar() {
  let navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
    navRef.current.classList.toggle("hidden");
  };
  return (
    <nav className="z-50 bg-zinc-900 w-full shadow-lg sticky top-0">
      <div className="md:container flex justify-between px-4 py-4">
        <div className="flex justify-between gap-4 flex-grow md:flex-grow-0">
          <Logo className="h-16"></Logo>
          <h1 className="text-white text-lg xs:text-3xl font-semibold m-auto">
            SNOC DASHBOARD
          </h1>
        </div>
        <button onClick={showNavbar} className="block md:hidden z-20">
          <MenuIcon className="w-10 h-10 my-auto" />
        </button>
        <ul
          ref={navRef}
          className="nav-menu z-10 hidden md:flex my-auto md:gap-4"
        >
          <li className="nav-menu-button">
            <a href="#">Overview</a>
          </li>
          <li className="nav-menu-button">
            <a href="#">Points Of Sale</a>
          </li>
          <li className="nav-menu-button">
            <a href="#">History</a>
          </li>
          <li id="profile-btn" className="nav-menu-button">
            <ProfileBtn>User</ProfileBtn>
          </li>
        </ul>
      </div>
    </nav>
  );
}
