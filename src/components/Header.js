import { AppBar, Container, FormControl, InputLabel, makeStyles, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Select from '@material-ui/core/Select';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        cursor:"pointer"
    }
}))
// darkTheme
const darkTheme = createTheme({
    palette: {
        primary:{
        main:"#0000ff"
        },
      type: 'dark',
    },
  });
function Header() {
    let navigate = useNavigate();
    const classes=useStyles()
  return (
    <ThemeProvider theme={darkTheme}>

    <AppBar color='transparent' position='static'>
    <Container>
    <Toolbar>
    <Typography className={classes.title} onClick={()=>navigate("/")} varitent="h6">
    Crypto Hunter
    </Typography>


    <Select
      varient="outline"
      style={{
        width:100,
        height:40,
        marginRight:15,
       } }
      
    >
      <MenuItem value={'USD'}>
        USD
      </MenuItem>
      <MenuItem value={"INR"}>INR</MenuItem>
      
    </Select>
  
    </Toolbar>
    </Container>
    
    </AppBar>
    
    </ThemeProvider>
    

   


    
  )
}

export default Header