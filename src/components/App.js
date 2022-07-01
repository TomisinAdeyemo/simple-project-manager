import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddProject from './AddProject';
import ProjectList from './ProjectList';

function App() {

  //DEFINED CONSTANTS
 const LOCAL_STORAGE_KEY = "projects";
 const [projects, setProjects] = useState([]);
 const [searchTerm, setsearchTerm] = useState("");
 const[searchResults, setsearchResults] = useState([]);


 const addProjectHandler = (project) => {
  console.log(projects);
  setProjects([...projects, project]);
 };
//STORING THE DATA IN THE LOCAL STORAGE

 useEffect(() => {
  const retriveProjects = JSON.parse (localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retriveProjects) setProjects(retriveProjects);
}, [projects]);

 useEffect(() => {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))},
 [projects]);

 //SEARCH BAR FUNCTIONALITY

 const searchHandler = (searchTerm) => {
  setsearchTerm(searchTerm); 

  if(searchTerm !== "") {
    const newprojetcList = projects.filter((projects) => {
     return  (Object.values(projects).join(" ").toLowerCase().includes(searchTerm.toLowerCase))
    });
    setsearchResults(newprojetcList);
  } else{
    setsearchResults(projects)
  }
   
 }
  
 //MAINPAGE
   return (
    <div className='ui container'>
      <Header className='top'/>
      <AddProject addProjectHandler={addProjectHandler}/>
      <ProjectList 
      projects={searchTerm.length < 1 ? projects: searchResults}
      term ={searchTerm}
      searchKeyword = {searchHandler}/>
  </div>

       );
}

export default App;