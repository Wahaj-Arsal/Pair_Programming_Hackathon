/** @format */

import React from "react";
// import Videos from "../video/Video";
import { Link } from "react-router-dom";
import DisplayQuote from "./DisplayQuote";

export default function Quote({ quotes }) {
  // console.log("Props: ", props);
  // console.log("VIDEOS");
  // console.log(videos);

  //   const filteredVideos = videos.filter((video) => video.id !== currentVideo);
  // console.log(filteredVideos);

  //   getRndInteger = (min, max) => {
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   };
  const asideMarkup = quotes.map((quote) => {
    // for (let i = 0; i < 10; i++) {
    // console.log(video.image);
    return (
      // <Link to={`/video/${video.id}`} key={video.id} className="side__videos">
      <DisplayQuote quote={quote} key={quote.id} />
      // </Link>
    );
    // }
  });
  return (
    <aside className="aside">
      <h2 className="aside__title">Quote</h2>
      {asideMarkup}
    </aside>
  );
}
// export default Aside;
