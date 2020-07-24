import React from 'react'
import { Steps, Divider, Button, SelectPicker } from 'rsuite';
import { Input, Grid, Row, Form, Col } from 'rsuite'
import { useForm,Controller } from "react-hook-form";


const rowStyle = {
    minHeight:'1.5em'
}

const category = [
    {
      "label": "Ιστορικά",
      "value": "Ιστορικά"
    },
    {
      "label": "Λογοτεχνικά",
      "value": "Λογοτεχνιά"
    },
    {
        "label": "Οικονομικά",
        "value": "Οικονομικά"
    },
    {
        "label": "Πολιτισμός",
        "value": "Πολιτισμός"
    },
    {
        "label": "Διάφορα",
        "value": "Διάφορα"
    },
    {
        "label": "Γεωγραφία",
        "value": "Γεωγραφία"
    },
    {
        "label": "Περιοδικά",
        "value": "Περιοδικά"
    },
    {
        "label": "Χάρτες",
        "value": "Χάρτες"
    }

]


const BookDetails = (props) => {

    const {addStep} = props
    const { register, handleSubmit, watch, errors, control } = useForm();
    const onSubmit = data => {
        addStep()
        console.log(data);}

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid fluid>
        <Row className="show-grid" style={rowStyle}>
                <Col xs={24} sm={24} md={8}>

                </Col>
                <Col xs={24} sm={24} md={8}>
                    <Controller 
                                control={control}
                                name="ReactDatepicker"
                                as={
                        <SelectPicker name="category" size="md" placeholder="Κατηγορία" data={category} control={control}/>
                                }/>
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
                        <Input name="title" placeholder="Τίτλος" inputRef={register}></Input>
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
                        <Input name="writer" placeholder="Συγγραφέας" inputRef={register} ></Input>
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
                        <Input placeholder="Εκδότης" name="publisher" inputRef={register}></Input>
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
                <Button color="green" type="submit">Επόμενο</Button>
                </Col>
            </Row>
        </Grid>
        </Form>
    )
} 

export default BookDetails