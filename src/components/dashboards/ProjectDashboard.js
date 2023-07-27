import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import projects from '../../json/projects.json'

const ProjectDashboard = () => {

    
    const projectEl = projects.map((project, index) => {
        const { id, img_src, project_name, author, co_collaborators, likes } = project
        return <Card key={index}>
           {/* <img src={img_src} />  */}
           <CardTitle>
            <span>{project_name}</span>
           </CardTitle>
           <CardAuthor>
            {`Author: ${author}`}
           </CardAuthor>
           <CardCollabs>
                <span>{`Collaborators: ${co_collaborators ?co_collaborators.length : `0`}`}</span>
           </CardCollabs>
           <CardLikes>{`${likes} likes`}</CardLikes>
           <CardLink>
                <Link to='/'>
                    View project
                </Link>
            </CardLink>
        </Card>
    }) 
  return (
    <Container>
        {projectEl}
        
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    padding: 15px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #fff;
    border-radius: 5%;
    /* align-items: center; */
    justify-content: center;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

    img{
        width: 200px;
        height: 100px
    }

`
const CardTitle = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    font-size: 12px;
    border-bottom: 1px solid rgba(0,0,0, 0.15);
    padding: 5px;
`

const CardAuthor = styled.span`
    /* font-size: 14px; */
    color: #000;
    /* margin-top: 0.1px solid rgba(0, 0, 0, 0.1); */
    margin-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
    padding: 5px;
`

const CardCollabs = styled.div`
    font-size: 14px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
`
const CollabLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    a{
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        color: #000;
        padding: 5px;
        border-bottom: 0.2px solid rgba(0, 0, 0, 0.1);
    }
`
const CardLikes = styled.span`
    font-size: 13px;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
    padding: 5px;
`

const CardLink = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    justify-content: center;
    a{
        color: blue;
        font-size: 17px;
    }
`


export default ProjectDashboard