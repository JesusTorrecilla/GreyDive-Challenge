import React from "react";
import { getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import { useState, useEffect } from "react";
import "./Results.css";
import ResultCard from "../ResultsCard/ResultCard.jsx";

function Results(props) {
  let [links, setLinks] = useState([]);

  const getLinks = async () => {
    const querySnapchot = await getDocs(db);
    const docs = [];
    querySnapchot.forEach((doc) => {
      docs.push({ ...doc.data() });
    });
    setLinks(docs);
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <div className="heading">
        <h1 className="head">Resultados</h1>
      </div>
      <div className="cards">
        {links.map((el) => {
          return (
            <ResultCard
              key={el.email}
              name={el.full_name}
              email={el.email}
              country={el.country_of_origin}
              date={el.birth_date}
            ></ResultCard>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
