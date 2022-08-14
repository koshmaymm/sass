import { createContext, useState } from "react";

export const SimpleContextTree = createContext(null);

const SimpleContextTreeProvider = (props) => {
  const [valueText] = useState("SimpleContextTree Big Text");

  const values = {
    valueText
  };

  return (
    <SimpleContextTree.Provider value={values}>{props.children}</SimpleContextTree.Provider>
  );
};

export default SimpleContextTreeProvider;
