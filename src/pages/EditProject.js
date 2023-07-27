import React, { useEffect } from 'react'
import styled from 'styled-components'
import Analysis from '../components/editProjects/Analysis'
import Conclusion from '../components/editProjects/Conclusion'
import Introduction from '../components/editProjects/Introduction'
import LiteraryReview from '../components/editProjects/LiteraryReview'
import Methodology from '../components/editProjects/Methodology'
import References from '../components/editProjects/References'
import { useGlobalContext } from '../context'
import buttons from '../json/projectChapters.json'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'


const EditProject = () => {
    const {viewProjectStates, toggleViewProjectBtns, user, loading, error} = useGlobalContext()

    //navigation init
    const navigate = useNavigate()


    //button fxn
    const navEl = buttons.map(button => {
        return  <>
                    <NavEl key={button.id} onClick={toggleViewProjectBtns}>
                        <span>{button.name}</span>
                    </NavEl>
                    {buttons.length != button.id && (<span> |</span>)}  
                    
                </>
    })

     //useffect to validate user
      useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/")
    if (!user.emailVerified) return navigate("/verify");

  }, [user, loading, navigate]);
            

  return (
    <>
    <Header />
        <NavBar>
            {navEl}
        </NavBar>
        <Container>
            {viewProjectStates.introduction ? 
                 <Introduction />
                :
                viewProjectStates.literaryReview ?
                 <LiteraryReview />
                :
                viewProjectStates.methodology ?
                 <Methodology />
                :
                viewProjectStates.analysis ?
                 <Analysis />
                :
                viewProjectStates.conclusion ? 
                 <Conclusion />
                :
                viewProjectStates.references ? 
                 <References />
                :
                 <span>Try again</span>
            }
        </Container>
    </>
  )
}

const NavBar = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    overflow: scroll;
    margin-top: 60px;

    @media (min-width: 768px){
        justify-content: center;
    }

`
const NavEl = styled.button`
    padding: 10px;
    border-radius: 2%;
    margin-left: 20px;
    margin-right: 20px;
    border: none;
    /* background: rgba(0, 0, 0, 0.05); */
    background: #fff;
    span{
        font-size: 14px;
        position: relative;

        &:after{
                content: '';
                height: 2px;
                background: #000;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center ;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
        &:active{
        
            span:after{
                content: '';
                transform: scaleX(1);
                border-bottom: 2px solid var(--white, #fff);
                bottom: 0;
                left: 0;
                position: absolute;
                transition: transform .2s ease-in-out;
                width: 100%;
                border-color: rgba(0, 0, 0, 0.9);
        }
    }
`

const Container = styled.div`
    /* max-width: 1112px; */
`


export default EditProject