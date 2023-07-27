import React from 'react'
import styled from 'styled-components'

const AffiliatedInstitution = () => {
  return (
    <Container>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
      <Card>
      <CardInfo>
        <CardImg>
          <img src='/images/user.svg' alt='' />
        </CardImg>
        <NameInfo>
          <CardName>University of Nigeria, Nsukka</CardName>
          <CardUserName>@UNNigeria</CardUserName>
        </NameInfo>
      </CardInfo>
      <FollowBtn>
        Remove
      </FollowBtn>
      </Card>
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 15px;
`

const Card = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    border-radius: 2%;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const CardInfo = styled.div`
  display: flex;
  padding: 5px;
  
`

const CardImg = styled.div`
  height: 50px;
  width: 50px;
  img{
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  /* width: 100px; */
`

const CardName = styled.span`
  font-size: 12px;
  padding: 2px;
`

const CardUserName = styled.span`
  padding: 2px;
  font-size: 10px;
  font-weight: bold;
`

const FollowBtn = styled.button`
  padding: 5px;
  background: rgba(0,0,0, 0.15);
  border-radius: 5%;
  border: none;
  height: 28px;

`

export default AffiliatedInstitution