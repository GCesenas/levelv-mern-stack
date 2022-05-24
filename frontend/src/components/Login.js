import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import proxy from "../proxy";

import "../assets/css/App.css";
import Swal from "sweetalert2";

import Navbar from "./Navbar";
import Logo from "../assets/images/logowhite.svg";

export default function Login() {
  const { err } = useParams();

  if (err) {
    ErrAlert();
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="container h-100">
          <div className="row justify-content-center h-100 ">
            <div className="login-form col-lg-6 col-sm-12 align-self-center text-center">
              <img className="w-25 titulosec-2" src={Logo} />
              <h1 className="titulosec-2">Iniciar Sesión</h1>
              <form action={proxy.url + "/signin"} method="POST">
                <input type="email" placeholder="Email" name="email" className="form-control form-group" />
                <input type="password" placeholder="Contraseña" name="password" className="form-control form-group" />
                <input type="submit" className="btn btn-light btn-block" value="Aceptar" />
                <Button href="/Registro" className="btn-block" variant="outline-light">
                  Registrarse
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ErrAlert() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Usuario o contraseña incorrect@",
  });
}
