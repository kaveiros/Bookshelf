import React from 'react'
import { Button } from 'rsuite'
import { Input, Grid, Row, Col } from 'rsuite'

const rowStyle = {
    minHeight: '1.5em'
}


const BookComments = (props) => {

    const { removeStep } = props
    return (
        <Grid fluid>
            <Row className="show-grid" style={rowStyle}>
                <Col xs={24} sm={24} md={8}>

                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Input placeholder="Παρατηρήσεις" componentClass="textarea"
                        rows={3} ></Input>
                </Col>
                <Col xs={24} sm={24} md={8}>

                </Col>
            </Row>
            <Row style={rowStyle}>
                <Col xs={24} sm={24} md={8}>

                </Col>
                <Col xs={24} sm={24} md={8}>
                </Col>
                <Col xs={24} sm={24} md={8}>

                </Col>
            </Row>
            <Row className="show-grid" style={rowStyle}>
                <Col xs={24} sm={24} md={8}>

                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Input placeholder="Σχόλια" componentClass="textarea"
                        rows={3}></Input>
                </Col>
                <Col xs={24} sm={24} md={8}>

                </Col>
            </Row>
            <Row sclassName="show-grid" tyle={rowStyle}>
                <Col xs={24} sm={24} md={8}>
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Button color="red" onClick={removeStep}>Πίσω</Button>
                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Button color="green" >Υποβολή</Button>
                </Col>
            </Row>
        </Grid>
    )
}

export default BookComments