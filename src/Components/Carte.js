import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'


function Carte({ el, nom }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>User</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">nom : {el.name}</Card.Subtitle>
                <Card.Text>
                    Gender :  {el.gender}
                </Card.Text>
                <Card.Link href={el.species}>Species</Card.Link>

            </Card.Body>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User</Modal.Title>
                </Modal.Header>
                <Modal.Body>name : {el.name}</Modal.Body>
                <Modal.Body>height : {el.height}</Modal.Body>
                <Modal.Body>gender : {el.gender}</Modal.Body>
                <Modal.Body>hair_color : {el.hair_color}</Modal.Body>
                <Modal.Body>skin_color : {el.skin_color}</Modal.Body>
                <Card.Link href={el.homeworld }>Homeworld </Card.Link>
                {el.starships.map(x=><Card.Link href={x}> {x} </Card.Link>)}
                <Card.Link href={el.species[0] }>Species </Card.Link>
             

                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Card>
    )
}

export default Carte