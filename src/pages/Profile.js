import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import LeftProfile from '../components/profile/LeftProfile'
import Main from '../components/profile/Main'
import RightSide from '../components/profile/RightSide'
import { useGlobalContext } from '../context'
import { useNavigate, useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../firebase'

const Profile = () => {
    //importing user state from context api
    const { user, loading, error} = useGlobalContext()
    const { uid } = useParams()
    //navigation init
    const navigate = useNavigate()

    

     //useffect to validate user
      useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/")
        if (!user.emailVerified) return navigate("/verify");
        if(uid !== user?.uid){
           return navigate('/login')
        }
    }, [user, loading, uid, navigate]);


  return (
      <>
         <Header />
         <Container>
             <Layout>
                 <LeftProfile uid={uid} />
                 <Main uid={uid}/>
                 <RightSide uid={uid} />
             </Layout>
         </Container> 
    </>
  )
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
`

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;
    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`

export default Profile