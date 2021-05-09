import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:'100vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      boxShadow:'none',
      boxShadow:'1px 2px 3px solid black'
    },
  }));

const Login = () =>{
    const history=useHistory();
    const [login, setLogin] = React.useState('');
    const [pass, setPass] = React.useState('');
    
    const classes = useStyles();
   console.log(login);
   console.log(pass);
  

   const validate=()=>{
       if(login==='demo'&& pass==='demo'){
           
           history.push("/Home");
          
       }else{
           alert("Wrong Credentials");
       }
   }
    return(
        <div className={classes.root}>
            <Typography variant="h4">Welcome to our Demo website !</Typography>
      <Grid container justify = "center" spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} style={{marginTop:100}}>
              Login
          <form className={classes.root} noValidate autoComplete="off" style={{height:210,padding:10}} >
      <TextField id="standard-basic" label="Username" style={{width:'100%'}} value={login} 
			onChange={(e) => setLogin(e.target.value)} />
      <br/>
      <br />
      <TextField type="password" id="standard-basic" label="Password" style={{width:'100%'}} 
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <br/>
      <Button variant='contained' color='primary' style={{width:'100%'}} onClick={()=>validate()}>Login</Button>
    </form>
          </Paper>
        </Grid>
        
      </Grid>
    </div>

    )
}
export default Login