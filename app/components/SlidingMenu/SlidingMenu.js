"use client";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { menuItems, menuItemsLeft } from "./NavItems";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const SlidingMenu = ({ setIsMenuOpen, isMenuOpen, viewScreen }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSublinkOpen, setIsSublinkOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (item) => (event) => {
    // event.preventDefault();
    if (item.sublinks) {
      setActiveItem(item.id === activeItem ? null : item.id);
      setIsSublinkOpen(item.id !== activeItem);
    } else {
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      x: "0%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const menuVariantsMobile = {
    hidden: {
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      y: "0%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  function getItemById(menuItems, activeId) {
    if (!menuItems) {
      return null;
    }
    for (const item of menuItems) {
      if (item.id === activeId) {
        return item;
      }
      if (item.sublinks) {
        const found = getItemById(item.sublinks, activeId);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  const subLinks = getItemById(menuItems, activeItem);
  const subLinksLeft = getItemById(menuItemsLeft, activeItem);

  const handleMouseEnter = (id) => {
    setActiveItem(id);
    setIsSublinkOpen(!isSublinkOpen);
  };

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <motion.div
      className={`sliding-menu`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={viewScreen === "mobile" ? menuVariantsMobile : menuVariants}
      role="dialog"
      aria-labelledby="menu-title"
      aria-hidden={!isMenuOpen}
    >
      <div className="menu-header">
        <h2 id="menu-title" className="sr-only">
          Navigation Menu
        </h2>
        <button
          className="menu-close"
          onClick={handleCloseMenu}
          aria-label="Close Menu"
        >
          <CloseIcon className="icon-close" />
        </button>
      </div>
      <div className="menu-content">
        <nav className="menu-items">
          <ul className="main-links-ul">
            {menuItems &&
              menuItems.map((item) => (
                <div key={item.id}>
                  <li
                    className={`li ${
                      item.hasOwnProperty("sublinks") && "hasSubLinks"
                    }`}
                    onClick={() => handleMouseEnter(item.id)}
                  >
                    {item.hasOwnProperty("sublinks") > 0 && (
                      <ArrowBackIcon
                        className="sub-link-icon"
                        style={{
                          color: activeItem === item.id ? "#00bafe" : "",
                        }}
                      />
                    )}
                    <Link
                      href={item.path || "#"}
                      onClick={handleLinkClick(item)}
                      className={activeItem === item.id ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                  {screenWidth < 767 && (
                    <ul className="sublinks-ul">
                      {item.sublinks &&
                        activeItem === item.id &&
                        screenWidth < 767 &&
                        isSublinkOpen &&
                        item.sublinks.map((sublink, index) => (
                          <li key={index} className="li">
                            {sublink.icon && sublink.icon}
                            <Link
                              href={sublink.path || "#"}
                              onClick={handleLinkClick(sublink)}
                              className={
                                activeItem === sublink.id ? "active" : ""
                              }
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
          </ul>
          {subLinks &&
            subLinks.sublinks &&
            screenWidth > 767 &&
            isSublinkOpen && (
              <ul className="sublinks-ul">
                {subLinks.sublinks.map((sublink, index) => (
                  <li key={index} className="li">
                    {sublink.icon && sublink.icon}
                    <Link
                      href={sublink.path || "#"}
                      onClick={handleLinkClick(sublink)}
                      className={activeItem === sublink.id ? "active" : ""}
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

          <ul className="main-links-ul">
            {menuItemsLeft &&
              menuItemsLeft.map((item) => (
                <div key={item.id}>
                  <li
                    className={`li ${
                      item.hasOwnProperty("sublinks") && "hasSubLinks"
                    }`}
                    onClick={() => handleMouseEnter(item.id)}
                  >
                    {item.hasOwnProperty("sublinks") > 0 && (
                      <ArrowBackIcon
                        className="sub-link-icon"
                        style={{
                          color: activeItem === item.id ? "#00bafe" : "",
                        }}
                      />
                    )}
                    <Link
                      href={item.path || "#"}
                      onClick={handleLinkClick(item)}
                      className={activeItem === item.id ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </li>
                  {screenWidth < 767 && isSublinkOpen && (
                    <ul className="sublinks-ul">
                      {item.sublinks &&
                        activeItem === item.id &&
                        screenWidth < 767 &&
                        item.sublinks.map((sublink, index) => (
                          <li key={index} className="li">
                            <Link
                              href={sublink.path || "#"}
                              onClick={handleLinkClick(sublink)}
                              className={
                                activeItem === sublink.id ? "active" : ""
                              }
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              ))}
          </ul>
          {subLinksLeft && screenWidth > 767 && (
            <ul className="sublinks-ul">
              {subLinksLeft.sublinks.map((sublink, index) => (
                <li key={sublink.id} className="li">
                  <Link
                    href={sublink.path || "#"}
                    onClick={handleLinkClick(sublink)}
                    className={activeItem === sublink.id ? "active" : ""}
                  >
                    {sublink.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="suggested-links">
          <h4>روابط قد تهمك</h4>

          <div className="suggested-links-content">
            <ul className="suggested-links-ul">
              <li>
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="/important-links/calendar"
                >
                  التقويم الأكاديمي
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="/important-links/college-regulations"
                >
                  لوائح الكلية{" "}
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="/important-links/college-graduate-studies"
                >
                  الدراسات العليا
                </Link>
              </li>
            </ul>
            <ul className="suggested-links-ul">
              <li>
                <img src="/images/Export-rigth.svg" alt="Export-rigth" />
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="/events"
                >
                  تسجيل الدخول للموظفين
                </Link>
              </li>
              <li>
                <img src="/images/Export-rigth.svg" alt="Export-rigth" />
                <Link
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="/gallery"
                >
                  تسجيل الدخول لأعضاء هيئة التدريس
                </Link>
              </li>
            </ul>
          </div>

          <div className="social-media-icons">
            <Link onClick={handleLinkClick} href="https://www.facebook.com/">
              <FacebookIcon width={24} height={24} />
            </Link>
            <Link onClick={handleLinkClick} href="https://www.linkedin.com/">
              <LinkedInIcon width={24} height={24} />
            </Link>
            <Link onClick={handleLinkClick} href="https://www.google.com/">
              <GoogleIcon width={24} height={24} />
            </Link>

            <Link onClick={handleLinkClick} href="https://www.instagram.com/">
              <XIcon width={24} height={24} />
            </Link>

            <Link onClick={handleLinkClick} href="https://www.instagram.com/">
              <InstagramIcon width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SlidingMenu;
