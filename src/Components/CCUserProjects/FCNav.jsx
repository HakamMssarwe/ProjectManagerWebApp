import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NoteIcon from '@material-ui/icons/Note';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles({
  root: {
    width: 400,
    background:"transparent",
    fontWeight:"bold",
    fontFamily:"Segoe UI"
},});

export default function FCNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}}  className={classes.root}>
      <BottomNavigationAction label="Personal Notes" icon={<NoteIcon />}  className={classes.root} /> /*Add on click here*/
      <BottomNavigationAction label="My Projects" icon={<AssignmentIcon /> } className={classes.root} />
    </BottomNavigation>
  );
}
