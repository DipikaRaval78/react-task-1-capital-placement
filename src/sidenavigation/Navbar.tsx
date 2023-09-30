// import {  GroupIcon } from "";
import React from "react";
import "./Navbar.scss"
import { HomeOutlined } from "@ant-design/icons"
import * as FaIcons from "react-icons/fa";


const Navbar = () => {
    return (
       
    
        <div id="navbar">
      <div className="groupicon">
        {/* <GroupIcon />   */}
        <FaIcons.FaBars style={{ fontSize: 20 }}/>
        <div className="flex flex-col items-center gap-11">
          <HomeOutlined style={{ fontSize: 20 }} />
          {/* <ClipboardIcon style={{ fontSize: 26 }} /> */}
        </div>
      </div>
      <div className="roundacc">
                  <span className="text-class">NT</span>
      </div>
              </div>
      
    );
};

export default Navbar;
