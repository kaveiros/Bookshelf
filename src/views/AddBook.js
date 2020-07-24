import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import BookDetails from './BookDetails';
import BookComments from './BookComments';


const AddBook = (props) => {

    const { step } = props;
    const { addStep } = props;
    const { removeStep } = props

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const hanldeForm = (data) => {
        handleSubmit(onSubmit)
    }

    switch (step) {
        case 0:
            return (<BookDetails addStep={addStep} register={register} onSubmit={hanldeForm} />)
            break
        case 1:
            return (<BookComments removeStep={removeStep} register={register} onSubmit={hanldeForm} />);
        default:
            return null

    }









}

export default AddBook