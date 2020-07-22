import React from 'react'
import { Steps, Divider, Button, InputPicker } from 'rsuite';
import { Input, Grid, Row, Col } from 'rsuite'

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
    return (
        <Grid fluid>
        <Row className="show-grid" style={rowStyle}>
                <Col xs={24} sm={24} md={8}>

                </Col>
                <Col xs={24} sm={24} md={8}>
                        <InputPicker size="md" placeholder="Κατηγορία" data={category}/>
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
                        <Input placeholder="Τίτλος" ></Input>
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
                        <Input placeholder="Συγγραφέας" ></Input>
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
                        <Input placeholder="Εκδότης" ></Input>
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
                <Button color="green" onClick={addStep}>Επόμενο</Button>
                </Col>
            </Row>
        </Grid>
    )
} 

export default BookDetails