import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Footer from './Components/Footer';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';

function App() {
    const marginTop = { marginTop: "20px" };

    return (
        <Router> {/* Envelopper avec Router */}
            <div className="App">
                <NavigationBar />
                <Container>
                    <Row>
                        <Col lg={12} style={marginTop}>
                            <Routes> {/* Utiliser Routes au lieu de Switch */}
                                <Route path="/" element={<Bienvenue />} />
                                <Route path="/add" element={<Voiture />} />
                                <Route path="/list" element={<VoitureListe />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
