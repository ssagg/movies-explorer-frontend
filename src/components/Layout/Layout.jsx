import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import React from "react";

export default function Layout({ onMenuClick }) {
  return (
    <div className='layout'>
      <Header onMenuClick={onMenuClick} />
      <Outlet />
      <Footer />
    </div>
  );
}
