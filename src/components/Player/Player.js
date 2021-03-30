import React from "react";
import "./Player.css";
import Sidebar from "./../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
