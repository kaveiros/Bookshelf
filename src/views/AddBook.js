import React, { useState } from 'react'

import BookDetails from './BookDetails';
import BookComments from './BookComments';


const AddBook = (props) => {

    const {step} = props;
    const {addStep} = props;
    const {removeStep} = props
    
    switch (step) {
        case 0:
        return (<BookDetails addStep={addStep}/>)
        break
        case 1:
            return (<BookComments removeStep={removeStep}/>);
        default:
            return null

    }


    

            
            


    
}

export default AddBook