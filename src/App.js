import Navbar from './components/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import Home from './components/pages/Home'
import Order from './components/pages/Order'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from './components/pages/Login'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  footer:{
    paddingTop:200
  }
  
}));
function App() {
  const classes = useStyles();
  return (
    <BrowserRouter className={classes.root}>
    <Navbar/>
    <Container disableGutters>
    <Switch>
    <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Route exact path="/" component={Login}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/Home" component={Home}/>
          </Paper>
        </Grid>
      
    </Switch>
    </Container>
    </BrowserRouter>
  
  )
}

export default App;
