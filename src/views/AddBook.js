import React, { useState } from 'react'
import { Steps, Divider, Button, InputPicker } from 'rsuite';
import { Panel, Input, Grid, Row, Col } from 'rsuite'
import BookDetails from './BookDetails';


const AddBook = (props) => {

    const [step, setStep] = useState(0)
    return (
        <Panel>
            <Steps current={step}>
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
                <Steps.Item />
            </Steps>
            <Divider />

            switch (step) {
                case 0:
                    
                    break;
                case 1:

                break;
            
                default:
                    break;
            }
            <BookDetails/>
            

        </Panel>

    )
}

export default AddBook