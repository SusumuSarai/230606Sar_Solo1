import React from "react";
// import "./Common.css";

export const Header = (props) => {
  const { className, setContentFlag } = props;
  const menuChange1 = () => setContentFlag(1);
  const menuChange2 = () => setContentFlag(2);
  const menuChange3 = () => setContentFlag(3);
  return (
    <header className={className}>
      <h2 className="headTitle"> さらいピアノ教室 </h2>
      <ul>
        <li className="menulist">
          <a onClick={menuChange1} href="#">
            Home
          </a>
        </li>
        <li className="menulist">
          <a onClick={menuChange2} href="#">
            Piano concert!
          </a>
        </li>
        <li className="menulist">
          {/* 以下の場合、クリックしなくても実行される
          <a onClick={setContentFlag(3)} href="#">
          onClickには関数を渡さないといけないため（NG:式、値）
          https://zenn.dev/eitches/articles/08526d58abd83b */}
          <a onClick={menuChange3} href="#">
            Contact me
          </a>
        </li>
      </ul>
      {/* <div className="headIcon">
        <img className="icon" src="/images/setteing.png" alt="head" />
      </div> */}
    </header>
  );
};

// export default Header;
