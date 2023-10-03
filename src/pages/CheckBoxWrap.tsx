import { Checkbox } from "antd";
import React from "react";

interface checkBox {
  label: string;
  checked: boolean;
  fnchange: (checked: boolean) => void;
}

const CheckBox : React.FC<checkBox> = ({ label, checked = false, fnchange }) => {
  return (
    <Checkbox  checked={checked} onChange={e => {
      if (fnchange !== undefined) fnchange(e.target.checked);
      
    }}>
      {label}
    </Checkbox>
  );
};

export default CheckBox;