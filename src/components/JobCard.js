import React from 'react';

const JobCard = (props) => {
    let title = props.job.title;
    let location = props.job.offices[0].name;
    let department = props.job.department.name;
    let jobId = props.job.id;
    return (
        <a
            href={`https://airtable.com/jobs/${jobId}`}
            className="job-card col lg-col-7 sm-col-5 pb-8 sm-pb-4"
            data-department={department}
        >
            <div href={`https://airtable.com/jobs/${jobId}`} tabIndex={-1} className="highlight mb-3"></div>
            <div className="location small mb-1">{location}</div>
            <div className="job-title regular"><a href={`https://airtable.com/jobs/${jobId}`}>{title}</a></div>
        </a>
    )
}

export default JobCard;