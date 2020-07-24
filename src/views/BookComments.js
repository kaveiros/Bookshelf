import React from 'react'
import { Button } from 'rsuite'
import { Input, Form, Grid, Row, Col } from 'rsuite'
import { useForm } from "react-hook-form";


const rowStyle = {
    minHeight: '1.5em'
}


const BookComments = (props) => {

    const { removeStep } = props
    const { register, handleSubmit, watch, errors, control } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid fluid>
                <Row className="show-grid" style={rowStyle}>
                    <Col xs={24} sm={24} md={8}>

                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Input name="ob" placeholder="Παρατηρήσεις" componentClass="textarea" inputRef={register}
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
                        <Input placeholder="Σχόλια" name="comments" componentClass="textarea" inputRef={  register}
                            rows={3}></Input>
                    </Col>
                    <Col xs={24} sm={24} md={8}>

                    </Col>
                </Row>
                <Row className="show-grid" tyle={rowStyle}>
                    <Col xs={24} sm={24} md={8}>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Button color="red" onClick={removeStep}>Πίσω</Button>
                    </Col>
                    <Col xs={24} sm={24} md={8}>
                        <Button color="green" type="submit">Υποβολή</Button>
                    </Col>
                </Row>
            </Grid>
        </Form>
    )
}

export default BookComments