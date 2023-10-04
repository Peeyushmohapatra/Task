import React, { useEffect, useState } from "react";
import "./Moredetails.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Moredetails = () => {
  const { id, idx } = useParams();
  const data = useSelector((state) => {
    return state.items[id - 1];
  });

  const [arr, setArr] = useState([]);
  const [idFour, setIdfour] = useState({
    $1: "",
    $2: "",
  });

  const [idFive, setIdfive] = useState({
    $1: "",
    $2: "",
    $3: "",
    $4: "",
  });

  useEffect(() => {
    if (data && id == 3) {
      const ans = data.criteria[0].variable["$1"].values.sort((a, b) => b - a);
      setArr(ans);
    }
    if (id == 4 && data) {
      setIdfour({
        $1: data.criteria[0].variable["$1"].default_value,
        $2: data.criteria[0].variable["$2"].values,
      });
    }
    if (id == 5 && data) {
      let dolar1 = data.criteria[0].variable.$1.values.sort((a, b) => a - b);
      let dolar2 = data.criteria[1].variable.$2.values.sort((a, b) => a - b);
      let dolar3 = data.criteria[1].variable["$3"].values.sort((a, b) => a - b);
      let dolar4 = data.criteria[2].variable["$4"].default_value;
      setIdfive({
        $1: dolar1,
        $2: dolar2,
        $3: dolar3,
        $4: dolar4,
      });
    }

    console.log(idx);
  }, [data]);
  return (
    <div className="more_details">
      <div className="number_container1">
      {id == 3 &&
        arr.map((item) => {
          return <p className="number">{item}</p>;
        })}
      </div>

      {id == 4 && (
        <div className="div4">
            <div>
            <p>CCI</p>
            <p>Set Parameters</p>
            </div>
            <div>
            <label htmlFor="">Period</label>
            &nbsp;
            &nbsp;
            <input
              onChange={(e) => {
                setIdfour({
                  ...idFour,
                  $1: e.target.value,
                });
              }}
              value={idFour.$1}
              type="number"
            />
            </div>
    
          <div>
            {idFour.$2 &&
              idFour.$2.map((ele) => {
                return <p className="number">{ele}</p>;
              })}
          </div>
        </div>
      )}

      {id == 5 && data && (
        <div>
          <div className="first_div">
            {idFive["$1"] &&
              idx == 0 &&
              idFive["$1"].map((item) => {
                return <p className="number">{item}</p>;
              })}
          </div>
          {idx == 1 && (
            <div className="upper_div">
              <div className="number_container">
                {idFive["$2"] &&
                  idx == 1 &&
                  idFive["$2"].map((item) => {
                    return <p className="number">{item}</p>;
                  })}
              </div>
              <div className="number_container">
                {idFive["$3"] &&
                  idFive["$3"].map((item) => {
                    return <p className="number">{item}</p>;
                  })}
              </div>
            </div>
          )}

          {idx == 2 && (
            <div className="dollar4">
              <div className="upper_dollar4">
                <p>RSI</p>
                <p>Set Parameters</p>
              </div>
            <div className="dollar5_input_container">
            <label htmlFor="">Period</label>
              <input className="input"
                onChange={(e) => {
                  setIdfive({
                    ...idFive,
                    $4: e.target.value,
                  });
                }}
                value={idFive.$4}
                type="number"
                name=""
                id=""
              />
            </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Moredetails;
