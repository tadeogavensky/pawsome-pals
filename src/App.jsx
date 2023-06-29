import React from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Strip } from "./components/Strip";

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      <Strip/>
    </>
  );
};

export default App;
