function App() {
  const toggleDarkMode = () =>
    document.querySelector("body").classList.toggle("dark");

  return (
    <header className="h-screen bg-base-300 dark:bg-base-900 header min-h-512">
      <nav className="flex items-center h-20 px-8">
        <a href="/" className="dark:text-white">
          <svg
            className="fill-current"
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </a>
        <nav className="grid items-center grid-flow-col gap-6 ml-auto font-semibold dark:text-white">
          <div className="hidden grid-flow-col gap-6 lg:grid">
            <a href="/">Fiverr Business</a>
            <a href="/">Explore</a>
            <a href="/">English</a>
            <a href="/">INR</a>
            <a href="/">Become a Seller</a>
          </div>
          <a href="/">Sign in</a>
          <a
            href="/"
            className="h-8 px-4 transition-colors duration-200 border rounded-md border-base-900 dark:border-white hover:bg-primary-500 hover:border-primary-500 focus:bg-primary-600"
          >
            Join
          </a>
          <button
            onClick={toggleDarkMode}
            className="grid h-8 px-2 transition-colors duration-200 border rounded-md border-base-900 dark:border-white hover:bg-primary-500 hover:border-primary-500 focus:bg-primary-600 place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
        </nav>
      </nav>
      <section className="flex items-center h-full px-8 -mt-20">
        <div className="md:w-3/4 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl dark:text-white font-bold !leading-snug mb-6">
            Find the perfect <span className="italic">freelance</span> services
            for your business
          </h1>
          <div className="flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-5 h-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="w-full h-12 pl-10 rounded-l-md focus:shadow-none focus:outline-none focus:ring-0"
              placeholder='Try "building mobile app"'
            />
            <button className="h-12 px-6 font-bold text-white rounded-l-none bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 focus:outline-none rounded-r-md">
              Search
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium dark:text-white">
            <span>Popular:</span>
            <a href="#" className="tag">
              Web Design
            </a>
            <a href="#" className="tag">
              WordPress
            </a>
            <a href="#" className="tag">
              Logo Design
            </a>
            <a href="#" className="tag">
              Dropshipping
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default App;
