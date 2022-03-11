import "../global.scss";
import "./home.scss";
import fellowship from "../../assets/fellowship.png";
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
import clickSound from "../../assets/clicksound.mp3";
import DisplayQuote from "./DisplayQuote";

export default function Home({ quotes }) {
  // let click = new Audio({ clickSound });
  // const start = () => {
  //   click.play();
  // };

  const listQuote = quotes.map((oneQuote) => {
    var oneQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return <DisplayQuote quote={oneQuote} key={oneQuote.id} />;
  });

  return (
    <div className="home">
      <div className="title">
        <h1 className="title">Lord of the Quotes</h1>
      </div>

      {/* //////////////////////////////// */}
      <div className="quiz">
        <div className="left-side">
          <div className="characters">
            <img src={gandalf} alt="gandalf" className="characters__podium" />
            <img src={frodo} alt="frodo" className="characters__podium" />
            <img src={samwise} alt="samwise" className="characters__podium" />
            <img src={merry} alt="merry" className="characters__podium" />
            <img src={pippin} alt="pippin" className="characters__podium" />
            <img src={legolas} alt="legolas" className="characters__podium" />
            <img src={gimley} alt="gimley" className="characters__podium" />
            <img src={boromir} alt="boromir" className="characters__podium" />
            <img src={arogon} alt="arogon" className="characters__podium" />
          </div>
          <div className="question">
            <div className="question-box">
              Question:
              <h3 className="aside-details__title">{listQuote[0]} </h3>
            </div>
          </div>{" "}
        </div>
        <div className="right-side">
          <img
            src={saurontower}
            alt="sauron tower"
            className="sauron__podium"
          />
        </div>{" "}
      </div>
      <div className="answer">
        <div className="answer__box--top">
          <button
            className="answer__box"
            // onClick={start}
          >
            Option One:
          </button>
          <button className="answer__box">Option Two:</button>
          <button className="answer__box">Option Three:</button>
          <button className="answer__box">Option Four:</button>{" "}
        </div>
      </div>
    </div>
  );
}
