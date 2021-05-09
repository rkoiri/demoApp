import React from 'react'
import {Box,Typography} from '@material-ui/core'
import { shadows } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Navbar from '../layout/Navbar'
import Order from  '../pages/Order'
import {useHistory} from 'react-router-dom'
import Data from '../layout/Data'


const filter = createFilterOptions();
const useStyles = makeStyles((theme) => ({
    hero: {
    
      boxShadow:'2px solid black',
      height:'300px',
      
      
    },
    main:{
        paddingTop:'8rem',
        marginBottom:'15px',
    },root: {
        maxWidth: 345,
        float:'left',
        marginLeft:'25px',
        marginTop:"90px",
        marginBottom:"10px",
        width:215
      },
      media: {
          height: 140,
   
      },
    
    
  }));

 


const Home=()=>{
    const history=useHistory();
    const classes = useStyles(); 
    const [value, setValue] = React.useState(null);
    const [cart, setCart] = React.useState([]);
    
    const addToCart=(product)=>{
         setCart([...cart, product]);
  
    }
    React.useEffect(() => {
           if(cart!=null){
            var item= JSON.stringify(cart);
            localStorage.setItem('cart', item);
           }
        
   
  });  
    const orderNow = (item)=>{
     
       console.log(cart);
      localStorage.setItem('cart', JSON.stringify([...cart]));
      history.push("/order");
    }
    return(
        <div>
            
        <Box className={classes.hero} >
            <Data name={cart} />
          <Typography variant="h5" align="center"className={classes.main} >Hungry? Order food now!</Typography> 
          {/* <Search></Search>  */}
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
        <Button size="small" color="primary" style={{width:'100%'}} variant='contained' onClick={()=>addToCart(number)}>
         Add to Cart
        </Button>
        {/* <Button size="small"  color="secondary" onClick={()=>orderNow(cart)}>
          Order now
        </Button> */}
      </CardActions>
    </Card>)}</h1>:<h1></h1>}
        </Box>
        </div>
    )
}
export default Home

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