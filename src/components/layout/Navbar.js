import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link } from 'react-router-dom'


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
  
const Navbar=({order})=>{
    // const classes = useStyles();
    console.log(order);
    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={{flexGrow:1}}>
                BuyFood
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/order">Order</Button>
              <Button color="inherit"  component={Link} to="/login">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}
export default Navbar