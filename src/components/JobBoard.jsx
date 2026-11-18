import JobCard from "./JobCard.jsx";
import {Jobs} from "../data.js";
export default function JobBoard(){
    return(
        <>
        <h1>Current Job Openings</h1>
        {Jobs.map((Job)=>(
            <JobCard key={Job.id} Job={Job}/>
        ))}
        </>
    );
}