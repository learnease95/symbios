"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { FaPhoneAlt, FaSearch, FaAngleDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);
  const [openBroadbandDropdown, setOpenBroadbandDropdown] = useState(false);
  const [openSuportDropdown, setOpenSupportDropdown] = useState(false);

  const toogleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toogleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const toggleOpenServices = () => {
    setOpenServicesDropdown(!openServicesDropdown);
    setOpenBroadbandDropdown(false);
    setOpenSupportDropdown(false);
  };

  const toggleOpenBroadband = () => {
    setOpenBroadbandDropdown(!openBroadbandDropdown);
    setOpenServicesDropdown(false);
    setOpenSupportDropdown(false);
  };

  const toggleOpenSupport = () => {
    setOpenSupportDropdown(!openSuportDropdown);
    setOpenServicesDropdown(false);
    setOpenBroadbandDropdown(false);
  };

  const closeAllDropdowns = () => {
    setOpenServicesDropdown(false);
    setOpenBroadbandDropdown(false);
    setOpenSupportDropdown(false);
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
            <Image src={"/logo.png"} width={84} height={50} />
          </Link>
        </div>
        <div className={styles.nav_link_container}>
          <Link className={styles.nav_link} href={"#"}>
            HOME
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            ABOUT US
          </Link>

          {/* SERVICES */}
          <div className={styles.services_dropdown}>
            <Link className={styles.nav_link_dropdown} href={"#"}>
              SERVICES
            </Link>
            <div className={styles.dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Broadband
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Dedicated Internet
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Networking
              </Link>
            </div>
          </div>

          {/* BROADBAND PLANS */}
          <div className={styles.broadband_plans_dropdown}>
            <Link className={styles.nav_link_dropdown} href={"#"}>
              BROADBAND PLANS
            </Link>
            <div className={styles.dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Nagaland & Assam Broadband Plans
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Manipur Broadband Plans
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div className={styles.support_dropdown}>
            <Link className={styles.nav_link_dropdown} href={"#"}>
              SUPPORT
            </Link>
            <div className={styles.dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Support Modes{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Speed Test{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Accepted Payment Modes{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Change Plan{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Shifting Connection{" "}
              </Link>
            </div>
          </div>

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
          <Link
            className={styles.nav_link}
            href={"#"}
            onClick={toogleOpenSearch}
          >
            <FaSearch />
          </Link>
        </div>

        {/* SEARCH CONTAINER */}
        <div
          className={
            openSearch
              ? styles.search_container_open
              : styles.search_container_close
          }
        >
          <form action="#" className={styles.search_form}>
            <input
              className={styles.search_input}
              type="text"
              placeholder="Search here..."
            />
            <div className={styles.close_icon_container}>
              <IoClose
                onClick={toogleOpenSearch}
                className={styles.close_icon}
              />
            </div>
          </form>
        </div>

        {/* FOR MOBILE VIEW */}
        <div className={styles.menu_icon_container} onClick={toogleOpenMenu}>
          {openMenu ? (
            <IoClose onClick={closeAllDropdowns} />
          ) : (
            <GiHamburgerMenu />
          )}
        </div>
        <div className={openMenu ? styles.open_menu : styles.close_menu}>
          <Link className={styles.nav_link} href={"#"}>
            Home
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            About Us
          </Link>

          {/* SERVICES MOBILE VIEW*/}
          <div className={styles.mobile_service_dropdown}>
            <Link className={styles.nav_link_special} href={"#"}>
              Services
            </Link>
            <div className={styles.down_icon} onClick={toggleOpenServices}>
              <FaAngleDown />
            </div>
          </div>
          {openServicesDropdown && (
            <div className={styles.mobile_dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Broadband
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Dedicated Internet
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Networking
              </Link>
            </div>
          )}

          {/* BROADBAND PLANS MOBILE VIEW*/}
          <div className={styles.mobile_broadband_dropdown}>
            <Link className={styles.nav_link_special} href={"#"}>
              Broadband Plans{" "}
            </Link>
            <div className={styles.down_icon} onClick={toggleOpenBroadband}>
              <FaAngleDown />
            </div>
          </div>
          {openBroadbandDropdown && (
            <div className={styles.mobile_dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Nagaland & Assam Broadband Plans
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Manipur Broadband Plans{" "}
              </Link>
            </div>
          )}

          {/* SUPPORT MOBILE VIEW */}
          <div className={styles.mobile_support_dropdown}>
            <Link className={styles.nav_link_special} href={"#"}>
              Support
            </Link>
            <div className={styles.down_icon} onClick={toggleOpenSupport}>
              <FaAngleDown />
            </div>
          </div>
          {openSuportDropdown && (
            <div className={styles.mobile_dropdown_content}>
              <Link href={"#"} className={styles.nav_link}>
                Support Modes{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Speed Test{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Accepted Payment Modes{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Change Plan{" "}
              </Link>
              <Link href={"#"} className={styles.nav_link}>
                Shifting Connection{" "}
              </Link>
            </div>
          )}

          <Link className={styles.nav_link} href={"#"}>
            Jobs/Vacancies
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            Blog
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            Contact
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            Quick Pay
          </Link>
          <Link className={styles.nav_link} href={"#"}>
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
}
