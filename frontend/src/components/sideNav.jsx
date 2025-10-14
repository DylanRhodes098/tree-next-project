import React from "react";
import pages from "../data/navObject";
import {NavLink} from "react-router-dom";

export default function SideNav () {
    return (
        <>
        <nav>
      <ul>
        {pages.map((p) => (
          <li key={p.key ?? p.href}>
            <NavLink to={p.href} end={p.href === "/"}>
              {p.value ?? p.href}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
        </>
    )

}