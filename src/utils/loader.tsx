import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="40"
      width="40"
      color="#457b9d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
