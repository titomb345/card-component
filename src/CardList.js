import React, { useState } from "react";
import Card from "./Card";
import "./CardList.sass";

const CardList = () => {
  let [showButton, setShowButton] = useState(true);

  return (
    <div className="cards-list">
      <Card
        {...{
          title: "This Card Has It All!",
          subtitle: "You heard that right!",
          thumbnail: "https://placekitten.com/g/60/60",
          cover: "https://placekitten.com/g/325/250"
        }}
        footer={
          <a
            href="https://www.linkedin.com/in/bill-bergquist/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
          >
            Brought to you by Bill Bergquist
          </a>
        }
        body={
          <div>
            This card has:
            <ul>
              <li>a cover photo (200px height)</li>
              <li>a thumbnail</li>
              <li>a title</li>
              <li>a subtitle</li>
              <li>a body</li>
              <li>a footer</li>
            </ul>
            You can click on me to show an alert!
          </div>
        }
        onClick={() => alert("This is an alert!")}
      />

      <Card
        {...{
          title: "This Card Has Less!",
          cover: "https://placekitten.com/g/500/250",
          coverUnderTitle: true,
          coverFull: true
        }}
        body={
          <div>
            This card has:
            <ul>
              <li>a title</li>
              <li>a cover photo under the title (variable height)</li>
              <li>a body{showButton ? " with a button" : ""}</li>
            </ul>
            You can click on me to open a webpage!
            {showButton && (
              <button
                style={{ marginTop: "16px" }}
                onClick={e => {
                  setShowButton(false);
                  e.stopPropagation();
                }}
              >
                You can click me to hide this button!
              </button>
            )}
          </div>
        }
        onClick={() => window.open("https://www.kasa.com")}
      />

      <Card
        thumbnail={"https://placekitten.com/g/60/60"}
        body={
          <div>
            This card has:
            <ul>
              <li>a thumbnail</li>
              <li>a body</li>
              <li>a footer with a button</li>
            </ul>
            Clicking on me won't do anything.
          </div>
        }
        footer={
          <button onClick={() => console.log("This is a console log.")}>
            Click me to log to the console!
          </button>
        }
      />

      <Card footer="This card only has a footer" />
    </div>
  );
};

export default CardList;
