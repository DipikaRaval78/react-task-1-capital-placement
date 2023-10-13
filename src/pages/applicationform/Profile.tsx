import React, {useState} from "react";
import { PROFILE } from "../Const"
// import CheckBox from "../CheckBoxWrap";
// import SwitchBox from "../SwitchBoxWrap"
import AdditionalQuestion from "./AdditionalQuestion";
import { Checkbox,Switch} from "antd";


const Profile = () => {

  const [newarr , setNewArr] = useState([])
  const [checkedswitch, setcheckedswitch] = React.useState([]);

  const handlechange = e => {
    const  arr = PROFILE.find(item => item.key  === e.target.id);
    arr.ischecked = !arr.ischecked;
    setNewArr([...newarr,arr])
  //  console.log(setNewArr([...newarr,arr]),newarr);
  }
  const handleswithchange = (value) => {
    const switcharr = PROFILE.find(item => item.key === value);
    switcharr.isSwitchToggle = !switcharr.isSwitchToggle;

    setcheckedswitch([...checkedswitch,switcharr])
 
  };
  return (
    <div>

  {PROFILE.map((product, idx) => {
    return(
      <div key={idx}>
      <div className="title-text">
      <span style={{fontWeight:"bold"}}>  {product.name}</span>
      <div className="checkbox-swith">
              <Checkbox
                id={product.key}
                onChange={handlechange}
                checked={product.ischecked}
               
              >Mandatory</Checkbox>
                <Switch
               className="back-css"
                id={product.key}
               title="Hide"
               size="small"
             
              checked={product.isSwitchToggle[idx]}
              onChange={() => {
                handleswithchange(product.key);
              }}
                />
                <label>{product.isSwitchToggle ? "Hide" : "Show"}</label>

              </div>
        </div>
        </div>  

    )
  })}
   <AdditionalQuestion/>
    </div>
    

);
};

export default Profile;
