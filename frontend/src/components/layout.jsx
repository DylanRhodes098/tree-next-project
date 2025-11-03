import React from "react";
import {Outlet} from "react-router-dom";
import {SideNav} from "./sideNav";
import {TopNav} from "./topNav";
import Footer from "./footer";
import {pages} from "../data/sideNavObject";
import logo from '../assets/react.svg'; 
import {items} from "../data/topNavObject";
import { socialItems } from "../data/socialItemsObject";

export default function Layout () {
    
    return (
        <>
        <div>
    <TopNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
        <main className="flex flex-row p-4">
            <div className="pr-[4%]">
            <div style={{ height: '100vh', background: '#1a1a1a' }}>
  <SideNav
    position="right"
    items={pages}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B19EEF', '#5227FF']}
    logoUrl="/path-to-your-logo.svg"
    accentColor="#ff6b6b"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
  />
</div>
      </div>
      <Outlet />
      </main>
    <Footer></Footer>
    </div>

        </>
    )
}