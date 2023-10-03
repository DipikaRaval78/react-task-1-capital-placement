
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

   },
   {
     name: "Nationality",
     key: "nationality",
     ischecked: false,

   },
   {
     name: "Current Residence",
     key: "currentResidence",
     ischecked: false,

   },
   {
     name: "ID Number",
     key: "idNumber",
     ischecked: false,

   },
   {
     name: "Date of Birth",
     key: "dateOfBirth",
     ischecked: false,

   },
   {
     name: "Gender",
     key: "gender",
     ischecked: false,

   },
 ];
 export const PROFILE  = [
   {
     name: "Education",
     key: "education",
     ischecked: false,
   },
   {
     name: "Experience",
     key: "experience",
     ischecked: false,
   },
   {
     name: "Resume",
     key: "resume",
     ischecked: false,
   },
 ];
