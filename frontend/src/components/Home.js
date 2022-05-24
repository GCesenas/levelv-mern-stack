import React from "react";

import "../assets/css/App.css";
import "../assets/css/Home.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Col, Button, Card, CardDeck, Carousel, Form, Spinner } from "react-bootstrap";

// Componentes

import Navbar from "./Navbar";
import Footer from "./Footer";

// Imagenes

import arduino from "../assets/images/arduino.png";
import logowhite from "../assets/images/logowhite.svg";
import mision from "../assets/images/mision.png";
import vision from "../assets/images/vision.png";
import historia from "../assets/images/historia.png";

import user from "../assets/images/gera.png";
import luis from "../assets/images/luis.png";
import cris from "../assets/images/christian.png";
import david from "../assets/images/david.png";
import ernesto from "../assets/images/ernesto.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <section className="inicio">
        <div className="row justify-content-center align-items-center centrohome">
          <div className="principal">
            <div className="titulos">
              <h1 className="titulo1">
                Somos especialistas
                <br />
                en DISEÑO e INNOVACIÓN.
              </h1>
              <p className="texto-inicio">El internet de las cosas está entre nosotros. Conoce nuestros dispositivos inteligentes desarrollados con ARDUINO®</p>
              <a className="btn btn-outline-light" href="/productos">
                Conoce más
              </a>
            </div>
            <img className="img-inicio" src={arduino} alt="arduino Image" />
          </div>
        </div>
      </section>

      <section className="acercade" id="acercade">
        <div className="container">
          <div className="row justify-content-center centro pt-5">
            <div className="mx-auto col-12 centro">
              <h3 className="titulosec2 ">¿Quiénes somos?</h3>
              <h3 className="titulosec3 mb-5">Acerca de</h3>
            </div>

            <img className="logo-acerca w-25" src={logowhite} alt="" />

            <div className="info pb-5">
              <div className="cont-info">
                <div className="imgtit">
                  <img className="imginfo" src={mision} alt="" />
                  <p className="tit">Misión</p>
                </div>
                <p className="desc-info">Generar soluciones de alto nivel tanto de hardware como de software cumpliendo con las expectativas y necesidades de los clientes.</p>
              </div>

              <div className="cont-info">
                <div className="imgtit">
                  <img className="imginfo" src={vision} alt="" />
                  <p className="tit">Visión</p>
                </div>
                <p className="desc-info">Ser una empresa del desarrollo de software internacional, logrando convenios con empresas tecnológicas y gubernamentales.</p>
              </div>

              <div className="cont-info">
                <div className="imgtit">
                  <img className="imginfo" src={historia} alt="" />
                  <p className="tit">Historia</p>
                </div>
                <p className="desc-info">Somos una empresa establecida en 2021 en la ciudad de Durango, Dgo., México y contamos con un equipo de 5 desarrolladores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="equipo">
        <div className="py-5 text-center text-info background-info">
          <div className="container">
            <div className="row">
              <div className="mx-auto col-md-12">
                <h3 className="titulosec2 ">Nuestro equipo</h3>
                <h3 className="titulosec3 mb-5">Conócenos</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 p-4">
                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" alt="Card image cap" width="200" src={david} />
                <h4 className="nom">
                  <b>David Alvarez</b>
                </h4>
                <p className="mb-0 txtp">Diseñador gráfico y líder de calidad</p>
              </div>
              <div className="col-lg-4 p-4">
                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src={ernesto} width="200" />
                <h4 className="nom">
                  <b>Ernesto Rocha</b>
                </h4>
                <p className="mb-0 txtp">Desarrollador móvil</p>
              </div>
              <div className="col-lg-4 col-md-6 p-4">
                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src={user} alt="Card image cap" width="200" />
                <h4 className="nom">
                  <b>Gerardo Ceseñas</b>
                </h4>
                <p className="mb-0 txtp">Desarrollador web y diseñador de UI</p>
              </div>
            </div>
            <div className="row justify-content-center align-items-center ">
              <div className="col-lg-4 p-4">
                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src={cris} width="200" />
                <h4 className="nom">
                  <b>Christian Rodríguez</b>
                </h4>
                <p className="mb-0 txtp">DBA y gestor de pruebas</p>
              </div>
              <div className="col-lg-4 p-4">
                <img className="img-fluid d-block mb-3 mx-auto rounded-circle" src={luis} width="200" />
                <h4 className="nom">
                  <b>Luis Valenzuela</b>
                </h4>
                <p className="mb-0 txtp">Seguridad y desarrollo de IoT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contacto">
        <div className="container container2">
          <div className="form">
            <div className="info-contacto">
              <h3 className="title2">¡Contáctanos!</h3>
              <p className="text2"> Estamos para servirte, escríbenos tus dudas llenando este formulario. </p>

              <div className="social-media">
                <p className="text3">Síguenos:</p>
                <div className="social-icons">
                  {" "}
                  <a href="#">
                    {" "}
                    <i className="fa fa-facebook-f"></i>{" "}
                  </a>{" "}
                  <a href="#">
                    {" "}
                    <i className="fa fa-twitter"></i>{" "}
                  </a>{" "}
                  <a href="#">
                    {" "}
                    <i className="fa fa-instagram"></i>{" "}
                  </a>{" "}
                  <a href="#">
                    {" "}
                    <i className="fa fa-whatsapp"></i>{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="info-contacto-form">
              <form action="#" onClick={() => ToastyMsj("Mensaje enviado")} autoComplete="off">
                <h3 className="title3">Llena los campos</h3>
                <div className="contenedor-input">
                  {" "}
                  <input type="text" name="nombre" className="input" placeholder="Nombre completo" />{" "}
                </div>
                <div className="contenedor-input">
                  {" "}
                  <input type="email" name="email" className="input" placeholder="Email" />{" "}
                </div>
                <div className="contenedor-input">
                  {" "}
                  <input type="number" name="telefono" className="input" placeholder="Teléfono" />{" "}
                </div>
                <div className="contenedor-input textarea">
                  {" "}
                  <textarea name="mensaje" className="input" placeholder="Mensaje"></textarea>{" "}
                </div>
                <input type="submit" value="Enviar" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ToastyMsj(msj) {
  toast(msj);
}
