import ProfilePic from "./assets/flower.jpg";

function Card() {
  return (
    <div className="card">
      <img className="cardImage" src={ProfilePic} alt="" />
      <h2 className="cardHeading">Tushr Aher</h2>
      <p className="cardPara">I am gonna be the biggest youtuber there is </p>
    </div>
  );
}

export default Card;
