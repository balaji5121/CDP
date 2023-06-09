import React from "react";
import Header from "../Components/Header";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
