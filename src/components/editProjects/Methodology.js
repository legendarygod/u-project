import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import stateButtons from '../../json/editStates.json'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material'
import MDEditor from '@uiw/react-md-editor'
import { DevTool } from '@hookform/devtools'


const Methodology = () => {
  //pulling relevant context(editing states, toggling fxn for editing states)
  const { editingState, togglePeojectEditingStates } = useGlobalContext()

  //editor states
  const [procedureEditStates, setProcedureEditStates] = useState('write')

  //fxn for switching edit states
  const toggleWriteProcedureEditStates = () => {
    setProcedureEditStates("write")
  }
  //for file
  const toggleFileProcedureEditStates = () => {
    setProcedureEditStates("file")
  }
  //sample procedure markdown:
  const [sampleProcedure, setSampleProcedure] = useState('')
  //sample procedure files
  const [sampleProcedureFiles, setSampleProcedureFiles] = useState(null)

  const methodForm = useForm()
  const { register, control, formState, handleSubmit } = methodForm
  const { errors } = formState 

  //form submission
  const onSubmit = (data) => {
    console.log("updated", data)
  }

  return (
    <>
        <Container>
          <FormLabel>
            <span>Sample Details</span>
          </FormLabel>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Box>
                <FormLabel>Duration of collection</FormLabel>
                <FormControl fullWidth size='small'>
                    <TextField 
                        variant='outlined'
                        label='Start date'
                        type='date'
                        id='sampleStartDate'
                        {...register('sampleStartDate')}
                    />
                    <ErrorMessage>{errors.sampleStartDate?.message}</ErrorMessage>
                </FormControl>
                <FormControl fullWidth size='small'>
                    <TextField 
                        variant='outlined'
                        label='End date'
                        type='date'
                        id='sampleEndDate'
                        {...register('sampleEndDate')}
                    />
                    <ErrorMessage>{errors.sampleEndDate?.message}</ErrorMessage>
                </FormControl>
            </Box>
            <Box>
                <FormLabel>Sample Type</FormLabel>
                <FormControl fullWidth size='small'>
                    <TextField 
                        variant='outlined'
                        label='Type of Sample'
                        type='text'
                        id='sampleType'
                        {...register('sampleType')}
                    />
                    <ErrorMessage>{errors.sampleType?.message}</ErrorMessage>
                </FormControl>
            </Box>
            <Box>
                <FormLabel>Sample Numbers</FormLabel>
                <FormControl fullWidth size='small'>
                    <TextField 
                        variant='outlined'
                        label='Number of Samples'
                        type='number'
                        id='sampleNumber'
                        {...register('sampleNumbers')}
                    />
                    <ErrorMessage>{errors.sampleType?.message}</ErrorMessage>
                </FormControl>
            </Box>
            
            <ResearchNameCard>
                <RNHeader>
                    <span>
                        Research Topic
                    </span>
                    <EditBtns>
                        <EditBtn onClick={toggleWriteProcedureEditStates}>
                            <span>Write</span>
                        </EditBtn>
                        |
                        <EditBtn onClick={toggleFileProcedureEditStates}>
                            <span>File</span>
                        </EditBtn>
                    </EditBtns>
                </RNHeader>
                <RNBody>
                    {
                        procedureEditStates === "write" ? 
                        <>
                            <MDEditor 
                                value={sampleProcedure}
                                onChange={setSampleProcedure}
                            />
                            <Button variant='contained' >Update Topic</Button>
                        </>
                        : procedureEditStates === "file" &&

                        <>
                            <FormLabel>Upload File</FormLabel>
                            <input 
                                type="file"
                                name='sampleProcedureFiles'
                                accept='application/pdf'
                                multiple
                            />
                            <Button variant='contained' >Update Topic</Button>
                        </>
                    }
                </RNBody>
            </ResearchNameCard>
            <Box>
                <Button fullWidth variant='contained' type='submit'>
                    Update Project
                </Button>
            </Box>
          </Form>
          <DevTool control={control} />
        </Container>
    </>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

const Form = styled.form`
    width: 60%;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 10px;
    @media (max-width: 768px){
        width: 98%;
        padding: 3px;
    }
`

const FormHeader = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 24px;
        font-weight: bolder;
        color: #000;
    }
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



const ErrorMessage = styled.span`
    color: red;
    font-size: 14px;
    font-weight: bold;
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


export default Methodology