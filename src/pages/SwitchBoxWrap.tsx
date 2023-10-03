import { Switch } from "antd";
import React from "react";

interface ISwitchBox {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void
}

const SwitchBox: React.FC<ISwitchBox> = ({ label, id, checked }) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      <Switch id={id} size="small" checked={checked}  />
      <span className="text-sm">{label}</span>
    </label>
  );
};

export default SwitchBox;
