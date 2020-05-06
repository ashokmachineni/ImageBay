import React, { useState, useEffect } from "react";
import "./App.css";
import imag from "./imag";
import Shok from "./Shok";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  const [term, setTerm] = useState("");
  const [shares, setShares] = useState([]);
  const [isloading, setIsloading] = useState(true);

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
    <div>
      <Search searchText={text => setTerm(text)} />
      <br />
      <br />
      <div className="card-main">
        {shares.map(share => (
          <Shok key={share.id} share={share} />
        ))}
      </div>
    </div>
  );
}

export default App;
