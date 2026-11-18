
function JobCard({Job}){
    return (
        <div>
            <h2>Id: {Job.id}</h2>
            <h2>Title: {Job.title}</h2>
            <h3>Company: {Job.company}</h3>
            <p>Location: {Job.location}</p>
            <p>Salary: {Job.salary}</p>
            <p>isNew: {Job.isNew}</p>
        </div>
    )
}
export default JobCard;