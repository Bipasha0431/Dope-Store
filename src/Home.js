import React from "react";
import Main from "./components/Main";
import Services from "./components/Services";

import FeatureProduct from "./components/FeatureProducts";

const Home = () => {
  const data = {
    name: "Dope store",
  };

  return (
    <>
      <Main myData={data} />
      <FeatureProduct />
      <Services />
    </>
  );
};

export default Home;
