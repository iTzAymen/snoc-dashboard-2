import { useEffect, useRef, useState } from "react";
import { Login } from "../js/Login";
import { Eye, EyeSlash, Spinner } from "../assets/icons";

export default function LoginPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const updateInfo = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setError(false);
    setLoading(true);
    const username_val = usernameRef.current.value;
    const password_val = passwordRef.current.value;
    Login(username_val, password_val).then((res) => {
      setLoading(false);
      if (res) {
        window.location.href = "/";
      } else {
        setError(true);
      }
    });
  };

  return (
    <div className="overflow-hidden relative bg-white dark:bg-zinc-900">
      <main className="md:container p-4 md:mt-4 min-screen-height flex flex-col">
        <form className=" thin-zinc-border bg-white dark:bg-zinc-900 shadow-lg dark:shadow-2xl z-20 rounded-xl w-full xs:min-w-[24rem] xs:w-1/3 mx-auto my-auto p-6 flex flex-col align-middle gap-6">
          <div id="description" className="">
            <h1 className=" mb-2 text-3xl font-semibold text-dark dark:text-zinc-200">
              Sign in
            </h1>
          </div>
          <div>
            <input
              name="username"
              required
              type="text"
              ref={usernameRef}
              placeholder="Username"
              className="bg-zinc-50 dark:bg-zinc-900 w-full rounded-lg p-3 focus-zinc placeholder:text-zinc-500 thin-zinc-border hover:border-zinc-300 dark:hover:border-zinc-500"
            ></input>
          </div>
          <div>
            <div className="relative ">
              <input
                name="password"
                required
                type={showPassword ? "text" : "password"}
                ref={passwordRef}
                placeholder="Password"
                className="bg-zinc-50 dark:bg-zinc-900 w-full rounded-lg p-3 focus-zinc placeholder:text-zinc-500 thin-zinc-border hover:border-zinc-300 dark:hover:border-zinc-500"
              ></input>
              {showPassword && (
                <EyeSlash
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer peer"
                />
              )}
              {!showPassword && (
                <Eye
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 cursor-pointer peer"
                />
              )}
            </div>
            <p className="text-sm mt-2 font-medium cursor-pointer hover:text-rose-700 dark:hover:text-rose-800 underline">
              Forgot password?
            </p>
          </div>
          <p className={`text-sm text-red-700 -mt-2 ${error ? "" : "hidden"}`}>
            Username or Password incorrect, please try again
          </p>
          <button
            onClick={updateInfo}
            className={`text-white bg-rose-700 dark:bg-zinc-700 border-rose-700 dark:border-zinc-600 border hover:bg-rose-900 dark:hover:bg-rose-900 active:bg-rose-900 hover:border-rose-900 dark:hover:border-rose-500 rounded-lg px-4 py-3 focus-zinc transition-all ${
              loading ? "pointer-events-none" : ""
            }`}
          >
            {loading && <Spinner className="" size="h-[24px]" />}
            {!loading && "Login"}
          </button>
          <div className=" h-1 w-full border-t border-zinc-800"></div>
          <p className="text-sm dark:text-white -mt-2">
            New member?{" "}
            <span className="font-medium cursor-pointer hover:text-rose-700 dark:hover:text-rose-800 underline">
              Request an account now
            </span>
          </p>
        </form>
      </main>
      <StockBackground
        className="absolute left-0 top-0 w-[1440px] xl:w-full z-0 aspect-video"
        color="#be123c80"
      />
    </div>
  );
}

function StockBackground({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlnssvgjs="http://svgjs.com/svgjs"
      width="1440"
      height="810"
      // preserveAspectRatio="none"
      viewBox="0 0 1440 810"
      className={className}
    >
      <g mask='url("#SvgjsMask1072")' fill="none">
        <use xlinkHref="#SvgjsSymbol1079" x="0" y="0"></use>
        <use xlinkHref="#SvgjsSymbol1079" x="0" y="720"></use>
        <use xlinkHref="#SvgjsSymbol1079" x="720" y="0"></use>
        <use xlinkHref="#SvgjsSymbol1079" x="720" y="720"></use>
      </g>
      <defs>
        <mask id="SvgjsMask1072">
          <rect width="1440" height="810" fill="#ffffff"></rect>
        </mask>
        <path
          d="M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z"
          id="SvgjsPath1077"
        ></path>
        <path
          d="M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z"
          id="SvgjsPath1073"
        ></path>
        <path
          d="M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z"
          id="SvgjsPath1076"
        ></path>
        <path d="M2 -2 L-2 2z" id="SvgjsPath1074"></path>
        <path d="M6 -6 L-6 6z" id="SvgjsPath1075"></path>
        <path d="M30 -30 L-30 30z" id="SvgjsPath1078"></path>
      </defs>
      <symbol id="SvgjsSymbol1079">
        <use xlinkHref="#SvgjsPath1073" x="30" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="30" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="30" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="30" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="30" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="30" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="30" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="30" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="30" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="30" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="30" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="30" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="90" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="90" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="90" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="90" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="90" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="90" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="90" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="90" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="90" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="90" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="90" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="90" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="150" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="150" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="150" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="150" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="150" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="150" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="150" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="210" y="30" stroke={color}></use>
        <use
          xlinkHref="#SvgjsPath1078"
          x="210"
          y="90"
          stroke={color}
          strokeWidth="3"
        ></use>
        <use xlinkHref="#SvgjsPath1076" x="210" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="210" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="210" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="210" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="210" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="210" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="210" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="210" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="210" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="210" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="270" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="270" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="270" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="270" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="270" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="270" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="270" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="270" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="270" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="270" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="270" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="270" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="330" y="30" stroke={color}></use>
        <use
          xlinkHref="#SvgjsPath1078"
          x="330"
          y="90"
          stroke={color}
          strokeWidth="3"
        ></use>
        <use xlinkHref="#SvgjsPath1076" x="330" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="330" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="330" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="330" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="330" y="390" stroke={color}></use>
        <use
          xlinkHref="#SvgjsPath1078"
          x="330"
          y="450"
          stroke={color}
          strokeWidth="3"
        ></use>
        <use xlinkHref="#SvgjsPath1076" x="330" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="330" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="330" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="330" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="390" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="390" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="390" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="390" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="390" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="390" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="390" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="390" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="390" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="390" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="390" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="390" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="450" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="450" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="450" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="450" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="450" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="450" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="450" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="510" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="510" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="510" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="510" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="510" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="510" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="510" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="570" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="570" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="390" stroke={color}></use>
        <use
          xlinkHref="#SvgjsPath1078"
          x="570"
          y="450"
          stroke={color}
          strokeWidth="3"
        ></use>
        <use xlinkHref="#SvgjsPath1077" x="570" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="570" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="570" y="690" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="630" y="30" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="630" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="630" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="630" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="630" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="630" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="630" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="630" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="630" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="630" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="630" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1073" x="630" y="690" stroke={color}></use>
        <use
          xlinkHref="#SvgjsPath1078"
          x="690"
          y="30"
          stroke={color}
          strokeWidth="3"
        ></use>
        <use xlinkHref="#SvgjsPath1075" x="690" y="90" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="690" y="150" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="690" y="210" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="690" y="270" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="690" y="330" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1077" x="690" y="390" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="690" y="450" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="690" y="510" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1074" x="690" y="570" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1076" x="690" y="630" stroke={color}></use>
        <use xlinkHref="#SvgjsPath1075" x="690" y="690" stroke={color}></use>
      </symbol>
    </svg>
  );
}
