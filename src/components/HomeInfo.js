import React from "react";
// import "./Common.css";

export const HomeInfo = (props) => {
  const { className, information } = props;
  return (
    <div className={className}>
      <h3 className="HomeInfoArea">【お知らせ】</h3>
      {/* <p>{information}</p> */}
      {information.map((infoSentence, ind) => (
        <ul className="HomeInfoSentence" key={ind}>
          <ui className="InfoSentence">{infoSentence}</ui>
        </ul>
      ))}
      {/* <p>2023年 7月30日（日）13:00〜 ピアノ発表会を催します。</p>
      <p> 皆様お誘い合わせの上、お越しください！😃</p>
      <p> 場所：カネヨシプレイス（旧 みよし市 文化センター サンアート）</p> */}
    </div>
  );
};

// export default Header;
