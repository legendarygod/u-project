import React, { useState, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from "react-hook-form"
import { auth } from './firebase'
const AppContext = React.createContext()
const AppProvider = ({children}) => {
    //user state
    const [user, loading, error] = useAuthState(auth)
    //sidebars for the profile page (mobile screen)
    const [openLeftSidebar, setOpenLeftSidebar] = useState(false)
    const [openRightSidebar, setOpenRightSidebar] = useState(false)
    //fxn for toggling sidebars
    const displayLeftSidebar = () => {
        setOpenLeftSidebar(true)
    }
    const closeLeftSidebar = () => {
        setOpenLeftSidebar(false)
    }
    const displayRightSidebar = () => {
        setOpenRightSidebar(true)
    }
    const closeRightSidebar = () => {
        setOpenRightSidebar(false)
    }
    //states for dashboard
    const [dashboardStates, setDashboardStates] = useState({
        project: true,
        affiliatedInstitutions: false,
        following: false,
        followers: false,
        connect: false,
    })
    //states for viewProject
    const [viewProjectStates, setViewProjectStates] = useState({
        introduction: true,
        literaryReview: false,
        methodology: false,
        analysis: false,
        conclusion: false,
        references: false,
    })
    const [editingState, setEditingState] = useState({
        file: false,
        write: true,
    })

    //EVENTS FOR EDITING TOGGLING
    const togglePeojectEditingStates = e => {
        let name = e.target.textContent
        name === "File" ?
            setEditingState({
                file: true,
                write: false
            })
            :
            setEditingState({
                file: false,
                write: true
            })
    }


    //events for dashboard toggling
    const toggleDashboardBtns = e => {
        let name = e.target.textContent
        name === "Affiliated Institutions" ? 
            setDashboardStates({
                project: false,
                affiliatedInstitutions: true,
                following: false,
                followers: false,
                connect: false,
            })
            :
        name === "Following" ?
            setDashboardStates({
                project: false,
                affiliatedInstitutions: false,
                following: true,
                followers: false,
                connect: false,
            })
            :
        name === "Followers" ?
            setDashboardStates({
                project: false,
                affiliatedInstitutions: false,
                following: false,
                followers: true,
                connect: false,
            })
            :
        name === "Connect" ?
            setDashboardStates({
                project: false,
                affiliatedInstitutions: false,
                following: false,
                followers: false,
                connect: true,
            })
            :
            setDashboardStates({
                project: true,
                affiliatedInstitutions: false,
                following: false,
                followers: false,
                connect: false,
            })            
    }

    //events for viewProject toggling
    
    const toggleViewProjectBtns = e => {
        let name = e.target.textContent
        name === "Literary Review" ? 
            setViewProjectStates({
                introduction: false,
                literaryReview: true,
                methodology: false,
                analysis: false,
                conclusion: false,
                references: false,
            })
            :
        name === "Methodology and Experiments" ?
            setViewProjectStates({
                introduction: false,
                literaryReview: false,
                methodology: true,
                analysis: false,
                conclusion: false,
                references: false,
            })
            :
        name === "Analysis" ?
            setViewProjectStates({
                introduction: false,
                literaryReview: false,
                methodology: false,
                analysis: true,
                conclusion: false,
                references: false,
            })
            :
        name === "Conclusion" ?
            setViewProjectStates({
                introduction: false,
                literaryReview: false,
                methodology: false,
                analysis: false,
                conclusion: true,
                references: false,
            })
            :
        name === "References" ?
            setViewProjectStates({
                introduction: false,
                literaryReview: false,
                methodology: false,
                analysis: false,
                conclusion: false,
                references: true,
            })
            :
            setViewProjectStates({
                introduction: true,
                literaryReview: false,
                methodology: false,
                analysis: false,
                conclusion: false,
                references: false,
            })           
    }

    

    //form states
    const [formDetails, setformDetails] = useState({
        firstName: "",
        lastName: "",
        middleName: "",
        countryO: "",
        countryR: "",
        stateO: "",
        stateR: "",
        fieldOfInterest: "",
    })

    //getting the react hook form, utilities
    const formInfo = useForm({
        defaultValues: {
            acctType: "",
            countryO: "",
            countryR: "",
        }
    })
    const { register, control, watch, getValues, handleSubmit, formState } = formInfo
    const countryOWatch = watch("countryO")
    const countryRWatch = watch("countryR")
    const optionsWatch = watch("acctType")

    //getting form for creating project
    const createProjectForm = useForm({
        defaultValues: {
            projectName: "Enter a topic"
        }
    })

    //login form hook
    const loginForm = useForm()
    
    

    

    return (
        <AppContext.Provider value={{
            formDetails,
            register,
            watch,
            control,
            countryOWatch,
            countryRWatch,
            optionsWatch,
            createProjectForm,
            loginForm,
            handleSubmit,
            formState,
            getValues,
            displayLeftSidebar,
            closeLeftSidebar,
            displayRightSidebar,
            closeRightSidebar,
            dashboardStates,
            toggleDashboardBtns,
            viewProjectStates,
            toggleViewProjectBtns,
            editingState,
            togglePeojectEditingStates,
            user,
            loading,
            error
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}