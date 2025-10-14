import React from "react";
import {Outlet} from "react-router-dom";
import SideNav from "./sideNav";
import TopNav from "./topNav";

export default function Layout () {
    
    return (
        <>
        <div>
        <TopNav></TopNav>
      <SideNav></SideNav>
      <Outlet />
    </div>
        </>
    )
}