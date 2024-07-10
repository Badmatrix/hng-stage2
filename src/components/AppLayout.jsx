/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ carts }) {
  return (
    <>
      <Header carts={carts} />
      <Outlet />
      <Footer />
    </>
  );
}
