import React,{useState}  from "react";
import { PERSONAL_INFORMATION, PERSONAL_INFORMATION_CHECK } from "../Const"
// import CheckBox from "../CheckBoxWrap";
// import SwitchBox from "../SwitchBoxWrap"
import AdditionalQuestion from "./AdditionalQuestion";
import { Checkbox ,Switch} from "antd";


const PersonalInformation = () => {
  const [newarr , setNewArr] = useState([])
  const handlechange = e => {
    console.log(e.target)
    const  arr = PERSONAL_INFORMATION_CHECK.find(item => item.key  === e.target.id);
    arr.ischecked = !arr.ischecked;
    console.log(arr)
   console.log(setNewArr([...newarr,arr]),newarr);
    
  };
   return (
        <div>
      {PERSONAL_INFORMATION.map((product, idx) => {
        return(
          <div key={idx}>
          <div className="title-text">
            <span style={{fontWeight:"bold"}}>{product.name}</span>
            </div>
            </div>  
        )
      })}
      {
        PERSONAL_INFORMATION_CHECK.map((item, id) => {

          return(
            <div key={id}>
              <div className="title-text">
              <span style={{fontWeight:"bold"}}>{item.name}</span>
              <div className="checkbox-swith">
              <Checkbox
                  id={item.key}
                  onChange={handlechange}
                  checked={item.ischecked}
              />
               <Switch
               style={{backgroundColor:"gray"}}
                />
              </div>
              </div>
              
            </div>
          )
        })
      }
      <AdditionalQuestion/>
        </div>
        
        
        
   
  );
};

export default PersonalInformation;
