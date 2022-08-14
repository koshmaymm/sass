import { useContext } from "react";
import { SimpleContextTwo } from "../../context/SimpleContextTwo";

const HelloB = () => {
  const { valueOne, handleValueOne } = useContext(SimpleContextTwo);

  return (
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
  );
};

export default HelloB;
