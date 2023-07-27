import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../firebase'

 const LeftSide = (props) => {
    const [userDetails, setUserDetails] = useState({
      name: "",
      uid: "",
      email: "",
      photoURL: ""
    })
    
  const fetchUserDetails = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", props.user?.uid));
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setUserDetails({
        name: data.account_type === "Institution" ? data.institution_name : data.account_type === "Individual" ? data.name : "",
        uid: props.user?.uid,
        email: data.email,
        photoURL: data.photoURL
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  return (
    <Container>
        <ArtCard>
            <UserInfo>
                <CardBackGround />
                <Link to='/'>
                    <Photo />
                    <Links>
                        {props.user ? `Welcome, ${userDetails.name}!` : "Welcome, visitor!"}
                    </Links>
                </Link>
                <Link to={`/profile/${props.user?.uid}`}>
                    <AddPhotoText>
                        Profile
                    </AddPhotoText>
                </Link>
                <Link to='/viewProject'>
                    <AddPhotoText>
                        View Existing Projects
                    </AddPhotoText>
                </Link>
            </UserInfo>
            <Widget>
                <Link to='/'>
                    <div>
                        <span>Connections</span>
                        <span>Grow Your Network</span>
                    </div>
                    <img src='/images/widget-icon.svg' alt='' />
                </Link>
            </Widget>
            <Item>
                <span>
                    <img src='/images/item-icon.svg' alt='' />
                    My Items
                </span>
            </Item>
        </ArtCard>
        <CommunityCard>
            {/* <Link to='/'>
                <span>
                    Groups
                </span>
            </Link>
            <Link to='/'>
                <span>
                    events
                    <img src='/images/plus-icon.svg' alt=''/>
                </span>
            </Link>
            <Link to='/'>
                <span>
                    Follow Hashtags
                </span>
            </Link>
            <Link to='/'>
                <span>
                    Discover More
                </span>
            </Link> */}
            <FollowTitle>
                <span>People to follow</span>
            </FollowTitle>
            <FollowBox>
        
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                <FollowBoxItem>
                    <img src='/images/user.svg' alt='user'/>
                    <span>Display Name</span>
                    <span>@username</span>
                    <FollowBtn>Follow</FollowBtn>
                </FollowBoxItem>
                
            </FollowBox>
        </CommunityCard>
    </Container>
  )
}

const Container = styled.div`
    grid-area: leftside;
`

const ArtCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 0;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 2.5s;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0 , 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`
const CardBackGround = styled.div`
    background: url('/images/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`
const Photo = styled.div`
    box-shadow: none;
    background-image: url('/images/photo.svg');
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid #fff;
    margin: -30px auto 12px;
`
const Links = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.9);
    font-weight: 600;
`
const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    text-decoration: none;
`

const Widget = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    text-decoration: none;

    & > a{
        text-decoration: none !important;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;

        &:hover{
            background-color: rgba(0, 0, 0, 0.08);
        }

        div{
            display: flex;
            flex-direction: column;
            text-align: left;
            span{
                font-size: 12px;
                line-height: 1.333;
                &:first-child{
                    color: rgba(0, 0, 0, .6);
                }
                &:nth-child(2){
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
    }
    svg{
        color: rgba(0, 0, 0, 1);
    }
`

const Item = styled.a`
    border-color: rgba(0, 0, 0, 0.6);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span{
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 1);
        svg{
                    color: rgba(0, 0, 0, .6);
        }
    }

    &:hover{
        background-color: rgba(0, 0, 0, 0.06);
    }
`

const CommunityCard = styled(ArtCard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    text-decoration: none;
    height: 500px;

    a{
        color: #000;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
    text-decoration: none;

        
        &:hover{
            color: #0a66c2;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child{
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            border-top: 1px solid #cccccc;
            padding: 12px;
            &:hover{
                background-color: rgba(0, 0, 0, 0.08)
            }
        }
    }
    @media (max-width: 768px){
        height: 200px;
    }
`

const FollowTitle = styled.div`
    padding: 4px 12px 4px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px){
        display: none;
    }
`

const FollowBox = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-grey-10);

    @media (max-width: 768px){
        flex-direction: row;
        padding: 0 5px;
        overflow-x:  none;
    }

`

const FollowBoxItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4px 12px 4px 12px;
    margin-bottom: 10px;
    border-radius: 3%;
    background: #fff;
    width: 95%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;

        @media (max-width: 768px){
        width: 80%;
        text-overflow: ellipsis;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 12px;
    }  
    }
    @media (max-width: 768px){
        text-overflow: ellipsis;
        margin-right: 10px;
        margin-top: 10px;
    }    
`

const FollowBtn = styled.button`
  padding: 8px;
  border: none;

`

export default LeftSide
