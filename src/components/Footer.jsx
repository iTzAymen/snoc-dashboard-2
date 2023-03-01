export default function Footer() {
  return (
    <footer className="bg-white shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-zinc-900">
      <p className="mb-4 text-sm text-center text-zinc-500 dark:text-zinc-400 sm:mb-0">
        &copy; 2022-2023{" "}
        <a
          href="https://www.djezzy.dz"
          className="hover:underline"
          target="_blank"
        >
          Djezzy.dz
        </a>
        . All rights reserved.
      </p>
      <div className="flex justify-center items-center space-x-1">
        <a
          target="_blank"
          href="https://www.facebook.com/djezzy"
          data-tooltip-target="tooltip-facebook"
          className="inline-flex justify-center p-2 text-zinc-500 rounded-lg cursor-pointer dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-600"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook</span>
        </a>
        <div
          id="tooltip-facebook"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-zinc-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-zinc-700"
        >
          Like us on Facebook
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          target="_blank"
          href="https://twitter.com/djezzy"
          data-tooltip-target="tooltip-twitter"
          className="inline-flex justify-center p-2 text-zinc-500 rounded-lg cursor-pointer dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-600"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
          <span className="sr-only">Twitter</span>
        </a>
        <div
          id="tooltip-twitter"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-zinc-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-zinc-700"
        >
          Follow us on Twitter
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          target="_blank"
          href="https://www.youtube.com/user/djezzytube"
          data-tooltip-target="tooltip-youtube"
          className="inline-flex justify-center p-2 text-zinc-500 rounded-lg cursor-pointer dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-600"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            ></path>
          </svg>
          <span className="sr-only">Youtube</span>
        </a>
        <div
          id="tooltip-youtube"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-zinc-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-zinc-700"
        >
          Subscribe to us on Youtube
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/djezzy"
          data-tooltip-target="tooltip-linkedin"
          className="inline-flex justify-center p-2 text-zinc-500 rounded-lg cursor-pointer dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-600"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
          </svg>
          <span className="sr-only">Linkedin</span>
        </a>
        <div
          id="tooltip-linkedin"
          role="tooltip"
          className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-zinc-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-zinc-700"
        >
          Follow us on Linkedin
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </footer>
  );
}
