import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="app">
      <section className="section">
        <div className="container">
          <section className="d-flex justify-content-center ">
            {children}
          </section>
        </div>
      </section>
    </div>
  );
};
