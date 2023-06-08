// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeInfo } from "./components/HomeInfo";
import { HomeIntro } from "./components/HomeIntro";
import { PlayList } from "./components/PlayList";

export const App = () => {
  const [contentFlag, setContentFlag] = useState(1);
  const [information, setInformation] = useState([
    "2023年 7月30日（Sun）13:00〜 ピアノ発表会を催します。",
    "皆様お誘い合わせの上、お越しください！",
    "場所:カネヨシプレイス（旧 みよし市文化センター サンアート）",
  ]);
  const [playList, setPlayList] = useState([]);
  console.log("contentFlag App1 :", contentFlag);

  // // const fetchplaylist = useEffect(() => {
  //fetchで読み込むその1 〜 "async, await"方式
  // useEffect(() => {
  //   console.log("fetch");
  //   const getdata = async () => {
  //     const fetchData = await fetch("http://localhost:8080/list");
  //     const jsonData = await fetchData.json();
  //     // .then((res) => res.json())
  //     // .then((data) => {
  //     console.log(jsonData);
  //   };
  //   getdata();
  // }, []);

  // //fetchで読み込むその２ 〜 ".then"方式
  // useEffect(() => {
  //   console.log("fetch");
  //   const getdata = () => {
  //     const fetchData = fetch("http://localhost:8080/list")
  //       .then((e) => e.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };
  //   getdata();
  // }, []);

  //fetchで読み込むその3 〜 ".then"方式をリファクタ
  useEffect(() => {
    fetch("http://localhost:8080/list")
      .then((e) => e.json())
      .then((data) => {
        console.log("fetch_data:", data);
        setPlayList(data);
      });
  }, []);
  console.log("playList:", playList);

  // const handleClick = async () => {
  //   const fetchData = await fetch("http://localhost:8000/test");
  //   const jsonData = await fetchData.json();
  //   setValue([...value, jsonData]);
  // };

  // const handleChange = (e) => {
  //   (e.target.value);
  // };

  // const handleSubmit = (event) => {
  //   fetch(`/playlist`)
  //     .then((response) => response.json())
  //     .then((state) => setPlayList(state));
  // };

  return (
    // console.log("contentFlag App2 :", contentFlag),
    <>
      <Header className="appHeader" setContentFlag={setContentFlag} />

      <main className="appMain">
        {/* contentFlag === 1 の場合、Homeを表示 */}
        {contentFlag === 1 && (
          <>
            <HomeInfo className="appMain1HomeInfo" information={information} />
            <HomeIntro className="appMain1HomeIntro" />
          </>
        )}
        {contentFlag === 2 && (
          <PlayList
            className="appMain2PlayList"
            playList={playList}
            setPlayList={setPlayList}
            // onClick={fetchplaylist}
          />
        )}
      </main>

      <Footer className="appFooter" />
    </>
  );
};

// export default App;

// 以下は環境設定後の初期状態
// function App() {
//   const [name, setName] = useState("");
//   const [greeting, setGreeting] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
//       .then((response) => response.json())
//       .then((state) => setGreeting(state.greeting));
//   };

//   // return function continues...

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Enter your name: </label>
//           <input id="name" type="text" value={name} onChange={handleChange} />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{greeting}</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
