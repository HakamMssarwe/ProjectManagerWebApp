import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCNav from './FCNav.jsx'
import CCUsers from './CCUsers.jsx'
import FCProjectsAdmin from './FCProjectsAdmin.jsx'
import FCCreateAccount from './CreateAccount/FCCreateAccount.jsx'
import FCCreateProject from './CreateProject/FCCreateProject.jsx'
import FCManageProject from '../CCManageProject/FCManageProject.jsx'

export default class CCAdminPage extends Component {
  constructor(props){



      super(props);
      this.state = {
          tabOpened:"Users",
          manageProjectIsOpen:false,
          projectManagingAtTheMoment:null,
          allProjects:[
            {name:"Skype",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"lolo"}],tasks:["task1"],notes:["note1"],descreption:"bla bla bla",status:true},
            {name:"Facebook",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"meow"},{username:"lolo"}],tasks:["task2"],notes:["note3"],descreption:"bla bla bla",status:true},
            {name:"Youtube",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"meow"}],tasks:["task1"],notes:["note1"],descreption:"bla bla bla",status:false},
            {name:"Google",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"lolo"}],tasks:["task"],notes:["note5"],descreption:"bla bla bla",status:false}

          ] // change to all the projects available on the database
      }
  }

//Methods
btnChangeTabs = (bool) =>{
    if (bool)
    this.setState({tabOpened:"ManageProjects"})

    else 
    this.setState({tabOpened:"Users"})
}

//opens the project management window
openProjectManageWindow = (project) =>{ this.setState({manageProjectIsOpen:true,projectManagingAtTheMoment:project}) }
    
//closes the project management window
closeProjectManageWindow = (event) =>{
    
        if (event.target.id === "FCManageProject")
        this.setState({manageProjectIsOpen: false})

        //update the project values in the database with the new ones here using the this.state.projectManagingAtTheMoment
        



    }
    
//updates the project data based on the event triggered (deadline change, member added...)
updateProjectData = (eventOrValue,action) =>{

    let tempProject = this.state.projectManagingAtTheMoment


    if (action === "addTask")
    {
     if (eventOrValue.trim() === "" ||tempProject.tasks.filter(task => task == eventOrValue).length == 1)
        return;
 
        tempProject.tasks.push(eventOrValue)
    }
    else if (action === "delTask")
        tempProject.tasks = tempProject.tasks.filter(task => task != eventOrValue)


    else if (action === "addNote")
    {
        if (eventOrValue.trim() === "" ||tempProject.notes.filter(note => note == eventOrValue).length == 1 )
        return;
 
        tempProject.notes.push(eventOrValue)
    }

    else if (action === "delNote")
         tempProject.notes = tempProject.notes.filter(note => note != eventOrValue)


    else if (action === "addUser")
        tempProject.users.push({username:eventOrValue})
    

    else if (action === "delUser")
        tempProject.users = tempProject.users.filter(user => user.username != eventOrValue)


    else if (eventOrValue.target.name === "deadline")
        tempProject.deadline = eventOrValue.target.value


    else if (eventOrValue.target.name === "descreption")
        tempProject.descreption = eventOrValue.target.value
        
    else if (eventOrValue.target.innerText === 'CLOSE PROJECT')
    {
    tempProject.status = false
    tempProject.deadline = new Date().toISOString().substring(0,10)
    }

    else if (eventOrValue.target.innerText === 'OPEN AGAIN')
    {
    tempProject.status = true
    let tomorrow = new Date();
    tomorrow.setDate(new Date().getDate()+1)
    tempProject.deadline = tomorrow.toISOString().substring(0,10);
    }



    this.setState({projectManagingAtTheMoment:tempProject})

}



    render() {
        return (
            <div id="CCAdminPage">
                {/* <FCCreateAccount/> */}
                {/* <FCCreateProject/> */}
                {this.state.manageProjectIsOpen && <FCManageProject closeProjectManageWindow={this.closeProjectManageWindow} projectManagingAtTheMoment = {this.state.projectManagingAtTheMoment} updateProjectData={this.updateProjectData} />}
                <div id="CCAdminPageFirstChild">
                <FCNav btnChangeTabs={this.btnChangeTabs}/>
                {this.state.tabOpened === "Users"?
                <Button id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Create Account</Button>:
                <Button id="CCAdminPageFirstChildBtn" variant="contained" color="primary" disableElevation>Start A Project</Button>}
                </div>
                <div id="CCAdminPageSecondChild">
                    {this.state.tabOpened === "Users"?<CCUsers users={this.props.users}/>:
                    <div id="ManageProjectsTab">
                        <div id="adminStatics">Static diagram should be here</div>
                        <FCProjectsAdmin allProjects={this.state.allProjects} openProjectManageWindow={this.openProjectManageWindow}/>
                        </div>}
                </div>
            </div>
        )
    }
}


