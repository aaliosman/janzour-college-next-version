"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SlidingMenu from "../SlidingMenu/SlidingMenu";
import Image from "next/image";
import styles from "./Header.module.scss";

const HeaderMobile = () => {
  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenSearch = () => {
    setSearch(true);
  };

  return (
    <>
      {search ? (
        <div className={styles.search_header}>
          <div className={styles.mobile_header_icons}>
            <div className={styles.close_icon}>
              <CloseIcon
                style={{ color: "white", width: "24px", height: "24px" }}
                onClick={(e) => {
                  setSearch(false);
                }}
              />
            </div>
            <div className={styles.arrow_back}>
              <ArrowBackIcon
                style={{ color: "white", width: "24px", height: "24px" }}
                onClick={(e) => {
                  setSearch(false);
                }}
              />
            </div>
          </div>
          <SearchInput
            customInputStyle={styles.input_custom_style}
            customParentStyle={styles.custom_parent_style}
          />
        </div>
      ) : (
        <div className={styles.mobile_header}>
          <div className={styles.mobile_h_content}>
            <Link href="/" className={styles.mobile_h_logo}>
              <Image
                src="/images/mobile-version-logo.png"
                alt="logo"
                width={151.49}
                height={70}
              />
            </Link>
            <div className={styles.mobile_h_menu}>
              <div
                className={styles.menu_icon_box}
                onClick={(e) => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <MenuIcon style={{ width: "18.67px", height: "17.33px" }} />
              </div>
              {isMenuOpen && (
                <SlidingMenu
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                  viewScreen={"mobile"}
                />
              )}
              <div className={styles.search_icon_box}>
                <SearchIcon
                  style={{ width: "18.67px", height: "17.33px" }}
                  onClick={(e) => {
                    handleOpenSearch();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={styles.divider}></div>
    </>
  );
};

export default HeaderMobile;
