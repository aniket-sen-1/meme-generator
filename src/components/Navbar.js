import React from "react";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="header--nav header_container">
        <img className="header--nav--logo" src="/images/logo.png" alt="logo" />
        <h1 className="header--nav--heading">Meme Generator</h1>
        <p className="header--nav--title"> By Aniket Sen 👨🏻‍💻</p>
      </nav>
    </header>
  );
}
