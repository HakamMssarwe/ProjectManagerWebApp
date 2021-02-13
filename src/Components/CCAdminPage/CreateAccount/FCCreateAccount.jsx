import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CCAccountSecuritySetup from './CCAccountSecuritySetup';
import CCAccountLocationSetup from './CCAccountLocationSetup';
import CCAccountAvatarSetup from './CCAccountAvatarSetup';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(550 + theme.spacing(2) * 2)]: {
      width: 550,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Account Security', 'Location', 'Profile Picture'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CCAccountSecuritySetup />;
    case 1:
      return <CCAccountLocationSetup />;
    case 2:
      return <CCAccountAvatarSetup />;
    default:
      throw new Error('Unknown step');
  }
}

export default function FCCreateAccount() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id="FCCreateAccount">
      <div id="FCCreateAccoutChild">
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout} >
        <Paper className={classes.paper} style={{margin:0}}>
          <Typography component="h1" variant="h4" align="center" style={{fontFamily:"poppins"}}>
            Create Account
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper} > 
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={{fontFamily:"poppins"}}>
                <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Account Created Successfully
               </Alert>
                  
                </Typography>
                <Button variant="contained" color="primary" disableElevation style={{fontFamily:"poppins"}}>Close</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button} style={{fontFamily:"poppins"}}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    style={{fontFamily:"poppins"}}
                  >
                    {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    </div>
    </div>
  );
}