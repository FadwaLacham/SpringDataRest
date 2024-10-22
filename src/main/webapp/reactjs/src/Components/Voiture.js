import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { faPlusSquare, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Voiture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: ''
        };

        // Lier les méthodes au contexte du composant
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }

    // Méthode pour gérer la soumission du formulaire
    submitVoiture(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        console.log("Formulaire soumis avec les données : ", this.state);
        // Logique pour envoyer les données au serveur
    }

    // Gestion de la saisie dans les champs du formulaire
    voitureChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    <FontAwesomeIcon icon={faPlusSquare} /> Ajouter Voiture
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={this.submitVoiture} id="VoitureFormId">
                        <Row>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label>Marque</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="marque"
                                    className="bg-dark text-white"
                                    placeholder="Entrez Marque Voiture"
                                    value={this.state.marque}
                                    onChange={this.voitureChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridModele">
                                <Form.Label>Modèle</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="modele"
                                    className="bg-dark text-white"
                                    placeholder="Entrez Modèle Voiture"
                                    value={this.state.modele}
                                    onChange={this.voitureChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCouleur">
                                <Form.Label>Couleur</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="couleur"
                                    className="bg-dark text-white"
                                    placeholder="Entrez Couleur Voiture"
                                    value={this.state.couleur}
                                    onChange={this.voitureChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridAnnee">
                                <Form.Label>Année</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="annee"
                                    className="bg-dark text-white"
                                    placeholder="Entrez Année"
                                    value={this.state.annee}
                                    onChange={this.voitureChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPrix">
                                <Form.Label>Prix</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    name="prix"
                                    className="bg-dark text-white"
                                    placeholder="Entrez Prix"
                                    value={this.state.prix}
                                    onChange={this.voitureChange}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Card.Body>
                {/* Bouton de soumission bien aligné à droite */}
                <Card.Footer className="d-flex justify-content-end p-3">
                    <Button size="sm" variant="success" type="submit" form="VoitureFormId">
                        <FontAwesomeIcon icon={faSave} /> Submit
                    </Button>
                </Card.Footer>
            </Card>
        );
    }
}
