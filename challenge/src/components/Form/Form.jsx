import { React, useState } from "react";
import data from "../../items.json";
import { Link } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import "./Form.css";

function Form(props) {
  let [input, setInput] = useState({
    country_of_origin: "argentina",
    terms_and_conditions: "off",
  });

  let [popUp, setPopUp] = useState(false);

  return (
    <div>
      <div className="heading">
        <h1 id="head">Encuesta</h1>
      </div>
      <form
        className="form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await addDoc(db, input);
          } catch (error) {
            console.log(error);
          }
          setPopUp(true);
        }}
      >
        <div id="content1">
          {data.items.map((el) => {
            return (
              <>
                {el.type === "submit" ? (
                  <input
                    key={el.name}
                    type="submit"
                    value={el.label}
                    id="sendButton"
                  />
                ) : el.type === "select" ? (
                  <div className="labels">
                    <label>{el.label}: </label>
                    <br></br>
                    <br></br>
                    <select
                      className="selects"
                      key={el.name}
                      name={el.name}
                      required={el.required}
                      onChange={(e) => {
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    >
                      {el.options.map((elem) => {
                        return (
                          <option key={elem.label} value={elem.value}>
                            {elem.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                ) : (
                  <div style={{ position: "relative" }}>
                    <label className="labels">{el.label}: </label>
                    <input
                      className={el.type == "checkbox" ? "box1" : "box"}
                      key={el.name}
                      type={el.type}
                      name={el.name}
                      required={el.required}
                      onChange={(e) => {
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                )}
                <br></br>
                <br></br>
              </>
            );
          })}
        </div>
      </form>
      {popUp && (
        <div id="successMsg">
          <div id="msg">
            <h3>¡Encuesta enviada!</h3>
            <Link to="/results">
              <button id="but">Ver resultados</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
