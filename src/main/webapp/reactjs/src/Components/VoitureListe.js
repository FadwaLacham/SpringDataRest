import React from 'react';
import { Card, Table } from 'react-bootstrap';

export default class VoitureListe extends React.Component {
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>Liste des Voitures</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Couleur</th>
                            <th>Annee</th>
                            <th>Prix</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr align="center">
                            <td colSpan="5">Aucune Voiture n’est disponible</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
