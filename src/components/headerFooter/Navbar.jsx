"use client";
import React, { useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";
import { Drawer, Menu } from "antd";

import "@/components/headerFooter/navbar.scss";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className="menuIconContainer">
        <div
          className="menuIcon"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
          onClick={() => setOpenMenu(true)}
        >
          <RiMenuAddFill size={30} />
        </div>
        <div className="mobileLogo">
          <Image src="/next.svg" alt="Logo" width={70} height={30} />
        </div>
      </div>
      <div className="navFlex">
        <div className="desktopLogo">
          <Image src="/next.svg" alt="Logo" width={100} height={30} />
        </div>

        <div className="headerMenu">
          <AppMenu />
        </div>
      </div>
      <div>
        <Drawer
          placement="left"
          open={openMenu}
          style={{
            backgroundColor: "rgb(235, 235, 235)",
            padding: 0,
          }}
          // closable={false}

          onClose={() => setOpenMenu(false)}
        >
          <AppMenu isInline />
        </Drawer>
      </div>
    </div>
  );
};

const AppMenu = ({ isInline = false }) => {
  return (
    <Menu
      style={{
        fontSize: "18px",
        border: "none",
        backgroundColor: "rgb(235, 235, 235)",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: <Link href="/">Home</Link>,
          key: "home",
        },
        {
          label: <Link href="/blog">Blog</Link>,
          key: "blog",
        },
        {
          label: <Link href="/admin">Admin</Link>,
          key: "admin",
        },
        {
          label: <Link href="/contact">Contact</Link>,
          key: "contact",
        },
        {
          label: <Link href="/about">About</Link>,
          key: "about",
        },
      ]}
    ></Menu>
  );
};
export default Navbar;
