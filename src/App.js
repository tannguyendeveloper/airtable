import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './css/App.scss';
import Select from './components/Select';
import JobListings from './components/JobListings';

const DEPARTMENTS = [
  { name: 'All Departments', id: 0 },
  { name: 'Customer Success', id: 62832},
  { name: 'Engineering', id: 92385 },
  { name: 'Marketing', id: 35820 },
]

const LOCATIONS = [
  { name: 'All Locations', id: 0 },
  { name: 'San Francisco', id: 583219 },
  { name: 'New York City', id: 583201 },
  // { name: 'Remote', id: 53821 }
]

const fetchJobs = async () => {
  let jobs = await fetch('https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json')
  return jobs;
}


function App() {
  const [department, setDepartment] = useState(0);
  const [location, setLocation] = useState(0);

  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try { 
      let res = await fetch('https://dl.dropboxusercontent.com/s/90imekuizwoidih/job_listings.json')
      let jobsObj = await res.json()
      setJobs(filterJobs(department, location, jobsObj.jobs))
    } catch(error) {
      setError(error)
    }
  }  

  useEffect(() => {
    getJobs(department,location)
  }, [department, location])

  const filterJobs = (dept, loc, jobs) => {
    console.log('dept:', typeof dept)
    console.log('loc:', loc)
    let filteredJobs = jobs.filter((job) => {
      if(dept && loc) {
        return dept === job.department.id && job.offices.some(office => loc == office.id);
      } else if (dept) {
        return dept === job.department.id;
      } else if (loc) {
        return job.offices.some(office => loc == office.id)
      } else {
        return jobs
      }
    })
    return filteredJobs
  }

  console.log(jobs)

  return (
    <div className="App">
      <div className="container">
        <div className="grid mt-14 mb-10 sm-mt-10 sm-mb-8">
          <div className="col lg-col-12 sm-col-24 sm-mb-6">
            <h2 className="label mb-2">Open Positions</h2>
            <h1 className="mb-4 sm-mb-3">Help us create the future of software</h1>
            <p>The ability to make software opens up tremendous creative possibilities, and we want to empower people to bring these possibilities to lire - no matter how ambitious.  The good news is that creating software doesn't have to mean writing code.  What will you create?</p>
          </div>
          <div className="image-container col lg-col-12 sm-col-12">
            <img 
              src="./assetts/open-positions.png"
              alt=""
              onMouseEnter={(e) => {
                e.target.src = './assetts/open-positions.gif'
                e.target.height = e.target.height;
                e.target.width = e.target.width;
              }}
              onMouseLeave={(e) => {
                e.target.src = './assetts/open-positions.png';
              }}
            />
          </div>
        </div>
        <div className="grid h-center v-center mb-12 sm-mb-10">
          <Select
            id="departmnent"
            name="department"
            label="Department"
            className="mr-4"
            value={department}
            options={DEPARTMENTS}
            onChange={ async (e) => {
              setDepartment(parseInt(e.target.value));
            }}
          />
          <Select
            id="location"
            name="location"
            label="Location"
            value={location}
            options={LOCATIONS}
            onChange={ async (e) => {
              setLocation(parseInt(e.target.value));
            }}
          />
        </div>
        <JobListings department={department} location={location} jobs={jobs} />
      </div>
    </div>
  );
}

export default App;
