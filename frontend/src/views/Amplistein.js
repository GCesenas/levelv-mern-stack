import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {} from "react-icons/ri";
import "../assets/css/App.css";

import proxy from "../proxy";

import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

import guitarra from "../assets/images/guitarra.png";
import plumillasImg from "../assets/images/plumillas.png";
import ampli from "../assets/images/amplibg.png";

export default function Amplistein() {
  const { id } = useParams();
  const [plumillas, setPlumillas] = useState([]);
  const [uso, setUso] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/amplisteinPlumilla")
      .then((response) => response.json())
      .then((json) => setPlumillas(json.data[0]));
  }, []);

  useEffect(() => {
    fetch(proxy.url + "/amplisteinUso")
      .then((response) => response.json())
      .then((json) => setUso(json.data[0]));
  }, []);

  console.log(uso);
  var usoEnHoras = uso.tiempo_uso / 60000;
  return (
    <div>
      <NavDash />
      <div className="container-fluid">
        <div className="row">
          <Sidenav />
          <div className="col-sm-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="row">
                <div className="u-info card-block px-6 col-12 mt-0">
                  <h4 className="tit card-title dispenser-title mt-2">Amplistein</h4>
                  <h4 className="dispenser-subtitle">Panel de Información</h4>
                </div>
                <div className="row">
                  <div className="amplistein_div_padre_puntillas">
                    <img className="amplistein_div_imagen1_puntillas" src={guitarra} />
                    <div className="amplistein_div_recuadro1_puntillas"></div>

                    <div className="amplistein_div_recuadro1_puntillas">
                      <p>{plumillas.cantidad} Plumillas</p>
                    </div>
                  </div>

                  <div className="amplistein_div_padre_puntillas">
                    <img className="amplistein_div_imagen1_puntillas" src={plumillasImg} />
                    <div className="amplistein_div_recuadro1_puntillas"></div>

                    <div className="amplistein_div_recuadro1_puntillas amplistein_div_recuadro2_puntillas">
                      <p>
                        ¿Te quedaste sin plumillas? <a href="#">Ordénalas ahora por Amazon México</a>
                      </p>
                    </div>
                  </div>

                  <div className="amplistein_div_padre_puntillas">
                    <img className="amplistein_div_imagen1_puntillas" src={ampli} />
                    <div className="amplistein_div_recuadro1_puntillas"></div>

                    <div className="amplistein_div_recuadro1_puntillas">
                      <p>
                        <small>Tiempo de uso </small> <strong> {usoEnHoras} Minutos </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
