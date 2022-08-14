import HelloLocation from "./HelloLocation";
import HelloA from "./HelloA";
import HelloB from "./HelloB";
import HelloC from "./HelloC";

const Hello = () => {
  return (
    <div className="hello">
      <HelloLocation />
      <HelloA />
      <HelloB />
      <HelloC />
    </div>
  );
};

export default Hello;
