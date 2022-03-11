import "../home.scss";

const Question = ({ quote }) => {
  // console.log(video);
  return (
    <div className="question">
      <div className="question-box">Question:</div>
      <div className="aside-details">
        <h3 className="aside-details__title">{quote.dialog}</h3>
        {/* <p className="aside-details__channel">{video.channel}</p> */}
      </div>
    </div>
  );
};

export default Question;
