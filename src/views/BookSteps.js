import React, { useState } from 'react'
import { Steps, Divider, Button, InputPicker } from 'rsuite';
import { Panel, Input, Grid, Row, Col } from 'rsuite'

const BookSteps = (props) => {

    return (
        <div>
            <Steps current={props.step}>
                <Steps.Item />
                <Steps.Item />
            </Steps>
            <Divider />
        </div>
    )

}

export default BookSteps