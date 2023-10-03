import React from 'react';
import "./Header.scss"
import classNames from "classnames";
const Head = ["Program Details", "Application Form", "Workflow", "Preview"];

const Header = () => {
    return (
        <header>
            <div className="header">
        {Head.map((item, idx) => (
           <div
           key={idx}
           className={classNames(
            "headernav",
             {
               "selectednav": item === "Application Form"
             
             }
           )}
         >
            {item}
          </div>
        ))}
      </div>
        </header>
        );
    };export default Header;