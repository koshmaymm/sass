import { createContext, useState } from "react";

export const SimpleContextOne = createContext(null);

const SimpleContextOneProvider = (props) => {
  const [valOne, setValOne] = useState(1);
  const [valTwo, setValTwo] = useState(22);
  const [valTree, setValTree] = useState(333);

  const handleValOne = (val) => setValOne(val);
  const handleValTwo = (val) => setValTwo(val);
  const handleValTree = (val) => setValTree(val);

  const values = {
    valOne,
    handleValOne,
    valTwo,
    handleValTwo,
    valTree,
    handleValTree,
  };

  return (
    <SimpleContextOne.Provider value={values}>{props.children}</SimpleContextOne.Provider>
  );
};

export default SimpleContextOneProvider;
