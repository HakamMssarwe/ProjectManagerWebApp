import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontFamily:"poppins",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignSelf:"center",
    flexDirection:"column",
  },
  inline: {
    display: 'inline',
  },
}));



export default class CCManageTasksInProject extends Component {

  constructor(props)
  {
    super(props);

    this.state ={
      taskInput:"",
      noteInput:"",
      tasks:[],
      notes:[],
      counter:0
    }
  }


//Tasks
changeTaskInput = (event) =>{
this.setState({taskInput:event.target.value})
}

addTask = () => {
  if (this.state.taskInput.trim() == "" || this.state.tasks.filter(task => task == this.state.taskInput).length == 1 || this.state.taskInput.length > 30)
      return;

this.setState({tasks:[...this.state.tasks,this.state.taskInput], taskInput:""})
}

deleteTask = (value) =>{
  this.setState({tasks:this.state.tasks.filter(task => task != value)});
}


//Notes

changeNoteInput = (event) =>{
  this.setState({noteInput:event.target.value})
  }
  
  addNote = () => {
    if (this.state.noteInput.trim() == "" || this.state.notes.filter(note => note == this.state.noteInput).length == 1 || this.state.noteInput.length > 30)
        return;
  
  this.setState({notes:[...this.state.notes,this.state.noteInput], noteInput:""})
  }
  
  deleteNote = (value) =>{
    this.setState({notes:this.state.notes.filter(note => note != value)});
  }


  render() {
    return (
      <div id="CCManageTasksInProject">
    
      {/*Tasks Div*/}
      <div className="CCManageTasksInProjectChild">
      <Grid item xs={12}>
          <input
            required
            id="tasks"
            name="tasks"
            type="text"
            placeholder="Task"
            value={this.state.taskInput}
            onChange={this.changeTaskInput}
            style={{width:"85%"}}
            /*Change this to this.props.user.isAdmin*/
            disabled={!true}
          />
          <Button                /*Change this to this.props.user.isAdmin*/
          onClick={this.addTask} disabled={!true} variant="outlined" color="secondary" style={{fontFamily:"poppins",marginLeft:"1%",height:"30%",width:"10%"}}>Add</Button>
        </Grid>

      <List style={{display:"block",overflowY:"scroll",height:"95%",width:"100%",marginBottom:"1%",marginTop:"2%",padding:15}}>
      {this.state.tasks.map(task => <>
      <ListItem alignItems="flex-start" style={{marginBottom:"1%",backgroundColor:"rgb(238, 238, 238)"}}><p style={{width:"90%", margin:0,padding:0,height:"3VH", fontSize:"15px",display:"block"}}>{task}</p>
      <Button onClick={e => this.deleteTask(task)} variant="outlined" color="secondary" style={{fontFamily:"poppins",width:"10%", padding:"0"}}>X</Button>
      <Divider  component="li" />
      </ListItem></>)}
      </List>
      </div>
    
              {/*Notes Div*/}
      <div className="CCManageTasksInProjectChild">
      <Grid item xs={12}>
          <input
            required
            id="notes"
            name="notes"
            type="text"
            placeholder="Notes"
            value={this.state.noteInput}
            onChange={this.changeNoteInput}
            style={{width:"85%"}}
          />
          <Button onClick={this.addNote} variant="outlined" color="secondary" style={{fontFamily:"poppins",marginLeft:"1%",height:"30%",width:"10%"}}>Add</Button>
        </Grid>

      <List style={{display:"block",overflowY:"scroll",height:"95%",width:"100%",marginBottom:"1%",marginTop:"2%",padding:15}}>
      {this.state.notes.map(note => <>
      <ListItem alignItems="flex-start" style={{marginBottom:"1%",backgroundColor:"rgb(238, 238, 238)"}}><p style={{width:"90%", margin:0,padding:0,height:"3VH", fontSize:"15px",display:"block"}}>{note}</p>
      <Button onClick={e => this.deleteNote(note)} variant="outlined" color="secondary" style={{fontFamily:"poppins",width:"10%", padding:"0"}}>X</Button>
      <Divider  component="li" />
      </ListItem></>)}
      </List>

        
      </div>
    </div>
    )
  }
}



