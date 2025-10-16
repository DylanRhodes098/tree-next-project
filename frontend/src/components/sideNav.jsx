import React from "react";
import pages from "../data/navObject";
import {NavLink, useNavigate} from "react-router-dom";
import {logout} from "../services/auth";
import DashboardLayoutBasic from "../styles/navigation";

export default function SideNav () {
  const navigate = useNavigate()

  function handleLogout() {
    logout();
    navigate("/login");
  }

    return (
        <>
           <DashboardLayoutBasic></DashboardLayoutBasic>
        <nav>
      <ul>
        {pages.map((p) => (
          <li key={p.key ?? p.href} className="py-2">
            {p.type === "logout" ? (
              <li onClick={handleLogout} className="text-red-500">
                {p.value}
              </li>
            ) : (
              <NavLink to={p.href} end={p.href === "/"}>
                {p.value}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
        </>
    )

}