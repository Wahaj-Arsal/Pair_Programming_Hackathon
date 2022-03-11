import "../global.scss";
import "./home.scss";
import gandalf from "../../assets/gandalf.png";
import frodo from "../../assets/frodo.png";
import samwise from "../../assets/samwise.png";
import merry from "../../assets/merry.png";
import pippin from "../../assets/pippin.png";
import legolas from "../../assets/legolas.png";
import gimley from "../../assets/gimley.png";
import boromir from "../../assets/boromir.png";
import arogon from "../../assets/arogon.png";
import saurontower from "../../assets/saurontower.png";
import eyesauron from "../../assets/eyesauron.png";
import react, { useState } from "react";
import clickSound from "../../assets/clicksound.mp3";

export default function Home({ quotes }) {
  const [revealed, setReveal] = useState(false);
  const [moving, setMoving] = useState(false);
  const [victory, setVictory] = useState(false);

  const listQuote = quotes.map((oneQuote) => {
    var oneQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return <div className="quote"> {oneQuote.dialog} </div>;
  });

  function revealName() {
    setTimeout(function () {
      setReveal(true);
      setVictory(true);
    }, 3000);
    setTimeout(function () {
      setMoving(true);
    }, 1000);
    setTimeout(function () {
      alert("Congratlations!");
      setReveal(false);
    }, 5000);
  }

  return (
    <div className="home">
      <div className="title">
        <h1 className="title">Lord of the Quotes</h1>
      </div>

      <div className="intro-section">
        <p> Middle Earth Needs Your Help.</p>
        <p>Suaron's Eye Is Watching.</p>
        <p>How Do We Stop Him? </p>{" "}
        <p>By Calling the Fellowship of the Ring, of Course!</p>
        <p>
          To Do So, You Must Correctly Match a Quote of each Fellowship Member
          to call them to arms.{" "}
        </p>
        <p>Once You Have All 9 Together, Sauron Will be Defeated.</p>
        <p>Fail Once, and Middle Earth is Doomed to fall to Sauron.</p>
        <p>No Pressure. Good Luck! </p>
      </div>
      <div className="right-side">
        <div className="quiz">
          <div className="left-side">
            <div className="characters">
              <img
                src={gandalf}
                alt="gandalf"
                className={moving ? "bounce" : ""}
              />
              <img src={frodo} alt="frodo" className={moving ? "bounce" : ""} />
              <img
                src={samwise}
                alt="samwise"
                className={moving ? "bounce" : ""}
              />
              <img src={merry} alt="merry" className={moving ? "bounce" : ""} />
              <img
                src={pippin}
                alt="pippin"
                className={moving ? "bounce" : ""}
              />
              <img
                src={legolas}
                alt="legolas"
                className={moving ? "bounce" : ""}
              />
              <img
                src={gimley}
                alt="gimley"
                className={moving ? "bounce" : ""}
              />
              <img
                src={boromir}
                alt="boromir"
                className={moving ? "bounce" : ""}
              />
              <img
                src={arogon}
                alt="arogon"
                className={moving ? "bounce" : ""}
              />
              <img
                src={saurontower}
                alt="Sauron"
                className={victory ? "RIP" : ""}
              />
            </div>
            <div className="question">
              <div className="question-box">
                <div className="quote">{listQuote[0]} </div>
              </div>
            </div>{" "}
          </div>
          <div className="right-side"></div>{" "}
        </div>
        <div className="answer">
          <div className="scoreboard">
            <div className={revealed ? "showAnswer" : "hidden-name"}>
              Character Name
            </div>
          </div>
          <div className="answer__box--top">
            <button className="answer__box" onClick={revealName}>
              Option One:
            </button>
            <button className="answer__box">Option Two:</button>
            {/* <button className="answer__box" onClick={play}> */}
            {/* Option Three:
          </button> */}
            {/*  <button className="answer__box">Option Four:</button>{" "} */}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
