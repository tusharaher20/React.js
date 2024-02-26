// import customstyles from "./Button.module.css";

function Button() {
  // return <button className="button">Click Me</button>;
  // return <button className={customstyles.button}>Click Me</button>; //this line comes under css module

  const stylesImp = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button style={stylesImp}>Subscribe Here</button>
    </>
  );
}

export default Button;
