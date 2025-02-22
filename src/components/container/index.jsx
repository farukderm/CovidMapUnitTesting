import React from "react";

const Container = ({ children, designs }) => {
  return (
    <div className={`max-w-[1200px] mx-auto  px-10 py-5 md:px-20 ${designs}`}>
      {children}
    </div>
  );
};

export default Container;
