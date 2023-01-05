import React from "react";

import {
  AboutUs,
  Echipa,
  FindUs,
  Footer,
  Header,
  Testimoniale,
  Rezervari,
  Concept,
} from "./container";
import { Navbar, MenuItems } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <MenuItems />
    <Rezervari />
    <AboutUs />
    <Concept />
    <Echipa />
    <Testimoniale />
    <FindUs />
    <Footer />
  </div>
);

export default App;
