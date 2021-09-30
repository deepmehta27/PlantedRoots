import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image} from 'react-bootstrap'
import login_signup_poster from '../../images/login_signup_poster.jpg'
import './login.css'
import Box from '@mui/material/Box';
import {TextField, Button} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Axios from 'axios';
import Link from '@mui/material/Link';
import {useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    let history = useHistory();
    //Parameters for login
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) =>{
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    //sending data to backend (for login)
    const checkData = () => {
        Axios.post("http://localhost:5000/login", 
        {username: values.username, password: values.password}
        ).then((response)=>{
            console.log(response);
            const res = response.data;
            if(res.message!=null){
                alert("Wrong Credentials! Please try again");
            }
            else{
                history.push('/home');
                toast.success('Login Successful!', {
                    position: "bottom-left",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };


    return (
        <>
            <Container className="shadow-lg p-5 mb-5 bg-white rounded container">
                <Row>

                    <Col style={{paddingLeft:30, paddingBottom:20}}>
                        <h1 style={{marginBottom: 25}}> Login </h1>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                            <AccountCircle sx={{ color: '#228B22', mr: 2, my: 0.5}} />
                            <TextField 
                                onChange={handleChange('username')} 
                                required 
                                id="input-with-sx" 
                                color='success' 
                                label="Username" 
                                variant="standard" 
                                sx={{width: '34ch'}} 
                            />
                        </Box>

                        <br />

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <LockIcon sx={{ color: '#228B22', mr: 1, my: 1.5 }} />
                            <FormControl sx={{ m: 1, width: '34ch' }} variant="standard">
                                <InputLabel required htmlFor="standard-adornment-password" color='success'>
                                    Password
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    color='success'
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>

                        <br />

                        <Button
                            onClick={checkData} 
                            variant="outlined" 
                            color='success' 
                            style={{marginLeft:120, marginTop:15, marginBottom:20}}
                        >
                            Login 
                        </Button>

                        <br />

                        <Link href="/register" style={{marginLeft:55, marginTop:25, marginBottom:20, color:'#228B22'}}>
                            Don't have an account? Sign Up
                        </Link>                    

                    </Col>

                    <Col>
                        <Image src={login_signup_poster} thumbnail style={{borderStyle: 'none', height: 350, width: 350}}/>
                        <h4 id="quote">
                            He that plants trees, loves others besides himself. <br/>
                            <span style={{marginLeft:200}}>~ Thomas Fuller</span>
                        </h4>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Login
