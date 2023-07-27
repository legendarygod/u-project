import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Home = () => {
    return (
       <Container>
        <Nav>
      <a href='/'>
        <img src='/images/space2.jpg' alt='pic'></img>
      </a>
      <div>
        <Join>
          <Link to="/register">
            Register
          </Link>
          </Join>
        <SignIn>
          <Link to="/login">
            Login
          </Link>
        </SignIn>
      </div>
    </Nav>
    <h2>Welcome to U-Project</h2>
    <h4>A media platform designed to share, store, and organize your research</h4>
       </Container>
    )
}


const Container = styled.div`
  padding: 0;
`
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding:  12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a{
    width: 135px;
    height: 24px;
    @media (max-width: 768px){
      padding: 0 5px;
    }
    & > img{
      width: 100px;
      height: 50px;
    }
  }
`

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.8);
  margin-right: 12px;
  cursor: pointer;
  &:hover{
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`

const SignIn = styled.a`
  box-shadow: inset 0 0 0 2px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 150ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover{
    background-color: rgba(112, 161, 249, 0.115);
    color: #0a66c2;
    text-decoration: none;
  }
`

export default Home;