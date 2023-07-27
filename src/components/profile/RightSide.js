import React from 'react'
import styled from 'styled-components'

const RightSide = () => {
  return (
    <Container>
      <CommunityCard>
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
        </CommunityCard>
    </Container>
  )
}

const Container = styled.div`
  grid-area: rightside;
  @media (max-width: 768px){
        display: none;
    }
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

export default RightSide