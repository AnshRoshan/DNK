import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import AuthHeader from "./AuthHeader";

const Layout = ({ children, isLoggedIn=true }) => {
  return (
    <div>
      {isLoggedIn ? <AuthHeader /> : <Header />}
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
