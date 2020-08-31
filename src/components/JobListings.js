import React, { useState, useEffect }  from 'react';
import JobCard from './JobCard';

const DEPARTMENTS = [
    { name: 'All Departments', id: 0 },
    { name: 'Customer Success', id: 62832},
    { name: 'Engineering', id: 92385 },
    { name: 'Marketing', id: 35820 },
]

const getDeptLogoSrc = (deptName) => {
    let imageSrc, imageSrcSet;
    switch(deptName) {
        case 'Engineering':
            imageSrc = './assetts/engineering.png';
            imageSrcSet = './assetts/engineering.png 1x, ./assetts/engineering@2x.png 2x';
            break;
        case 'Marketing':
            imageSrc = './assetts/marketing.png';
            imageSrcSet = './assetts/marketing.png 1x, ./assetts/marketing@2x.png';
            break;
        case 'Customer Success':
            imageSrc = './assetts/customer-success.png';
            imageSrcSet = './assetts/customer-success.png 1x, ./assetts/customer-success@2x.png 2x';
            break;
    }
    return  {imageSrc, imageSrcSet};
}

const JobListings = (props) => {

    const renderJobsByDept = (jobs) => {
        return(
        <div>
            {
                jobs.map((dept, index) => {
                    const DEPARTMENT = DEPARTMENTS.find((department) => department.id === index)
                    let {imageSrc, imageSrcSet } = getDeptLogoSrc(DEPARTMENT.name)
                    return(
                        <div className="mb-9 sm-mb-8">
                            <h3 className={`${DEPARTMENT.name} mb-8 sm-mb-6`} data-department-id={DEPARTMENT.id}>
                                <img src={imageSrc}  srcSet={imageSrcSet} alt="" />
                                {DEPARTMENT.name}
                            </h3>
                            <div className="grid h-space-between">
                                {
                                    dept.map((job) => {
                                        return <JobCard job={job}/>
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>)
    }
    
    const renderJobs = (jobs) => {
        const DEPARTMENT = DEPARTMENTS.find((department) => department.id === props.department);
        let {imageSrc, imageSrcSet } = getDeptLogoSrc(DEPARTMENT.name)
        return(
            <div className="mb-9 sm-mb-8">
                <h3 className={`${DEPARTMENT.name} mb-8 sm-mb-6`} data-department-id={DEPARTMENT.id}>
                    <img src={imageSrc}  srcSet={imageSrcSet} alt="" />
                    { DEPARTMENT.name }
                </h3>
                <div className="grid h-space-between">
                    {
                        jobs.map((job) => {
                            return <JobCard job={job}/>
                        })
                    }
                </div>
            </div>
        )
    }    

    let jobs = !props.department ? props.jobs.reduce((acc, job) => {
        if(acc[job.department.id]) acc[job.department.id].push(job);
        else acc[job.department.id] = [job]
        return acc
    }, []) : props.jobs;
        
    return (
        <div>
            { props.department === 0 ? renderJobsByDept(jobs) : renderJobs(props.jobs) }
        </div>
    )
}

export default JobListings