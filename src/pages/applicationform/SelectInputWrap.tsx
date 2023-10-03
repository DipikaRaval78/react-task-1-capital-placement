import { Select } from "antd";
import React from "react";

// interface ISelectInput {
//   label?: string;
//   value?: string;
//   placeholder?: string;
//   options: { value: string; label: string }[];
//   onChange?: (value: string) => void;
// }

const SelectInput =() => {
  return (
    <div className="w-full">
    <p className="pb-1">Question</p> 
      <Select
        
        className="w-full h-11"
        
        placeholder="{placeholder}"
      />
    </div>
  );
};

export default SelectInput;
