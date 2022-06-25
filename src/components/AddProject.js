import React from 'react';
import App from './App'

class AddProject extends React.Component {
    state = {
        projectname: "",
        team: "",
        description: "",
        organization: "",
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.projectname === "" && this.state.description === "" && this.state.team === "" && this.state.organization){
            alert("ALL FIELDS ARE MANDATORY")
            return;
        }
        this.props.addProjectHandler(this.state);
        this.setState({projectname: "", description: "", team:"", organization: ""});
        console.log(this.state);
    }
    render() {
        return(
            <div className='ui main'>
                <h2>Create Project</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Project Name</label>
                        <input type='text' 
                        name='name' 
                        placeholder='Project Name' 
                        value={this.state.projectname} 
                        onChange={ (e) => this.setState({projectname: e.target.value})}></input>
                    </div>
                      <div className='field'>
                        <label>Team</label>
                        <input type='text'
                         name='team'
                         placeholder='Project Team'
                         value={this.state.team} 
                         onChange={ (e) => this.setState({team: e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Organization</label>
                        <input type='text'
                         name='name'
                         placeholder='Organization'
                         value={this.state.organization} 
                         onChange={ (e) => this.setState({organization: e.target.value})}></input>
                    </div>
                    <div className='field'>
                        <label>Description</label>
                        <input type='text'
                         name='name'
                         placeholder='Description'
                         value={this.state.description} 
                         onChange={ (e) => this.setState({description: e.target.value})}></input>
                    </div>
            
                    <button className='ui button black'>Add</button>
                </form>
            </div>
        );
    }

}
export default AddProject;