import React from "react";
import {  UploadOutlined,DeleteOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";



const UploadCoverImage = () => {
 const [selectedImage, setSelectedImage] = useState<File | null>(null);
 const inputRef = useRef(null);
 
  const fileSelectedhandler= (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files[0]);
    const file = event.target.files ? event.target.files[0] : null;
    validateFile(file);
  }

  const handleRemove = () => {
    setSelectedImage(null)
   
  };

  const validateFile = (file: File | null) => {
    if (file) {
      if (!file.type.startsWith('image/')) {
        console.log('Please select an image file');
      } else if (file.size > 1000000) {
        console.log('File size is too large');
      } else {
        setSelectedImage(file);
      }
    }
  };

   return (
        <div >
         <input  ref={inputRef} type="file" hidden onChange={fileSelectedhandler} />
{selectedImage ? (<div className="flex-justify flex-col">
<div style={{width:"100%"}}>
            <img
             src={URL.createObjectURL(selectedImage)}
             className="img"
              alt="Thumb"
             
            />
            <div className="self-end text-sm ">
            <div
              className="reupload del-re"
              onClick={() => inputRef.current.click()}
            >
              <UploadOutlined style={{ fontSize: "18px", fontWeight: "bold" }} />
              Change
            </div>
            <div
              className="delete del-re"
              onClick={handleRemove}
             
            >
              <DeleteOutlined style={{ fontSize: "18px", fontWeight: "bold" }} />
              Delete
            </div>
          </div> 
           
          </div>
</div> ):

(<div className="upload-file" onClick={() => inputRef.current.click()}>
        
<UploadOutlined
  style={{ color: "#000", fontSize: 35, fontWeight: "bold" }}
/>
<p className="font-bold">Upload cover image</p>
<p className="text-[#979797]">

  16:9 ratio is recommended. Max image size 1mb
</p>
</div>

)}

        </div>
       
   
  );
};

export default UploadCoverImage;
