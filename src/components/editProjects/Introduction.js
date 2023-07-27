import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import stateButtons from '../../json/editStates.json'
import MDEditor from '@uiw/react-md-editor'
import styled from 'styled-components'
import { Button, FormLabel } from '@mui/material'


const Introduction = () => {
  //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()
  //states for markdown editor
  const [topic, setTopic] = useState('')
  const [intro, setIntro] = useState('')
  const [acknowledgement, setAcknowledgement] = useState('')
  const [abstract, setAbstract] = useState('')
  //states for file uploading
  const [topicFiles, setTopicFiles] = useState(null)
  const [ackFiles, setAckFiles] = useState(null)
  const [abstractFiles, setAbstractFiles] = useState(null)
  const [introFiles, setIntroFiles] = useState(null)

  //editing states
  const [topicEditState, setTopicEditState] = useState("write")
  const [introEditState, setIntroEditState] = useState("write")
  const [ackEditState, setAckEditState] = useState("write")
  const [abstractEditState, setAbstractEditState] = useState("write")

  //fxn for toggling specific editing states
  //for files
  const toggleTopicFileEditingStates = () => {
    setTopicEditState("file")
  }
  const toggleIntroFileEditingStates = () => {
    setIntroEditState("file")
  }
  const toggleAckFileEditingStates = () => {
    setAckEditState("file")
  }
  const toggleAbstractFileEditingStates = () => {
    setAbstractEditState("file")
  }

  //for write
  const toggleTopicWriteEditingStates = () => {
    setTopicEditState("write")
  }
  const toggleIntroWriteEditingStates = () => {
    setIntroEditState("write")
  }
  const toggleAckWriteEditingStates = () => {
    setAckEditState("write")
  }
  const toggleAbstractWriteEditingStates = () => {
    setAbstractEditState("write")
  }


  return (
    <>
      <Container>
        <ResearchNameCard>
                <RNHeader>
                    <span>
                        Research Topic
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleTopicWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleTopicFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RNHeader>
                <RNBody>
                    {
                        topicEditState === "write" ? 
                        <>
                            <MDEditor 
                                value={topic}
                                onChange={setTopic}
                            />
                            <Button variant='contained' >Update Topic</Button>
                        </>
                        : topicEditState === "file" &&

                        <>
                            <FormLabel>Upload File</FormLabel>
                            <input 
                                type="file"
                                name='topicFiles'
                                accept='application/pdf'
                                multiple
                            />
                            <Button variant='contained' >Update file</Button>
                        </>
                    }
                </RNBody>
            </ResearchNameCard>
            <ResearchAimCard>
                <RAHeader>
                    <span>
                        Aims and Objective
                    </span>
                    
                </RAHeader>
                <RABody>
                    <span>
                        Identification of pathogens present on the surface of mobile cell phones used by the students of the University of Nigeria, Enugu Campus
                    </span>
                    <span>
                        Identification of pathogens present on the surface of mobile cell phones used by the students of the University of Nigeria, Enugu Campus
                    </span>
                </RABody>
            </ResearchAimCard>
            {/* <ResearchCollabCard>
                <RCHeader>
                    <span>
                        Collaborators
                    </span>
                </RCHeader>
                <RCBody>
                    <span>
                        Identification of pathogens present on the surface of mobile cell phones used by the students of the University of Nigeria, Enugu Campus
                    </span>
                    <span>
                        Identification of pathogens present on the surface of mobile cell phones used by the students of the University of Nigeria, Enugu Campus
                    </span>
                </RCBody>
            </ResearchCollabCard> */}
            <ResearchAckCard>
                <RAckHeader>
                    <span>
                        Acknowledgement
                    </span>
                    <EditBtns>
                        <EditBtn onclick={toggleAckWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleAckFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RAckHeader>
                <RAckBody>
                    {
                        ackEditState === "write" ?
                        <>
                            <MDEditor 
                                value={acknowledgement}
                                onChange={setAcknowledgement}
                            />
                        </>
                        : ackEditState === "file" &&
                        <>
                            <FormLabel>Update files</FormLabel>
                            <input
                                type='file'
                                name='ackFiles'
                                multiple
                                accept='application/pdf'
                            />
                            <Button variant='contained' >Update Topic</Button>
                        </>

                    }
                </RAckBody>
            </ResearchAckCard>
            <ResearchAbstractCard>
                <RAbHeader>
                    <span>
                        Abstract
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleAbstractWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleAbstractFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RAbHeader>
                <RAbBody>
                    {
                        abstractEditState === "write" ? 
                        <>
                            <MDEditor 
                                value={abstract}
                                onChange={setAbstract}
                            />
                            <Button variant='contained' >Update Topic</Button>
                        </>
                        : abstractEditState === "file" &&
                        <>
                            <FormLabel>Update files</FormLabel>
                            <input
                                type='file'
                                multiple
                                name='abstractFiles'
                                accept='application/pdf'
                            />
                        </>
                    }
                </RAbBody>
            </ResearchAbstractCard>
            <ResearchIntroCard>
                <RIHeader>
                    <span>
                        Introduction
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleIntroWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleIntroFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RIHeader>
                <RIBody>
                    
                    {
                        introEditState === "write" ? 
                        <>
                            <MDEditor 
                                value={intro}
                                onChange={setIntro}
                            />
                            <Button variant='contained' >Update Introduction</Button>
                        </>
                        : introEditState === "file" &&
                        <>
                            <FormLabel>Update files</FormLabel>
                            <input
                                type='file'
                                multiple
                                name='introFiles'
                                accept='application/pdf'
                            />
                        </>
                    }
                </RIBody>
            </ResearchIntroCard>
            
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
    padding: 20px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px; 
`

const ResearchNameCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    background: #fff;
`

const RNHeader = styled.div`
    margin-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        font-size: 16px;
    }
`

const RNBody = styled.div`
    padding: 5px;
    span{
        font-size: 14px;
    }
`

const ResearchAimCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    background: #fff;
    overflow-x: hidden;
`

const RAHeader = styled.div`
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
    }
    justify-content: space-between;
`

const RABody = styled.div`
    max-height: 300px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding: 5px;
    span{
        font-size: 14px;
        border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
        &:last-child{
            border: none;
        }
    }
`

const ResearchCollabCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    background: #fff;
    overflow-x: hidden;

`

const RCHeader = styled.div`
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
    }
`

const RCBody = styled.div`
    max-height: 300px;
    overflow: scroll;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    padding: 5px;
    span{
        font-size: 14px;
        border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
        &:last-child{
            border: none;
        }
    }
`

const ResearchAbstractCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    overflow-x: hidden;
    border-radius: 5px;
    background: #fff;
`

const RAbHeader = styled.div`
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
    }
    justify-content: space-between;
`

const RAbBody = styled.div`
    max-height: 500px;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding: 5px;
    span{
        font-size: 14px;
    }
`

const RIHeader = styled.div`
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
    }
    justify-content: space-between;
`

const RIBody = styled.div`
    max-height: 500px;
    overflow: scroll;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    padding: 5px;
    span{
        font-size: 14px;
    }
`

const ResearchIntroCard = styled.div`
     display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    overflow-x: hidden;
    border-radius: 5px;
    background: #fff;
`

const RAckHeader = styled.div`
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.15);
    padding: 5px;
    display: flex;
    align-items: center;
    span{
        font-size: 16px;
    }
    justify-content: space-between;
`

const RAckBody = styled.div`
    max-height: 300px;
    overflow: scroll;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    padding: 5px;
    span{
        font-size: 14px;
    }
`

const ResearchAckCard = styled.div`
     display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    overflow-x: hidden;
    background: #fff;
    border-radius: 5px;
`

const EditBtns = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`
const EditBtn = styled.div`
    padding: 5px;
    span{
        color: #000;
        font-size: 18px;
    }
    &:hover{
        background: rgba(0,0,0,0.15);
        cursor: pointer;
    }
`

export default Introduction