
interface PersonalInformationProps {
name : string;
key : string;

}
 export const PERSONAL_INFORMATION : PersonalInformationProps[] = [
   {
     name: "First Name",
     key: "firstName"
   },
   {
     name: "Last Name",
     key: "lastName"
   },
   {
     name: "Email",
     key: "emailId"
   }
]
export const PERSONAL_INFORMATION_CHECK = [
   {
     name: "Phone",
     info: "without dial code",
     key: "phoneNumber",
     ischecked: false,
     isSwitchToggle:false,

   },
   {
     name: "Nationality",
     key: "nationality",
     ischecked: false,
     isSwitchToggle:false,


   },
   {
     name: "Current Residence",
     key: "currentResidence",
     ischecked: false,
     isSwitchToggle:false,


   },
   {
     name: "ID Number",
     key: "idNumber",
     ischecked: false,
     isSwitchToggle:false,


   },
   {
     name: "Date of Birth",
     key: "dateOfBirth",
     ischecked: false,
     isSwitchToggle:false,


   },
   {
     name: "Gender",
     key: "gender",
     ischecked: false,
     isSwitchToggle:false,


   },
 ];
 export const PROFILE  = [
   {
     name: "Education",
     key: "education",
     ischecked: false,
     isSwitchToggle:false,
   },
   {
     name: "Experience",
     key: "experience",
     ischecked: false,
     isSwitchToggle:false,
   },
   {
     name: "Resume",
     key: "resume",
     ischecked: false,
     isSwitchToggle:false,
   },
 ];
