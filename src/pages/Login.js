import React, { useEffect } from 'react'
import styled from "styled-components"
import { useGlobalContext } from '../context'
import { DevTool } from '@hookform/devtools'
import { Box, Button, FormControl, TextField } from '@mui/material'
//firbase imports
import { logInWithEmailAndPassword } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const { loginForm } = useGlobalContext()
    const { handleSubmit, formState, register, control } = loginForm
    const { errors } = formState
    //initiate navigation
    const navigate = useNavigate()

    //handle login
    const onSubmit = async (data) => {
        console.log("FORM SUBMITTED", data)
        try {
            await logInWithEmailAndPassword(data.email, data.password)
            navigate("/landing")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container>
            <FormHeader><span>Log In</span></FormHeader>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <FormControl size='small' fullWidth>
                         <TextField variant='outlined' label="Enter email" id='email' type="email" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Enter an email"
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Invalid email format'
                                    },
                                    validate: {
                                        notAdmin: fieldValue => {
                                            return (
                                                fieldValue !== "admin@example.com" ||
                                                "Enter a different email address"
                                            )
                                        },
                                        notBlackListed: fieldValue => {
                                            return (
                                                !fieldValue.endsWith("baddomain.com") ||
                                                "This domain is not supported"
                                            )
                                        }
                                    }
                                })} />
                    </FormControl>
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </Box>
                <Box>
                    <FormControl size='small' fullWidth>
                        <TextField variant='outlined' label="Enter password" id='password' type="password" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password reqired"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
                                        message: "Use a strong password that is 8-15 characters long and has at least one uppercase letter, one lowercase letter, and one special character"
                                    }
                                })} />
                    </FormControl>
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>
                </Box>
                <Box mt={3} width="100%">
                    <Button fullWidth variant='contained'type='submit'>
                        Log In
                    </Button>
                </Box>
            </Form>
            <span>Don't have an account? <Link to="/register">Sign Up!</Link> </span>
            <DevTool control={control} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

const Form = styled.form`
    width: 60%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    @media (max-width: 768px){
        width: 98%;
        padding: 20px;
    }
`


const FormHeader = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 24px;
        font-weight: bolder;
        color: #000;
    }
`

const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
    font-weight: bold;
`

export default Login