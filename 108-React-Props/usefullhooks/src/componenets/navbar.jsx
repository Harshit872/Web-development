import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  //CASE1 : Run on every render
  useEffect(() => {
    alert("hey i will run only on every render");
  });

  //Case2 : Run only on First render
  useEffect(() => {
    alert("hey i will run only on First render");
  }, []);

  //Case3 : Run only when certain values change render
  useEffect(() => {
    alert("hey i am runing beacuse color was changed");
  }, [color]);

  return <div>I am navbar of {color} color of hehe</div>;
};

export default Navbar;
