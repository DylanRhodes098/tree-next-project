import React from "react";
import {Outlet} from "react-router-dom";
import SideNav from "./sideNav";

export default function Layout () {
    
    return (
        <>
        
        <div>
      <SideNav></SideNav>
      <Outlet />
    </div>
     
        </>
    )
}