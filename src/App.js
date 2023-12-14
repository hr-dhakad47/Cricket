import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cricks, setCrick] = useState([]);
  useEffect(() => {
    axios
      .get(
    "https://api.cricapi.com/v1/currentMatches?apikey=4c285cfe-3fbf-4e77-a52b-9705c99d06ac&offset=0"    )
      .then((res) => {
        console.log(res.data);
        setCrick(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <div className="d-flex flex-wrap gap-2 justify-content-evenly">

    {cricks.map((crick, index) => {
      return(
      <>
      <div className="card w-25 h-25">
        <div>
          <div className="card-body">
            <div className="row"><span className="col text-danger">{crick.status}</span></div>
            <div className="row"><span className="col">{crick.matchType}</span></div>
          </div>

          <div className="d-flex ms-1 me-1">
            <div className="d-flex justify-content-start">
              <img
                src={crick.teamInfo[0].img}
                className="figure-img w-25 rounded"
                alt="Image"
              />
              <div className="fs-6 mt-1">{crick.teamInfo[0].name}</div>
            </div>
            <div className="d-flex gap-3 justify-content-end">
              <span className="fs-6 mt-1">{crick.score[0].o}</span>
              <span className="fs-6 mt-1"> {crick.score[0].r}/{crick.score[0].w}</span>
            </div>
          </div>

          <div className="d-flex ms-1 me-1">
            <div className="d-flex justify-content-start">
              <img
                src={crick.teamInfo[1].img}
                className="figure-img w-25 rounded"
                alt="Image"
              />
              <div className="fs-6 mt-1">{crick.teamInfo[1].name}</div>
            </div>
            <div className="d-flex gap-3 justify-content-end">
              <span className="fs-6 mt-1">{crick.score[1].o}</span>
              <span className="fs-6 mt-1"> {crick.score[1].r}/{crick.score[1].w}</span>
            </div>
          </div>

          <p>
            <span className="ms-2">{crick.score[0].inning}</span>
          </p>
        </div>
      </div>
      </>)})}
    </div>
    </>
  );
}

export default App;