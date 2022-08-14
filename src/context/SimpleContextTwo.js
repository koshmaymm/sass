import { createContext, useState } from "react";

export const SimpleContextTwo = createContext(null);

const SimpleContextTwoProvider = (props) => {
  const [valueOne, setValueOne] = useState("");

  const handleValueOne = (e) => setValueOne(e.target.value);

  const values = {
    valueOne,
    handleValueOne,
  };

  return (
    <SimpleContextTwo.Provider value={values}>{props.children}</SimpleContextTwo.Provider>
  );
};

export default SimpleContextTwoProvider;
