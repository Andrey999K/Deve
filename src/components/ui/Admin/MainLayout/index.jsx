import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import AdminHeader from "../AdminHeader";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log(document.title);
    setTitle(document.title);
  }, [document.title]);
  return (
    <div className="flex h-[100dvh]">
      <Sidebar />
      <div className="w-full h-full flex flex-col">
        <AdminHeader title={title} />
        <div className="pl-8 pr-5 h-full max-h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default MainLayout;
