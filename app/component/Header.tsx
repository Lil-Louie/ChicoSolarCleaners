export default function Header() {
  return (
      <header className="navbar flex justify-between items-center w-full border bg-black">

        <div className="navbar-left m-5 text-white">
          <a href="/" className="solano-logo" aria-label="Go to homepage">
            <h2>Chico Solar Cleaners</h2>
          </a>
        </div>


        <div className="navbar-right m-5 text-white rounded py-2 px-4 bg-blue-500">
          <a href="tel:+17078907349" className="call-button">
            Click here to call (707) 890-7349
          </a>
        </div>

    </header>

  );
}

