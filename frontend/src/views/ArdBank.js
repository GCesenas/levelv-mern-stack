import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import {} from "react-icons/ri";

import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

export default function ArdBank() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/ardBank")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  var total = 0;

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].cantidad;
  }

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
                  <h4 className="tit card-title dispenser-title mt-2">ArdBank</h4>
                  <h4 className="dispenser-subtitle">Panel de Información</h4>
                </div>
                <div className="col-sm-12 col-12">
                  <div className="card card-image">
                    <div className="text-white text-center py-2 px-2 my-2">
                      <div>
                        <img src="" alt="" />
                        <h2 className="card-title h1-responsive pt-3 font-bold">
                          <strong>Haz Ahorrado un total de: </strong>
                        </h2>
                        <h1 className="total">
                          ${total} <small>MXN</small>{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 mt-3 ">
                  <div className="card card-image">
                    <div className="text-white text-center py-2 px-2 my-2">
                      <div>
                        <img src="" alt="" />
                        <h2 className="card-title h1-responsive pt-3 font-bold ">
                          <strong>El ultimo uso fue: </strong>
                        </h2>
                        <h1 className="fecha card-title h1-responsive pt-3 font-bold pb-2"> {Date(data[0])} </h1>
                      </div>
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
