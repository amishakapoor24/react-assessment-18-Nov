import Header from "./components/Header.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import JobBoard from "./components/JobBoard.jsx";
import {User} from "./data";
export default function App(){
  return(
  <>
  <Header/>
  <ProfileSection User={User}/>
  <JobBoard/>
  </>
  );
}