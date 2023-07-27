import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//components
import AffiliatedInstitution from '../components/dashboards/AffiliatedInstitution'
import ConnectDashboard from '../components/dashboards/ConnectDashboard'
import FollowersDashboard from '../components/dashboards/FollowersDashboard'
import FollowingDashboard from '../components/dashboards/FollowingDashboard'
import ProjectDashboard from '../components/dashboards/ProjectDashboard'
import Header from '../components/Header'
//context
import { useGlobalContext } from '../context'
//data
import buttons from '../json/DashboardButtons.json'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    //grabbing the dashboard states
    const { dashboardStates, toggleDashboardBtns, user, loading, error } = useGlobalContext()

    //navigation init
    const navigate = useNavigate()

    const navEl = buttons.map(button => {
        return  <>
                    <NavEl key={button.id} onClick={toggleDashboardBtns}>
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
            {dashboardStates.project ? 
                 <ProjectDashboard />
                :
                dashboardStates.following ?
                 <FollowingDashboard />
                :
                dashboardStates.followers ?
                 <FollowersDashboard />
                :
                dashboardStates.affiliatedInstitutions ?
                 <AffiliatedInstitution />
                :
                dashboardStates.connect ? 
                 <ConnectDashboard />
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
    max-width: 1112px;
`

export default Dashboard