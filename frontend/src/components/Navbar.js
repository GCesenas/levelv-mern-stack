import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { RiShoppingCart2Fill, RiDashboard2Line, RiUser3Fill } from "react-icons/ri";

import logo from "../assets/images/logowhite.svg";
import "../assets/css/navbar.css";

export default function Navigbar() {
  const [navinicio, setnavinicio] = useState(false);
  const cambiarNavbar = () => {
    if (window.scrollY >= 80) {
      setnavinicio(true);
    } else {
      setnavinicio(false);
    }
  };

  window.addEventListener("scroll", cambiarNavbar);

  return (
    <>
      <Navbar className={navinicio ? "sticky-top navinicio active" : "sticky-top navinicio"}>
        <Navbar.Brand href="/">
          {" "}
          <img src={logo} className="navlogo" />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown className=".dropdown-menu" title="Nuestros productos" id="basic-nav-dropdown">
            <NavDropdown.Item className="dropdown-item animate slideIn" id="id" href="/Productos">
              Amplistein
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item animate slideIn" href="/Productos">
              Smart Dispenser
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item animate slideIn" href="/Productos">
              Ardu Bank
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item animate slideIn" href="/Productos">
              Smart Flowerpot
            </NavDropdown.Item>
            <NavDropdown.Item className="dropdown-item animate slideIn" href="/Productos">
              Stinger Car
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="dropdown-item animate slideIn" href="/Productos">
              Todos los productos
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Home#acercade">Acerca de</Nav.Link>
          <Nav.Link href="/Home#equipo">Equipo</Nav.Link>
          <Nav.Link href="/Home#contacto">Contáctanos</Nav.Link>
          <Button href="/login" className="btn btn-light">
            {" "}
            <RiUser3Fill /> Dashboard{" "}
          </Button>
        </Nav>
      </Navbar>
    </>
  );
}
