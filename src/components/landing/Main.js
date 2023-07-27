import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FcLandscape,  FcPhotoReel, FcVideoFile, FcGlobe, FcGallery, FcPicture, FcSms } from 'react-icons/fc'
import { AiFillLike, AiOutlineLike, AiFillForward, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import { FaHandshakeAltSlash, FaHandshake, FaTrash } from 'react-icons/fa'
import {TbDots, TbSend} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../firebase'

 const Main = (props) => {
  //state to hold posts from database
    const [posts, setPosts] = useState([])

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
        name: data.name,
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
  })


  return (
    <Container>    
        <ShareBox>
            <div>
                {/* <img src={userName ? userPhoto : "/images/user.svg"} alt='' />
                <button onClick={handleClick}>Start a Post</button> */}
                <img src={userDetails.photoURL ? `${userDetails.photoURL}` : "/images/photo.svg"} alt=''/>
                <button> Post a Project</button>
            </div>
            <div>
                <button>
                     <FcLandscape />
                    <span>Photo</span>
                </button>
                <button>
                    {/* <img src='/images/nav-work.svg' alt='' /> */}
                    <FcPicture />
                    <span>Video</span>
                </button>
                <button>
                    {/* <img src='/images/nav-messaging.svg' alt='' /> */}
                    <FcGlobe />
                    <span>Event</span>
                </button>
                <button>
                    {/* <img src='/images/nav-notifications.svg' alt='' /> */}
                    <FcSms />
                    <span>Article</span>
                </button>
            </div>
        </ShareBox>

        {/* {load && (
        <UploadingBox>
          <div className="info">
            <span>Uploading...</span>
            <div className="progress">
              <span>{load.toFixed(2)}</span>
              <div className="bar">
                <span style={{ width: load + "%" }} width={"50%"}></span>
              </div>
              <span>100</span>
            </div>
          </div>
          <TbDots />
        </UploadingBox>
      )} */}
        <div>
          {posts.length > 0 ? (
            posts.map(({post, postID}, id) => (
              <Article >
            <SharedActor>
              <Link to='/'>
                <img src='/images/user.svg' alt='pic' />
              </Link>
              <div>
                <span>Chino Aka</span>                          <span>@chinoaka</span>
                <span>3 days ago</span>
              </div>
              <button>
               <TbDots />
              </button>
                    
              <EditModel>
                <li>
                  <img src="/Images/firebase.png" alt="saved" />
                    <div className="info">
                      <h6>Save</h6>
                      <span>Save for later</span>
                    </div>
                  </li>
                  <li>
                    <FaTrash />
                    <h6>Delete post</h6>
                  </li>    
              </EditModel>  
             </SharedActor>
             <Description>This is a hard-code</Description>
              <SharedImage>
                <Link to='/'>
                        {/* {post.sharedImage && <img src={post.sharedImage} alt=''/>}
                        {post.sharedVedio && <ReactPlayer url={post.sharedVedio} width={"100%"} controls={true}/>} */}
                  <img src='/images/space1.jpg' alt='' />
                </Link>
              </SharedImage>
              <SocialCounts>
                    <li>
                        {/* <button>
                            {post.likes.length > 0 && <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt='likes'/>}
                            {/* <AiOutlineComment />
                            <AiOutlineShareAlt />
                            <AiFillForward />
                            <TbSend /> */}
                            {/* <span>{post.likes.length}</span>
                        </button> } */}
                        1 like
                    </li>
                    <li>
                        {/* <Link to='/home'>
                            <p>{post.comments ? post.comments.length : 0} comments
                            </p>
                        </Link> */}
                        <Link to='/'>0 comments</Link>
                    </li>
                </SocialCounts>
                <SocialActions>
                    {/* <button onClick={(e) => {
                        setLiked(prev => !prev)
                        fetchLikes(postID, post.likes)
                        }}
                    >
                        {
                            liked ? <AiFillLike /> : <AiOutlineLike /> 
                        }
                        <span onClick={() => {setLiked(prev => !prev)}}>Like</span>
                    </button> */}
                    <button>
                      <span>like</span>
                    </button>
                    {/* <button onClick={()=>setShowComments((prev) => [...prev, id])}>
                        <AiOutlineComment />
                        <span>Comment</span>
                    </button> */}
                    <button>
                      <span>Comment</span>
                    </button>
                    <button>
                        <AiOutlineShareAlt />
                        <span>Share</span>
                    </button>
                    <button>
                    <TbSend />
                    <span>Send</span>
                    </button>
                </SocialActions>
                {/* {showComments.includes(id) && (
                    <CommentBox 
                        photo={userPhoto}
                        comments={post.comments}
                        userName={userName}
                        userPhoto={userPhoto}
                        userEmail={userEmail}                        
                        postID={postID}
                    />
                )} */}
                
                </Article>
            ))
          ) : (
            <h2>No posts at this time. check your connection and try again</h2>
          )}      
          
                    
               
        </div>
        {/* <PostModal showModal={showModal} handleClick={handleClick} uploadPost={uploadPost}/> */}
        {/* <ModalPost showModal={showModal} handleClick={handleClick} uploadPost={uploadPost}/> */}
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`
const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%); 
`

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #956b7b;
    margin: 0 0 8px;
    background: #fff;
    div{
        button{
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: tranparent;
             border: none;
             display: flex;
             align-items: center;
             font-weight: 600; 
        }
        &:first-child{
            display: flex;
            align-items: center;
            padding: 0px 16px 0 16px;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 14px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                background-color: #fff;
                text-align: left;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button{
                background-color: transparent;
                svg{
                    margin: 0 4px 0 2px;
                    width: 30px;
                }
                img{
                    margin: 0 4px 0 2px;
                }
                span{
                    color: #70b5f9;
                }
            }
        }
    }

`

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;

`

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }
        & > div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span{
                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }
                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6)
                }
            }
        }
    }
    button{
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`

const SharedImage = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f5fafb;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 2px solid #e9e5df;    
    list-style: none;

    li{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;
            outline: none;
            border: none;
            background: transparent;
        }
    }
    
`

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    min-height: 48px;
    padding: 4px 8px;
    button{
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        outline: none;
        border: none;
        cursor: pointer;
        background: none;

        &:hover{
            span{
                text-decoration: underline;
            }
        }

        @media (min-width: 768px){
            span{
                margin-left: 8px;
            }
        }
    }
`

const UploadingBox = styled(CommonCard)`
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  & > img {
    width: fit-content;
  }
  .progress {
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 400px;
    .bar {
      width: 100%;
      height: 8px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.08);
      overflow: hidden;
      position: relative;
      span {
        position: absolute;
        height: 100%;
        background-color: #576779;
      }
    }
    @media (max-width: 768px) {
      width: 230px;
    }
  }
`;

const EditModel = styled.ul`
  animation: fadeIn 0.5s;
  text-align: start;
  position: absolute;
  right: 5px;
  top: 55px;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 6px 9px rgb(0 0 0 / 20%);
  border-radius: 8px;
  overflow: hidden;
  z-index: 99;
  min-width: 250px;
  li {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    svg {
      width: 18px;
      height: 20px;
    }
    h6 {
      font-size: 14px;
      color: rgba(0, 0, 0, 1);
      font-weight: 600;
    }
    .info {
      text-align: start;
      span {
        font-size: 12px;
        display: block;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export default Main