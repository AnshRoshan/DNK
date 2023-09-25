import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import AuthHeader from "./AuthHeader";

const Layout = ({ children, isLoggedIn=true}) => {
  return (
    <div className="h-fit">
      {isLoggedIn ? <AuthHeader /> : <Header />}
      <main className="min-h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
