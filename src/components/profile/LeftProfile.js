import React from 'react'
import { FaWrench } from 'react-icons/fa'
import styled from 'styled-components'
import { logOut } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const LeftProfile = (props) => {

  //navigate fxn
  const navigate = useNavigate()

  //log out function
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
      <ProfileCard>
        <ProfileItem>
          <FaWrench />
          <ProfileOption>
            Account Settings
          </ProfileOption>
        </ProfileItem>
        <ProfileItem>
          <FaWrench />
          <ProfileOption>
            Reset Password
          </ProfileOption>
        </ProfileItem>
        <ProfileItem>
          <FaWrench />
          <ProfileOption onClick={loggingOut}>
            Log Out
          </ProfileOption>
        </ProfileItem>
      </ProfileCard>
    </Container>
  )
}

const Container = styled.div`
  grid-area: leftside;
  @media (max-width: 768px){
      display: none;
    }
`
const ProfileCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 0;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 2.5s;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  
`

const ProfileItem = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.15);
  padding: 15px;

  img{
    color: #000;
  }
  &:last-child{
    border: none;
  }
  &:hover{
            background-color: rgba(0, 0, 0, 0.08);
            cursor: pointer;
        }
`

const ProfileOption = styled.span`
  color: #000;
`

export default LeftProfile