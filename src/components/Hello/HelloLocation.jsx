import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const HelloLocation = () => {
  const location = useLocation();
  const [name, setName] = useState("Default name");

  useEffect(() => {
    if (!location.state) return;
    const { name } = location.state;
    setName(name);
  }, [location]);

  return (
    <>
      <h1>Hello component with different contexts</h1>
      <div className="section">
        <h3>Section with state</h3>
        <p>
          <b>Property "name" from the current state:</b> <i>{name}</i>
        </p>
      </div>
    </>
  );
};

export default HelloLocation;
