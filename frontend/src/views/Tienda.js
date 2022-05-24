import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import {} from "react-icons/ri";
import Productos from "../components/Productos";
import NavDash from "../components/NavDash";
import Sidenav from "../components/Sidenav";

export default function Tienda() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(proxy.url + "/productos")
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

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
                  <h4 className="tit card-title dispenser-title mt-2">Tienda de Artículos</h4>
                  <h4 className="dispenser-subtitle">Prototipos en venta</h4>
                </div>
                <Productos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
