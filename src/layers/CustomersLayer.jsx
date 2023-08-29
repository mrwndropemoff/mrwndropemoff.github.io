import { Slider } from "../componants/Slider";
import axios from "axios";

const res = await axios.get(
  "https://mocki.io/v1/8a4d1713-1eec-4cb7-ad38-21a07a89fa6a"
);

export const CustomersLayer = () => {
  return (
    <div className="relative mt-64">
      <img
        className=" absolute z-20 right-9 top-[-12px]"
        src="src/assets/background/element-1-white.svg"
        alt="element 1"
      />
      <Slider profiles={res.data} />
      <img
        className=" absolute z-0 bottom-32 left-7"
        src="src/assets/background/element-1.svg"
        alt="element 2"
      />
    </div>
  );
};
