import React from 'react'
import { useGlobalContext } from '../../context'
import styled from 'styled-components'
import stateButtons from '../../json/editStates.json'

const Analysis = () => {
  //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()

  

  return (
    <>
        <Container>
          
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

export default Analysis