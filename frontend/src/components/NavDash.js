import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Nav, Form, ButtonGroup, DropdownButton, Dropdown, Button } from "react-bootstrap";
import { FaSignOutAlt, FaHome } from "react-icons/fa";
import "../assets/css/App.css";

import proxy from "../proxy";

export default function NavDash() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${proxy.url}/buscarUser/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json.data));
  }, []);

  return (
    <div className="nav-dash">
      <Navbar>
        <Navbar.Brand href="" className="d-title-nav">
          Usuario: {data.nombre}
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Button className="nav-btn" variant="light" href={"/menu/" + id}>
            <FaHome />
          </Button>
          <Button className="nav-btn" variant="outline-light" href={proxy.url + "/logout"}>
            <FaSignOutAlt />
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}
