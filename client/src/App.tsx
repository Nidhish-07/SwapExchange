import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Transactions from "./components/Transactions";
import Services from "./components/Services";
import Home from "./components/Home";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="min-h-screen">
      <div className="">
        <Header />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
