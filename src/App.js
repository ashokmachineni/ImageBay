import React, { useState, useEffect } from "react";
import "./App.css";
import imag from "./imag";
import Shok from "./Shok";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { Button, Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

function App() {
  const [term, setTerm] = useState("");
  const [shares, setShares] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=5656625-37a8f718e7810a718141ce724&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setShares(data.hits);
        setIsloading(false);
      });
  }, [term]);
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Search searchText={text => setTerm(text)} />
        <br />
        <h4>
          {" "}
          Switch Theme(Light or Dark Mode) :{" "}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </h4>

        <br />

        <div className="card-main">
          {shares.map(share => (
            <Shok key={share.id} share={share} />
          ))}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
