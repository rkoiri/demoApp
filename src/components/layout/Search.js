import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../layout/Navbar'
import Order from  '../pages/Order'
import {useHistory} from 'react-router-dom'


const filter = createFilterOptions();
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      float:'left',
      margin:'10px',
      marginTop:"90px",
      marginBottom:"10px"
    },
    media: {
        height: 140,
 
    },
    customcard:{

    }
  });
const Search=()=>{
    const history=useHistory();
    const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [cart, setCart] = React.useState([]);
//   const [dishes, setDishes] = React.useState(null);
   console.log(value);
//    console.log(dishes);
   const addToCart=(product)=>{
       setCart([...cart, product]);
   }
   const orderNow = (item)=>{
       
     
   history.push('/order');
   }
   console.log(cart);
  return (
      <div>
         <Typography>Add to Cart</Typography>
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });

          
        } else if (newValue && newValue.inputValue) {
          setValue({
            name: newValue.inputValue,
          });
          
          
        //   setDishes({
        //       dishes:newValue.inputValue.menu.dish,
        //   })
        } else {
          setValue(newValue);
          
        // setDishes(newValue.menu.dish);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            name: `Not found "${params.inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={demo}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.name;
      }}
      renderOption={(option) => option.name}
      style={{ width: '60%',margin:'0 auto' }}
      freeSolo
      renderInput={(params) => (
        <TextField  {...params} label="Search Restaurants" variant="outlined" />
      )}
    />
    {value?<h1>{value.menu.map((number,idx) => <Card key={idx} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../static/images/pasta-1.jpg"
          title="Contemplative Reptile"
        />
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {number.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          price Rs {number.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>addToCart(number)}>
         Add to Cart
        </Button>
        <Button size="small"  color="secondary" onClick={()=>orderNow(cart)}>
          Order now
        </Button>
      </CardActions>
    </Card>)}</h1>:<h1></h1>}
    
    </div>
  );
}
export default Search

const demo= [
 {
     name:"Wow Momo",
     menu:[
        {
            name:"momo",
         price:180,
   
       },
       {
           name:"Chicken Lolipop",
           price:280,
         
       },
       {
        name:"Egg Roll",
        price:180,
      
    },
    {
        name:"Fried Rice",
        price:280,
      
    },
    {
        name:"Butter Chicken",
        price:280,
      
    }
    ],
},
 {
     name:"The legends",
     menu:[
     {
         name:"Egg Biryani",
      price:180,

    },
    {
        name:"Chicken Biryani",
        price:380,
      
    },
    {
        name:"Chicken Roll",
        price:180,
      
    },
    {
        name:"Butter Naan",
        price:30,
      
    },
    {
        name:"plain Naan",
        price:20,
      
    }
 ],
},
{
    name:"Lemon Glass",
    menu:[
    {
        name:"momo",
     price:180,

   },
   {
       name:"pasta",
       price:280,
     
   }
],
},
];