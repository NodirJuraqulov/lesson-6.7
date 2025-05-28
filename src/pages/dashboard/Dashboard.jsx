import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";
import menu from "../../assets/hamburger.jpg";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[250px] h-screen bg-slate-900 p-4 text-white">
        <h2 className="text-3xl cursor-pointer font-bold mb-4">Dashboard</h2>

        <div>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            end={true}
            to={""}
          >
            🏠 Bosh sahifa
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"tolovlarim"}
          >
            💵 To'lovlarim
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"guruhlarim"}
          >
            👨‍👩‍👧‍👦 Guruhlarim
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"korsatkichlarim"}
          >
            🎢 Ko'rsatkichlarim
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"reyting"}
          >
            🎢 Reyting
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"dokon"}
          >
            🏪 Do'kon
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"qoshimcha"}
          >
            ➕ Qo'shimcha darslar
          </NavLink>
          <NavLink
            className={
              "block mb-1 p-2 rounded text-lg sidebar-link hover:underline"
            }
            to={"sozlamalar"}
          >
            ⚙️ Sozlamalar
          </NavLink>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="w-full px-10 flex items-center justify-end gap-30 h-16 bg-slate-900">
          <button className="text-2xl cursor-pointer">🌙</button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard)
