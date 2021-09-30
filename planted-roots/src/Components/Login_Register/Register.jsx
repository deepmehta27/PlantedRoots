import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Image} from 'react-bootstrap'
import login_signup_poster from '../../images/login_signup_poster.jpg'
import './register.css'
import Box from '@mui/material/Box';
import {TextField, Button} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Axios from 'axios';
import Link from '@mui/material/Link';


const Register = () => {

    //Parameters for registration
    const [values, setValues] = React.useState({
        password: '',
        username: '',
        phone: '',
        email: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeConfirm = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword,});
    };

    const handleClickShowConfirmPassword = () => {
        setValues({...values, showConfirmPassword: !values.showConfirmPassword,});
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //sending data to backend through API created (for registeraton)
    const sendData = () => {
        if(values.username!=='' || values.password!==''){
            Axios.post("http://localhost:5000/register", 
                        {   username: values.username, 
                            password: values.password, 
                            phone: values.phone, 
                            email: values.email
                        }).then((response)=>{console.log(response)});
        }       
    };


    return (
        <>
            <Container className="shadow-lg p-5 mb-5 bg-white rounded container">
                <Row>

                    <Col style={{paddingLeft:30, paddingBottom:20}}>
                        <h1 style={{marginBottom: 25}}>Sign Up</h1>
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
                                <InputLabel required htmlFor="standard-adornment-password" color='success'>Password</InputLabel>
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

                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <LockIcon sx={{ color: '#228B22', mr: 1, my: 1.5 }} />
                            <FormControl sx={{ m: 1, width: '34ch' }} variant="standard">
                                <InputLabel required htmlFor="standard-adornment-password" color='success'> 
                                    Confirm Password
                                </InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    color='success'
                                    onChange={handleChangeConfirm('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowConfirmPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>

                        <br />

                        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                            <LocalPhoneIcon sx={{ color: '#228B22', mr: 2, my: 0.5}} />
                            <TextField 
                                onChange={handleChange('phone')} 
                                required 
                                id="input-with-sx" 
                                type='number' 
                                color='success' 
                                label="Phone Number" 
                                variant="standard" 
                                sx={{width: '34ch'}}
                            />
                        </Box>

                        <br />

                        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                            <EmailIcon sx={{ color: '#228B22', mr: 2, my: 0.5}} />
                            <TextField 
                                onChange={handleChange('email')} 
                                required 
                                id="input-with-sx" 
                                color='success' 
                                type='email' 
                                label="Email id" 
                                variant="standard" 
                                sx={{width: '34ch'}}
                            />
                        </Box>

                        <br />

                        <Button
                            onClick={sendData} 
                            variant="outlined" 
                            color='success' 
                            style={{marginLeft:120, marginTop:15, marginBottom:20}}
                        > 
                            Sign Up 
                        </Button>    

                        <br />

                        <Link href="/login" style={{marginLeft:55, marginTop:25, marginBottom:20, color:'#228B22'}}>
                            Already have an account? Login
                        </Link>                    

                    </Col>

                    <Col>
                        <Image src={login_signup_poster} thumbnail style={{borderStyle: 'none', height: 440}}/>
                        <span id="quote">
                            He that plants trees, loves others besides himself. <br/>
                            <span style={{marginLeft:200}}>~ Thomas Fuller</span>
                        </span>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Register
