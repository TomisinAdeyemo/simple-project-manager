import React from 'react';

export const ProjectCard = (props) => {
    const {projectname, description, team, organization} = props.projects;

    return(
        <div className='item'>
        <div className='content'></div>
        <div className='header'>{projectname}</div>
        <div>{team}</div>
        <div>{organization}</div>
        <div>{description}</div>
    </div>
    );
}
