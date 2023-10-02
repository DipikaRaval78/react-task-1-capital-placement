import React from "react";
import { PlusOutlined ,EditOutlined} from "@ant-design/icons";
import { Select, Input } from "antd";
import { useState } from "react";
import {  DeleteOutlined } from "@ant-design/icons";



const OPTION = [
  { value: "Paragraph", label: "Paragraph" },
  { value: "Short answer", label: "Short answer" },
  { value: "Yes/No", label: "Yes/No" },
  { value: "Dropdown", label: "Dropdown" },
  { value: "Multiple choice", label: "Multiple choice" },
  { value: "Date", label: "Date" },
  { value: "Number", label: "Number" },
  { value: "File upload", label: "File upload" },
  { value: "Video question", label: "Video question" },
];
// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('QuestionInfo');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const AdditionalQuestion = () => {
  
  // main array of objects state || QuestionInfo state || QuestionInfo array of objects
  const [QuestionInfo, setQuestionInfo]=useState(getDatafromLS());
  const [Activefield, setActiveField] = useState<number | null>(null);

  // input field states
  const [type, setType]=useState(OPTION[0].value);
  console.log(QuestionInfo)
  const [question, setQuestion]=useState('');
// form submit event
  const handleAddQuestionSubmit=(e)=>{
  e.preventDefault();
  // creating an object
  const QuestionInfos={
    type ,
    question
  }
  setQuestionInfo([...QuestionInfo,QuestionInfos]);
  setType('');
  setQuestion('');
}
// delete book from LS


  // saving data to local storage
  React.useEffect(()=>{
    localStorage.setItem('QuestionInfos',JSON.stringify(QuestionInfo));
  },[QuestionInfo])

  const handleChange = (event, data) => {
    console.log({value: data.value});
    setType(data.value);
  };
 
  // const handleDelete = (targetIndex) => {
  //   console.log("hhhh")
  //   console.log(setQuestionInfo(QuestionInfo.filter((_, idx) => idx !== targetIndex)));
  // };
  const [hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!hide);
  };
 
  const openQue = () => {
    setHide(false);
  };

  return (
    <div>
      
          <div>
            <div >     
            
              {
            QuestionInfo.map((book,id)=>(
              <div key={id} > 
              <div className="flex-justify" >
                 <div  className="flex-col" style={{paddingTop:"1rem"}}>
                  <span className="font-bold" style={{paddingBottom:"0.5rem"}}>{book.type}</span>
                  <span className="text-sm">{book.question}</span>
                  </div>  
                
                  <EditOutlined   onClick={() => setActiveField(Activefield == id ? null  : id)} style={{fontSize:"20px",fontWeight:"bold"}}/>
                  </div>
                  <div>
                    {
                        Activefield === id ?(
                            <div>Hello</div>

                          ):null

                    }
                      
                   </div>  
          
              </div>
      ))
           }
           </div>
        </div>
       <form  onSubmit={handleAddQuestionSubmit}>
         <div className="padding">
        <div
          className="flex flex-col gap-3 transition-all"
          style={{ display: hide ? "none" : "block" }}
        >
          {/* <p>Type</p> */}
         <div style={{paddingBottom:"1rem",paddingTop:"1rem"}}>Type </div> 

          <Select
            className="w-full h-11"
            options={OPTION}
            onChange={handleChange}
            value={type}
          
          />
            {/* {OPTION.map((item,id) => (
            <option key={id} value={item.label}>{item.label}</option>

            ))} */}
          {/* </Select> */}
          {/* <p>Question</p> */}
          <div style={{paddingBottom:"1rem",paddingTop:"1rem"}}>Question </div> 

          <Input
          required
            className="w-full h-11"
            type="text"
            placeholder="Type here"
            onChange={(e)=>setQuestion(e.target.value)} value={question}
          />

          <div className="flex-justify mt-5">
            <button
              className="text-col flex items-center gap-1 text-sm"
              onClick={toggleHide}
            >
              <DeleteOutlined style={{ fontSize: 20 }} />
              Delete question
            </button>
            <button className="text-col-1  font-bold text-sm py-2 px-3 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
      </form>


      <div
        className="flex-justify g-f-m  text-sm cursor-pointer"
        onClick={openQue}
      >
        <PlusOutlined
          style={{ fontSize: "20px", fontWeight: "bold" }}
          className="text-xl"
        />
        <span>Add a question</span>
      </div>
    </div>
  );
};

export default AdditionalQuestion;
