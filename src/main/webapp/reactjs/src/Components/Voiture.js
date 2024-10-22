import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

export default class Voiture extends Component {
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Ajouter Voiture</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Marque</Form.Label>
                            <Form.Control
                                type="text"
                                className="bg-dark text-white"
                                placeholder="Entrez Marque Voiture"
                            />
                        </Form.Group>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
