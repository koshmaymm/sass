import SimpleContextOneProvider from "./SimpleContextOne";
import SimpleContextTwoProvider from "./SimpleContextTwo";
import SimpleContextTreeProvider from "./SimpleContextTree";

const GlobalContext = (props) => {
  return (
    <SimpleContextTreeProvider>
      <SimpleContextOneProvider>
        <SimpleContextTwoProvider>{props.children}</SimpleContextTwoProvider>
      </SimpleContextOneProvider>
    </SimpleContextTreeProvider>
  );
};

export default GlobalContext;
