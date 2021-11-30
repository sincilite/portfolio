import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn:ital,wght@0,400;0,800;1,400;1,800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="w-full pt-6 md:pt-12">
        <div className="md:m-auto max-w-screen-lg">
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}