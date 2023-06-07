import React from "react";
// import "./Common.css";

export const Footer = (props) => {
  const { className } = props;
  return (
    <footer className={className}>
      <h3 className="footerArea">
        Produced by Yuko. Please contact me, if you want to play piano!{" "}
      </h3>
      {/* <div className="setteingIcon">
        <img className="icon" src="./system/setteing.png" alt="setteing" />
      </div> */}
    </footer>
  );
};

// export default Header;
