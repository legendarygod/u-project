import React, { useEffect } from 'react'
import { Box, Button, FormControl, MenuItem, Select, TextField, CircularProgress, Input, FormLabel, Autocomplete } from '@mui/material'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import countries from '../json/countries.json'
import { DevTool } from '@hookform/devtools'
import { Controller } from 'react-hook-form'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
//firebase imports
import { registerWithEmailAndPassword } from '../firebase'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    //global context
    const {formDetails, watch, handleChange, register, control, countryOWatch, countryRWatch, optionsWatch, formState, handleSubmit} = useGlobalContext()
    //error handling
    const { errors } = formState
    //getting the states
    const avStO = countries.find((c) => c.country_name === countryOWatch)
    const avStR = countries.find((c) => c.country_name === countryRWatch)
    const stO = avStO?.states
    const stR = avStR?.states
    console.log(countryOWatch)
    console.log(countryRWatch)
    console.log(optionsWatch)

    console.log("component rerendered")
    //nav init
    const navigate = useNavigate()


    //options for institutional affiliation
    const options = [{optionID: 1, optionValue: "Institution"}, {optionID: 2, optionValue: "Individual"}]

   const onSubmit = async (data) => {
        console.log("FORM SUBMITTED", data)
        try{
            await registerWithEmailAndPassword(data)
            console.log("success")
            navigate("/verify")
        } catch(error){
            console.log(error);
        }
    }
    return (
        <Container>
            <FormHeader>
                <span>Sign Up to U-project</span>
            </FormHeader>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <FormLabel>Select Account Type</FormLabel>
                    <FormControl size='small' fullWidth>
                        <Controller 
                            name='acctType'
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please select an account type"
                                }
                            }}
                            render={({field}) => (
                                <>
                                    <Select defaultValue='' {...field}>
                                        {options.map(op => {
                                            return <MenuItem value={op.optionValue} key={op.optionID}>{op.optionValue}</MenuItem>
                                        })}
                                    </Select>
                                </>
                            )}
                        />
                        <>
                        <Box mt={3} width='100%'>
                            <FormControl size='small' fullWidth>
                                <TextField variant='outlined' label="Enter name" id='name' type='text'  {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Enter your institution name"
                                    }
                                })}/>
                            </FormControl>
                            <ErrorMessage>{errors.institutionName?.message}</ErrorMessage>
                        </Box>
                        <Box mt={3} width='100%'>
                            <FormControl size='small' fullWidth>
                                <TextField variant='outlined' label="Enter username" id='username' type="text" {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Username reqired"
                                    },
                                    validate: {
                                        minLength: fieldValue => {
                                            return (
                                                fieldValue.length >= 3 || "Username has to be at least 3 characters"
                                            )
                                        }
                                    }
                                })} />
                            </FormControl>
                            <ErrorMessage>{errors.username?.message}</ErrorMessage>
                        </Box>
                        <Box mt={3} width='100%'>
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
                            <Controller 
                                name='phoneNumber'
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please input a phone number"
                                    },
                                    validate: {
                                        isValid: fieldValue => {
                                            return (
                                                isPossiblePhoneNumber(fieldValue) || 
                                                "Invalid Phone Number"
                                            )
                                        }
                                    }
                                }}
                                render={({field}) => (
                                    <>
                                        <FormLabel>Enter Phone Number</FormLabel>
                                        <PhoneInput
                                            {...field}
                                            placeholder='Enter phone number'
                                            name='phoneNumber'
                                            defaultCountry="NG"
                                            international
                                        />
                                    </>
                                    
                                )}
                            />
                            <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
                        </Box>
                        <Box>
                            <FormLabel>Select Resident Country </FormLabel>
                            <FormControl size='small' fullWidth>
                                <Controller 
                                    name='countryR'
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Please select your resident country"
                                        }
                                    }}
                                    render={({field}) => (
                                        <>
                                            <Select defaultValue='' {...field}>
                                                {countries.map(country => {
                                                    return <MenuItem value={country.country_name} key={country.country_id}>{country.country_name}</MenuItem>
                                                })}
                                            </Select>
                                        </>
                                    )}
                                />
                            </FormControl>
                            <ErrorMessage>{errors.countryR?.message}</ErrorMessage>
                        </Box>
                {countryRWatch && 
                    <Box>
                            <FormLabel>Select Resident state </FormLabel>
                            <FormControl size='small' fullWidth>
                                <Controller 
                                    name='stateR'
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Please select a resident state"
                                        }
                                    }}
                                    render={({field}) => (
                                        <>
                                            <Select defaultValue='' {...field}>
                                                {stR.map(state => {
                                                    return <MenuItem value={state.state_name} key={state.state_id}>{state.state_name}</MenuItem>
                                                })}
                                            </Select>
                                        </>
                                    )}
                                />
                            </FormControl>
                            <ErrorMessage>{errors.stateR?.message}</ErrorMessage>
                        </Box>
                }
                <Box mt={3} width='100%'>
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
                <Box mt={3} width='100%'>
                    <FormControl size='small' fullWidth>
                        <TextField variant='outlined' label="Confirm password" id='confirmPassword' type="password" {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password"
                                    },
                                    validate: {
                                        passwordMatch: fieldValue => {
                                            return (
                                                fieldValue === watch("password", "") ||
                                                "the passwords do not match. Check and try again"
                                            )
                                        }
                                    }
                                })}
                                onPaste={e => {
                                    e.preventDefault()
                                    return false
                                }}
                                />
                    </FormControl>
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                </Box>
                    </>
                    </FormControl>
                    <ErrorMessage>{errors.acctType?.message}</ErrorMessage>
                </Box>
                
                
                
                <Box mt={3} width='100%'>
                    <Button fullWidth variant='contained' type='submit'>
                       Sign Up
                    </Button>
                </Box>
            </Form>
            <DevTool control={control} />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
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
        padding: 3px;
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

const Label = styled.label``
const SelectOps = styled.select``
const OptionOps = styled.option``
const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
    font-weight: bold;
`

export default Register