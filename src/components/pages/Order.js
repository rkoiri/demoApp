import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  });
  
const Order=()=>{
    const classes = useStyles();
     const bull = <span className={classes.bullet}>•</span>;
    const history=useHistory();
   
 let retrievedObject = localStorage.getItem('cart');
 var s= JSON.parse(retrievedObject);
 var total=0;
const orderNow = ()=>{
   history.push("/");
 }
 const placeOrder=()=>{
     if(s[0]==null){
         alert("No orders");
     }else{
        alert("Your Order is on the way");
        history.push("/Home");
     }
   
 }

    return(
        
        <div>
            <Typography variant="h6">ORDER DETAILS</Typography>
            {

            s?
         s.map((x)=>
         <div>
             
          <Typography variant="h6">{x.name} {x.price} <span style={{display:'none'}}>{total=total+x.price}</span> </Typography> 
          
          
         </div>
         
         
        
                     
       
         
         ):<Typography variant="h6">Empty Cart</Typography>
            }
            <Typography variant="h6">Total Amount: Rs {total}</Typography>
           <br/>
           <Button variant='contained' onClick={()=>placeOrder()} color='secondary'>Place order</Button>
            </div>
    )
}
export default Order