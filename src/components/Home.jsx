import ButtonPush from "./ButtonPush";
import { useTranslation } from "react-i18next";

import { texts } from "../lang";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h1>Home</h1>
      <h3>{t(texts.titleMain)}</h3>
      <hr />
      <p>
        Push state and change url <ButtonPush />
      </p>
    </div>
  );
};

export default Home;
