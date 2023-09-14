import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../../App";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  const { darkTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={`fixed top-0 bottom-0 right-0 left-0 w-screen h-[100dvh] ${darkTheme ? "bg-blackDark/90" : "bg-white/90"} flex justify-center items-center z-[9999]`}>
      <PuffLoader color={darkTheme ? "#FFFFFF" : "#1F1F21"} />
    </div>
  );
};

export default Loader;
