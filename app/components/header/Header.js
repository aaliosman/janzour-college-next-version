"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import SlidingMenu from "../SlidingMenu/SlidingMenu";
import SearchInput from "./SearchInput";
import styles from "./Header.module.scss";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    setSearch(!search);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.language}>
          <div className={styles.language_box}>
            <p className="">العربية</p>
            <img
              src="/images/libya-flag.png"
              alt="libyan-Flag"
              width={30}
              height={30}
            />
          </div>
        </div>

        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </Link>

        <div className={styles.menu}>
          {search ? (
            <SearchInput />
          ) : (
            <div
              className={styles.search}
              onClick={(e) => {
                handleClick();
              }}
            >
              <SearchIcon style={{ width: "24px", height: "24px" }} />
            </div>
          )}

          {isMenuOpen && (
            <SlidingMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
          <button className={styles.hamburger} onClick={handleOpenMenu}>
            <p>القائمة</p>
            <div>
              <MenuIcon />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Header;
