import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import {} from "react-icons/ri";

import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

import termo from "../assets/images/termometro.png";
import gota from "../assets/images/gota.png";
import hum from "../assets/images/hum.png";

export default function SmartPot() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/smartPot")
      .then((response) => response.json())
      .then((json) => setData(json.data[0]));
  }, []);

  console.log("Temperatura: " + data.temperatura);
  console.log("Humedad: " + data.humedad);
  console.log("Nivel de Agua: " + data.nivel_agua);

  if (data.nivel_agua > 0) {
    var rec = "No olvides regar tu planta";
  } else {
    var rec = "Debes rellenar el contenedor de agua para riego";
  }

  return (
    <>
      <NavDash />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="row">
                <div className="u-info card-block px-6 col-12 mt-0">
                  <h4 className="tit card-title dispenser-title mt-2">Smart Pot</h4>
                  <h4 className="dispenser-subtitle">Recomendación</h4>
                  <p className="font-italic"> {rec} </p>
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-4">
                  <strong>
                    <big>Temperatura</big>
                  </strong>
                  <p className="info-card">
                    {`${data.temperatura}`} <small>°C</small>
                  </p>
                  <img className="w-100" src={termo} />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-1">
                  <strong>
                    <big> Humedad</big>
                  </strong>
                  <p className="info-card">{`${data.humedad}`} % </p>
                  <img className="w-100" src={hum} />
                </div>
                <div className="col-sm-12 col-md-10 col-lg-3 u-info ug-2">
                  <strong>
                    <big>Nivel de agua p/ riego</big>
                  </strong>
                  <p className="info-card">
                    {`${data.nivel_agua}`} <small>%</small> <img className="w-100" src={gota} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
