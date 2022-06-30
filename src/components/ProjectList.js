import React, {useRef} from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = (props) => {
    console.log(props);
    const inputEl =  useRef("");

    const renderProjectList = props.projects.map((projects)  => {
        return(
            <ProjectCard projects={projects}></ProjectCard> 
        );
    });

    const getsearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
};
    return (
        <div className='mainer'>
            <h2>Projects</h2>
          <div className='ui search'>
            <div className='ui icon input'>
                <input ref={inputEl} type='text' placeholder='Search Projects' className='prompt' value={props.term} onChange={getsearchTerm}></input>
                    <i className='search icon'></i>
            </div>
            </div>
        <div className='ui celled list'>{renderProjectList}
        </div>
        </div>
         
    );
}

export default ProjectList;