import React from "react";
import "../applicationform/ApplicationForm.scss"
import UploadCoverImage from "./UploadCoverImage";
import PersonalInformation from "./PersonalInformation";
import Profile from "./Profile";
import AdditionalQuestion from "./AdditionalQuestion";
import Wrappers from "../Wrappers";

const ApplicationForm = () => {
   return (
    <div className="coverimage">
      <Wrappers
        title="Upload cover image"
        component={
          <UploadCoverImage/>
        }
      />
       <Wrappers
        title="Personal Information"
        component={
          <PersonalInformation/>
        }
      />
       <Wrappers
        title="Profile"
        component={
          <Profile/>
        }
      />
       <Wrappers
        title="Additional questions"
        component={
          <AdditionalQuestion/>
        }
      />
     </div>
  );
};

export default ApplicationForm;
