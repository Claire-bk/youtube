import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const mainWrapper = "flex p-2 items-center justify-center bg-black";
const logoWrapper = "";
const classLogo = "text-lg text-rose-600 font-bold p-2";
const inputWrapper = "p-2";
const classInput =
  "border-solid border border-gray-500 rounded p-1 text-gray-400 bg-black";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleBtnClick = () => {};

  const handleLogoClick = () => {
    searchInput.current.value = "";
    setSearch("");
  };

  const handleInputChange = () => {
    setSearch(searchInput.current.value);
  };

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <nav className={mainWrapper}>
      <Link to="/" className={logoWrapper} onClick={handleLogoClick}>
        {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
        <h1 className={classLogo}>youtube</h1>
      </Link>
      <div className={inputWrapper}>
        <input
          className={classInput}
          type="search"
          placeholder="Search..."
          id="search"
          name="q"
          size="50"
          ref={searchInput}
          onChange={handleInputChange}
        />
        <Link to={`/videos/${search}`} className={inputWrapper}>
          <button onClick={handleBtnClick}>🔎</button>
        </Link>
      </div>
    </nav>
  );
}
