import { useNavigate } from "react-router-dom";

const ButtonPush = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/hello", { state: { id: 1, name: "sabaoon" } });
  };

  return (
    <button className="btn-push" type="button" onClick={() => onClickButton()}>
      Button Push
    </button>
  );
};

export default ButtonPush;
