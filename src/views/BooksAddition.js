import React from 'react'
import BookSteps from "./BookSteps"
import { Panel } from "rsuite"
import { useState } from "react"
import AddBook from './AddBook'

const BooksAddition = () => {
    const [step, setStep] = useState(0)

    const addStep = () => {
        setStep(step+1)
    }

    const removeStep = () => {
        setStep(step-1)
    }

    return(
        <Panel>
        <BookSteps step={step}/>
        <AddBook step={step} addStep={addStep} removeStep={removeStep}/>
        </Panel>
    )

}

export default BooksAddition