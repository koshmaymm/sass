import { useContext } from "react";
import { SimpleContextOne } from "../../context/SimpleContextOne";
import PlusMinusButtons from "../PlusMinusButtons";

const HelloA = () => {
  const { valOne, handleValOne, valTwo, handleValTwo, valTree, handleValTree } =
    useContext(SimpleContextOne);

  return (
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
          <b>Property "valTree" from the SimpleContextOne:</b> <i>{valTree}</i>
        </p>
        <PlusMinusButtons val={valTree} handleVal={handleValTree} />
      </div>
    </div>
  );
};

export default HelloA;
