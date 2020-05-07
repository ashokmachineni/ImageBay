import React from "react";
import heart from "./heart-regular.svg";
import "./App.css";
import { Button, Paper, Switch } from "@material-ui/core";

function Shok({ share }) {
  return (
    <Paper>
      <div className="card cardsa">
        <img src={share.webformatURL} className="card-img-top clsr" alt="..." />
        <div className="card-body">
          <p className="card-text">{share.tags}</p>
          <p>
            <img src={heart} className="pixi" />
            {share.likes}
          </p>
        </div>
      </div>
    </Paper>
  );
}

export default Shok;
