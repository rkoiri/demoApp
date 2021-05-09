import React from 'react'
import {Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useHistory} from 'react-router-dom'

const Data=({name})=>{
    const history=useHistory();
    const orderNow = ()=>{
        history.push("/order");
      }
    
return(
    <div style={{display:'inline', float:'right',marginRight:20}}>
        {/* {name.map((x)=>x.name)} */}
    <span onClick={()=>orderNow()} style={{cursor:'pointer'}}> <ShoppingCartIcon style={{fontSize:25}} />  (<Typography color="secondary" style={{display:'inline'}}>{name.length}</Typography>)</span>
    </div>
)
}

export default Data