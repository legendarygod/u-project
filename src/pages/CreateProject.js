import { DevTool } from '@hookform/devtools'
import {  FormControl, TextField, Box, MenuItem, InputLabel, Select } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { useGlobalContext } from '../context'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller } from 'react-hook-form'
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import db from '../firebase'

const CreateProject = () => {
    //getting uid from url
    const uid = useParams()
    //grabbing appropriate context(user and form details)
    const { createProjectForm, user, loading, error } = useGlobalContext()
    console.log(createProjectForm)

    //navigate init
    const navigate = useNavigate()

    // //extra security
    // useEffect(() => {
    //     if(uid != user?.uid){
    //         navigate('/login')
    //     }
    // }, [uid])

    //form management
    const { register, control, handleSubmit, formState, getValues } = createProjectForm
    const { errors } = formState;

    //form submission
    const onSubmit = async (data) => {
        console.log("form submitted", data)
        try{
            await addDoc(collection(db, "projects"), {
                user_uid: uid,
                project_name: data.projectName,
                project_start_date: data.projectDate,
                project_privacy: data.isPrivate,
                project_introduction: {
                    research_topic: "",
                    research_aims: [],
                    research_acknowledgement: "",
                    research_abstract: "",
                    research_intro: ""
                },
                project_literary_review: "",
                project_methodology: {
                    sample_collection_date_start: "",
                    sample_collection_date_end: "",
                    sample_type: [],
                    sample_number: "",
                    sample_procession: "",
                },
                project_created_date: Timestamp.now(),
                project_analysis: {},
                project_references: [],
            })

            console.log("done creating")

            await updateDoc(doc(db, "users", `${uid}`), {
                projects: [
                    {
                        user_uid: uid,
                        project_name: data.projectName,
                    },
                ]
            })

            console.log("done creating")

        }catch(err){
            console.log(err)
        }
    }

    const visibilityOptions = [
        {id: 1, name: "Yes"},
        {id: 2, name: "No"}
    ]

//     //useffect to validate user
//      useEffect(() => {
//     if (loading) return;
//     if (!user) return navigate("/")
//     if (!user.emailVerified) return navigate("/verify");

//   }, [user, loading, navigate]);
  return (
        <>
        <Header />
        <Container>
            <CreateForm noValidate onSubmit={handleSubmit(onSubmit)} >
                <Intro>
                    <span>
                        Document your Research
                    </span>
                </Intro>
                    <FormControl fullWidth size='small'>
                        <TextField 
                            variant='outlined'
                            label='Research Topic'
                            type='text'
                            id='projectName'
                            {...register('projectName', {
                                required: {
                                  value:  true,
                                  message: "Project Name Required"
                                }
                            })}   
                        />
                        <ErrorMessage>{errors.projectName?.message}</ErrorMessage>
                    </FormControl>
                    <FormControl fullWidth size='small'>
                        <TextField 
                            variant='outlined'
                            label='Date of commencement'
                            type='date'
                            id='projectDate'
                            {...register('projectDate', {
                                required: {
                                    value: true,
                                    message: "Project Date Required"
                                }
                            })}   
                        />
                        <ErrorMessage>{errors.projectDate?.message}</ErrorMessage>
                    </FormControl>
                    <FormControl size='small' fullWidth>
                         <Controller 
                            name='isPrivate'
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please select an option"
                                }
                            }}
                            render={({field}) => (
                                <>
                                    <Select defaultValue='' {...field}>
                                        {visibilityOptions.map(op => {
                                            return <MenuItem value={op.name} key={op.id}>{op.name}</MenuItem>
                                        })}
                                    </Select>
                                </>
                            )}
                        />
                    </FormControl>
                    <button>Create</button>
            </CreateForm>
            <DevTool control={control} />
        </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const CreateForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`
const Intro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        color: #000;
        font-weight: bold;
        font-size: 17px;
    }
`

const ErrorMessage = styled.span`
    font-size: 10px;
    color: red;
`

export default CreateProject