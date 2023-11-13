"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  function toggleSideBar() {
    setHide((prev) => !prev);
  }
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <div className={styles.logoText}>Dev_Blog</div>
        <div className={styles.logoImg}>
          <Image
            fill
            src={
              "https://iconape.com/wp-content/png_logo_vector/google-web-dev-logo.png"
            }
          />
        </div>
      </Link>
      <div
        onClick={toggleSideBar}
        style={{ display: !hide ? "block" : "none" }}
        className={styles.wall}
      ></div>
      <div className={`${styles.links}`}>
        <ThemeToggle />
        <div className={`${styles.linksCenter} ${!hide ? styles.show : ""}`}>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <AuthLinks status={status} />
        </div>
        <div onClick={toggleSideBar} className={styles.menuIcon}>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <Image
          className={styles.userIcon}
          style={{
            display: status === "notauthenticated" ? "none" : "block",
          }}
          src={
            "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
          }
          width={35}
          height={35}
          alt="default_user"
        />
      </div>
    </div>
  );
};

export default Navbar;
