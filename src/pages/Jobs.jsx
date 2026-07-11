import "../styles/jobs.css";

function Jobs() {

  const jobs = [
    {
      company: "Google",
      role: "Frontend Developer Intern",
      location: "Bangalore"
    },
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      location: "Hyderabad"
    },
    {
      company: "Amazon",
      role: "AI/ML Intern",
      location: "Chennai"
    }
  ];


  return (
    <div className="jobs-page">

      <h2>Jobs</h2>

      <div className="job-container">

        {jobs.map((job,index)=>(

          <div className="job-card" key={index}>

            <div className="company-logo">
              {job.company.charAt(0)}
            </div>

            <div>

              <h3>{job.role}</h3>

              <p>{job.company}</p>

              <p>📍 {job.location}</p>

              <button>
                Apply
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Jobs;