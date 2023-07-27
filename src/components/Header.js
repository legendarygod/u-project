import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, logOut } from '../firebase'
import { useGlobalContext } from '../context'

 const Header = () => {
    //getting auth state from contextAPI
    const { user, loading, error } = useGlobalContext()
    console.log(user)
    //getting the navigate hook
    const navigate = useNavigate()
    //sign out function
    const loggingOut = () => {
        try{
            logOut()
            navigate("/")
        } catch(error){
            console.log(error)
        }
    }
  return (
      <Container>
        <Content>
            <Logo>
                <Link to='/'>
                    <img src='/images/home-logo.svg' alt='pic' />
                </Link>
            </Logo>
            <Search>
                <div>
                    <input type='text' placeholder="search" />
                </div>
                <SearchIcon>
                    <img src='/images/search-icon.svg' alt='pic' />
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                    {
                        user && user.emailVerified ?
                        <>
                            <NavList className='active'>
                                <Link to='/landing'>
                                    <img src='/images/nav-home.svg' />
                                    <span>Home</span>
                                </Link>
                            </NavList>
                            <NavList>
                                <Link to='/dashboard'>
                                    <img src='/images/nav-network.svg' />
                                    <span>My Dashboard</span>
                                </Link>
                            </NavList>
                            <NavList>
                                <Link to='/'>
                                    <img src='/images/nav-messaging.svg' />
                                    <span>Messaging</span>
                                </Link>
                            </NavList>
                            
                            <User>
                                <Link to='/'>
                                    <img src='/images/user.svg' alt=''/>
                                    <span>Me
                                        <img src='/images/down-icon.svg' alt=''/>
                                    </span>
                                </Link>
                                <SignOut>
                                    <Link to='/' onClick={loggingOut}>
                                        Sign Out
                                    </Link>
                                </SignOut>
                            </User>
                            <Work>
                                <Link to='/'>
                                    <img src='/images/nav-work.svg' alt='' />
                                    <span>
                                        work
                                        <img src='/images/down-icon.svg' alt=''/>
                                    </span>
                                </Link>
                            </Work>
                        </>
                        :
                        user && !user.emailVerified ?
                        <>
                            <Link to="/verify">
                                verify Email
                            </Link>
                        </>
                        :
                        !user &&
                        <>
                            <User>
                                <Link to="/login">Log In</Link>
                            </User>
                        </>
                    }    
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
}

const Container = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, .08);
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;

`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 8px;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;

    & > div{
        max-width: 200px;

        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f4;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.9);
            width: 258px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }

`

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 3px 0;
    pointer-events: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        width: 100%;
    }
`

const NavListWrap = styled.ul` 
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    justify-content: space-around;


    .active{
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

const NavList = styled.li`
    display: flex;
    align-items: center;

    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
            color: rgba(0, 0, 0, .6);
            display: flex;
            align-items: center;
        }
        @media (max-width: 768px) {
            min-width: 50px;
            span{
                display: none;
            }
            img{
                width: 20px;
            }
        }
    }

    &:hover, &:active{
        a{
            span{
                color: rgba(0, 0, 0, 0.9);
            }
        }
    }
`

const SignOut = styled.div`
    position: absolute;
    top: 45px;
    background: white;
    border-radius: 4px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    transition-duration: 250ms;
    text-align: center;
    display: none;
`

const User = styled(NavList)`
    a > svg{
        width: 24px;
        
    }

    a > img{
        width: 24px;
        border-radius: 50%;
        height: 24px
    }
    
    span{
        display: flex;
        align-items: center;
    }

    &:hover{
        ${SignOut}{
            align-items: center;
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 768px){
         a > img:last-child{
            transform: rotate(180%);
         }

         &:hover{
            ${SignOut}{
                align-items: center;
                display: flex;
                justify-content: center;
                top: -45px;
            }
         }
    }
`

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.08)
`

export default Header