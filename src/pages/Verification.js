import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, verifyEmail } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'


const Verification = () => {
    //fetch user state
    const { user, loading, error } = useGlobalContext()

    //fetching useNavigator
    const navigate = useNavigate()

    console.log(user);


    //handle email verification
    const handleVerify = async (user) => {
        try {
           await verifyEmail(user)
            alert("Verification Link sent")
        } catch (error) {
            console.log(error);
        }
    }

    // const fetchUserName = () => {
    //     console.log("wii")
    // }

     useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/")
    if (!user.emailVerified) return navigate("/verify");
    if (user.emailVerified) return navigate("/landing");

  }, [user, loading, navigate]);
    
  return (
    <Container>
        <VerifyBox>
            <Title><span>Verify your email</span></Title>
            <VerifyMessage>
                <span>A verification link has been sent to your email. Check your inbox for the link. Use the resend button below if you didn't find it.</span>
            </VerifyMessage>
            <ButtonBox>
                <Button variant='contained' onClick={()=>handleVerify(user)}>Resend Email</Button>
                <Link to="/login">Go to Login</Link>
            </ButtonBox>
            
        </VerifyBox>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

const VerifyBox = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    gap: 10px;
`

const VerifyMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-weight: bolder;
        font-size: 15px;
    }
`

const ButtonBox = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default Verification