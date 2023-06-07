import React from "react";
// import "./Common.css";

export const HomeIntro = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h3 className="HomeIntroArea">【ご挨拶】</h3>
      <p>
        こんにちは！ みよし市根浦町のさらいピアノ教室です。<br></br>
        当教室では、趣味のピアノから本格的に演奏家を目指す方まで、<br></br>
        愛知県立芸大卒の高度な技術と豊かな表現、長年磨いた確かな指導力で楽しくレッスンいたします✊
      </p>
      <div className="introPict">
        <img src="/images/2_Teacher.jpg" alt="Greeting" />
      </div>
    </div>
  );
};

// export default Header;
