import React from "react";
import Main from "./components/Main";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Know More About Dope Store",
  };

  return (
    <>
      {myName}
      <Main myData={data} />
    </>
  );
};

export default About;
