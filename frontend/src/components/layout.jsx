import React from "react";
import {Outlet} from "react-router-dom";
import SideNav from "./sideNav";
import TopNav from "./topNav";
import Footer from "./footer";

export default function Layout () {
    
    return (
        <>
        <div>
        <TopNav></TopNav>
      <SideNav></SideNav>
      <Outlet />
    <Footer></Footer>
    </div>
        </>
    )
}