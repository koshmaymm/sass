import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { SimpleContextOne } from "../context/SimpleContextOne";
import { SimpleContextTwo } from "../context/SimpleContextTwo";
import { SimpleContextTree } from "../context/SimpleContextTree";
import PlusMinusButtons from "./PlusMinusButtons";

const Hello = () => {
  const { valOne, handleValOne, valTwo, handleValTwo, valTree, handleValTree } =
    useContext(SimpleContextOne);
  const { valueOne, handleValueOne } = useContext(SimpleContextTwo);
  const { valueText } = useContext(SimpleContextTree);

  const location = useLocation();
  const [name, setName] = useState("Default name");

  useEffect(() => {
    if (!location.state) return;
    const { name } = location.state;
    setName(name);
  }, [location]);

  return (
    <div className="hello">
      <h1>Hello component with different contexts</h1>
      <div className="section">
        <h3>Section with state</h3>
        <p>
          <b>Property "name" from the current state:</b> <i>{name}</i>
        </p>
      </div>
      <div className="sections__a">
        <div className="section">
          <h3>Section with context</h3>
          <p>
            <b>Property "valOne" from the SimpleContextOne:</b> <i>{valOne}</i>
          </p>
          <PlusMinusButtons val={valOne} handleVal={handleValOne} />
        </div>
        <div className="section">
          <h3>Section with context</h3>
          <p>
            <b>Property "valTwo" from the SimpleContextOne:</b> <i>{valTwo}</i>
          </p>
          <PlusMinusButtons val={valTwo} handleVal={handleValTwo} />
        </div>
        <div className="section">
          <h3>Section with context</h3>
          <p>
            <b>Property "valTree" from the SimpleContextOne:</b>{" "}
            <i>{valTree}</i>
          </p>
          <PlusMinusButtons val={valTree} handleVal={handleValTree} />
        </div>
      </div>
      <div className="sections__b">
        <div className="section">
          <h3>Section with context</h3>
          <p>
            <b>Property "valueOne" from the SimpleContextTwo:</b>{" "}
            <i>{valueOne}</i>
          </p>
          <hr />
          <input
            type="text"
            value={valueOne}
            onChange={(e) => handleValueOne(e)}
            placeholder="Empty text"
          />
        </div>
      </div>
      <div className="sections__c">
        <div className="section">
          <h3>Section with context SimpleContextTree</h3>
          <p>
            <b>Property "valueText" from the SimpleContextTree:</b>{" "}
            <i>{valueText}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
