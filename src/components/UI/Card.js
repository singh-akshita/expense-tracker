import React from "react";
import "./Card.css";

// for wrapper components
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //so that we can use it for every classname associated with it. It would then
  // concatenate the classname with card and then assign the css styles for that.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
