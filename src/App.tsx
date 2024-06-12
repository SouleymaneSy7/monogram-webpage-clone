import DropDown from "./components/DropDown";
// import Footer from "./components/Footer";
import { currencyDropDown, workflowsDropDown } from "@/constants";
import { shopIcon } from "@/utils";
import Icons from "./components/Icons";

const App = () => {
  const labelItems = (
    <div>
      <Icons iconSrc={shopIcon} alt="Shop Icons" />
      AUD
    </div>
  );

  return (
    <>
      <div>Hello Monogram</div>
      <DropDown label={labelItems} options={currencyDropDown} />
      <DropDown label="workflows" options={workflowsDropDown} />
      {/* <Footer /> */}
    </>
  );
};

export default App;
