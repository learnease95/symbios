"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.container}>
      {/* contact container */}
      <div className={styles.contact_container}>
        <Link className={styles.contact_link} href={"tel:7005000000"}>
          <FaPhoneAlt className={styles.icon_fa} />
          &nbsp; 7005000000
        </Link>
        <Link
          className={styles.contact_link}
          href={"mailto:emanekho@gmail.com"}
        >
          <MdOutlineEmail className={styles.icon} />
          &nbsp; emanekho@gmail.com
        </Link>
      </div>

      {/* navigation container */}
      <div className={styles.navigation_container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={"/logo.png"} width={84} height={64} />
          </Link>
        </div>
        <div className={styles.nav_link_container}>
          <Link className={styles.nav_link} href={"#"}>
            HOME
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            ABOUT US
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            SERVICES
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            BROADBAND PLANS
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            SUPPORT
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            JOBS/VACANCIES
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            BLOG
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            CONTACT
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            QUICK PAY
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            MY ACCOUNT
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            <FaSearch />
          </Link>
        </div>
        <div className={styles.menu_icon_container} onClick={toogleOpenMenu}>
          {openMenu ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        <div className={openMenu ? styles.open_menu : styles.close_menu}>
          <Link className={styles.nav_link} href={"#"}>
            HOME
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            ABOUT US
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            SERVICES
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            BROADBAND PLANS
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            SUPPORT
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            JOBS/VACANCIES
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            BLOG
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            CONTACT
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            QUICK PAY
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            MY ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}
