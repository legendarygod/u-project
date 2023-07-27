import React, { useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import LeftSide from '../components/landing/LeftSide'
import RightSide from '../components/landing/RightSide'
import Main from '../components/landing/Main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { useGlobalContext } from '../context'

const Landing = () => {
    //fetching auth state
    const { user, loading, error } = useGlobalContext()
    // const navigate = useNavigate()

    

    return (
        <>
            <Header />
            <Container>
                <Section>
                    <Button>
                        <Link to={`/createProject/${user?.uid}`}>
                        
                        <p>
                            Add a New Project Now!
                        </p>
                        </Link>
                    </Button>
                </Section>
                <Layout>
                    <LeftSide user={user}/>
                    <Main user={user} />
                    <RightSide user={user} />
                </Layout>
                
            </Container>
        </>
    )

}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`

const Content = styled.div`
    max-width: 1128px;
    margin-left: auto;
    margin-right: auto;
`

const Section = styled.section`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    align-items: center;

    h5{
        color: #0a66c2;
        font-size: 14px;
        a{
            font-weight: 700;
        }
    }

    

    @media (max-width: 768px){
        flex-direction: column;
        padding: 0 5px;
    }
`

const Button = styled.div`
    background-color: #fff;
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.28);
     p{
        font-size: 14px;
        color: #000;
        font-weight: 600;
    }
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

export default Landing