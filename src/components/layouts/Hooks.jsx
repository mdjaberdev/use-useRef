import { useRef, useState } from "react";
import Container from "../common/Container";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const Hooks = () => {
  let [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  let showRef = useRef(null);
  let [isopen, setisopen] = useState(false);
  const handleShowTwo = () => {
    showRef.current.classList.toggle("hidden");
    setisopen(!isopen);
  };
  return (
    <Container>
      <div className="flex flex-col text-center lg:text-start lg:flex-row lg:justify-center gap-x-40 px-6 lg:px-0">
        <div className="w-full lg:w-[30%] mx-auto">
          <button
            onClick={handleShow}
            className={` w-20 h-20 flex justify-center items-center   font-bold text-white px-6 rounded-xl cursor-pointer  my-7 ${show ? "bg-red-400" : "bg-green-400 "}`}
          >
            {show ? (
              <div className="text-5xl">
                <IoCloseCircleOutline />
              </div>
            ) : (
              <div className="text-4xl">
                <FaBarsStaggered />
              </div>
            )}
          </button>
          <nav>
            {show ? (
              <ul className="text-2xl font-bold text-white p-5 rounded-xl lg:w-50  bg-gray-600 space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            ) : (
              ""
            )}
            <h4 className="text-2xl font-bold">useState</h4>
          </nav>
        </div>
        {/* useRef  */}
        <div className="w-full lg:w-[30%]">
          <button
            onClick={handleShowTwo}
            className={`text-2xl w-20 h-20 flex justify-center items-center   font-bold text-white px-6 rounded-xl cursor-pointer  my-7 ${isopen ? "bg-red-400" : "bg-green-400 "}`}
          >
            {isopen ? (
             "Close"
            ) : (
             "Open"
            )}
          </button>
          <nav>
            <ul
              ref={showRef}
              className="text-2xl font-bold text-white p-5 rounded-xl lg:w-50  bg-gray-600 space-y-2 hidden"
            >
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <h4 className="text-2xl font-bold">useRef</h4>
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Hooks;
