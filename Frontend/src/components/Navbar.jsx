import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [about, setAbout] = useState(false);

  const menuClick = () => setMenu(!menu);
  const handleAbout = () => setAbout(!about);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/">LearningBits</a>
        </div>
        <div className="sm-logo">
          <a href="/">
          <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 16"
          width="1em"
          height="1em"
          >
         <path
         fill="#fff"
         d="m11 0 5 5-2 2v5L3 16l-.793-.793 4.275-4.275a2 2 0 1 0-1.414-1.414L.793 13.793 0 13 4 2h5l2-2Z"
         />
        </svg>
         </a>
        </div>
        <div className="nav">
          {["Explore", "Tools", "Studytips", "About"].map((item, index) => (
            <div className="nav-links" key={index}>
              {item !== "About" ? (
                <a className="inline-flex w-full justify-center gap-x-1.5" href={`/${item.toLowerCase()}`}>
                  {item}
                </a>
              ) : (
                <button
                  className="inline-flex w-full justify-center gap-x-1.5"
                  onClick={handleAbout}
                >
                  {item}
                  <svg
                    className="dropdown"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
              {item === "About" && (
                <div className={`about-dropdown-md ${about ? 'block' : 'hidden'}`}>
                  <div className="about-links-md">
                    <a href="/about/careers" className="block py-2 text-sm border-white border-2 space-y-2 rounded-3xl">Careers</a>
                    <a href="/about/team" className="block py-2 text-sm w-20  border-white border-2 border-t-0 space-y-2 rounded-3xl">Team</a>
                    <a href="/about/contact" className="block py-2 text-sm w-20 border-white border-2 border-t-0 space-y-2 rounded-3xl">Contact</a>
                  </div>
                </div>
              )}
            </div>
          ))}
          <a className="login" href="/">Get Started</a>
        </div>
        <button
          className={`menu-btn ${menu ? 'rotate-btn' : ''}`}
          onClick={menuClick}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 18a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM11 11a1 1 0 100 2h8a1 1 0 100-2h-8z"
            />
          </svg>
        </button>
      </nav>

      <div className={`small-menu ${menu ? 'block' : 'hidden'}`}>
        {["Explore", "Tools", "Studytips", "About"].map((item, index) => (
          <div className="small-menu-div" key={index}>
            {item !== "About" ? (
              <a className="small-menu-items" href={`/${item.toLowerCase()}`}>
                {item === "Explore" && (
                  <svg
                    className="small-logos"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M10 20a10 10 0 110-20 10 10 0 010 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                )}
                {item === "Tools" && (
                  <svg
                    className="small-logos"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 21h4L20 8a1.5 1.5 0 00-4-4L3 17v4M14.5 5.5l4 4" />
                    <path d="M12 8L7 3 3 7l5 5M7 8L5.5 9.5M16 12l5 5-4 4-5-5M16 17l-1.5 1.5" />
                  </svg>
                )}
                {item === "Studytips" && (
                  <svg
                    className="small-logos"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z" />
                    <path d="M8 6h9v2H8z" />
                  </svg>
                )}
              </a>
            ) : (
              <button
                className="small-menu-items w-12"
                onClick={handleAbout}
              >
                <svg
                  className="small-logos w-14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  id="about"
                >
                  <path d="M19.536 9.146c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.505h2.35v1.15c.4-.463 1.302-1.26 2.71-1.26 1.247 0 2.096.526 2.477 1.59.524-.761 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.963v6.24h-2.353l.005-.007z" />
                </svg>
              </button>
            )}
            {item === "About" && about && (
              <>
                {['careers', 'team', 'contact'].map((i, index) => (
                  <div key={index} className="about-sm">
                    <a className="about-links-sm" href={`/${i.toLowerCase()}`}>
                    {i === "contact" && (  
                    <svg
                    className="small-logos w-14"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    >
                    <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 00-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 01553.1 553 395.34 395.34 0 01437 633.8L353.2 550a80.83 80.83 0 00-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 00-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
                    </svg>)}
                    {i === "team" && (
                       <svg
                       className="small-logos w-14"
                       viewBox="0 0 1024 1024"
                       fill="currentColor"
                       height="1em"
                       width="1em"
                     >
                       <path d="M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" />
                     </svg>
                    )}
                    {i === "careers" && (
                      <svg
                      className="small-logos w-14"
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      height="1em"
                      width="1em">
                       <path d="M900 200c28 0 51.667 10 71 30s29 43.333 29 70v550c0 28-9.667 51.667-29 71s-43 29-71 29h-50V200h50M0 300c0-26.667 10-50 30-70s43.333-30 70-30h50v750h-50c-26.667 0-50-9.667-70-29S0 878 0 850V300M670 96v104h110v750H220V200h110V96c65.333-30.667 122-46 170-46s104.667 15.333 170 46m-60 104v-66c-34.667-16-71.333-24-110-24-36 0-72.667 8-110 24v66h220" />
                       </svg>)}
                    </a>
                    <div className="tooltip-a">{`${i}`}</div>
                  </div>
                ))}
              </>
            )}
            <div className="tooltip">{item}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
