import React from 'react'
import { useGlobalContext } from '../../context'
import stateButtons from '../../json/editStates.json'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import { Button, FormLabel } from '@mui/material'

const LiteraryReview = () => {
  //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()
  //edit states
  const [reviewEditState, setReviewEditState] = useState("write")

  //markdown state
    const [review, setReview] =useState('')

  //fxn for toggling edit states
  //for file
    const toggleReviewFileEditingStates = () => {
     setReviewEditState("file")
  }

  //for write
  const toggleReviewWriteEditingStates = () => {
    setReviewEditState("write")
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
                        <EditBtn onClick={toggleReviewWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleReviewFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RNHeader>
                <RNBody>
                    {
                        reviewEditState === "write" ?
                        <>
                            <MDEditor 
                                value={review}
                                onChange={setReview}
                            />
                            <Button variant='contained'>Update Text</Button>
                        </>
                        : reviewEditState === "file" && 
                        <>
                            <FormLabel>Update Files</FormLabel>
                            <input
                                type='file'
                                multiple
                                accept='application/pdf'
                                name='reviewFiles'
                            />
                            <Button variant="contained">Update Files</Button>
                        </>
                    }
                </RNBody>
            </ResearchNameCard>
        </Container>
    </>
  )
}



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

export default LiteraryReview