import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";
const mainWrapper =
  "w-full flex p-4 text-2xl border-b border-zinc-600 items-center justify-center";
const logoWrapper = "flex items-center";
const logoImg = "text-4xl text-brand";
const logoText = "ml-2 text-3xl font-bold";
const inputWrapper = "w-full flex justify-center";
const inputField = "w-7/12 p-2 outline-none bg-black text-gray-50";
const searchImg = "bg-zinc-600 px-4";

export default function SearchHeader() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleLogoClick = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header className={mainWrapper}>
      <Link to="/" className={logoWrapper} onClick={handleLogoClick}>
        <BsYoutube className={logoImg} />
        <h1 className={logoText}>Youtube</h1>
      </Link>
      <form className={inputWrapper} onSubmit={handleSubmit}>
        <input
          className={inputField}
          type="search"
          placeholder="Search..."
          // id="search"
          // name="q"
          size="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={searchImg} onClick={handleSubmit}>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
