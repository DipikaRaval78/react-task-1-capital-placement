import React,{useState}  from "react";
import { PERSONAL_INFORMATION, PERSONAL_INFORMATION_CHECK } from "../Const"
// import CheckBox from "../CheckBoxWrap";
// import SwitchBox from "../SwitchBoxWrap"
import AdditionalQuestion from "./AdditionalQuestion";
import { Checkbox ,Switch} from "antd";



const PersonalInformation = () => {
  const [newarr , setNewArr] = useState([])
  const [checkedswitch, setcheckedswitch] = React.useState([]);

  const handlechange = e => {
    console.log(e.target)
    const  arr = PERSONAL_INFORMATION_CHECK.find(item => item.key  === e.target.id);
    arr.ischecked = !arr.ischecked;
    console.log(arr)
    setNewArr([...newarr,arr])
   console.log(setNewArr([...newarr,arr]));

    
  };
  const handleswithchange = (value) => {
    console.log(value)
    const switcharr = PERSONAL_INFORMATION_CHECK.find(item => item.key === value);
    switcharr.isSwitchToggle = !switcharr.isSwitchToggle;

    setcheckedswitch([...checkedswitch,switcharr])
 
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
                  title="Internal"
              >Internal</Checkbox>
               <Switch
               className="back-css"
                id={item.key}
               title="Hide"
               size="small"
             
              checked={item.isSwitchToggle[id]}
              onChange={() => {
                handleswithchange(item.key);
              }}
                />
                <label>{item.isSwitchToggle ? "Hide" : "Show"}</label>
             
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
