import React from "react";

interface WrapperInterface {
    title: string;
    component: React.ReactNode;
  }

  const Wrappers: React.FC<WrapperInterface> = ({ title, component }) => {
    return (
      <div className="cover-box">
        <div className="image-title">
          <p className="p-text">{title}</p>
        </div>
        <div className="inner-file">{component}</div>
      </div>
    );
  };
  
  export default Wrappers;
  