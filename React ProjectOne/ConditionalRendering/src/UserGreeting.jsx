import PropTypes from "prop-types";

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <p>Tushar Aher is Logged IN</p>;
  //   } else {
  //     return <h1>Tushar Aher is not Logged IN</h1>;
  //   }
  // Using Ternary operator

  const welcomeMessage = (
    <h1 className="welcome-message">TrueTrueTrueTrueTrueTrueTrueTrueTrue</h1>
  );
  const loginPrompt = (
    <h2 className="login-prompt">FalseFalseFalseFalseFalseFalseFalseFalse</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Tushar Aher is the Biggest Youtuber there is",
};
export default UserGreeting;
