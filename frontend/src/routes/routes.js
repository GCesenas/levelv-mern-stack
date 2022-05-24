import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../assets/css/App.css";

import Home from "../components/Home";
import Registro from "../components/Registro";
import Login from "../components/Login";
import Compras from "../components/Compras";
import Menu from "../components/Menu";
import Dashboard from "../components/Dashboard";
import PageNotFound from "../views/PageNotFound";
import Tienda from "../views/Tienda";
import Prototipos from "../views/Prototipos";
import Amplistein from "../views/Amplistein";
import ArdBank from "../views/ArdBank";
import SmartPot from "../views/SmartPot";
import StingerCar from "../views/StingerCar";
import Dispenser from "../views/Dispenser";

export default function Rutas() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/productos">
          <Prototipos />
        </Route>

        <Route path="/registro/:err?">
          <Registro />
        </Route>

        <Route path="/login/:err?">
          <Login />
        </Route>

        <Route path="/compras/:id">
          <Compras />
        </Route>

        <Route path="/menu/:id">
          <Menu />
        </Route>

        <Route path="/dashboard/:id">
          <Dashboard />
        </Route>

        <Route path="/tienda/:id">
          <Tienda />
        </Route>

        <Route path="/amplistein/:id">
          <Amplistein />
        </Route>

        <Route path="/ardbank/:id">
          <ArdBank />
        </Route>

        <Route path="/smartpot/:id">
          <SmartPot />
        </Route>

        <Route path="/stingercar/:id">
          <StingerCar />
        </Route>

        <Route path="/dispensador/:id">
          <Dispenser />
        </Route>

        {/* <Route exact path="*" component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}
