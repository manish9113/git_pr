
import {Paper,styled,Box,TextField,Button, Typography} from '@mui/material'
import { useState } from 'react'


import { API } from '../services/api'

const StyledPaper=styled(Paper)`
     margin:auto;
     width:40vw;
     margin-top:50px;
     display:flex;
     
`
const StyledBoxdata=styled(Box)`
      display:flex;
      flex-direction:column;
      padding:30px;
      width:100%;
`
const StyledTypography=styled(Typography)`
    margin-bottom:5px;
    display:flex;
    justify-content:center;
`
const StyledTypo=styled(Typography)`
    margin-bottom:5px;
    cursor:pointer;
`
const StyledTextfield=styled(TextField)`
    margin-bottom:7px;

`
const StyledButton=styled(Button)`
    width:40%;
    margin-bottom:7px;
   

    
`
const StyledcreateButton=styled(Button)`
    width:50%;
    margin-bottom:7px;
    

    
`
const Styledimg=styled('img')`
     
     width:100%;
    
`
const StyledBox=styled(Box)`
      display:flex;
     justify-content:center;
     align-items:center;
`
const signupinitialValues={
    name:'',
    username:'',
    password:'',
}



const Login=()=>{
     const [account, Setaccount]=useState('login')
     const [signupval,Setsignupval]=useState(signupinitialValues)


     const toggleAccount=()=>{
        account==='login'? Setaccount('signup'):Setaccount('login')
     }
     const oninputChange=(e)=>{
        Setsignupval({...signupval, [e.target.name]:e.target.value})
        
     }
     
     const CreateAccount=()=>{
          account=='login'
     }

     const onValueChange=()=>{
         
     }
    

     const LoginAccount=()=>{
           
     }

    



    return(
        <StyledPaper elevation ={3}>
           <StyledBox>
               <Styledimg src='/logo192.png' alt='login img'/>
           </StyledBox>
           { account==='login'?
           <StyledBoxdata>
           <StyledTextfield  label="Enter Username" name='username' onChange={onValueChange} variant="standard" />
           <StyledTextfield  label="Enter Password" type="password" onChange={onValueChange} name='password' variant="standard" />
           <StyledButton variant="contained" onClick={LoginAccount}>Login</StyledButton>
           <StyledTypography>OR</StyledTypography>
           <StyledTypo onClick={toggleAccount}> New Here? Create an Account.</StyledTypo>
          
           </StyledBoxdata>
           :
           <StyledBoxdata>
            <StyledTextfield  label="Enter Name" name='name'onChange={oninputChange} variant="standard" />
           <StyledTextfield  label="Enter Username" name='username' onChange={oninputChange} variant="standard" />
           <StyledTextfield  label="Enter Password" type="password" name='password' onChange={oninputChange} variant="standard" />
           <StyledcreateButton variant="contained" onClick={CreateAccount} >Create Account</StyledcreateButton>
           <StyledTypography>OR</StyledTypography>
           <StyledTypo onClick={toggleAccount}> Already have an Account? Login Here.</StyledTypo>
          
           </StyledBoxdata>
           }
           
        </StyledPaper>
    )
}


export default Login
