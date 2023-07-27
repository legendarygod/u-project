import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RightSide = () => {
  return (
   <Container>
        <FollowCard>
            <Title>
                <span>Popular Institutions</span>
                <img src='/images/feed-icon.svg' alt=''/>
            </Title>
            <FeedList>
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Follow</span>
                  </FollowBtn>
                </FeedListItem> 
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Follow</span>
                  </FollowBtn>
                </FeedListItem> 
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Follow</span>
                  </FollowBtn>
                </FeedListItem> 
            </FeedList>
            
            <Recommendation>
                View all Recommendations
                <img src='/images/right-icon.svg' alt=''/>
            </Recommendation>
        </FollowCard>
        <FollowCard>
            <Title>
                <span>Recent Projects</span>
                <img src='/images/feed-icon.svg' alt=''/>
            </Title>
            <FeedList>
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Open</span>
                  </FollowBtn>
                </FeedListItem> 
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Open</span>
                  </FollowBtn>
                </FeedListItem> 
                <FeedListItem>
                  <FeedListItemMain>
                    <img src='/images/user.svg'/>
                    <span>University of Nigeria Research Institute</span>  
                  </FeedListItemMain>  
                  <FollowBtn>
                    <span>Open</span>
                  </FollowBtn>
                </FeedListItem> 
            </FeedList>
            
            <Recommendation>
                View all Projects
                <img src='/images/right-icon.svg' alt=''/>
            </Recommendation>
        </FollowCard>
        
    </Container>
  )
}

const Container = styled.div`
  grid-area: rightside;
  
`

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
`

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0, 0, 0, 0.6);
`

const FeedList = styled.ul`
    margin-top: 15px;
    height: 200px;
    li{
        display: flex;
        align-items: center;
        margin: 12px 0;
        position: relative;   
        font-size: 14px;
        a > div{
            display: flex;
            flex-direction: column;
        } 

        button{
            background-color: transparent;
            color: rgba(0, 0, 0, .6);
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
            padding: 16px;
            align-items: center;
            border-radius: 15px;
            box-sizing: border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content: center;
            max-height: 32px;
            text-align: center;
            outline: none;
        }
    }

`

const FeedListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`

const FeedListItemMain = styled.div`
  display: flex;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
  }

  span{
    text-overflow: ellipsis;
    font-size: 12px;
    padding: 4px;
  }
`

const FollowBtn = styled.button`
  padding: 8px;
  border: none;

`

const Avatar = styled.div`
    background-image: url('/images/linkedin.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48px;
    height: 48px;
    margin-right: 8px;
`

const Recommendation = styled.a`
    color: #0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;
`

const BannerCard = styled(FollowCard)`
    img{
        width: 100%;
        height: 100%;
    }

`



export default RightSide
