import { useContext } from "react";
import { SimpleContextTree } from "../../context/SimpleContextTree";

const HelloC = () => {
  const { valueText } = useContext(SimpleContextTree);

  return (
    <div className="sections__c">
      <div className="section">
        <h3>Section with context SimpleContextTree</h3>
        <p>
          <b>Property "valueText" from the SimpleContextTree:</b>{" "}
          <i>{valueText}</i>
        </p>
      </div>
    </div>
  );
};

export default HelloC;
