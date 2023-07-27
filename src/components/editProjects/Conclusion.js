import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import stateButtons from '../../json/editStates.json'
import styled from 'styled-components'
import MDEditor from '@uiw/react-md-editor'
import { Button, Input, InputLabel, TextField } from '@mui/material'



const Conclusion = () => {
 //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()
  //file states
  const [conclusionFiles, setConclusionFiles] = useState(null)
    //markdown state
    const [conclusion, setConclusion] = useState("")

    //editing state
    const [conclusionEditState, setConclusionEditState] = useState("write")

    //fxn for toggling edit states
    //for file:
    const toggleConclusionEditState = () => {
        setConclusionEditState("file")
    }
    //for write:
    const toggleConclusionWriteState = () => {
        setConclusionEditState("write")
    }

  return (
    <>
        <Container>
          <ResearchNameCard>
                <RNHeader>
                    <span>
                        Conclusion
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleConclusionWriteState}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleConclusionEditState}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RNHeader>
                <RNBody>
                    {
                        conclusionEditState === "write" ?
                        <>
                            <MDEditor 
                                value={conclusion}
                                onChange={setConclusion}
                            />
                            <Button variant='contained'>Upload Text</Button>
                        </>
                        :
                        conclusionEditState === "file" &&
                        <>
                            <InputLabel>Upload file</InputLabel>
                            <input 
                                type='file'
                                name="conclusionFile"
                                accept='application/pdf'
                                multiple
                            />  
                            <Button variant='contained'>Upload file</Button>

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

export default Conclusion