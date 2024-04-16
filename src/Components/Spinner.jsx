import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center z-[10] mt-[10%]">
<RotatingLines
  visible={true}
  height="72"
  width="72"
  color="#D23A25"
  strokeColor="#D23A25"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div> 
    );
};

export default Spinner;