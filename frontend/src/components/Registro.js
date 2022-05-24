import React from "react";
import { useParams } from "react-router-dom";

import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/App.css";

import Swal from "sweetalert2";
import proxy from "../proxy";

import Navbar from "./Navbar";
import Logo from "../assets/images/logowhite.svg";
import { Button } from "bootstrap";

export default function Registro() {
  const { err } = useParams();

  if (err) {
    ErrAlert();
  }

  return (
    <div>
      <Navbar />
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="login-form col-lg-6 col-sm-12 align-self-center text-center">
            <img className="w-25 titulosec-2" src={Logo} />
            <h1 className="titulosec-2">Regístrate</h1>
            <div className="form-div">
              <form action={proxy.url + "/signup"} method="POST">
                <input type="text" name="nombre" placeholder="Nombre" className="form-control form-group" />
                <input type="text" name="apellidos" placeholder="Apellidos" className="form-control form-group" />
                <input type="email" name="email" placeholder="Email" className="form-control form-group" />
                <input type="password" name="password" placeholder="Contraseña" className="form-control form-group" />
                <input type="submit" className="btn btn-light btn-block" value="Aceptar" />
                <a href="/login" className="btn btn-link btn-block">
                  {" "}
                  ¿Ya tienes cuenta? Inicia Sesión
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrAlert() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Llena todos los campos para continuar",
  });
}
