import React from "react";
// import "./Common.css";

export const PlayList = (props) => {
  const { className, playList, setPlayList } = props;
  return (
    <div className={className}>
      <h3 className="playListArea">発表会のプログラムはこちら</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>イニシャル</th>
            <th>学年</th>
            <th>曲名</th>
            <th>作曲家</th>
          </tr>
        </thead>
        <tbody>
          {playList.map((playData, ind) => (
            <tr className="playDatum" key={ind}>
              <td className="playNo">{playData["id"]}</td>
              <td className="player">{playData["player"]}</td>
              <td className="grade">{playData["grade"]}</td>
              <td className="title">{playData["title"]}</td>
              <td className="composer">{playData["composer"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default Header;
