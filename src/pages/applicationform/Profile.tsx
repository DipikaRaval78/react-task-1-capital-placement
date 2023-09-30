import React, { useState }  from "react";
import { PROFILE } from "../Const"
// import CheckBox from "../CheckBoxWrap";
// import SwitchBox from "../SwitchBoxWrap"
import AdditionalQuestion from "./AdditionalQuestion";
import { Checkbox,Switch} from "antd";


const Profile = () => {
  
  // const [agreement, setAgreement] = useState(false);

  // const handleChange = (event) => {
  //   setAgreement(event.target.checked);
  // }
  
  const [newarr , setNewArr] = useState([])
  const handlechange = e => {
    console.log(e.target)
    const  arr = PROFILE.find(item => item.key  === e.target.id);
    arr.ischecked = !arr.ischecked;
    console.log(arr)
   console.log(setNewArr([...newarr,arr]),newarr);
    
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
               
              />
               <Switch
                />
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
