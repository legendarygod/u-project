import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import stateButtons from '../../json/editStates.json'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor'
import { Button, FormLabel } from '@mui/material'

const References = () => {
  //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()

  //markdown state
  const [reference, setReference] = useState('')
 //file states
 const [referenceFiles, setReferenceFiles] = useState(null)
  //editing states
  const [refEditState, setRefEditState] = useState('write')

  //fxn for toggling specific editing states
  //for files
  const toggleRefFileEditingStates = () => {
    setRefEditState("file")
  }
  //for writes
  const toggleRefWriteEditingStates = () => {
    setRefEditState("write")
  }
  return (
    <>
        <Container>
          <ResearchNameCard>
                <RNHeader>
                    <span>
                        References
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleRefWriteEditingStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleRefFileEditingStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RNHeader>
                <RNBody>
                    {
                        refEditState === "write" ?
                        <>
                            <MDEditor 
                                value={reference}
                                onChange={setReference}
                            />
                            <Button variant='contained'>Update Text</Button>
                        </>
                        : refEditState === "file" && 
                        <>
                            <FormLabel>Update File</FormLabel>
                            <input
                                type='file'
                                name='refFile'
                                accept='application/pdf'
                                multiple
                            />
                            <Button variant='contained' >Update Files</Button>
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

export default References